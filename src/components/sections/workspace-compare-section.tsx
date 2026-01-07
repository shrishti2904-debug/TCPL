import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { SectionHeading } from "@/components/ui/section-heading";
import { workspaceCompare } from "@/data/site-content";

const cardBaseStyles =
  "relative overflow-hidden rounded-[28px] border p-8 shadow-2xl transition duration-500";

export function WorkspaceCompareSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(66,133,244,0.18),_transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          title={workspaceCompare.title}
          description={workspaceCompare.description}
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {workspaceCompare.plans.map((plan) => {
            const isEnterprise = plan.variant === "enterprise";
            const cardSurface = isEnterprise
              ? "border-white/20 bg-gradient-to-br from-[#0f172a] via-[#111936] to-[#1f2745]"
              : "border-[#e5e7eb] bg-gradient-to-br from-[#f9fbff] via-[#f4f7ff] to-[#eef2ff]";
            const headingColor = isEnterprise ? "text-white" : "text-[#0f172a]";
            const subheadingColor = isEnterprise ? "text-white/70" : "text-[#4b5563]";
            const badgeColor = isEnterprise
              ? "border-white/30 text-white/70"
              : "border-[#d9e4ff] text-[#5f6b7b]";
            const tagColor = isEnterprise
              ? "bg-white/10 text-white"
              : "bg-[#dff5ea] text-[#0f8c5f]";
            const secondaryTagColor = isEnterprise
              ? "bg-white/10 text-white"
              : "bg-[#e9edff] text-[#0f4ad7]";
            const bulletSurface = isEnterprise
              ? "bg-white/[0.05]"
              : "bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]";
            const highlightColor = isEnterprise ? "text-white" : "text-[#0f172a]";
            const detailColor = isEnterprise ? "text-white/65" : "text-[#4b5563]";
            const footnoteColor = isEnterprise ? "text-white/50" : "text-[#6b7280]";
            const ctaClass = isEnterprise
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-[#0f172a] text-white hover:bg-[#101c3d]";

            return (
              <article
                key={plan.id}
                className={clsx(cardBaseStyles, cardSurface, "flex flex-col")}
              >
                <div className="absolute inset-px rounded-[26px] border border-white/10 opacity-50 blur-3xl" />
                <div
                  className={clsx(
                    "relative flex h-full flex-col gap-6",
                    headingColor
                  )}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={clsx(
                          "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                          badgeColor
                        )}
                      >
                        {plan.badge}
                      </span>
                      {plan.id === "business-standard" && (
                        <span className="inline-flex items-center rounded-full bg-[#dff5ea] px-2 py-0.5 text-[10px] font-bold text-[#0f8c5f]">
                          POPULAR
                        </span>
                      )}
                      {isEnterprise && (
                        <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white">
                          PREMIUM
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-xl font-bold tracking-tight">
                      {plan.title}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl font-bold tracking-tight">
                        {plan.price}
                      </span>
                      <span className={clsx("text-xs font-medium", subheadingColor)}>
                        {plan.pricePeriod}
                      </span>
                    </div>
                    <p className={clsx("mt-2 text-xs leading-relaxed", subheadingColor)}>
                      {plan.tagline}
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm">
                    {plan.points.map((point) => (
                      <li
                        key={point.highlight}
                        className={clsx(
                          "flex items-start gap-2 rounded-xl p-2.5",
                          bulletSurface
                        )}
                      >
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#EA4335]" />
                        <p
                          className={clsx(
                            "text-xs leading-snug",
                            isEnterprise ? "text-white/85" : "text-[#1f2937]"
                          )}
                        >
                          <span className={clsx("font-semibold", highlightColor)}>
                            {point.highlight}
                          </span>
                          {point.description ? (
                            <>
                              {" "}
                              <span className={detailColor}>
                                {point.description}
                              </span>
                            </>
                          ) : null}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-3 pt-4">
                    {plan.footnote ? (
                      <p className={clsx("text-[10px] leading-tight", footnoteColor)}>
                        {plan.footnote}
                      </p>
                    ) : null}
                    <Link
                      href={plan.ctaHref}
                      className={clsx(
                        "group inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition",
                        ctaClass
                      )}
                    >
                      {plan.ctaLabel}
                      <ArrowUpRight
                        size={14}
                        className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


