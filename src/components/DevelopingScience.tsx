import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface ScienceField {
  id: string;
  name: string;
  icon: string;
  color: string;
  tagline: string;
  overview: string;
  breakthroughs: string[];
  futureProspects: string[];
  keyFigures: string[];
}

const fields: ScienceField[] = [
  {
    id: "quantum",
    name: "Quantum Science",
    icon: "⚛️",
    color: "#7B68EE",
    tagline: "Where particles are in two places at once and cats are both alive and dead",
    overview: "Quantum mechanics governs the behavior of matter at the smallest scales. It's deeply weird, counter-intuitive, and yet the most precisely tested theory in all of science. Quantum computing promises to solve problems classical computers never could.",
    breakthroughs: [
      "Quantum supremacy achieved by Google's Sycamore processor (2019) — solved a problem in 200 seconds that would take classical computers 10,000 years",
      "Quantum entanglement experimentally verified — Einstein called it 'spooky action at a distance' and he was right to be spooked",
      "Quantum key distribution (QKD) enables theoretically unhackable communication",
      "Topological quantum computing being developed by Microsoft — using exotic quasiparticles called anyons",
    ],
    futureProspects: [
      "Drug discovery — simulating molecular interactions at quantum scale",
      "Breaking and building new encryption standards",
      "Quantum internet connecting quantum computers globally",
      "Solving optimization problems in logistics, finance, and AI",
    ],
    keyFigures: ["Max Planck", "Niels Bohr", "Werner Heisenberg", "Richard Feynman", "John Preskill"],
  },
  {
    id: "nuclear",
    name: "Nuclear Energy",
    icon: "☢️",
    color: "#32CD32",
    tagline: "Splitting atoms to power cities — the most controversial energy source on Earth",
    overview: "Nuclear fission releases millions of times more energy than chemical reactions. Nuclear power provides ~10% of the world's electricity with zero direct carbon emissions. Fusion — the power source of stars — remains the holy grail of energy research.",
    breakthroughs: [
      "First sustained nuclear chain reaction by Enrico Fermi (1942) under a Chicago football stadium",
      "Nuclear fusion ignition achieved at NIF (2022) — more energy out than laser energy in, for the first time ever",
      "Small Modular Reactors (SMRs) making nuclear power more accessible and safer",
      "ITER tokamak under construction in France — the world's largest fusion experiment",
    ],
    futureProspects: [
      "Commercial fusion power — potentially unlimited clean energy",
      "Generation IV fission reactors that can burn nuclear waste as fuel",
      "Space propulsion using nuclear thermal rockets",
      "Molten salt reactors that are physically incapable of melting down",
    ],
    keyFigures: ["Enrico Fermi", "Lise Meitner", "J. Robert Oppenheimer", "Andrei Sakharov"],
  },
  {
    id: "biotech",
    name: "Biotechnology & Genetics",
    icon: "🧬",
    color: "#FF69B4",
    tagline: "Rewriting the code of life itself — one base pair at a time",
    overview: "From decoding DNA to editing genes with CRISPR, biotechnology is revolutionizing medicine, agriculture, and our understanding of life. We can now read, write, and edit the genetic code like software.",
    breakthroughs: [
      "CRISPR-Cas9 gene editing (2012) — Jennifer Doudna and Emmanuelle Charpentier's molecular scissors",
      "mRNA vaccines for COVID-19 — decades of research paid off in record time",
      "Human Genome Project completed (2003) — 3 billion base pairs mapped",
      "Synthetic biology creating organisms with entirely artificial genomes",
    ],
    futureProspects: [
      "Gene therapy curing inherited diseases like sickle cell and muscular dystrophy",
      "Lab-grown organs eliminating transplant waiting lists",
      "De-extinction of species like the woolly mammoth",
      "Personalized medicine tailored to individual genetic profiles",
    ],
    keyFigures: ["Rosalind Franklin", "James Watson & Francis Crick", "Jennifer Doudna", "Katalin Karikó"],
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    icon: "🤖",
    color: "#00CED1",
    tagline: "Teaching machines to think — or at least to fake it really convincingly",
    overview: "From neural networks inspired by the brain to large language models that write poetry, AI is transforming every field. Machine learning can now diagnose diseases, drive cars, generate art, and write code. The question isn't if AI will change everything — it's how fast.",
    breakthroughs: [
      "Deep learning revolution (2012+) — AlexNet proved neural networks could see better than humans",
      "AlphaFold solved protein folding (2020) — a 50-year grand challenge in biology, cracked by AI",
      "GPT and large language models — AI that can reason, code, and create",
      "Autonomous vehicles, AI-powered drug discovery, and real-time translation",
    ],
    futureProspects: [
      "Artificial General Intelligence (AGI) — machines with human-level reasoning",
      "AI-driven scientific discovery accelerating research 100x",
      "Brain-computer interfaces merging human and artificial intelligence",
      "Autonomous agents that can plan, act, and learn independently",
    ],
    keyFigures: ["Alan Turing", "Geoffrey Hinton", "Yann LeCun", "Demis Hassabis", "Fei-Fei Li"],
  },
  {
    id: "astro",
    name: "Astrophysics & Cosmology",
    icon: "🌌",
    color: "#4169E1",
    tagline: "Understanding the universe — from dark matter to the Big Bang",
    overview: "We've detected gravitational waves from colliding black holes, photographed a black hole's shadow, and discovered that 95% of the universe is made of stuff we can't see (dark matter and dark energy). The cosmos is stranger than we imagined.",
    breakthroughs: [
      "Gravitational waves detected by LIGO (2015) — Einstein predicted them 100 years earlier",
      "First image of a black hole by Event Horizon Telescope (2019) — M87*, 55 million light-years away",
      "Discovery of the Higgs boson at CERN (2012) — the 'God particle' completing the Standard Model",
      "Exoplanet discoveries — over 5,500 confirmed planets orbiting other stars",
    ],
    futureProspects: [
      "Detecting signs of life on exoplanet atmospheres with JWST",
      "Understanding dark matter and dark energy — 95% of the universe",
      "Multi-messenger astronomy combining light, gravitational waves, and neutrinos",
      "Testing theories of quantum gravity and the nature of spacetime",
    ],
    keyFigures: ["Stephen Hawking", "Kip Thorne", "Jocelyn Bell Burnell", "Andrea Ghez"],
  },
];

const FieldCard = ({ field, isExpanded, onToggle, index }: {
  field: ScienceField;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="rounded-lg border-2 overflow-hidden page-shadow cursor-pointer"
        style={{
          borderColor: isExpanded ? field.color + "60" : "hsl(var(--leather-light) / 0.3)",
          background: "hsl(var(--paper) / 0.8)",
        }}
        whileHover={{ scale: 1.01, y: -2 }}
        transition={{ duration: 0.3 }}
        onClick={onToggle}
      >
        {/* Header */}
        <div className="flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-5">
          <span className="text-2xl sm:text-3xl">{field.icon}</span>
          <div className="flex-1">
            <h3 className="font-display text-base sm:text-lg text-ink tracking-wide">{field.name}</h3>
            <p className="font-handwritten text-xs sm:text-sm text-ink-light/60 mt-0.5">{field.tagline}</p>
          </div>
          <motion.span
            className="text-gold text-sm"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-6 paper-texture">
                <div className="paper-margin space-y-6">
                  {/* Overview */}
                  <div>
                    <h4 className="font-display text-sm text-ink mb-2 flex items-center gap-2">
                      <span className="text-gold">✦</span> OVERVIEW
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-ink-light leading-relaxed italic">
                      {field.overview}
                    </p>
                  </div>

                  {/* Breakthroughs */}
                  <div>
                    <h4 className="font-display text-sm text-ink mb-2 flex items-center gap-2">
                      <span className="text-gold">✦</span> KEY BREAKTHROUGHS
                    </h4>
                    <ul className="space-y-2">
                      {field.breakthroughs.map((b, i) => (
                        <motion.li
                          key={i}
                          className="text-xs sm:text-sm text-ink-light flex items-start gap-2"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="mt-1 text-xs" style={{ color: field.color }}>▸</span>
                          <span>{b}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Future */}
                  <div>
                    <h4 className="font-display text-sm text-ink mb-2 flex items-center gap-2">
                      <span className="text-gold">✦</span> FUTURE PROSPECTS
                    </h4>
                    <ul className="space-y-2">
                      {field.futureProspects.map((f, i) => (
                        <motion.li
                          key={i}
                          className="text-xs sm:text-sm text-ink-light flex items-start gap-2"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <span className="mt-1 text-gold text-xs">▸</span>
                          <span>{f}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Figures */}
                  <div>
                    <h4 className="font-display text-sm text-ink mb-2 flex items-center gap-2">
                      <span className="text-gold">✦</span> KEY FIGURES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {field.keyFigures.map((name, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-display border"
                          style={{
                            borderColor: field.color + "40",
                            color: field.color,
                            background: field.color + "10",
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const DevelopingScience = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false });

  return (
    <section className="py-12 sm:py-16">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        className="text-center mb-10 sm:mb-14"
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
          THE FRONTIER SCIENCES
        </h2>
        <p className="font-handwritten text-base sm:text-lg text-ink-light mt-2">
          — where science is heading next —
        </p>
        <p className="font-body text-xs sm:text-sm text-ink-light/70 mt-3 max-w-lg mx-auto italic">
          The cutting edge of human knowledge. These fields are actively reshaping our understanding of reality, technology, and what it means to be human.
        </p>
      </motion.div>

      {/* Fields Grid */}
      <div className="space-y-4">
        {fields.map((field, i) => (
          <FieldCard
            key={field.id}
            field={field}
            isExpanded={expandedId === field.id}
            onToggle={() => setExpandedId(expandedId === field.id ? null : field.id)}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default DevelopingScience;
