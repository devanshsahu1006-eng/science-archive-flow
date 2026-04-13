import { motion } from "framer-motion";

interface TimelineProps {
  events: { year: string; event: string }[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="overflow-x-auto timeline-scroll pb-4">
      <div className="flex items-center gap-0 min-w-max relative">
        {/* Connecting line */}
        <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-leather/40 via-gold/50 to-leather/40" />

        {events.map((event, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-2 px-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Dot */}
            <div className="w-3 h-3 rounded-full bg-gold border-2 border-paper shadow-sm z-10" />
            {/* Year */}
            <span className="font-display text-xs text-gold whitespace-nowrap">{event.year}</span>
            {/* Event */}
            <span className="text-xs text-ink-light text-center max-w-[120px] leading-tight">
              {event.event}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
