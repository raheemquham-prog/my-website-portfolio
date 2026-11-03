import type { Metadata } from "next";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { PageHeader, NextLink } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/section";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Certifications held by Raheem Quham Folahan: Ethical Hacking Certification (TechCrush / ACTD) and OPSWAT Cybersecurity Fundamentals Associate (OCFA).",
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        label="Certifications"
        title="Formal training, verified credentials"
        intro="Certifications that underpin the security work on this site."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 60}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-surface/50 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-lg border border-line bg-elevated/70">
                    {cert.name.includes("Fundamentals") ? (
                      <ShieldCheck className="size-5 text-cyan" aria-hidden="true" />
                    ) : (
                      <BadgeCheck className="size-5 text-cyan" aria-hidden="true" />
                    )}
                  </span>
                  {cert.date ? (
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ok">
                      {cert.date}
                    </span>
                  ) : (
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted">
                      Awarded
                    </span>
                  )}
                </div>

                <h2 className="mt-5 text-lg font-semibold leading-snug text-ink">{cert.name}</h2>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">{cert.issuer}</p>
                <p className="mt-4 flex-1 text-[0.875rem] leading-relaxed text-muted">
                  {cert.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-[0.8125rem] leading-relaxed text-muted/80">
          Only credentials actually held are listed. Verification links are published where the
          issuing body provides a public credential record.
        </p>
      </section>

      <section className="border-t border-line/70 bg-surface/30 py-16">
        <div className="container-page flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-md text-[0.9375rem] leading-relaxed text-muted">
            Training is only useful when applied — the project case studies show where it lands.
          </p>
          <NextLink href="/projects">View projects</NextLink>
        </div>
      </section>
    </>
  );
}
