import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MedicalMilestone {
  year: string;
  era: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const milestones: MedicalMilestone[] = [
  {
    year: "~2600 BCE",
    era: "Ancient Egypt",
    title: "Imhotep & Ancient Medicine",
    description: "Imhotep, the world's first known physician, practices medicine in ancient Egypt. The Edwin Smith Papyrus describes surgical techniques still recognizable today.",
    icon: "🏥",
    color: "#DAA520",
  },
  {
    year: "~400 BCE",
    era: "Ancient Greece",
    title: "Hippocrates & the Oath",
    description: "The 'Father of Medicine' separates medicine from superstition. The Hippocratic Oath — 'First, do no harm' — still guides doctors 2,400 years later.",
    icon: "⚕️",
    color: "#4A90A4",
  },
  {
    year: "~200 CE",
    era: "Roman Empire",
    title: "Galen's Anatomy",
    description: "Claudius Galen performs dissections on animals and writes extensively on anatomy, physiology, and pathology. His works dominate Western medicine for over 1,300 years.",
    icon: "🫀",
    color: "#8B4513",
  },
  {
    year: "~900 CE",
    era: "Islamic Golden Age",
    title: "Al-Razi & Clinical Medicine",
    description: "Al-Razi (Rhazes) distinguishes smallpox from measles, pioneers clinical observation, and writes 'The Comprehensive Book' — one of the largest medical encyclopedias ever created.",
    icon: "📚",
    color: "#2E8B57",
  },
  {
    year: "1543",
    era: "Renaissance",
    title: "Vesalius & Modern Anatomy",
    description: "Andreas Vesalius publishes 'De Humani Corporis Fabrica,' correcting centuries of anatomical errors from Galen. Human dissection becomes the foundation of medical education.",
    icon: "📖",
    color: "#6B4226",
  },
  {
    year: "1628",
    era: "Early Modern",
    title: "Harvey & Blood Circulation",
    description: "William Harvey demonstrates that blood circulates through the body in a closed loop, pumped by the heart. Overturns 1,400 years of Galenic teaching on blood flow.",
    icon: "❤️‍🔥",
    color: "#DC143C",
  },
  {
    year: "1796",
    era: "Enlightenment",
    title: "Jenner's Vaccination",
    description: "Edward Jenner creates the first vaccine using cowpox to immunize against smallpox. This single invention has since saved more lives than any other medical innovation in history.",
    icon: "💉",
    color: "#2E8B57",
  },
  {
    year: "1846",
    era: "19th Century",
    title: "Anesthesia Discovered",
    description: "William Morton demonstrates ether anesthesia at Massachusetts General Hospital. Surgery transforms from torture to science. Patients can finally sleep through it.",
    icon: "😴",
    color: "#6B8E23",
  },
  {
    year: "1867",
    era: "Victorian Era",
    title: "Lister's Antiseptic Surgery",
    description: "Joseph Lister introduces carbolic acid as an antiseptic during surgery, drastically reducing post-operative infections. Mortality rates in surgery plummet almost overnight.",
    icon: "🧴",
    color: "#5F9EA0",
  },
  {
    year: "1895",
    era: "Late 19th Century",
    title: "X-Rays by Röntgen",
    description: "Wilhelm Röntgen accidentally discovers X-rays while experimenting with cathode rays. He takes the first medical X-ray of his wife's hand. 'I have seen my death,' she said.",
    icon: "☢️",
    color: "#4169E1",
  },
  {
    year: "1928",
    era: "Interwar Period",
    title: "Penicillin by Fleming",
    description: "Alexander Fleming notices mold killing bacteria in a petri dish he forgot to clean. Penicillin becomes the first antibiotic and saves an estimated 200 million lives.",
    icon: "🧫",
    color: "#FF8C00",
  },
  {
    year: "1953",
    era: "Post-War Science",
    title: "DNA Structure Revealed",
    description: "Watson, Crick, and the crucial work of Rosalind Franklin reveal the double helix structure of DNA. The blueprint of life is decoded, opening the era of molecular biology.",
    icon: "🧬",
    color: "#9932CC",
  },
  {
    year: "1967",
    era: "Space Age",
    title: "First Heart Transplant",
    description: "Dr. Christiaan Barnard performs the first human-to-human heart transplant in Cape Town, South Africa. The patient survived 18 days. Organ transplantation becomes reality.",
    icon: "❤️",
    color: "#DC143C",
  },
  {
    year: "1978",
    era: "Late 20th Century",
    title: "First IVF Baby",
    description: "Louise Brown, the world's first 'test-tube baby,' is born in England. In vitro fertilization gives hope to millions of couples struggling with infertility worldwide.",
    icon: "👶",
    color: "#FF69B4",
  },
  {
    year: "2003",
    era: "Genomic Era",
    title: "Human Genome Mapped",
    description: "The Human Genome Project completes sequencing all 3 billion base pairs of human DNA. It took 13 years and $2.7 billion. Today the same task takes hours and costs under $1,000.",
    icon: "🗺️",
    color: "#20B2AA",
  },
  {
    year: "2020",
    era: "Pandemic Era",
    title: "mRNA Vaccines",
    description: "Moderna and BioNTech develop mRNA COVID-19 vaccines in under a year — the fastest vaccine development in history. Built on decades of work by Katalin Karikó.",
    icon: "🦠",
    color: "#00CED1",
  },
  {
    year: "2025+",
    era: "AI & Gene Therapy",
    title: "AI-Powered Diagnostics",
    description: "AI models now detect cancers from medical images with superhuman accuracy. CRISPR gene therapy cures sickle cell disease. Medicine enters its most transformative era.",
    icon: "🤖",
    color: "#7B68EE",
  },
];

const MilestoneCard = ({ milestone, index }: { milestone: MedicalMilestone; index: number }) => {
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

const MedicalHistory = () => {
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
          MEDICAL HISTORY & ACHIEVEMENTS
        </h2>
        <p className="font-handwritten text-base sm:text-lg text-ink-light mt-2">
          — healing humanity across the ages —
        </p>
        <p className="font-body text-xs sm:text-sm text-ink-light/70 mt-3 max-w-lg mx-auto italic">
          From ancient healers to gene therapy — the milestones that transformed medicine and saved billions of lives.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20 -translate-x-1/2" />
        <div className="space-y-8 sm:space-y-10">
          {milestones.map((m, i) => (
            <MilestoneCard key={i} milestone={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalHistory;
