"use client";

import { useEffect, useRef } from "react";

const SPACING = 13;
const RADIUS = 1.2;
const OPACITY_BUCKETS = 16;

export function HeroDotsCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;

    type Dot = { x: number; y: number; freq: number; phase: number };
    let dots: Dot[] = [];
    let cssW = 0;
    let cssH = 0;

    const buildDots = () => {
      dots = [];
      for (let x = SPACING / 2; x < cssW; x += SPACING) {
        for (let y = SPACING / 2; y < cssH; y += SPACING) {
          dots.push({
            x,
            y,
            freq: 0.18 + Math.random() * 0.52,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio ?? 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!w || !h) return;
      cssW = w;
      cssH = h;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildDots();
    };

    resize();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const start = performance.now();
    const TWO_PI = Math.PI * 2;

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, cssW, cssH);

      // Batch dots by quantized opacity to minimize fillStyle changes
      const buckets: Dot[][] = Array.from({ length: OPACITY_BUCKETS }, () => []);
      for (const dot of dots) {
        const wave = (Math.sin(t * dot.freq * TWO_PI + dot.phase) + 1) * 0.5;
        const bucket = (wave * (OPACITY_BUCKETS - 1) + 0.5) | 0;
        buckets[bucket].push(dot);
      }

      for (let b = 0; b < OPACITY_BUCKETS; b++) {
        const group = buckets[b];
        if (group.length === 0) continue;
        const opacity = 0.058 + (b / (OPACITY_BUCKETS - 1)) * 0.168;
        ctx.fillStyle = `rgba(24,24,27,${opacity.toFixed(3)})`;
        ctx.beginPath();
        for (const dot of group) {
          ctx.moveTo(dot.x + RADIUS, dot.y);
          ctx.arc(dot.x, dot.y, RADIUS, 0, TWO_PI);
        }
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} style={{ display: "block" }} />;
}
