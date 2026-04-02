"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// e_trim removes transparent/white padding from the PNG canvas before delivery
// so the rendered height maps directly to the actual logo artwork, not the padded canvas
const LOGOS = [
  {
    src: "https://res.cloudinary.com/ddsqkll4f/image/upload/e_trim/v1774989097/GOOGLE_AI_cjdfts.png",
    alt: "Google AI Overviews",
    height: 36,
  },
  {
    src: "https://res.cloudinary.com/ddsqkll4f/image/upload/e_trim/v1774989205/chatpt_logo_y964up.png",
    alt: "ChatGPT",
    height: 36,
  },
  {
    src: "https://res.cloudinary.com/ddsqkll4f/image/upload/e_trim/v1774989154/ChatGPT_Image_Mar_31_2026_09_32_00_PM_nrwlld.png",
    alt: "Perplexity",
    height: 36,
  },
] as const;

const SHOW_MS = 2400;
const FADE_MS = 350;

export function LogoCycler() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"visible" | "fading">("visible");
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const scheduleNext = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setPhase("fading");
      timerRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % LOGOS.length);
        setPhase("visible");
        scheduleNext();
      }, FADE_MS);
    }, SHOW_MS);
  }, []);

  useEffect(() => {
    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scheduleNext]);

  const logo = LOGOS[index];

  return (
    <>
      {/* Preload logos via <link> to avoid Safari decode stutter without DOM overlap */}
      {LOGOS.map((l) => (
        <link key={l.src} rel="preload" as="image" href={l.src} />
      ))}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          overflow: "hidden",
        }}
      >
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          width={0}
          height={logo.height}
          style={{
            height: logo.height,
            width: "auto",
            display: "block",
            transition: `opacity ${FADE_MS}ms ease`,
            opacity: phase === "visible" ? 1 : 0,
            willChange: "opacity",
          }}
        />
      </div>
    </>
  );
}
