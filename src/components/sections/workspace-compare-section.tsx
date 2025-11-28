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

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
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
                className={clsx(cardBaseStyles, cardSurface)}
              >
              <div className="absolute inset-px rounded-[26px] border border-white/10 opacity-50 blur-3xl" />
              <div
                className={clsx(
                  "relative flex h-full flex-col gap-8",
                  headingColor
                )}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={clsx(
                        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em]",
                        badgeColor
                      )}
                    >
                      {plan.badge}
                    </span>
                    <span
                      className={clsx(
                        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                        plan.variant === "enterprise" ? tagColor : secondaryTagColor
                      )}
                    >
                      {plan.variant === "enterprise" ? "Premium" : "Popular"}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    {plan.title}
                  </h3>
                  <p className={clsx("mt-2 text-sm", subheadingColor)}>
                    {plan.tagline}
                  </p>
                </div>

                <ul className="space-y-4 text-sm">
                  {plan.points.map((point) => (
                    <li
                      key={point.highlight}
                      className={clsx(
                        "flex items-start gap-3 rounded-2xl p-3",
                        bulletSurface
                      )}
                    >
                      <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#EA4335] shadow-[0_0_12px_rgba(66,133,244,0.5)]" />
                      <p
                        className={clsx(
                          "text-sm leading-relaxed",
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

                <div className="mt-auto flex flex-col gap-3 pt-2">
                  {plan.footnote ? (
                    <p className={clsx("text-xs", footnoteColor)}>
                      {plan.footnote}
                    </p>
                  ) : null}
                  <Link
                    href={plan.ctaHref}
                    className={clsx(
                      "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
                      ctaClass
                    )}
                  >
                    {plan.ctaLabel}
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
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


