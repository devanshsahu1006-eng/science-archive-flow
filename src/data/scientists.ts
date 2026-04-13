export interface Scientist {
  id: string;
  name: string;
  years: string;
  icon: string;
  spineColor: string;
  spineAccent: string;
  vibeCheck: string;
  mathContributions: string[];
  physicsContributions: string[];
  funFacts: string[];
  famousQuotes: string[];
  timeline: { year: string; event: string }[];
}

export const scientists: Scientist[] = [
  {
    id: "newton",
    name: "Isaac Newton",
    years: "1643–1727",
    icon: "F = ma",
    spineColor: "#8B4513",
    spineAccent: "#DAA520",
    vibeCheck:
      "This man literally invented calculus because he was BORED during a plague. Sat under a tree, got bonked by an apple, and said 'bet I can explain gravity.' Absolute unit energy. He beefed with Leibniz for YEARS over who invented calculus first — the original academic drama. Knighted, ran the Royal Mint, and was lowkey terrifying to argue with. Newton didn't just study the universe — he rewrote the rules.",
    mathContributions: [
      "Invented calculus (independently from Leibniz) — the entire foundation for modern math, physics, engineering, and basically everything",
      "Generalized the binomial theorem to non-integer exponents — unlocked infinite series expansions that mathematicians still use daily",
      "Developed Newton's method for finding roots of equations — still the go-to numerical approximation algorithm",
      "Created the Newton-Leibniz formula connecting differentiation and integration — THE fundamental theorem of calculus",
    ],
    physicsContributions: [
      "Three Laws of Motion — literally the foundation of classical mechanics. Every physics class starts here",
      "Universal Law of Gravitation — proved the same force that drops apples also keeps the Moon in orbit. Connected terrestrial and celestial physics forever",
      "Built the first reflecting telescope — solved chromatic aberration and revolutionized observational astronomy",
      "Proved white light is a spectrum of colors using prisms — founded the entire field of optics",
    ],
    funFacts: [
      "Was born premature and so tiny they said he could fit inside a quart mug. Went on to become arguably the greatest scientist ever 💀",
      "Stuck a needle behind his own eyeball to study optics. Absolute madlad behavior fr fr",
      "Was a secret alchemist who spent MORE time trying to turn lead into gold than doing actual physics",
      "Had a complete mental breakdown in 1693 — historians think mercury poisoning from his alchemy experiments",
      "His dog Diamond allegedly knocked over a candle and burned 20 years of manuscripts. Newton reportedly said: 'O Diamond, Diamond, thou little knowest the mischief thou hast done'",
    ],
    famousQuotes: [
      "If I have seen further, it is by standing on the shoulders of Giants.",
      "I can calculate the motion of heavenly bodies, but not the madness of people.",
      "What we know is a drop, what we don't know is an ocean.",
      "Tact is the knack of making a point without making an enemy.",
    ],
    timeline: [
      { year: "1643", event: "Born in Woolsthorpe, England" },
      { year: "1665", event: "Plague year — invented calculus at home" },
      { year: "1687", event: "Published Principia Mathematica" },
      { year: "1704", event: "Published Opticks" },
      { year: "1727", event: "Died in London" },
    ],
  },
  {
    id: "einstein",
    name: "Albert Einstein",
    years: "1879–1955",
    icon: "E=mc²",
    spineColor: "#2F4F4F",
    spineAccent: "#B8860B",
    vibeCheck:
      "Failed his college entrance exam, worked at a patent office, then casually dropped FOUR papers in 1905 that literally broke physics. One of them explained the photoelectric effect (Nobel Prize material), another proved atoms exist, a third introduced special relativity, and the fourth gave us E=mc². The man was just built different. Fled Nazi Germany, became an American icon, stuck his tongue out for a photo, and became the face of genius forever.",
    mathContributions: [
      "Used Riemannian geometry and tensor calculus to formulate general relativity — showed math isn't just abstract, it literally describes spacetime",
      "Einstein summation convention — simplified tensor notation so physicists could actually write equations without going insane",
      "Contributed to the development of Bose-Einstein statistics — quantum statistical mechanics for particles that don't obey classical rules",
      "His work on Brownian motion provided mathematical proof that atoms exist — statistical mechanics W",
    ],
    physicsContributions: [
      "Special Relativity (1905) — time is relative, nothing goes faster than light, and E=mc² changed everything",
      "General Relativity (1915) — gravity isn't a force, it's curved spacetime. Predicted black holes, gravitational waves, and the expansion of the universe",
      "Photoelectric Effect — proved light comes in packets (photons), kickstarting quantum mechanics. Won the Nobel Prize for this one",
      "Predicted gravitational lensing — confirmed during a solar eclipse in 1919, making him a global celebrity overnight",
    ],
    funFacts: [
      "His brain was literally stolen after death by the pathologist Thomas Harvey, who kept it in jars for 40 years 💀",
      "Was offered the presidency of Israel in 1952. He declined because 'politics is for the present, equations are for eternity'",
      "Didn't wear socks — ever. Said they just get holes in them anyway. King of efficiency",
      "His first wife Mileva Marić was also a physicist — there's ongoing debate about how much she contributed to his early work",
      "Played violin and named it 'Lina.' Called music his 'way of thinking'",
    ],
    famousQuotes: [
      "Imagination is more important than knowledge.",
      "God does not play dice with the universe.",
      "If you can't explain it simply, you don't understand it well enough.",
      "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    ],
    timeline: [
      { year: "1879", event: "Born in Ulm, Germany" },
      { year: "1905", event: "Miracle Year — 4 groundbreaking papers" },
      { year: "1915", event: "Published General Relativity" },
      { year: "1921", event: "Nobel Prize in Physics" },
      { year: "1955", event: "Died in Princeton, NJ" },
    ],
  },
  {
    id: "euler",
    name: "Leonhard Euler",
    years: "1707–1783",
    icon: "eⁱᵖ+1=0",
    spineColor: "#4A3728",
    spineAccent: "#C0C0C0",
    vibeCheck:
      "The GOAT of mathematics. No cap. This man published more papers than any mathematician in history — over 800. Went blind in one eye, then the other, and STILL kept publishing because he could do entire calculations in his head. Euler basically invented or contributed to every branch of math that exists. Graph theory? Euler. The number e? Named after him. That beautiful equation e^(iπ)+1=0? That's his flex. He had 13 kids and reportedly did math while holding a baby. Multitasking legend.",
    mathContributions: [
      "Euler's identity: e^(iπ) + 1 = 0 — the most beautiful equation in mathematics, connecting five fundamental constants",
      "Founded graph theory with the Königsberg Bridge Problem — literally invented a new branch of mathematics",
      "Introduced modern mathematical notation: f(x), e, i, π, Σ — we literally write math the way Euler taught us",
      "Euler's formula for polyhedra: V - E + F = 2 — fundamental to topology",
      "Solved the Basel problem: proved Σ(1/n²) = π²/6 — made him famous at age 28",
    ],
    physicsContributions: [
      "Euler-Bernoulli beam theory — still used by every structural engineer on the planet",
      "Euler equations of fluid dynamics — foundation of aerodynamics and weather modeling",
      "Contributed to celestial mechanics — helped calculate planetary orbits and lunar motion",
      "Rigid body dynamics — Euler angles describe the orientation of any object in 3D space",
    ],
    funFacts: [
      "Published an average of 800 pages of mathematics PER YEAR. The man was a content machine",
      "Went completely blind in 1766 but his mathematical output actually INCREASED after that",
      "Had 13 children. Supposedly said some of his greatest discoveries were made while holding a baby on his lap",
      "Could recite the entire Aeneid from memory, specifying which line was on which page of his copy",
      "When he died, the mathematician Condorcet said: 'He ceased to calculate and to live'",
    ],
    famousQuotes: [
      "Mathematicians have tried in vain to this day to discover some order in the sequence of prime numbers.",
      "Nothing takes place in the world whose meaning is not that of some maximum or minimum.",
      "For since the fabric of the universe is most perfect and the work of a most wise Creator, nothing at all takes place in the universe in which some rule of maximum or minimum does not appear.",
    ],
    timeline: [
      { year: "1707", event: "Born in Basel, Switzerland" },
      { year: "1735", event: "Solved the Basel Problem" },
      { year: "1736", event: "Solved Königsberg Bridge Problem" },
      { year: "1748", event: "Published Introductio in analysin infinitorum" },
      { year: "1783", event: "Died in St. Petersburg" },
    ],
  },
  {
    id: "gauss",
    name: "Carl Friedrich Gauss",
    years: "1777–1855",
    icon: "Σ1…100",
    spineColor: "#3B3B3B",
    spineAccent: "#FFD700",
    vibeCheck:
      "Called the 'Prince of Mathematics' and honestly? He earned it. At age 7, he summed all numbers from 1 to 100 in seconds while his teacher was still writing the problem. Child prodigy who became the greatest mathematician of his era. He was notoriously secretive — he'd discover things decades before anyone else but just... not publish them. Peak 'I knew that already' energy. His motto was 'Few, but ripe' (pauca sed matura). Quality over quantity king.",
    mathContributions: [
      "Fundamental Theorem of Algebra — proved every polynomial has a complex root. Foundational flex",
      "Gaussian distribution (bell curve) — literally the basis of statistics, data science, and machine learning",
      "Modular arithmetic and number theory — Disquisitiones Arithmeticae is still a masterpiece",
      "Gaussian elimination for solving linear systems — used in every linear algebra class ever",
      "Proved the constructibility of the regular 17-gon at age 18. EIGHTEEN.",
    ],
    physicsContributions: [
      "Gauss's Law — one of Maxwell's equations, describes how electric charges create electric fields",
      "Major contributions to geodesy and Earth's magnetic field measurement — literally mapped the planet's magnetism",
      "Invented the heliotrope for surveying — using sunlight reflections to measure vast distances",
      "Collaborated with Wilhelm Weber to build one of the first electromagnetic telegraphs in 1833",
    ],
    funFacts: [
      "Summed 1+2+3+...+100 = 5050 at age 7 by noticing pairs (1+100, 2+99, etc.). The teacher was SHOOK",
      "Was so secretive that many of his discoveries were only found after his death in his private notebooks",
      "His diary entry for March 30, 1796 just says 'ΕΥΡΗΚΑ! num = Δ + Δ + Δ' — he proved every integer is the sum of three triangular numbers",
      "Refused to publish work he considered 'incomplete' — which meant sitting on revolutionary ideas for decades",
      "His brain was preserved after death and studied — it had an unusually complex pattern of convolutions",
    ],
    famousQuotes: [
      "Mathematics is the queen of the sciences, and number theory is the queen of mathematics.",
      "It is not knowledge, but the act of learning; not possession but the act of getting there, which grants the greatest enjoyment.",
      "Few, but ripe.",
    ],
    timeline: [
      { year: "1777", event: "Born in Brunswick, Germany" },
      { year: "1796", event: "Proved 17-gon constructibility" },
      { year: "1801", event: "Published Disquisitiones Arithmeticae" },
      { year: "1833", event: "Built electromagnetic telegraph" },
      { year: "1855", event: "Died in Göttingen" },
    ],
  },
  {
    id: "maxwell",
    name: "James Clerk Maxwell",
    years: "1831–1879",
    icon: "∇×E",
    spineColor: "#1B3F5F",
    spineAccent: "#E8C872",
    vibeCheck:
      "The most underrated physicist in history. Einstein literally had Maxwell's photo on his wall and said his work was 'the most profound and the most fruitful that physics has experienced since the time of Newton.' Maxwell unified electricity, magnetism, and light into one elegant theory with four equations. FOUR. That's it. He predicted electromagnetic waves exist BEFORE anyone detected them. Also casually took the world's first color photograph. A true polymath who died way too young at 48.",
    mathContributions: [
      "Maxwell's equations — four elegant PDEs that unify all of electromagnetism. Beautiful math, beautiful physics",
      "Maxwell-Boltzmann distribution — statistical mechanics foundation for describing molecular speeds in gases",
      "Pioneered dimensional analysis — systematized how to check if physics equations even make sense",
      "Advanced the math of color theory — proved any color can be represented as a combination of three primaries",
    ],
    physicsContributions: [
      "Unified electricity and magnetism — showed they're the same force, predicted electromagnetic waves",
      "Proved light is an electromagnetic wave — collapsed optics into electromagnetism. Mind = blown",
      "Maxwell's demon thought experiment — challenged the second law of thermodynamics and birthed information theory",
      "Took the world's first color photograph (1861) — a tartan ribbon. Photography pioneer on the side",
    ],
    funFacts: [
      "Einstein kept a framed photo of Maxwell on his study wall. That's the ultimate respect",
      "Wrote his first scientific paper at age 14 — about drawing mathematical curves with a piece of string",
      "Created the first true color photograph ever taken — used three filters (red, green, blue)",
      "Died at 48 from stomach cancer — imagine what he could have done with another 30 years",
      "Was so shy and awkward as a student that classmates called him 'Dafty.' He had the last laugh",
    ],
    famousQuotes: [
      "The special theory of relativity owes its origins to Maxwell's equations of the electromagnetic field. — Einstein (about Maxwell)",
      "What is done by what is called myself is, I feel, done by something greater than myself in me.",
      "Thoroughly conscious ignorance is the prelude to every real advance in science.",
    ],
    timeline: [
      { year: "1831", event: "Born in Edinburgh, Scotland" },
      { year: "1855", event: "Published On Faraday's Lines of Force" },
      { year: "1861", event: "First color photograph" },
      { year: "1865", event: "Published electromagnetic theory" },
      { year: "1879", event: "Died in Cambridge" },
    ],
  },
  {
    id: "feynman",
    name: "Richard Feynman",
    years: "1918–1988",
    icon: "〰→●",
    spineColor: "#5C1A1A",
    spineAccent: "#D4A574",
    vibeCheck:
      "The coolest physicist to ever live. Bongo-playing, safe-cracking, Nobel Prize-winning absolute legend. Feynman made quantum mechanics visual with his diagrams, explained things so clearly that even normies could vibe with particle physics, and had enough charisma to fill a stadium. He was on the Challenger disaster investigation and dramatically dropped an O-ring in ice water on live TV to show why the shuttle exploded. Mic drop energy. Also learned to draw, studied biology for fun, and frequented strip clubs to do physics calculations. No cap.",
    mathContributions: [
      "Feynman diagrams — turned impossible quantum calculations into visual pictures. Revolutionary notation",
      "Path integral formulation of quantum mechanics — summing over all possible paths. Wild concept, elegant math",
      "Contributed to the development of quantum computing theory — envisioned quantum simulation decades early",
      "Feynman-Kac formula — connected quantum mechanics to stochastic processes. Stats meets physics",
    ],
    physicsContributions: [
      "Quantum Electrodynamics (QED) — most precisely tested theory in all of science. Nobel Prize 1965",
      "Parton model — predicted quarks inside protons before they were directly observed",
      "Superfluidity of liquid helium — explained why helium-4 flows without friction near absolute zero",
      "Challenger disaster investigation — proved the O-ring failure with a glass of ice water on live TV",
    ],
    funFacts: [
      "Learned to crack safes at Los Alamos during the Manhattan Project. Left notes in colleagues' safes saying 'guess who'",
      "Played bongo drums semi-professionally and performed at nightclubs",
      "His Caltech lectures ('The Feynman Lectures on Physics') are STILL the gold standard physics textbook",
      "Tried to learn to draw as an adult and actually became pretty good — traded physics lessons for art lessons",
      "His first wife Arline died of tuberculosis during the Manhattan Project. His letter to her, opened after his death, ended with 'P.S. Please excuse my not mailing this — but I don't know your new address' 😭",
    ],
    famousQuotes: [
      "I think I can safely say that nobody understands quantum mechanics.",
      "The first principle is that you must not fool yourself — and you are the easiest person to fool.",
      "What I cannot create, I do not understand.",
      "Physics is like sex: sure, it may give some practical results, but that's not why we do it.",
    ],
    timeline: [
      { year: "1918", event: "Born in New York City" },
      { year: "1942", event: "Joined Manhattan Project" },
      { year: "1948", event: "Developed Feynman diagrams" },
      { year: "1965", event: "Nobel Prize in Physics (QED)" },
      { year: "1988", event: "Died in Los Angeles" },
    ],
  },
  {
    id: "noether",
    name: "Emmy Noether",
    years: "1882–1935",
    icon: "S↔C",
    spineColor: "#4A2D5C",
    spineAccent: "#D4AF37",
    vibeCheck:
      "The queen of abstract algebra and honestly one of the most disrespected geniuses in history. Einstein called her 'the most significant creative mathematical genius thus far produced since the higher education of women began.' Universities wouldn't let her teach because she was a woman — she lectured under a male colleague's name FOR YEARS. But she didn't care about titles or recognition, she just wanted to do math. Noether's theorem connects symmetries to conservation laws and is literally the backbone of modern physics. She proved that beauty in math = truth in physics. Absolute icon.",
    mathContributions: [
      "Founded modern abstract algebra — rings, ideals, modules, the entire algebraic structure framework",
      "Noetherian rings — fundamental concept in commutative algebra. Named after her because she INVENTED the field",
      "Ascending chain condition — key property in ring theory that bears her name",
      "Transformed the study of algebraic topology and algebraic geometry with her abstract approach",
    ],
    physicsContributions: [
      "Noether's Theorem — every symmetry in physics corresponds to a conservation law. THE most important theorem in theoretical physics",
      "Time symmetry → conservation of energy. Spatial symmetry → conservation of momentum. Rotational symmetry → conservation of angular momentum. All from ONE theorem",
      "Her work underpins all of modern particle physics — the Standard Model literally depends on Noether's theorem",
      "Connected abstract mathematics to physical reality in the most profound way possible",
    ],
    funFacts: [
      "Wasn't allowed to officially teach at Göttingen — Hilbert listed her classes under his name for years",
      "Einstein wrote to her personally to praise her work and called her a genius in a letter to the New York Times",
      "Fled Nazi Germany in 1933 (she was Jewish) and went to Bryn Mawr College in the US",
      "Was described by colleagues as incredibly generous — would freely share ideas without caring about credit",
      "Died at 53 from complications after surgery. The math community lost one of its greatest minds way too early",
    ],
    famousQuotes: [
      "My methods are really methods of working and thinking; this is why they have crept in everywhere anonymously.",
      "If one proves the equality of two numbers a and b by showing first that a ≤ b and then that b ≤ a, it is unfair; one should instead show that they are really equal by disclosing the inner ground for their equality.",
    ],
    timeline: [
      { year: "1882", event: "Born in Erlangen, Germany" },
      { year: "1907", event: "Received PhD in mathematics" },
      { year: "1918", event: "Proved Noether's Theorem" },
      { year: "1933", event: "Fled to USA" },
      { year: "1935", event: "Died in Bryn Mawr, PA" },
    ],
  },
  {
    id: "archimedes",
    name: "Archimedes",
    years: "c. 287–212 BC",
    icon: "ΕΥΡΗΚΑ",
    spineColor: "#6B4423",
    spineAccent: "#CD853F",
    vibeCheck:
      "The OG scientist. Before there was a word for 'physicist' or 'mathematician,' this Sicilian was out here inventing both fields. Jumped out of a bathtub naked screaming 'EUREKA!' when he discovered buoyancy. Built war machines so terrifying that the Roman army couldn't take Syracuse for two years. Calculated pi to insane precision using 96-sided polygons. NINETY-SIX. BY HAND. When Roman soldiers finally broke through, they found him drawing circles in the sand. His last words were reportedly 'Do not disturb my circles.' Absolute legend from 2,200 years ago who would absolutely destroy any modern physics exam.",
    mathContributions: [
      "Calculated π to extreme precision using the method of exhaustion with 96-gon inscribed/circumscribed circles",
      "Discovered the formula for the area and volume of a sphere — proved A=4πr² and V=(4/3)πr³",
      "Method of exhaustion — essentially proto-calculus, 2000 years before Newton and Leibniz",
      "The Sand Reckoner — developed a system for expressing absurdly large numbers, estimated grains of sand to fill the universe",
      "Archimedean spiral — still used in engineering and design today",
    ],
    physicsContributions: [
      "Archimedes' Principle — any object submerged in fluid experiences upward force equal to weight of displaced fluid. The EUREKA moment",
      "Law of the Lever — 'Give me a place to stand and I shall move the Earth.' Founded statics",
      "Invented the Archimedes screw — still used TODAY for pumping water. 2200-year-old engineering that slaps",
      "Built devastating war machines for Syracuse — giant cranes (The Claw) that grabbed Roman ships and heat ray mirrors (maybe)",
    ],
    funFacts: [
      "Ran through the streets of Syracuse NAKED screaming 'EUREKA!' after discovering buoyancy in his bathtub",
      "His war machines held off the entire Roman army for 2 years during the Siege of Syracuse",
      "Legend says he used mirrors to focus sunlight and set Roman ships on fire — the original death ray",
      "When killed by a Roman soldier, his alleged last words were 'Do not disturb my circles' — he was doing geometry",
      "His tomb was marked with a sphere inscribed in a cylinder — his proudest mathematical discovery",
    ],
    famousQuotes: [
      "Eureka! (I have found it!)",
      "Give me a place to stand and I shall move the Earth.",
      "Do not disturb my circles.",
    ],
    timeline: [
      { year: "287 BC", event: "Born in Syracuse, Sicily" },
      { year: "260 BC", event: "Discovery of buoyancy principle" },
      { year: "215 BC", event: "Defended Syracuse with war machines" },
      { year: "212 BC", event: "Killed during Roman siege" },
    ],
  },
];
