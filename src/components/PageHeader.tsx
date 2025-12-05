type PageHeaderProps = {
  title: string;
  description?: string;
  badge?: string;
};

export default function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-graysBlue to-graysRed px-6 py-8 text-white shadow-lg">
      {badge && (
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
          {badge}
        </span>
      )}
      <h1 className="mt-2 font-heading text-3xl font-black md:text-4xl">{title}</h1>
      {description && <p className="mt-3 text-base md:text-lg">{description}</p>}
    </div>
  );
}
