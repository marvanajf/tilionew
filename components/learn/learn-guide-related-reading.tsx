import Link from "next/link";

import { learnArticles, type LearnArticle } from "@/lib/learn-articles";
import { learnIndexRoute } from "@/lib/routes";

const linkClass = "text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline";

type LearnGuideRelatedReadingProps = {
  /** Current guide path, e.g. `/learn/how-tracked-prompts-work` */
  currentHref: string;
};

/** Lists every other published Learn guide plus Back to Learn. */
export function LearnGuideRelatedReading({ currentHref }: LearnGuideRelatedReadingProps) {
  const others = learnArticles.filter((a): a is LearnArticle & { href: string } => a.href !== null && a.href !== currentHref);

  return (
    <div className="mt-12 border-t border-zinc-200 pt-8">
      <p className="text-sm font-semibold text-zinc-900">Related reading</p>
      <ul className="mt-4 space-y-3">
        {others.map((a) => (
          <li key={a.href}>
            <Link href={a.href} className={linkClass}>
              {a.title}
            </Link>
          </li>
        ))}
        <li>
          <Link href={learnIndexRoute} className={linkClass}>
            Back to Learn
          </Link>
        </li>
      </ul>
    </div>
  );
}
