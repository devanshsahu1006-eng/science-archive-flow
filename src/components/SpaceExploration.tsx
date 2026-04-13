import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface SpaceMission {
  id: string;
  name: string;
  year: string;
  icon: string;
  color: string;
  colorAccent: string;
  description: string;
  keyFacts: string[];
  significance: string;
}

const missions: SpaceMission[] = [
  {
    id: "sputnik",
    name: "Sputnik 1",
    year: "1957",
    icon: "📡",
    color: "#8B0000",
    colorAccent: "#FF6347",
    description: "The Soviet Union launches the first artificial satellite into orbit. A 58cm metal sphere that beeped its way around Earth, triggering the Space Race. The entire world looked up.",
    keyFacts: [
      "Orbited Earth every 96 minutes at 29,000 km/h",
      "Transmitted radio signals for 21 days",
      "Burned up on re-entry after 3 months in orbit",
      "Directly led to the creation of NASA",
    ],
    significance: "Started the Space Age and the US-Soviet Space Race that would define a generation.",
  },
  {
    id: "apollo11",
    name: "Apollo 11",
    year: "1969",
    icon: "🌕",
    color: "#DAA520",
    colorAccent: "#FFD700",
    description: "Neil Armstrong and Buzz Aldrin walk on the Moon while Michael Collins orbits above. 'One small step for man, one giant leap for mankind.' The most watched event in human history.",
    keyFacts: [
      "384,400 km journey took 3 days",
      "Armstrong and Aldrin spent 2.5 hours on the surface",
      "Brought back 21.5 kg of lunar samples",
      "600 million people watched on live TV worldwide",
    ],
    significance: "Proved humanity could travel beyond Earth. The ultimate flex of the 20th century.",
  },
  {
    id: "voyager",
    name: "Voyager 1 & 2",
    year: "1977",
    icon: "🛸",
    color: "#4169E1",
    colorAccent: "#87CEEB",
    description: "Twin spacecraft launched to explore the outer planets. Voyager 1 is now the farthest human-made object from Earth, over 24 billion km away. Still sending data. Still vibing.",
    keyFacts: [
      "Voyager 1 entered interstellar space in 2012",
      "Carries the Golden Record — a message to aliens",
      "Powered by plutonium-238 radioisotope generators",
      "Has been traveling for 47+ years and counting",
    ],
    significance: "Humanity's first interstellar messengers. They carry our music, languages, and images to the cosmos.",
  },
  {
    id: "hubble",
    name: "Hubble Space Telescope",
    year: "1990",
    icon: "🔭",
    color: "#9932CC",
    colorAccent: "#DDA0DD",
    description: "A telescope the size of a school bus, orbiting 547 km above Earth. Hubble revealed the age of the universe, proved dark energy exists, and took the most iconic space photos ever.",
    keyFacts: [
      "Orbits Earth every 95 minutes",
      "Has made over 1.5 million observations",
      "Helped determine the universe is ~13.8 billion years old",
      "Its mirror had a flaw that was fixed by astronauts in 1993",
    ],
    significance: "Transformed our understanding of the cosmos and made space beautiful for everyone.",
  },
  {
    id: "iss",
    name: "International Space Station",
    year: "1998",
    icon: "🛰️",
    color: "#2E8B57",
    colorAccent: "#90EE90",
    description: "The largest structure ever built in space. A collaboration between 15 nations. Continuously inhabited since 2000. Orbits Earth 16 times per day. The ultimate co-working space.",
    keyFacts: [
      "Size of a football field (109m × 73m)",
      "Travels at 27,600 km/h — sees 16 sunrises daily",
      "Has hosted 270+ astronauts from 21 countries",
      "Cost approximately $150 billion to build and maintain",
    ],
    significance: "Proof that international cooperation in space is possible. A stepping stone to Mars.",
  },
  {
    id: "jwst",
    name: "James Webb Space Telescope",
    year: "2021",
    icon: "✨",
    color: "#FF8C00",
    colorAccent: "#FFA500",
    description: "Hubble's successor. A $10 billion infrared eye peering back to the first galaxies formed after the Big Bang. Its mirror is gold-plated and 6.5 meters wide. The images broke the internet.",
    keyFacts: [
      "Orbits 1.5 million km from Earth at the L2 point",
      "Can detect infrared light from 13.5 billion years ago",
      "Its sunshield is the size of a tennis court",
      "Launched on Christmas Day 2021 after 25 years of development",
    ],
    significance: "Revealing the earliest galaxies, exoplanet atmospheres, and answering questions we haven't even asked yet.",
  },
];

const MissionCard = ({ mission, isSelected, onSelect, index }: {
  mission: SpaceMission;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}) => {
  return (
    <motion.button
      onClick={onSelect}
      className="w-full text-left relative group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      <motion.div
        className="absolute inset-0 z-0 rounded-sm"
        animate={{
          opacity: isSelected ? 1 : 0,
          background: `linear-gradient(90deg, ${mission.color}22, transparent)`,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 flex items-center gap-4 px-4 sm:px-6 py-3 sm:py-4">
        <span className="text-xl sm:text-2xl flex-shrink-0">{mission.icon}</span>
        <div className="flex-1 min-w-0">
          <motion.span
            className="font-display text-sm sm:text-base tracking-wide block truncate transition-colors duration-300"
            style={{ color: isSelected ? mission.colorAccent : "hsl(var(--ink))" }}
          >
            {mission.name}
          </motion.span>
          <span className="font-display text-base sm:text-lg font-bold tracking-wide" style={{ color: mission.color }}>{mission.year}</span>
        </div>
        <div className="hidden sm:flex flex-1 items-end pb-1 mx-2">
          <div className="w-full border-b border-dotted" style={{ borderColor: "hsl(var(--ink-light) / 0.2)" }} />
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {isSelected && (
            <motion.div
              layoutId="space-bookmark"
              className="w-1.5 h-6 rounded-full"
              style={{ background: mission.colorAccent }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
        </div>
      </div>

      {index < missions.length - 1 && (
        <div className="mx-6 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, hsl(var(--border) / 0.3) 20%, hsl(var(--border) / 0.3) 80%, transparent 100%)" }} />
      )}
    </motion.button>
  );
};

const ScrollSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};

const SpaceExploration = () => {
  const [selected, setSelected] = useState<SpaceMission | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false });

  const handleSelect = (mission: SpaceMission) => {
    setSelected(mission);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section className="py-12 sm:py-16">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <span className="text-gold text-lg">✦</span>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight">
          SPACE EXPLORATION
        </h2>
        <p className="font-handwritten text-base sm:text-lg text-ink-light mt-2">
          — humanity's greatest adventure beyond the sky —
        </p>
        <p className="font-body text-xs sm:text-sm text-ink-light/70 mt-3 max-w-md mx-auto italic">
          ↓ select a mission to explore the cosmos ↓
        </p>
      </motion.div>

      {/* Mission Index */}
      <motion.div
        className="rounded-lg border overflow-hidden mb-8"
        style={{
          borderColor: "hsl(var(--leather-light) / 0.4)",
          background: "hsl(var(--paper) / 0.6)",
          boxShadow: "inset 0 2px 10px hsl(var(--ink) / 0.05)",
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {missions.map((mission, i) => (
          <MissionCard
            key={mission.id}
            mission={mission}
            isSelected={selected?.id === mission.id}
            onSelect={() => handleSelect(mission)}
            index={i}
          />
        ))}
      </motion.div>

      <div className="flex items-center gap-2 mb-8 justify-center">
        <span className="text-gold/30 text-xs">✦</span>
        <span className="font-handwritten text-xs text-ink-light/30">— select a mission to open its file —</span>
        <span className="text-gold/30 text-xs">✦</span>
      </div>

      {/* Mission Detail */}
      <div ref={detailRef}>
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              className="relative"
              initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: 30, scale: 0.8 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ perspective: "1200px" }}
            >
              <div
                className="rounded-lg overflow-hidden border-2 page-shadow"
                style={{ borderColor: selected.color + "60", background: "hsl(var(--paper))" }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, hsl(var(--leather) / 0.15) 0%, transparent 100%)" }} />

                <div className="paper-texture p-6 sm:p-8 md:p-10">
                  {/* Header */}
                  <ScrollSection>
                    <div className="flex items-start gap-6 mb-8 paper-margin">
                      <motion.div
                        className="w-20 h-20 sm:w-28 sm:h-28 rounded-lg border-2 flex items-center justify-center text-4xl sm:text-5xl shadow-lg flex-shrink-0"
                        style={{ borderColor: selected.color + "60", background: "hsl(var(--paper-dark))" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {selected.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight animate-ink-bleed">
                          {selected.name}
                        </h3>
                        <p className="font-display text-xl sm:text-2xl font-bold mt-1" style={{ color: selected.color }}>{selected.year}</p>
                        <div className="mt-2 h-px bg-gradient-to-r from-ink/30 to-transparent w-full" />
                      </div>
                    </div>
                  </ScrollSection>

                  {/* Description */}
                  <ScrollSection delay={0.1}>
                    <div className="paper-margin mb-8">
                      <h4 className="font-display text-lg text-ink mb-3 flex items-center gap-2">
                        <span className="text-gold">✦</span> THE MISSION
                      </h4>
                      <p className="font-body text-sm sm:text-base text-ink-light leading-relaxed italic">
                        {selected.description}
                      </p>
                    </div>
                  </ScrollSection>

                  {/* Key Facts */}
                  <ScrollSection delay={0.2}>
                    <div className="paper-margin mb-8">
                      <h4 className="font-display text-lg text-ink mb-3 flex items-center gap-2">
                        <span className="text-gold">✦</span> KEY FACTS
                      </h4>
                      <ul className="space-y-2">
                        {selected.keyFacts.map((fact, i) => (
                          <motion.li
                            key={i}
                            className="text-sm sm:text-base text-ink-light flex items-start gap-2"
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="mt-1 text-gold text-xs">▸</span>
                            <span>{fact}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </ScrollSection>

                  {/* Significance */}
                  <ScrollSection delay={0.3}>
                    <div className="paper-margin mb-4">
                      <h4 className="font-display text-lg text-ink mb-3 flex items-center gap-2">
                        <span className="text-gold">✦</span> WHY IT MATTERS
                      </h4>
                      <blockquote className="border-l-2 border-gold/40 pl-4 py-1 font-body italic text-sm text-ink-light">
                        {selected.significance}
                      </blockquote>
                    </div>
                  </ScrollSection>

                  <div className="mt-8 pt-4 border-t border-border/30 text-center">
                    <p className="font-handwritten text-sm text-ink-light/60">filed under: cosmic achievements ✦ drafted on ruled paper</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!selected && (
        <motion.div className="text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <p className="font-handwritten text-xl sm:text-2xl text-ink-light/40">— TAP A MISSION TO EXPLORE ITS FILE —</p>
          <motion.div className="mt-4 text-3xl" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>🚀</motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default SpaceExploration;
