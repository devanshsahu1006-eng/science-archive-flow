import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import type { Scientist } from "@/data/scientists";
import MathPhysicsToggle from "./MathPhysicsToggle";
import ScientistPortrait from "./ScientistPortrait";
import Timeline from "./Timeline";

interface ScientistDetailProps {
  scientist: Scientist;
}

const ScrollSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const ScientistDetail = ({ scientist }: ScientistDetailProps) => {
  const [field, setField] = useState<"math" | "physics">("math");

  const contributions = field === "math" ? scientist.mathContributions : scientist.physicsContributions;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
      exit={{ opacity: 0, rotateY: 30, scale: 0.8 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: "1200px" }}
    >
      {/* Book cover frame */}
      <div
        className="rounded-lg overflow-hidden border-2 page-shadow"
        style={{
          borderColor: "hsl(var(--leather-light))",
          background: "hsl(var(--paper))",
        }}
      >
        {/* Book inner binding edge */}
        <div
          className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, hsl(var(--leather) / 0.15) 0%, transparent 100%)",
          }}
        />

        <div className="paper-texture p-6 sm:p-8 md:p-10">
          {/* Header */}
          <ScrollSection>
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-8 paper-margin">
              <ScientistPortrait scientist={scientist} />
              <div className="flex-1">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight animate-ink-bleed">
                  {scientist.name}
                </h1>
                <p className="font-handwritten text-lg sm:text-xl text-ink-light mt-1">
                  {scientist.years}
                </p>
                <div className="mt-2 h-px bg-gradient-to-r from-ink/30 to-transparent w-full" />
              </div>
            </div>
          </ScrollSection>

          {/* Vibe Check */}
          <ScrollSection delay={0.1}>
            <div className="paper-margin mb-8">
              <h2 className="font-display text-lg text-ink mb-3 flex items-center gap-2">
                <span className="text-gold">✦</span> VIBE CHECK
              </h2>
              <p className="font-body text-sm sm:text-base text-ink-light leading-relaxed italic">
                {scientist.vibeCheck}
              </p>
            </div>
          </ScrollSection>

          {/* Math/Physics Toggle + Contributions */}
          <ScrollSection delay={0.2}>
            <div className="paper-margin mb-8">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                <h2 className="font-display text-lg text-ink flex items-center gap-2">
                  <span className="text-gold">✦</span> KEY CONTRIBUTIONS
                </h2>
                <MathPhysicsToggle field={field} onToggle={setField} />
              </div>

              <div className={`relative transition-all duration-700 rounded-md p-4 ${field === "math" ? "watermark-math-strong" : "watermark-physics-strong"}`}>
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={field}
                    className="space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {contributions.map((c, i) => (
                      <motion.li
                        key={i}
                        className={`text-sm sm:text-base leading-relaxed flex items-start gap-2 ${
                          field === "math" ? "text-ink-math" : "text-ink-physics"
                        }`}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="mt-1 text-gold text-xs">▸</span>
                        <span>{c}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>
          </ScrollSection>

          {/* Fun Facts */}
          <ScrollSection delay={0.3}>
            <div className="paper-margin mb-8">
              <h2 className="font-display text-lg text-ink mb-3 flex items-center gap-2">
                <span className="text-gold">✦</span> FUN FACTS (NO CAP)
              </h2>
              <ul className="space-y-2">
                {scientist.funFacts.map((fact, i) => (
                  <motion.li
                    key={i}
                    className="text-sm text-ink-light flex items-start gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-handwritten text-base text-gold mt-0.5">•</span>
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollSection>

          {/* Famous Quotes */}
          <ScrollSection delay={0.4}>
            <div className="paper-margin mb-8">
              <h2 className="font-display text-lg text-ink mb-3 flex items-center gap-2">
                <span className="text-gold">✦</span> ICONIC QUOTES
              </h2>
              <div className="space-y-3">
                {scientist.famousQuotes.map((quote, i) => (
                  <motion.blockquote
                    key={i}
                    className="border-l-2 border-gold/40 pl-4 py-1 font-body italic text-sm text-ink-light"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    "{quote}"
                  </motion.blockquote>
                ))}
              </div>
            </div>
          </ScrollSection>

          {/* Timeline */}
          <ScrollSection delay={0.5}>
            <div className="paper-margin mb-4">
              <h2 className="font-display text-lg text-ink mb-3 flex items-center gap-2">
                <span className="text-gold">✦</span> TIMELINE
              </h2>
              <Timeline events={scientist.timeline} />
            </div>
          </ScrollSection>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-border/30 text-center">
            <p className="font-handwritten text-sm text-ink-light/60">
              filed under: certified legend ✦ drafted on ruled paper
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScientistDetail;
