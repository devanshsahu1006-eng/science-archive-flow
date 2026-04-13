import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  shape: "dot" | "dash" | "circle";
  rotation: number;
  rotSpeed: number;
}

const PARTICLE_COUNT = 120;
const CURSOR_RADIUS = 140;
const BLOCK_PADDING = 18;

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);
  const targetRectsRef = useRef<DOMRect[]>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const darkColors = [
      "rgba(200,190,160,",
      "rgba(220,200,150,",
      "rgba(180,160,220,",  // purple-ish
      "rgba(220,170,120,",  // orange-ish
      "rgba(150,180,220,",  // blue-ish
    ];
    const lightColors = [
      "rgba(80,60,180,",    // purple
      "rgba(200,80,60,",    // red
      "rgba(60,60,200,",    // blue
      "rgba(220,160,40,",   // gold
      "rgba(80,160,80,",    // green
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const shapes: Particle["shape"][] = ["dot", "dash", "circle"];

    const initParticles = () => {
      const colors = isDark ? darkColors : lightColors;
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.04,
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Detect hovered info blocks
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const block = el.closest("[data-particle-block]") as HTMLElement | null;
        if (block) {
          targetRectsRef.current = [block.getBoundingClientRect()];
        } else {
          targetRectsRef.current = [];
        }
      }
    };

    const getTargetForParticle = (p: Particle, mouse: { x: number; y: number }, rects: DOMRect[]) => {
      // If hovering a block, particles surround the block edges
      if (rects.length > 0) {
        const rect = rects[0];
        const pad = BLOCK_PADDING;
        // Find the closest point on the rectangle perimeter
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const angle = Math.atan2(p.y - cy, p.x - cx);
        
        // Place particles along the perimeter with some randomness based on particle id
        const hw = rect.width / 2 + pad;
        const hh = rect.height / 2 + pad;
        
        // Clamp to rectangle edge
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const scale = Math.min(hw / (Math.abs(cosA) + 0.001), hh / (Math.abs(sinA) + 0.001));
        
        return {
          x: cx + cosA * scale,
          y: cy + sinA * scale,
          strength: 0.06,
        };
      }

      // Otherwise, surround the cursor
      return {
        x: mouse.x,
        y: mouse.y,
        strength: 0.03,
      };
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const rects = targetRectsRef.current;

      for (const p of particlesRef.current) {
        const target = getTargetForParticle(p, mouse, rects);

        const dx = target.x - p.x;
        const dy = target.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (rects.length > 0) {
          // Attract to block perimeter
          if (dist > 5) {
            p.vx += (dx / dist) * target.strength * Math.min(dist, 200);
            p.vy += (dy / dist) * target.strength * Math.min(dist, 200);
          }
          // Orbit slightly
          p.vx += (dy / (dist + 50)) * 0.3;
          p.vy -= (dx / (dist + 50)) * 0.3;
        } else if (dist < CURSOR_RADIUS * 3) {
          // Attract toward cursor orbit
          const orbitDist = CURSOR_RADIUS * (0.4 + (p.size / 4) * 0.6);
          const toDist = dist - orbitDist;
          if (Math.abs(toDist) > 5) {
            p.vx += (dx / dist) * target.strength * toDist;
            p.vy += (dy / dist) * target.strength * toDist;
          }
          // Orbit
          p.vx += (dy / (dist + 30)) * 0.4;
          p.vy -= (dx / (dist + 30)) * 0.4;
        } else {
          // Gentle drift when far
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vy += (Math.random() - 0.5) * 0.1;
        }

        // Friction
        p.vx *= 0.94;
        p.vy *= 0.94;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        p.rotation += p.rotSpeed;

        // Draw
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.strokeStyle = p.color + (p.alpha * 0.8) + ")";

        if (p.shape === "dot") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "dash") {
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(-p.size * 2, 0);
          ctx.lineTo(p.size * 2, 0);
          ctx.stroke();
        } else {
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 1.2, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animRef.current);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: isDark ? 0.7 : 0.9 }}
    />
  );
};

export default ParticleBackground;
