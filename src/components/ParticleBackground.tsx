import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  letter: string;
  rotation: number;
  rotSpeed: number;
}

const PARTICLE_COUNT = 80;
const CURSOR_RADIUS = 120;

const GREEK_LETTERS = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "λ", "μ", "π", "σ", "φ", "ψ", "ω", "Σ", "Δ", "Ω", "∫", "∂", "∞", "∇"];

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);
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
      "rgba(180,160,220,",
      "rgba(150,180,220,",
    ];
    const lightColors = [
      "rgba(60,50,40,",
      "rgba(100,70,30,",
      "rgba(80,60,120,",
      "rgba(50,80,140,",
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const colors = isDark ? darkColors : lightColors;
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 6 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.15,
        letter: GREEK_LETTERS[Math.floor(Math.random() * GREEK_LETTERS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      for (const p of particlesRef.current) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CURSOR_RADIUS * 3) {
          const orbitDist = CURSOR_RADIUS * (0.3 + (p.size / 14) * 0.7);
          const toDist = dist - orbitDist;
          if (Math.abs(toDist) > 3) {
            p.vx += (dx / dist) * 0.025 * toDist;
            p.vy += (dy / dist) * 0.025 * toDist;
          }
          // Orbit
          p.vx += (dy / (dist + 30)) * 0.35;
          p.vy -= (dx / (dist + 30)) * 0.35;
        } else {
          p.vx += (Math.random() - 0.5) * 0.08;
          p.vy += (Math.random() - 0.5) * 0.08;
        }

        p.vx *= 0.95;
        p.vy *= 0.95;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        p.rotation += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px "Lora", serif`;
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.letter, 0, 0);
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
      style={{ opacity: isDark ? 0.6 : 0.8 }}
    />
  );
};

export default ParticleBackground;
