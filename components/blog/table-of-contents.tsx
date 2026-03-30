"use client";

import { useEffect, useRef, useState } from "react";

import type { TocEntry } from "@/lib/toc";

type TocProps = {
  entries: TocEntry[];
  postUrl: string;
};

export function TableOfContents({ entries, postUrl }: TocProps) {
  const [activeId, setActiveId] = useState<string>("");
  const indicatorRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (entries.length === 0) return;

    const observer = new IntersectionObserver(
      (observations) => {
        const visible = observations.filter((o) => o.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    entries.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [entries]);

  useEffect(() => {
    if (!indicatorRef.current || !listRef.current || !activeId) return;
    const activeLink = listRef.current.querySelector(`a[href="#${activeId}"]`);
    if (!activeLink) return;
    const li = activeLink.closest("li") as HTMLElement | null;
    if (!li) return;
    const listTop = listRef.current.getBoundingClientRect().top;
    const liTop = li.getBoundingClientRect().top;
    const liHeight = li.getBoundingClientRect().height;
    const offset = liTop - listTop + listRef.current.scrollTop;
    // Extend indicator 4px above and below the list item for a bolder feel
    indicatorRef.current.style.transform = `translateY(${offset - 4}px)`;
    indicatorRef.current.style.height = `${liHeight + 8}px`;
    indicatorRef.current.style.opacity = "1";
  }, [activeId]);

  const chatGptUrl = `https://chatgpt.com/?prompt=Read%20from%20${encodeURIComponent(postUrl)}%20so%20I%20can%20ask%20questions%20about%20it&hints=search`;
  const claudeUrl = `https://claude.ai/new?q=Read%20from%20${encodeURIComponent(postUrl)}%20so%20I%20can%20ask%20questions%20about%20it`;

  if (entries.length === 0) return null;

  return (
    <aside
      className="sticky h-max"
      style={{ top: "calc(var(--site-header-height, 4rem) + 3rem)" }}
    >
      <div className="relative border-l border-zinc-200 pl-4 pr-2">
        <div
          ref={indicatorRef}
          aria-hidden="true"
          className="absolute -left-[1.5px] top-0 w-[2px] rounded-full bg-zinc-900 transition-[transform,height,opacity] duration-300 ease-out"
          style={{ height: "24px", opacity: 0, transform: "translateY(0px)" }}
        />
        <ul ref={listRef} className="flex flex-col gap-3">
          {entries.map((entry) => (
            <li key={entry.id} style={{ paddingLeft: entry.level === 3 ? "12px" : "0px" }}>
              <a
                href={`#${entry.id}`}
                className={`block text-sm transition-colors duration-200 hover:text-zinc-900 ${
                  activeId === entry.id ? "text-zinc-900 font-medium" : "text-zinc-500"
                }`}
              >
                {entry.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Explore with AI</span>
          <div className="flex flex-col gap-3">
            <a
              href={chatGptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              <span>Open in ChatGPT</span>
              <ArrowUpRight />
            </a>
            <a
              href={claudeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              <span>Open in Claude</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function TocMobile({ entries }: { entries: TocEntry[] }) {
  if (entries.length === 0) return null;
  return (
    <div className="mb-8">
      <details className="group overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50">
        <summary className="flex cursor-pointer list-none select-none items-center gap-2 px-4 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100 [&::-webkit-details-marker]:hidden">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden>
            <path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
          </svg>
          <span>In this post</span>
        </summary>
        <nav className="border-t border-zinc-200 px-4 py-3">
          <ul className="flex flex-col gap-2">
            {entries.map((entry) => (
              <li key={entry.id} style={{ paddingLeft: entry.level === 3 ? "12px" : "0px" }}>
                <a
                  href={`#${entry.id}`}
                  className="block py-0.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  {entry.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </details>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 opacity-50" aria-hidden>
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  );
}
