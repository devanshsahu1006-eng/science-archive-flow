import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Scientist } from "@/data/scientists";
import Bookshelf from "@/components/Bookshelf";
import ScientistDetail from "@/components/ScientistDetail";
import ParallaxPaper from "@/components/ParallaxPaper";
import InkLoader from "@/components/InkLoader";
import ThemeToggle from "@/components/ThemeToggle";
import HistoryOfScience from "@/components/HistoryOfScience";
import SpaceExploration from "@/components/SpaceExploration";
import DevelopingScience from "@/components/DevelopingScience";
import MedicalHistory from "@/components/MedicalHistory";
import TechnicalAchievements from "@/components/TechnicalAchievements";
import NavigationBar from "@/components/NavigationBar";
import ParticleBackground from "@/components/ParticleBackground";
import humanEvolutionImg from "@/assets/human-evolution.jpg";

interface EvolutionPhase {
  label: string;
  scientificName: string;
  period: string;
  xPercent: number; // horizontal position % on the image
}

const evolutionPhases: EvolutionPhase[] = [
  { label: "Ape Ancestor", scientificName: "Ardipithecus ramidus", period: "~4.4 million years ago", xPercent: 8 },
  { label: "Early Hominid", scientificName: "Australopithecus afarensis", period: "~3.2 million years ago", xPercent: 22 },
  { label: "Toolmaker", scientificName: "Homo habilis", period: "~2.4 million years ago", xPercent: 36 },
  { label: "Upright Man", scientificName: "Homo erectus", period: "~1.9 million years ago", xPercent: 50 },
  { label: "Archaic Human", scientificName: "Homo heidelbergensis", period: "~600,000 years ago", xPercent: 64 },
  { label: "Neanderthal", scientificName: "Homo neanderthalensis", period: "~400,000 years ago", xPercent: 78 },
  { label: "Modern Human", scientificName: "Homo sapiens", period: "~300,000 years ago", xPercent: 92 },
];

const Divider = () => (
  <div className="my-8 sm:my-12 flex items-center gap-4">
    <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    <span className="font-handwritten text-sm text-ink-light/40">✦ ✦ ✦</span>
    <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
  </div>
);

const Index = () => {
  const [selected, setSelected] = useState<Scientist | null>(null);
  const [loading, setLoading] = useState(true);
  const [showHeroText, setShowHeroText] = useState(false);
  const [hoveredPhase, setHoveredPhase] = useState<EvolutionPhase | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("custom-cursor");
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => {
      clearTimeout(timer);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setShowHeroText(true), 3000);
      return () => clearTimeout(t);
    }
  }, [loading]);

  const handleSelect = (scientist: Scientist) => {
    setSelected(scientist);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  if (loading) {
    return <InkLoader />;
  }

  return (
    <ParallaxPaper className="min-h-screen bg-background">
      <ParticleBackground />
      <NavigationBar />

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10 pt-16 sm:pt-20 relative z-10">
        {/* Theme toggle */}
        <div className="flex justify-end mb-2">
          <ThemeToggle />
        </div>

        {/* Header with evolution background + hover tooltips */}
        <motion.header
          id="header"
          className="text-center mb-8 sm:mb-12 relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Evolution background image */}
          <div className="absolute inset-0 z-0">
            <motion.img
              src={humanEvolutionImg}
              alt="Human evolution"
              className="w-full h-full object-cover"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: showHeroText ? 0.15 : 0.35 }}
              transition={{ duration: 1.5 }}
              width={1920}
              height={512}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, hsl(var(--background) / 0.3) 0%, hsl(var(--background) / 0.8) 100%)",
              }}
            />
          </div>

          {/* Evolution phase hover zones */}
          <div className="absolute inset-0 z-[5]">
            {evolutionPhases.map((phase) => (
              <div
                key={phase.scientificName}
                className="absolute top-0 h-full cursor-pointer"
                style={{ left: `${phase.xPercent - 5}%`, width: "10%" }}
                onMouseEnter={() => setHoveredPhase(phase)}
                onMouseLeave={() => setHoveredPhase(null)}
              >
                {/* Subtle indicator dot */}
                <div
                  className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold/50 transition-all duration-300"
                  style={{
                    transform: hoveredPhase?.scientificName === phase.scientificName
                      ? "translateX(-50%) scale(1.8)"
                      : "translateX(-50%) scale(1)",
                    opacity: hoveredPhase?.scientificName === phase.scientificName ? 1 : 0.4,
                  }}
                />
              </div>
            ))}

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredPhase && (
                <motion.div
                  key={hoveredPhase.scientificName}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-20 pointer-events-none px-4 py-2.5 rounded-lg border-2"
                  style={{
                    left: `${hoveredPhase.xPercent}%`,
                    bottom: "30%",
                    transform: "translateX(-50%)",
                    background: "hsl(var(--paper) / 0.95)",
                    borderColor: "hsl(var(--gold) / 0.5)",
                    boxShadow: "0 4px 20px hsl(var(--ink) / 0.2)",
                  }}
                >
                  <p className="font-display text-xs text-ink tracking-wider whitespace-nowrap">
                    {hoveredPhase.label}
                  </p>
                  <p className="font-body text-xs text-ink-light italic whitespace-nowrap">
                    {hoveredPhase.scientificName}
                  </p>
                  <p className="font-handwritten text-[11px] text-ink-light/70 whitespace-nowrap mt-0.5">
                    {hoveredPhase.period}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative z-10 py-10 sm:py-14">
            <AnimatePresence>
              {showHeroText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <p className="font-display text-xs sm:text-sm tracking-[0.3em] text-ink-light/70 mb-2">
                    SUBJECT: HISTORY OF SCIENCE · GRADE: S-TIER · SEMESTER: ALL
                  </p>
                  <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight font-bold">
                    {"THE SCIENCE ARCHIVE".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          duration: 0.6,
                          delay: i * 0.05,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        style={{ display: "inline-block" }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </h1>
                  <p className="font-handwritten text-base sm:text-lg text-ink-light mt-2">
                    — math × physics × space × frontier science edition —
                  </p>
                  <div className="mt-4 mx-auto h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent w-48 sm:w-64" />
                  <p className="font-body text-xs sm:text-sm text-ink-light/80 mt-4 max-w-md mx-auto italic">
                    ↓ hover over the silhouettes to explore human evolution ↓
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            {!showHeroText && <div className="py-10 sm:py-14" />}
          </div>
        </motion.header>

        {/* === SECTION 1: History of Science === */}
        <motion.div
          id="history"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <HistoryOfScience />
        </motion.div>

        <Divider />

        {/* === SECTION 2: Medical History === */}
        <div id="medical">
          <MedicalHistory />
        </div>

        <Divider />

        {/* === SECTION 3: Technical Achievements === */}
        <div id="technical">
          <TechnicalAchievements />
        </div>

        <Divider />

        {/* === SECTION 4: Space Exploration === */}
        <div id="space">
          <SpaceExploration />
        </div>

        <Divider />

        {/* === SECTION 5: Developing / Frontier Science === */}
        <div id="frontier">
          <DevelopingScience />
        </div>

        <Divider />

        {/* === SECTION 6: Scientists === */}
        <motion.div id="scientists" className="mb-4">
          <div className="text-center mb-10">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <span className="text-gold text-lg">✦</span>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight">
              THE SCIENCE ARCHIVE
            </h2>
            <p className="font-handwritten text-base sm:text-lg text-ink-light mt-2">
              — math × physics edition, vol. I —
            </p>
            <p className="font-body text-xs sm:text-sm text-ink-light/80 mt-3 max-w-md mx-auto italic">
              ↓ pick a chad below. pick a field. prepare to feel things about differential equations. ↓
            </p>
          </div>
        </motion.div>

        {/* Bookshelf / Index */}
        <motion.section
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Bookshelf onSelectScientist={handleSelect} selectedId={selected?.id ?? null} />
        </motion.section>

        {/* Scientist Detail */}
        <div ref={detailRef}>
          <AnimatePresence mode="wait">
            {selected && (
              <motion.section
                key={selected.id}
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ScientistDetail scientist={selected} />
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {!selected && (
          <motion.div
            className="text-center py-16 sm:py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="font-handwritten text-xl sm:text-2xl text-ink-light/50">
              — TAP A LEGEND TO PULL THEIR FILE —
            </p>
            <motion.div
              className="mt-4 text-3xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              📚
            </motion.div>
          </motion.div>
        )}

        {/* Footer */}
        <footer className="text-center py-6 border-t-2 border-gold/30">
          <p className="font-display text-xs tracking-widest text-ink-light/50">
            filed under: certified all-time legends ✦ drafted on ruled paper
          </p>
        </footer>
      </div>
    </ParallaxPaper>
  );
};

export default Index;
