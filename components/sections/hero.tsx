import { ArrowUpRight, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { ButtonLink, StatusDot } from "@/components/ui/button";
import { CvDownload } from "@/components/ui/cv-download";
import { Reveal } from "@/components/ui/section";
import { site } from "@/lib/site";

const focusAreas = [
  { label: "Web application testing", value: "Burp Suite" },
  { label: "Reconnaissance", value: "Nmap · Scapy" },
  { label: "Automation", value: "Python · Bash" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/70">
      {/* Backdrop: hairline grid, faded, with a single soft light source */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 grid-backdrop opacity-[0.35]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base to-transparent" />
      </div>

      <div className="container-page relative">
        <div className="grid gap-14 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:py-32">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5">
                <StatusDot />
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                  Open to security internships &amp; junior roles
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.25rem]">
                Raheem Quham
                <br />
                <span className="text-muted">Folahan</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-xl font-mono text-[0.8125rem] leading-relaxed tracking-tight text-cyan sm:text-sm">
                Web Application Security <span className="text-line">|</span> Penetration
                Testing <span className="text-line">|</span> Ethical Hacking
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
                I assess web applications the way they are built: from the request on the
                wire to the API behind it. My work focuses on reconnaissance, vulnerability
                testing, and API security — with a full-stack background that makes the
                findings easier to explain and the fixes easier to agree on.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="/projects">
                  Explore my projects
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </ButtonLink>
                <CvDownload />
                <div className="flex items-center gap-1">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile (opens in a new tab)"
                    className="grid size-11 place-items-center rounded-lg text-muted transition-colors hover:text-ink"
                  >
                    <Github className="size-[1.15rem]" aria-hidden="true" />
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile (opens in a new tab)"
                    className="grid size-11 place-items-center rounded-lg text-muted transition-colors hover:text-ink"
                  >
                    <Linkedin className="size-[1.15rem]" aria-hidden="true" />
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    aria-label="Send an email"
                    className="grid size-11 place-items-center rounded-lg text-muted transition-colors hover:text-ink"
                  >
                    <Mail className="size-[1.15rem]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Signature visual: a scope panel, not a fake terminal */}
          <Reveal delay={280} className="lg:justify-self-end">
            <div className="relative w-full max-w-md">
              <div
                className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.14),transparent_65%)]"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/80 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-line px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="size-3.5 text-cyan" aria-hidden="true" />
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                      Assessment scope
                    </span>
                  </div>
                  <span className="font-mono text-[0.625rem] text-muted/70">v2026</span>
                </div>

                <dl className="divide-y divide-line/70">
                  {focusAreas.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between px-4 py-4"
                    >
                      <dt className="text-[0.8125rem] text-muted">{item.label}</dt>
                      <dd className="font-mono text-[0.75rem] text-ink">{item.value}</dd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between px-4 py-4">
                    <dt className="text-[0.8125rem] text-muted">Certified</dt>
                    <dd className="font-mono text-[0.75rem] text-ink">
                      ACTD · OPSWAT
                    </dd>
                  </div>
                </dl>

                <div className="border-t border-line bg-elevated/50 px-4 py-3.5">
                  <p className="flex items-center gap-2 font-mono text-[0.6875rem] leading-relaxed text-muted">
                    <span className="text-ok" aria-hidden="true">
                      ●
                    </span>
                    Testing performed only within agreed scope and authorisation.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
