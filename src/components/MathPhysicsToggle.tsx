import { motion } from "framer-motion";

interface MathPhysicsToggleProps {
  field: "math" | "physics";
  onToggle: (field: "math" | "physics") => void;
}

const MathPhysicsToggle = ({ field, onToggle }: MathPhysicsToggleProps) => {
  const isMath = field === "math";

  return (
    <div
      className="relative flex items-center gap-0 rounded-xl overflow-hidden border-2 shadow-lg"
      style={{
        borderColor: isMath
          ? "hsl(var(--ink-math) / 0.4)"
          : "hsl(var(--ink-physics) / 0.4)",
        background: "hsl(var(--ink) / 0.85)",
        minWidth: "220px",
        height: "48px",
        transition: "border-color 0.5s ease",
      }}
    >
      {/* Math watermark background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isMath ? 0.4 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100' viewBox='0 0 200 100'%3E%3Ctext x='10' y='35' font-size='24' fill='rgba(100,150,255,0.3)' font-family='serif'%3E∑%3C/text%3E%3Ctext x='60' y='65' font-size='28' fill='rgba(100,150,255,0.25)' font-family='serif'%3E∫%3C/text%3E%3Ctext x='120' y='40' font-size='20' fill='rgba(100,150,255,0.3)' font-family='serif'%3Eπ%3C/text%3E%3Ctext x='160' y='75' font-size='22' fill='rgba(100,150,255,0.2)' font-family='serif'%3E∂%3C/text%3E%3Ctext x='40' y='90' font-size='18' fill='rgba(100,150,255,0.2)' font-family='serif'%3E∞%3C/text%3E%3Ctext x='140' y='25' font-size='16' fill='rgba(100,150,255,0.25)' font-family='serif'%3Eλ%3C/text%3E%3C/svg%3E")`,
          backgroundSize: "200px 100px",
        }}
      />

      {/* Physics watermark background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isMath ? 0 : 0.4 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100' viewBox='0 0 200 100'%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='rgba(255,100,100,0.25)' stroke-width='1'/%3E%3Cellipse cx='50' cy='50' rx='40' ry='15' fill='none' stroke='rgba(255,100,100,0.2)' stroke-width='0.8' transform='rotate(30,50,50)'/%3E%3Cpath d='M100,30 Q130,50 160,30' fill='none' stroke='rgba(255,100,100,0.2)' stroke-width='0.8'/%3E%3Cpath d='M100,70 Q130,50 160,70' fill='none' stroke='rgba(255,100,100,0.2)' stroke-width='0.8'/%3E%3Ccircle cx='140' cy='50' r='3' fill='rgba(255,100,100,0.2)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 100px",
        }}
      />

      {/* Sliding highlight */}
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg"
        animate={{ x: isMath ? 4 : "calc(100% + 4px)" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          background: isMath
            ? "linear-gradient(135deg, hsl(var(--ink-math) / 0.5), hsl(var(--ink-math) / 0.3))"
            : "linear-gradient(135deg, hsl(var(--ink-physics) / 0.5), hsl(var(--ink-physics) / 0.3))",
          boxShadow: isMath
            ? "0 0 15px hsl(var(--ink-math) / 0.3), inset 0 1px 0 hsl(var(--ink-math) / 0.2)"
            : "0 0 15px hsl(var(--ink-physics) / 0.3), inset 0 1px 0 hsl(var(--ink-physics) / 0.2)",
          border: `1px solid ${
            isMath ? "hsl(var(--ink-math) / 0.3)" : "hsl(var(--ink-physics) / 0.3)"
          }`,
        }}
      />

      {/* Brass rivets */}
      <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold/40" />
      <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold/40" />

      <button
        onClick={() => onToggle("math")}
        className="relative z-10 flex-1 h-full flex items-center justify-center gap-1.5 transition-colors duration-300"
      >
        <span className="text-lg">∑</span>
        <span
          className={`font-display text-sm tracking-wider font-bold transition-all duration-300 ${
            isMath ? "text-blue-200 drop-shadow-[0_0_6px_rgba(100,150,255,0.5)]" : "text-gray-400"
          }`}
        >
          MATH
        </span>
      </button>

      {/* Center divider */}
      <div className="w-px h-8 bg-gold/20 z-10" />

      <button
        onClick={() => onToggle("physics")}
        className="relative z-10 flex-1 h-full flex items-center justify-center gap-1.5 transition-colors duration-300"
      >
        <span className="text-lg">⚛</span>
        <span
          className={`font-display text-sm tracking-wider font-bold transition-all duration-300 ${
            !isMath ? "text-red-200 drop-shadow-[0_0_6px_rgba(255,100,100,0.5)]" : "text-gray-400"
          }`}
        >
          PHYSICS
        </span>
      </button>
    </div>
  );
};

export default MathPhysicsToggle;
