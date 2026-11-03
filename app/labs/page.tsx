import type { Metadata } from "next";
import { ExternalLink, FlaskConical } from "lucide-react";
import { PageHeader, NextLink } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/section";
import { Tag } from "@/components/ui/button";
import { labCategories, labEntries, labPlatforms } from "@/data/labs";

export const metadata: Metadata = {
  title: "Labs & Learning",
  description:
    "Practical security practice by Raheem Quham Folahan — TryHackMe rooms and PortSwigger Web Security Academy labs, documented as they are completed.",
  alternates: { canonical: "/labs" },
};

export default function LabsPage() {
  return (
    <>
      <PageHeader
        label="Labs & learning"
        title="Practical work, documented as it is completed"
        intro="Structured practice in TryHackMe and PortSwigger Web Security Academy. Completed labs are added here with the vulnerability class, objective and tools used — nothing is listed before it has been done."
      />

      <section className="container-page py-16 sm:py-20">
        <h2 className="label-mono">Platforms</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {labPlatforms.map((platform, i) => (
            <Reveal key={platform.name} delay={i * 60}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-surface/50 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[1.0625rem] font-semibold text-ink">{platform.name}</h3>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${platform.name} (opens in a new tab)`}
                    className="grid size-9 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-cyan/50 hover:text-ink"
                  >
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
                <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-muted">
                  {platform.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {platform.focus.map((f) => (
                    <Tag key={f}>{f}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line/70 bg-surface/30 py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="label-mono">Completed labs</h2>
              <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
                This log fills in as labs are finished. Each entry records the vulnerability
                class, the learning objective, the tools used and a short technical explanation.
              </p>
            </div>
            <p className="font-mono text-[0.75rem] text-muted">
              {labEntries.length} documented
            </p>
          </div>

          {labEntries.length === 0 ? (
            <div className="mt-8 rounded-xl border border-dashed border-line bg-base/40 p-8 text-center sm:p-12">
              <span className="mx-auto grid size-11 place-items-center rounded-lg border border-line bg-elevated/60">
                <FlaskConical className="size-5 text-cyan" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-[0.9375rem] font-semibold text-ink">
                Lab write-ups are in progress
              </h3>
              <p className="mx-auto mt-2 max-w-md text-[0.875rem] leading-relaxed text-muted">
                Practice is ongoing across both platforms. Rather than list rooms that have not
                been completed, this log stays empty until there is real work to show.
              </p>
              <p className="mx-auto mt-4 max-w-md font-mono text-[0.6875rem] leading-relaxed text-muted/70">
                Structure is ready for: lab name · vulnerability category · objective · tools ·
                status · write-up link
              </p>
            </div>
          ) : (
            <ul className="mt-8 space-y-3">
              {labEntries.map((lab) => (
                <li
                  key={`${lab.platform}-${lab.name}`}
                  className="rounded-xl border border-line bg-base/60 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-[0.9375rem] font-medium text-ink">{lab.name}</h3>
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ok">
                      {lab.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted">
                    {lab.platform} · {lab.category}
                  </p>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
                    {lab.objective}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {lab.tools.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8">
            <h3 className="label-mono">Categories tracked</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {labCategories.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-md text-[0.9375rem] leading-relaxed text-muted">
            Lab practice exists to support the assessment work — see how it applies in the
            project case studies.
          </p>
          <NextLink href="/projects">Projects</NextLink>
        </div>
      </section>
    </>
  );
}
