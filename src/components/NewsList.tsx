import { Link } from "react-router-dom";
import type { NewsItem } from "../types";

type NewsListProps = {
  items: NewsItem[];
  limit?: number;
};

function formatDate(value: string) {
  const date = new Date(value);
  return isNaN(date.getTime())
    ? value
    : date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function NewsList({ items, limit }: NewsListProps) {
  const sorted = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const list = limit ? sorted.slice(0, limit) : sorted;

  return (
    <div className="grid gap-4">
      {list.map((article) => (
        <article
          key={article.slug}
          className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graysBlue">
            {formatDate(article.date)}
          </p>
          <h3 className="mt-2 font-heading text-xl font-bold text-graysDark">{article.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{article.summary}</p>
          <Link
            to={`/news/${article.slug}`}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-graysBlue underline-offset-4 hover:underline"
          >
            Read more →
          </Link>
        </article>
      ))}
    </div>
  );
}
