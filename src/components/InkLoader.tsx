import { motion } from "framer-motion";

const InkLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "hsl(var(--paper))" }}>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="font-display text-3xl sm:text-5xl text-ink tracking-wider">
          THE SCIENCE ARCHIVE
        </h1>
        <motion.p
          className="font-handwritten text-lg sm:text-xl text-ink-light mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          — math × physics edition, vol. I —
        </motion.p>
        <motion.div
          className="mt-6 mx-auto h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default InkLoader;
