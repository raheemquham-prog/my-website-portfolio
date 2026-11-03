import type { Metadata } from "next";
import { PageHeader, NextLink } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/section";
import { Tag } from "@/components/ui/button";
import { internships, statusLabel } from "@/data/experience";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Cybersecurity internship experience of Raheem Quham Folahan — web application penetration testing, application and API security, SOC analysis, and general cybersecurity programme work.",
  alternates: { canonical: "/experience" },
};

const statusTone: Record<string, string> = {
  ongoing: "border-cyan/40 text-cyan",
  upcoming: "border-line text-muted",
  completed: "border-ok/40 text-ok",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        label="Experience"
        title="Internships in application security, testing and defence"
        intro="Ordered by relevance to web application security — assessment and API testing work first, broader cybersecurity programme work after. Statuses are current as of November 2026."
      />

      <section className="container-page py-16 sm:py-20">
        <ol className="relative space-y-4 border-l border-line pl-6 sm:space-y-6 sm:pl-10">
          {internships.map((role, i) => (
            <Reveal key={role.slug} delay={i * 60}>
              <li className="relative">
                <span
                  className="absolute -left-[1.72rem] top-7 size-2.5 rounded-full border-2 border-base bg-cyan sm:-left-[2.72rem]"
                  aria-hidden="true"
                />
                <article className="rounded-xl border border-line bg-surface/50 p-6 transition-colors hover:border-line/100 hover:bg-surface/80 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[0.625rem] tracking-widest text-muted/60">
                          0{i + 1}
                        </span>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] ${statusTone[role.status]}`}
                        >
                          {statusLabel[role.status]}
                        </span>
                      </div>
                      <h2 className="mt-3 text-xl font-semibold text-ink">{role.company}</h2>
                      <p className="mt-1 text-[0.9375rem] text-cyan/90">{role.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[0.75rem] text-ink">{role.start}</p>
                      <p className="mt-0.5 text-xs text-muted">{role.duration}</p>
                    </div>
                  </div>

                  <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
                    {role.summary}
                  </p>

                  <div className="mt-5">
                    <h3 className="label-mono">Focus areas</h3>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {role.focus.map((f) => (
                        <Tag key={f}>{f}</Tag>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>

        <p className="mt-8 max-w-2xl text-[0.8125rem] leading-relaxed text-muted/80">
          These are internships, not employment. Descriptions reflect the scope and focus areas
          of each programme as agreed at the start; individual assignments and deliverables are
          documented separately and will be added here as they are completed.
        </p>
      </section>

      <section className="border-t border-line/70 bg-surface/30 py-16">
        <div className="container-page">
          <h2 className="label-mono">Certifications held</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.name} className="rounded-xl border border-line bg-base/60 p-5">
                <p className="text-[0.9375rem] font-medium text-ink">{c.name}</p>
                <p className="mt-1 text-xs text-muted">{c.issuer}</p>
                {c.date ? (
                  <p className="mt-3 font-mono text-[0.6875rem] text-ok">Completed {c.date}</p>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <NextLink href="/certifications">Certification details</NextLink>
          </div>
        </div>
      </section>
    </>
  );
}
