"use client";

import { useEffect, useRef } from "react";

export function HeroDotsCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 13;
    const RADIUS = 1;
    let animId: number;

    type Dot = { x: number; y: number; freq: number; phase: number };
    let dots: Dot[] = [];

    const buildDots = () => {
      dots = [];
      for (let x = SPACING / 2; x < canvas.width; x += SPACING) {
        for (let y = SPACING / 2; y < canvas.height; y += SPACING) {
          dots.push({
            x,
            y,
            freq: 0.15 + Math.random() * 0.45,
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
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.scale(dpr, dpr);
      buildDots();
    };

    resize();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const start = performance.now();

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      const dpr = window.devicePixelRatio ?? 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      for (const dot of dots) {
        const wave = (Math.sin(t * dot.freq * Math.PI * 2 + dot.phase) + 1) / 2;
        const opacity = 0.045 + wave * 0.13;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(24,24,27,${opacity.toFixed(3)})`;
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
