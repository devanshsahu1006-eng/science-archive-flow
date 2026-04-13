import { useEffect, useRef, useCallback } from "react";

interface ParallaxPaperProps {
  children: React.ReactNode;
  className?: string;
}

const ParallaxPaper = ({ children, className = "" }: ParallaxPaperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const updateLayers = useCallback(() => {
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const ox = (mx - 0.5) * 20;
    const oy = (my - 0.5) * 20;

    if (layer1Ref.current) {
      layer1Ref.current.style.transform = `translate3d(${ox * 0.5}px, ${oy * 0.5}px, 0)`;
    }
    if (layer2Ref.current) {
      layer2Ref.current.style.transform = `translate3d(${ox * 1.2}px, ${oy * 1.2}px, 0)`;
    }
    if (glowRef.current) {
      glowRef.current.style.left = `${mx * 100}%`;
      glowRef.current.style.top = `${my * 100}%`;
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateLayers);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateLayers]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Parallax paper layers */}
      <div
        ref={layer1Ref}
        className="absolute inset-0 opacity-30 pointer-events-none will-change-transform"
      >
        <div className="coffee-stain" style={{ top: "10%", right: "15%" }} />
        <div className="coffee-stain" style={{ bottom: "20%", left: "10%", width: "80px", height: "80px" }} />
      </div>

      {/* Ink splatters layer */}
      <div
        ref={layer2Ref}
        className="absolute inset-0 pointer-events-none opacity-20 will-change-transform"
      >
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{ background: "hsl(var(--ink) / 0.3)", top: "30%", left: "70%" }}
        />
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{ background: "hsl(var(--ink) / 0.2)", top: "60%", right: "20%" }}
        />
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{ background: "hsl(var(--ink) / 0.25)", top: "45%", left: "25%" }}
        />
      </div>

      {/* Warm glow following cursor */}
      <div
        ref={glowRef}
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none opacity-40 will-change-[left,top]"
        style={{
          background: "radial-gradient(circle, hsl(39 60% 70% / 0.15) 0%, transparent 70%)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {children}
    </div>
  );
};

export default ParallaxPaper;
