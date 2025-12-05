import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { news } from "../data/news";

export default function NewsDetail() {
  const { slug } = useParams();
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-4xl space-y-6 px-4 pb-12">
        <PageHeader
          badge="News"
          title="Article not found"
          description="We couldn't find that story. Please return to the news index."
        />
        <Link
          to="/news"
          className="inline-flex rounded-full bg-graysBlue px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-graysDark"
        >
          Back to news
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 pb-12">
      <PageHeader badge="News" title={article.title} description={article.summary} />
      <p className="text-sm text-slate-600">
        {new Date(article.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
        <div className="prose max-w-none text-slate-700">
          {article.content
            .trim()
            .split("\n")
            .map((paragraph) => (
              <p key={paragraph} className="mb-3">
                {paragraph.trim()}
              </p>
            ))}
        </div>
      </div>
      <Link
        to="/news"
        className="inline-flex rounded-full bg-graysBlue px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-graysDark"
      >
        Back to news
      </Link>
    </div>
  );
}
