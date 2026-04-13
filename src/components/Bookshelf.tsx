import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scientists, type Scientist } from "@/data/scientists";


interface BookshelfProps {
  onSelectScientist: (scientist: Scientist) => void;
  selectedId: string | null;
}

const Bookshelf = ({ onSelectScientist, selectedId }: BookshelfProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* "Index" header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <h2 className="font-display text-sm tracking-[0.3em] text-ink-light/60 uppercase">
          Table of Contents
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      {/* Index entries */}
      <div
        className="rounded-lg border overflow-hidden"
        style={{
          borderColor: "hsl(var(--leather-light) / 0.4)",
          background: "hsl(var(--paper) / 0.6)",
          boxShadow: "inset 0 2px 10px hsl(var(--ink) / 0.05)",
        }}
      >
        {scientists.map((scientist, i) => {
          const isSelected = selectedId === scientist.id;
          const isHovered = hoveredId === scientist.id;

          return (
            <motion.button
              key={scientist.id}
              onClick={() => onSelectScientist(scientist)}
              onHoverStart={() => setHoveredId(scientist.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="w-full text-left relative group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              {/* Hover/selected background */}
              <motion.div
                className="absolute inset-0 z-0"
                animate={{
                  opacity: isSelected ? 1 : isHovered ? 0.6 : 0,
                  background: isSelected
                    ? `linear-gradient(90deg, ${scientist.spineColor}22, transparent)`
                    : `linear-gradient(90deg, hsl(var(--gold) / 0.08), transparent)`,
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 flex items-center gap-4 px-4 sm:px-6 py-3 sm:py-4">
                {/* Chapter number */}
                <span
                  className="font-display text-xs sm:text-sm w-8 text-center flex-shrink-0 transition-colors duration-300"
                  style={{
                    color: isSelected
                      ? scientist.spineAccent
                      : "hsl(var(--ink-light) / 0.5)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Name and years */}
                <div className="flex-1 min-w-0">
                  <motion.span
                    className="font-display text-sm sm:text-base tracking-wide block truncate transition-colors duration-300"
                    style={{
                      color: isSelected
                        ? scientist.spineAccent
                        : "hsl(var(--ink))",
                    }}
                  >
                    {scientist.name}
                  </motion.span>
                  <span className="font-handwritten text-xs text-ink-light/50">
                    {scientist.years}
                  </span>
                </div>

                {/* Dotted line to page number */}
                <div className="hidden sm:flex flex-1 items-end pb-1 mx-2">
                  <div
                    className="w-full border-b border-dotted"
                    style={{ borderColor: "hsl(var(--ink-light) / 0.2)" }}
                  />
                </div>

                {/* "Page number" / indicator */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-display text-xs text-ink-light/40">
                    p.{(i + 1) * 7}
                  </span>
                  {isSelected && (
                    <motion.div
                      layoutId="bookmark"
                      className="w-1.5 h-6 rounded-full"
                      style={{ background: scientist.spineAccent }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </div>
              </div>

              {/* Separator line */}
              {i < scientists.length - 1 && (
                <div
                  className="mx-6 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, hsl(var(--border) / 0.3) 20%, hsl(var(--border) / 0.3) 80%, transparent 100%)",
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Decorative footer */}
      <div className="flex items-center gap-2 mt-3 justify-center">
        <span className="text-gold/30 text-xs">✦</span>
        <span className="font-handwritten text-xs text-ink-light/30">
          — select a legend to open their chapter —
        </span>
        <span className="text-gold/30 text-xs">✦</span>
      </div>
    </div>
  );
};

export default Bookshelf;
