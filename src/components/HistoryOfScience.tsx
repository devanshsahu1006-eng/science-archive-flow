import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Era {
  period: string;
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const eras: Era[] = [
  {
    period: "~2.5M BCE",
    year: "Stone Age",
    title: "First Tools & Fire",
    description: "Early humans craft stone tools and harness fire — the dawn of technology. Observation of nature begins the journey of understanding the world.",
    icon: "🔥",
    color: "#8B4513",
  },
  {
    period: "~3000 BCE",
    year: "Ancient Egypt & Mesopotamia",
    title: "Mathematics & Astronomy",
    description: "Egyptians develop geometry for pyramid construction. Babylonians create the sexagesimal (base-60) number system we still use for time and angles.",
    icon: "📐",
    color: "#DAA520",
  },
  {
    period: "~600 BCE",
    year: "Ancient Greece",
    title: "Birth of Natural Philosophy",
    description: "Thales, Pythagoras, Democritus, and Aristotle begin systematic inquiry into nature. The concept of 'atoms' is proposed. Euclid writes Elements — the foundation of geometry.",
    icon: "🏛️",
    color: "#4A90A4",
  },
  {
    period: "~250 BCE",
    year: "Hellenistic Period",
    title: "Archimedes & Alexandria",
    description: "Archimedes discovers buoyancy and lever principles. The Library of Alexandria becomes the world's greatest center of learning. Eratosthenes calculates Earth's circumference.",
    icon: "⚖️",
    color: "#6B8E23",
  },
  {
    period: "~800 CE",
    year: "Islamic Golden Age",
    title: "Algebra & Optics",
    description: "Al-Khwarizmi founds algebra. Ibn al-Haytham pioneers the scientific method and optics. Arabic scholars preserve and expand Greek knowledge during Europe's Dark Ages.",
    icon: "🌙",
    color: "#2E8B57",
  },
  {
    period: "1543",
    year: "Scientific Revolution",
    title: "Copernicus & Heliocentrism",
    description: "Copernicus places the Sun at the center. Galileo builds telescopes and confirms it. Kepler discovers planetary motion laws. The Church is NOT happy.",
    icon: "🔭",
    color: "#4169E1",
  },
  {
    period: "1687",
    year: "Newtonian Era",
    title: "Principia Mathematica",
    description: "Newton publishes the Principia — unifying terrestrial and celestial mechanics. Calculus is invented. Gravity is explained. Physics gets its first Grand Theory.",
    icon: "🍎",
    color: "#8B0000",
  },
  {
    period: "1800s",
    year: "Age of Electromagnetism",
    title: "Faraday, Maxwell & Thermodynamics",
    description: "Faraday discovers electromagnetic induction. Maxwell unifies electricity and magnetism. Thermodynamics is established. Darwin publishes On the Origin of Species.",
    icon: "⚡",
    color: "#FF8C00",
  },
  {
    period: "1905",
    year: "Einstein's Revolution",
    title: "Relativity & Quantum Beginnings",
    description: "Einstein's miracle year: special relativity, E=mc², photoelectric effect. Planck introduces quantum theory. The classical worldview shatters forever.",
    icon: "💡",
    color: "#9932CC",
  },
  {
    period: "1940s–60s",
    year: "Atomic & Space Age",
    title: "Nuclear Power & Moon Landing",
    description: "Nuclear fission is achieved. The atomic bomb changes geopolitics forever. DNA structure is discovered. Sputnik launches. Humans walk on the Moon in 1969.",
    icon: "🚀",
    color: "#1E90FF",
  },
  {
    period: "1990s–Now",
    year: "Digital & Quantum Era",
    title: "Internet, AI & Quantum Computing",
    description: "The World Wide Web transforms civilization. The Human Genome is mapped. CRISPR enables gene editing. Quantum computers begin to emerge. AI starts writing code.",
    icon: "🧬",
    color: "#00CED1",
  },
];

const EraCard = ({ era, index }: { era: Era; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex items-start gap-4 sm:gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"} relative`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -60 : 60 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
        <motion.div
          className="rounded-lg border-2 p-4 sm:p-5 page-shadow relative overflow-hidden"
          style={{
            borderColor: era.color + "40",
            background: "hsl(var(--paper) / 0.8)",
          }}
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.3 }}
        >
          {/* Watermark icon — placed on opposite side of text alignment */}
          <span
            className={`absolute top-2 ${isLeft ? "left-3" : "right-3"} text-4xl pointer-events-none`}
            style={{
              opacity: 0.35,
              filter: "saturate(1.5) contrast(1.3) brightness(0.7)",
            }}
          >
            {era.icon}
          </span>

          {/* Period on opposite side of the icon */}
          <div className={`flex items-center gap-2 ${isLeft ? "justify-end" : "justify-start"}`}>
            <span className="font-display text-xs tracking-widest" style={{ color: era.color }}>
              {era.period}
            </span>
          </div>
          <h3 className="font-display text-base sm:text-lg text-ink mt-1">{era.title}</h3>
          <p className="font-handwritten text-sm text-ink-light/70 mt-0.5">{era.year}</p>
          <p className="font-body text-xs sm:text-sm text-ink-light leading-relaxed mt-2">
            {era.description}
          </p>
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center flex-shrink-0 relative z-10">
        <motion.div
          className="w-5 h-5 rounded-full border-2 shadow-lg flex items-center justify-center text-[10px]"
          style={{
            borderColor: era.color,
            background: "hsl(var(--paper))",
            filter: "contrast(1.3) brightness(0.8)",
          }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
        >
          {era.icon}
        </motion.div>
      </div>

      {/* Spacer for the other side */}
      <div className="flex-1" />
    </motion.div>
  );
};

const HistoryOfScience = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false });

  return (
    <section className="py-12 sm:py-16">
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
          HISTORY OF SCIENCE
        </h2>
        <p className="font-handwritten text-base sm:text-lg text-ink-light mt-2">
          — from stone tools to quantum computers —
        </p>
        <p className="font-body text-xs sm:text-sm text-ink-light/70 mt-3 max-w-lg mx-auto italic">
          A journey through the greatest intellectual achievements of humanity, spanning millions of years of curiosity and discovery.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20 -translate-x-1/2" />
        <div className="space-y-8 sm:space-y-10">
          {eras.map((era, i) => (
            <EraCard key={i} era={era} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryOfScience;
