import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TechMilestone {
  year: string;
  era: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const techMilestones: TechMilestone[] = [
  {
    year: "~3500 BCE",
    era: "Bronze Age",
    title: "The Wheel",
    description: "Invented in Mesopotamia, the wheel transforms transportation, pottery, and machinery. The single most important mechanical invention in human history.",
    icon: "☸️",
    color: "#8B4513",
  },
  {
    year: "105 CE",
    era: "Han Dynasty",
    title: "Paper by Cai Lun",
    description: "Cai Lun of China standardizes papermaking from bark, hemp, and rags. Knowledge can now be recorded, copied, and spread — the original information revolution.",
    icon: "📜",
    color: "#DAA520",
  },
  {
    year: "~850 CE",
    era: "Tang Dynasty",
    title: "Gunpowder",
    description: "Chinese alchemists discover gunpowder while searching for the elixir of immortality. It transforms warfare, mining, and construction across the globe.",
    icon: "💥",
    color: "#B22222",
  },
  {
    year: "~1040 CE",
    era: "Song Dynasty",
    title: "Movable Type (Bi Sheng)",
    description: "Bi Sheng invents the first movable type printing system using ceramic pieces. Predates Gutenberg by 400 years and revolutionizes knowledge dissemination in East Asia.",
    icon: "🔤",
    color: "#6B4226",
  },
  {
    year: "1440",
    era: "Renaissance",
    title: "Gutenberg's Printing Press",
    description: "Johannes Gutenberg invents movable type printing. Books become affordable. Literacy explodes. The Reformation, Renaissance, and Scientific Revolution follow directly.",
    icon: "🖨️",
    color: "#4A90A4",
  },
  {
    year: "1712",
    era: "Early Industrial",
    title: "Newcomen's Steam Engine",
    description: "Thomas Newcomen builds the first practical steam engine for pumping water from mines. It sets the stage for the Industrial Revolution that Watt would later perfect.",
    icon: "♨️",
    color: "#708090",
  },
  {
    year: "1769",
    era: "Industrial Revolution",
    title: "Watt's Steam Engine",
    description: "James Watt perfects the steam engine. Factories, railways, and steamships transform civilization. The Industrial Revolution reshapes the planet forever.",
    icon: "🚂",
    color: "#2E8B57",
  },
  {
    year: "1837",
    era: "Victorian Era",
    title: "The Telegraph",
    description: "Samuel Morse develops the electric telegraph and Morse code. For the first time, messages travel faster than humans. 'What hath God wrought?'",
    icon: "📡",
    color: "#6B8E23",
  },
  {
    year: "1876",
    era: "Gilded Age",
    title: "Bell's Telephone",
    description: "Alexander Graham Bell patents the telephone. 'Mr. Watson, come here, I want to see you.' Real-time voice communication across distances becomes reality.",
    icon: "📞",
    color: "#4169E1",
  },
  {
    year: "1879",
    era: "Electric Age",
    title: "Edison's Light Bulb",
    description: "Thomas Edison creates a practical incandescent light bulb that lasts over 1,200 hours. Night is conquered. Cities are transformed. The electrical age dawns.",
    icon: "💡",
    color: "#FFD700",
  },
  {
    year: "1903",
    era: "Early 20th Century",
    title: "Wright Brothers' Flight",
    description: "Orville and Wilbur Wright achieve the first powered, controlled flight at Kitty Hawk. 12 seconds that launched the age of aviation. 66 years later: Moon landing.",
    icon: "✈️",
    color: "#FF8C00",
  },
  {
    year: "1947",
    era: "Post-War Era",
    title: "The Transistor",
    description: "Bardeen, Brattain, and Shockley invent the transistor at Bell Labs. This tiny switch replaces vacuum tubes and makes the entire digital age possible.",
    icon: "🔌",
    color: "#9932CC",
  },
  {
    year: "1958",
    era: "Space Age",
    title: "The Integrated Circuit",
    description: "Jack Kilby and Robert Noyce independently invent the integrated circuit. Multiple transistors on one chip — the birth of microelectronics and modern computing.",
    icon: "🔲",
    color: "#556B2F",
  },
  {
    year: "1969",
    era: "ARPANET Era",
    title: "ARPANET (Internet)",
    description: "The first message sent over ARPANET: 'LO' (it crashed after two letters trying to send 'LOGIN'). The network grows into the Internet — humanity's nervous system.",
    icon: "🌐",
    color: "#1E90FF",
  },
  {
    year: "1983",
    era: "Digital Revolution",
    title: "GPS Goes Live",
    description: "The US military launches the GPS satellite constellation. Originally for guiding missiles, it now helps billions find the nearest coffee shop.",
    icon: "🛰️",
    color: "#708090",
  },
  {
    year: "1991",
    era: "Information Age",
    title: "The World Wide Web",
    description: "Tim Berners-Lee launches the first website at CERN. HTML, URLs, and HTTP create the foundation for the modern internet. The web changes everything — commerce, communication, culture.",
    icon: "🕸️",
    color: "#00CED1",
  },
  {
    year: "2007",
    era: "Mobile Era",
    title: "The Smartphone (iPhone)",
    description: "Apple introduces the iPhone. A computer, camera, GPS, music player, and internet portal in your pocket. The most rapidly adopted technology in human history.",
    icon: "📱",
    color: "#DC143C",
  },
  {
    year: "2023+",
    era: "AI Era",
    title: "Generative AI",
    description: "Large Language Models and generative AI explode into mainstream use. Code, art, music, and text generated by AI at human-level quality. The creative singularity begins.",
    icon: "🧠",
    color: "#00CED1",
  },
];

const TechCard = ({ milestone, index }: { milestone: TechMilestone; index: number }) => {
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
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
        <motion.div
          className="rounded-lg border-2 p-4 sm:p-5 page-shadow relative overflow-hidden"
          style={{
            borderColor: milestone.color + "40",
            background: "hsl(var(--paper) / 0.8)",
          }}
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className={`absolute top-2 ${isLeft ? "left-3" : "right-3"} text-4xl pointer-events-none`}
            style={{ opacity: 0.35, filter: "saturate(1.5) contrast(1.3) brightness(0.7)" }}
          >
            {milestone.icon}
          </span>

          <div className={`flex items-center gap-2 ${isLeft ? "justify-end" : "justify-start"}`}>
            <span className="font-display text-xs tracking-widest" style={{ color: milestone.color }}>
              {milestone.year}
            </span>
          </div>
          <h3 className="font-display text-base sm:text-lg text-ink mt-1">{milestone.title}</h3>
          <p className="font-handwritten text-sm text-ink-light/70 mt-0.5">{milestone.era}</p>
          <p className="font-body text-xs sm:text-sm text-ink-light leading-relaxed mt-2">
            {milestone.description}
          </p>
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center flex-shrink-0 relative z-10">
        <motion.div
          className="w-5 h-5 rounded-full border-2 shadow-lg flex items-center justify-center text-[10px]"
          style={{
            borderColor: milestone.color,
            background: "hsl(var(--paper))",
            filter: "contrast(1.3) brightness(0.8)",
          }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
        >
          {milestone.icon}
        </motion.div>
      </div>

      <div className="flex-1" />
    </motion.div>
  );
};

const TechnicalAchievements = () => {
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
          TECHNICAL ACHIEVEMENTS
        </h2>
        <p className="font-handwritten text-base sm:text-lg text-ink-light mt-2">
          — inventions that shaped civilization —
        </p>
        <p className="font-body text-xs sm:text-sm text-ink-light/70 mt-3 max-w-lg mx-auto italic">
          From the wheel to artificial intelligence — the technological breakthroughs that built the modern world.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20 -translate-x-1/2" />
        <div className="space-y-8 sm:space-y-10">
          {techMilestones.map((m, i) => (
            <TechCard key={i} milestone={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalAchievements;
