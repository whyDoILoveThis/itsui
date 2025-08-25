export const CodeSnipFoobar = `
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ParticleDesc = {
  id: string;
  x: number;
  y: number;
  angle: number;
  dist: number;
  color: string;
  size: number;
  dur: number;
  delay: number;
};

type Burst = {
  id: string;
  x: number;
  y: number;
  seed: number;
  createdAt: number;
  particles: ParticleDesc[];
};

const COLORS = [
  "#ff6b6b",
  "#ffb86b",
  "#ffd56b",
  "#7cf0b1",
  "#4cc9f0",
  "#9b7bff",
  "#ff7bd6",
  "#ffd166",
];

const PARTICLE_COUNT = 22;

function rand(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function buildParticlesAt(x: number, y: number, seed = 0): ParticleDesc[] {
  return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
    const angle =
      (Math.PI * 2 * (i + seed * 7)) / PARTICLE_COUNT +
      (Math.random() - 0.5) * 0.6;
    const dist = 60 + Math.random() * 260; // larger distances -> visible outside container
    const color = COLORS[(i + seed) % COLORS.length];
    const size = 6 + Math.random() * 18;
    const dur = 0.6 + Math.random() * 1.1;
    const delay = Math.random() * 0.06;
    return {
      id: \`\${seed}-\${i}-\${Date.now()}\`,
      x,
      y,
      angle,
      dist,
      color,
      size,
      dur,
      delay,
    };
  });
}

export default function ItsFooBarCrazyCursorWithText() {
  const [running, setRunning] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const timeoutRef = useRef<number | null>(null);
  const burstCounter = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const startShowAt = (pageX: number, pageY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    const x = rect ? pageX - rect.left : pageX;
    const y = rect ? pageY - rect.top : pageY;

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setRunning(true);
    burstCounter.current += 1;
    spawnBurst(x, y, burstCounter.current);

    timeoutRef.current = window.setTimeout(() => {
      setRunning(false);
      setBursts([]);
      timeoutRef.current = null;
    }, 10000);
  };

  const spawnBurst = (x: number, y: number, seed = 0) => {
    const particles = buildParticlesAt(x, y, seed);
    const id = \`burst-\${seed}-\${Date.now()}\`;
    const burst: Burst = { id, x, y, seed, createdAt: Date.now(), particles };
    setBursts((prev) => [...prev, burst]);

    const maxDur = Math.max(...particles.map((p) => p.dur + p.delay));
    window.setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, (maxDur + 0.15) * 1000);
  };

  const onContainerClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-ignore-click]")) return;

    if (running) {
      const rect = containerRef.current?.getBoundingClientRect();
      const x = rect ? e.clientX - rect.left : e.clientX;
      const y = rect ? e.clientY - rect.top : e.clientY;
      burstCounter.current += 1;
      spawnBurst(x, y, burstCounter.current);
    }
  };

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const pageX = e.pageX;
    const pageY = e.pageY;
    startShowAt(pageX, pageY);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64"
      style={{ overflow: "visible", pointerEvents: "auto" }}
      onClick={onContainerClick}
    >
      {/* wrapper that shakes when running */}
      <motion.div
        animate={
          running
            ? { x: [0, -10, 10, -6, 6, -3, 3, 0], y: [0, -5, 5, -3, 3, 0] }
            : { x: 0, y: 0 }
        }
        transition={
          running
            ? { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.25 }
        }
        className="relative w-full h-full flex items-center justify-center"
        style={{ pointerEvents: "none" }}
      >
        {/* interactive button (pointer enabled) */}
        <div style={{ pointerEvents: "auto", zIndex: 80 }}>
          <button
            data-ignore-click
            onClick={onButtonClick}
            className="px-6 py-3 rounded-xl text-white text-lg font-bold shadow-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transform transition"
          >
            fooby boo bar
          </button>
        </div>

        {/* Dancing / shaking text (centered, above bursts) */}
        <AnimatePresence>
          {running && (
            <motion.div
              key="fooby-text"
              initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
              animate={{
                opacity: 1,
                scale: [1, 1.6, 1.2, 1.8, 1.05],
                rotate: [0, 8, -8, 18, 0],
                x: [0, -50, 50, -120, 90, 0],
                y: [0, -20, 20, -60, 40, 0],
              }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="absolute z-70 pointer-events-none select-none text-4xl font-extrabold tracking-tight"
              style={{
                WebkitTextStroke: "1px rgba(0,0,0,0.12)",
                background:
                  "linear-gradient(90deg,#FFD700,#FF6B6B,#9B7BFF,#4CC9F0)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "0 8px 30px rgba(0,0,0,0.25)",
                padding: "6px 12px",
                transformOrigin: "center",
              }}
            >
              💥 FOOBY BOOBY DOO DOO BAR! 💥
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Bursts overlay (absolute) */}
      <div
        aria-hidden
        className="absolute inset-0 z-60 pointer-events-none"
        style={{ overflow: "visible" }}
      >
        <AnimatePresence>
          {bursts.map((burst) =>
            burst.particles.map((p) => {
              const tx = Math.cos(p.angle) * p.dist;
              const ty = Math.sin(p.angle) * p.dist;
              const startLeft = p.x;
              const startTop = p.y;
              const targetLeft = p.x + tx;
              const targetTop = p.y + ty;

              return (
                <motion.div
                  key={p.id}
                  initial={{
                    left: startLeft,
                    top: startTop,
                    opacity: 1,
                    scale: 0.2,
                    rotate: 0,
                  }}
                  animate={{
                    left: targetLeft,
                    top: targetTop,
                    opacity: [1, 0.9, 0.6, 0],
                    scale: [0.2, 1, 0.8, 0.1],
                    rotate: [0, 90, 180],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: p.delay,
                    duration: p.dur,
                    ease: "circOut",
                  }}
                  style={{
                    position: "absolute",
                    width: p.size,
                    height: p.size,
                    borderRadius: 9999,
                    background: p.color,
                    boxShadow: \`0 8px 30px \${p.color}66, 0 2px 6px \${p.color}88\`,
                    pointerEvents: "none",
                    translate: "-50% -50%",
                  }}
                />
              );
            })
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

`