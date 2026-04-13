import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Cell {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: number;
  dividing: boolean;
  opacity: number;
  generation: number;
}

const CellCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellsRef = useRef<Cell[]>([]);
  const animRef = useRef<number>(0);
  const nextId = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Start with a single cell
    cellsRef.current = [
      { id: nextId.current++, x: cx, y: cy, size: 30, hue: 45, dividing: false, opacity: 1, generation: 0 },
    ];

    const startTime = Date.now();

    const divide = (cell: Cell) => {
      if (cellsRef.current.length > 80) return;
      const angle = Math.random() * Math.PI * 2;
      const dist = cell.size * 0.6;
      const newSize = cell.size * 0.78;
      const gen = cell.generation + 1;
      cell.size = newSize;
      cell.x -= Math.cos(angle) * dist * 0.5;
      cell.y -= Math.sin(angle) * dist * 0.5;
      cell.generation = gen;
      cell.hue = (cell.hue + 15 + Math.random() * 10) % 360;

      cellsRef.current.push({
        id: nextId.current++,
        x: cell.x + Math.cos(angle) * dist,
        y: cell.y + Math.sin(angle) * dist,
        size: newSize,
        hue: (cell.hue + 20 + Math.random() * 20) % 360,
        dividing: false,
        opacity: 0.3,
        generation: gen,
      });
    };

    let lastDivide = Date.now();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = Date.now() - startTime;

      // Trigger divisions periodically
      if (Date.now() - lastDivide > 300 && cellsRef.current.length < 80 && elapsed < 4000) {
        const candidates = cellsRef.current.filter(c => !c.dividing && c.size > 6);
        if (candidates.length > 0) {
          const pick = candidates[Math.floor(Math.random() * candidates.length)];
          divide(pick);
          lastDivide = Date.now();
        }
      }

      // Draw cells
      for (const cell of cellsRef.current) {
        cell.opacity = Math.min(1, cell.opacity + 0.03);

        // Gentle floating
        cell.x += Math.sin(Date.now() * 0.001 + cell.id) * 0.3;
        cell.y += Math.cos(Date.now() * 0.0012 + cell.id * 1.3) * 0.3;

        // Cell membrane
        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.size, 0, Math.PI * 2);
        const alpha = cell.opacity * 0.35;
        ctx.fillStyle = `hsla(${cell.hue}, 40%, 65%, ${alpha})`;
        ctx.fill();
        ctx.strokeStyle = `hsla(${cell.hue}, 50%, 55%, ${cell.opacity * 0.6})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Nucleus
        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.size * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${cell.hue + 30}, 45%, 50%, ${cell.opacity * 0.5})`;
        ctx.fill();
      }

      // Draw connections between nearby cells
      const cells = cellsRef.current;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < cells.length; i++) {
        for (let j = i + 1; j < cells.length; j++) {
          const dx = cells[i].x - cells[j].x;
          const dy = cells[i].y - cells[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = (cells[i].size + cells[j].size) * 2.5;
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(cells[i].x, cells[i].y);
            ctx.lineTo(cells[j].x, cells[j].y);
            ctx.strokeStyle = `hsla(45, 50%, 60%, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

const InkLoader = () => {
  const [phase, setPhase] = useState<"cells" | "title">("cells");

  useEffect(() => {
    // Show cells for ~3.5s then transition to title
    const t = setTimeout(() => setPhase("title"), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "hsl(var(--paper))" }}>
      <CellCanvas />

      <AnimatePresence mode="wait">
        {phase === "cells" && (
          <motion.div
            key="cells-text"
            className="relative z-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-handwritten text-lg sm:text-xl text-ink-light/70">
              — from one cell, all life begins —
            </p>
          </motion.div>
        )}

        {phase === "title" && (
          <motion.div
            key="title-text"
            className="relative z-10 text-center"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="font-display text-3xl sm:text-5xl text-ink tracking-wider">
              THE SCIENCE ARCHIVE
            </h1>
            <motion.p
              className="font-handwritten text-lg sm:text-xl text-ink-light mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              — math × physics edition, vol. I —
            </motion.p>
            <motion.div
              className="mt-6 mx-auto h-px bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InkLoader;
