import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "header", label: "Home", icon: "🏠" },
  { id: "history", label: "History", icon: "📜" },
  { id: "medical", label: "Medical", icon: "⚕️" },
  { id: "technical", label: "Tech", icon: "⚙️" },
  { id: "space", label: "Space", icon: "🚀" },
  { id: "frontier", label: "Frontier", icon: "⚛️" },
  { id: "scientists", label: "Legends", icon: "📚" },
];

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState("header");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div
        className="backdrop-blur-md transition-all duration-500 border-b-2"
        style={{
          background: isScrolled ? "hsl(var(--background) / 0.92)" : "hsl(var(--background) / 0.7)",
          borderColor: isScrolled ? "hsl(var(--gold) / 0.4)" : "hsl(var(--gold) / 0.15)",
          boxShadow: isScrolled ? "0 4px 20px hsl(var(--ink) / 0.15)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-12 sm:h-14">
          <button onClick={() => scrollTo("header")} className="font-display text-sm sm:text-base tracking-wider text-ink hover:text-gold transition-colors">
            ✦ SCIENCE ARCHIVE
          </button>

          <div className="hidden md:flex items-center gap-0.5">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="relative px-2.5 py-1.5 font-display text-[10px] sm:text-xs tracking-wider transition-colors duration-300"
                style={{ color: activeSection === s.id ? "hsl(var(--gold))" : "hsl(var(--ink-light))" }}
              >
                <span className="mr-1">{s.icon}</span>
                {s.label}
                {activeSection === s.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                    style={{ background: "hsl(var(--gold))" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button className="md:hidden font-display text-ink text-lg" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t"
              style={{ borderColor: "hsl(var(--gold) / 0.2)" }}
            >
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="w-full text-left px-6 py-3 font-display text-xs tracking-wider transition-colors"
                  style={{
                    color: activeSection === s.id ? "hsl(var(--gold))" : "hsl(var(--ink-light))",
                    background: activeSection === s.id ? "hsl(var(--gold) / 0.08)" : "transparent",
                  }}
                >
                  <span className="mr-2">{s.icon}</span>
                  {s.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavigationBar;
