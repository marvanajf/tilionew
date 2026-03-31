"use client";

import { useEffect, useState } from "react";

// e_trim removes transparent/white padding from the PNG canvas before delivery
// so the rendered height maps directly to the actual logo artwork, not the padded canvas
const LOGOS = [
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
  {
    src: "https://res.cloudinary.com/ddsqkll4f/image/upload/e_trim/v1774989097/GOOGLE_AI_cjdfts.png",
    alt: "Google AI Overviews",
    height: 36,
  },
] as const;

const SHOW_MS = 2400;
const FADE_MS = 350;

export function LogoCycler() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % LOGOS.length);
        setVisible(true);
      }, FADE_MS);
    }, SHOW_MS + FADE_MS);

    return () => clearInterval(id);
  }, []);

  const logo = LOGOS[index];

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: `opacity ${FADE_MS}ms ease`,
          opacity: visible ? 1 : 0,
        }}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          style={{ height: logo.height, width: "auto", display: "block" }}
        />
      </div>
    </div>
  );
}
