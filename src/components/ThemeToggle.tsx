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
      className="relative w-12 h-6 rounded-full flex items-center"
      style={{
        background: isDark
          ? "hsl(var(--ink) / 0.15)"
          : "hsl(var(--ink) / 0.1)",
        border: "1px solid hsl(var(--ink) / 0.2)",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <motion.div
        className="w-5 h-5 rounded-full flex items-center justify-center"
        animate={{ x: isDark ? 24 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          background: isDark
            ? "hsl(var(--ink) / 0.9)"
            : "hsl(var(--gold) / 0.9)",
          boxShadow: isDark
            ? "0 0 6px hsl(var(--ink) / 0.3)"
            : "0 0 6px hsl(var(--gold) / 0.4)",
        }}
      >
        <span className="text-[10px] leading-none">{isDark ? "🌙" : "☀️"}</span>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
