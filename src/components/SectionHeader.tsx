type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";
  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graysBlue">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold text-graysDark">{title}</h2>
      {description && <p className="max-w-2xl text-base text-slate-600">{description}</p>}
    </div>
  );
}
