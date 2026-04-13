import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    // Add smooth transition to all elements during theme switch
    document.documentElement.style.transition = "background-color 0.6s ease, color 0.5s ease";
    document.body.style.transition = "background-color 0.6s ease, color 0.5s ease";

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const timer = setTimeout(() => {
      document.documentElement.style.transition = "";
      document.body.style.transition = "";
    }, 700);

    return () => clearTimeout(timer);
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="relative w-20 h-10 rounded-full border-2 overflow-hidden flex items-center"
      style={{
        borderColor: "hsl(var(--gold) / 0.6)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Day/Night landscape background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDark
            ? "linear-gradient(180deg, #0c1445 0%, #1a1a4e 40%, #2d1b4e 70%, #1a1a2e 100%)"
            : "linear-gradient(180deg, #87CEEB 0%, #b8e4f0 40%, #f0d68a 80%, #e8c36a 100%)",
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Stars (dark mode) */}
      <AnimatedStars isDark={isDark} />

      {/* Ground/hills silhouette */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-3"
        animate={{
          background: isDark
            ? "linear-gradient(0deg, #0a0a1a 0%, #1a1a3e 100%)"
            : "linear-gradient(0deg, #5a8a3a 0%, #7ab648 100%)",
        }}
        transition={{ duration: 0.6 }}
        style={{
          clipPath: "polygon(0% 100%, 0% 60%, 15% 30%, 30% 50%, 50% 20%, 70% 45%, 85% 25%, 100% 50%, 100% 100%)",
        }}
      />

      {/* Sliding knob (sun/moon) */}
      <motion.div
        className="absolute w-7 h-7 rounded-full flex items-center justify-center z-10"
        animate={{
          x: isDark ? 44 : 4,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{
          background: isDark
            ? "linear-gradient(135deg, #c0c0d0, #e8e8f0)"
            : "linear-gradient(135deg, #FFD700, #FFA500)",
          boxShadow: isDark
            ? "0 0 12px rgba(200, 200, 255, 0.4), inset -3px -2px 4px rgba(100, 100, 130, 0.3)"
            : "0 0 16px rgba(255, 200, 50, 0.6), 0 0 30px rgba(255, 150, 0, 0.2)",
        }}
      >
        <span className="text-sm">{isDark ? "🌙" : "☀️"}</span>
      </motion.div>
    </motion.button>
  );
};

const AnimatedStars = ({ isDark }: { isDark: boolean }) => (
  <>
    {[
      { left: "12%", top: "20%" },
      { left: "25%", top: "35%" },
      { left: "60%", top: "15%" },
      { left: "75%", top: "30%" },
      { left: "45%", top: "25%" },
    ].map((pos, i) => (
      <motion.div
        key={i}
        className="absolute w-0.5 h-0.5 rounded-full bg-white"
        style={{ left: pos.left, top: pos.top }}
        animate={{
          opacity: isDark ? [0, 0.8, 0.4, 0.9, 0.5] : 0,
          scale: isDark ? [0.5, 1, 0.7, 1] : 0,
        }}
        transition={{
          duration: 2 + i * 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: i * 0.3,
        }}
      />
    ))}
  </>
);

export default ThemeToggle;
