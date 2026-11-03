import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { SectionHeading, Reveal } from "@/components/ui/section";
import { Tag } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { internships, statusLabel } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { site } from "@/lib/site";

export function AboutPreview() {
  return (
    <section className="container-page py-20 sm:py-24" aria-labelledby="about-preview">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            label="About"
            title={
              <span id="about-preview">
                Security work grounded in
                <span className="text-muted"> how applications are built</span>
              </span>
            }
          />
        </Reveal>
        <Reveal delay={80} className="space-y-5 text-[0.9875rem] leading-relaxed text-muted">
          <p>
            My focus is web application security. I spend my time on the parts of
            application testing that reward patience — mapping an application properly,
            understanding how its requests and sessions behave, and looking for the logic
            flaws that automated scanners do not report.
          </p>
          <p>
            I came to security through building: full-stack applications with React,
            Node.js and MongoDB. That background shapes how I test. I read a request the
            way a developer reads their own code, and I write findings that point at the
            line that needs changing rather than a severity label alone.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-cyan"
          >
            More about my approach
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="border-y border-line/70 bg-surface/30 py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              label="Selected work"
              title="Projects"
              intro="Security tooling, a controlled lab, and a production client application — each documented as a case study."
            />
          </Reveal>
          <Reveal delay={60}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              All projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70}>
              <article className="group relative flex h-full flex-col rounded-xl border border-line bg-base/60 p-6 transition-colors duration-300 hover:border-cyan/40 hover:bg-elevated/40">
                <div className="flex items-start justify-between gap-4">
                  <span className="label-mono">{project.category}</span>
                  <span className="font-mono text-[0.625rem] text-muted/60">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">
                  <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
                    {project.title}
                  </Link>
                </h3>

                <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-muted">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line/70 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink">
                    Read case study
                    <ArrowUpRight
                      className="size-3.5 text-cyan transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                  {project.liveUrl ? (
                    <span className="font-mono text-[0.625rem] uppercase tracking-widest text-ok">
                      Live
                    </span>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperiencePreview() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <SectionHeading
            label="Experience"
            title="Internships"
            intro="Security-focused internships, ordered by how closely they sit to application security and testing."
          />
        </Reveal>
        <Reveal delay={60}>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            Full timeline
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>

      <ol className="mt-12 divide-y divide-line/70 border-y border-line/70">
        {internships.map((role, i) => (
          <Reveal key={role.slug} delay={i * 60}>
            <li className="grid gap-3 py-6 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-6">
              <span className="font-mono text-[0.6875rem] tracking-widest text-muted/70">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-[1.0625rem] font-semibold text-ink">
                  {role.company}
                </h3>
                <p className="mt-1 text-sm text-muted">{role.role}</p>
              </div>
              <div className="flex items-center gap-3 sm:justify-end">
                <span
                  className={`font-mono text-[0.625rem] uppercase tracking-[0.14em] ${
                    role.status === "upcoming"
                      ? "text-muted"
                      : role.status === "ongoing"
                        ? "text-cyan"
                        : "text-ok"
                  }`}
                >
                  {statusLabel[role.status]}
                </span>
                <span className="hidden font-mono text-[0.6875rem] text-muted/60 sm:block">
                  {role.start}
                </span>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function CredentialsStrip() {
  return (
    <section className="border-y border-line/70 bg-surface/30 py-16">
      <div className="container-page grid gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="label-mono">Certifications</h2>
          <ul className="mt-5 space-y-4">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
                <div>
                  <p className="text-[0.9375rem] font-medium text-ink">{cert.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{cert.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/certifications"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            Details
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="label-mono">Continuous practice</h2>
          <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-muted">
            Hands-on work continues in TryHackMe rooms and PortSwigger Web Security Academy
            labs, with findings written up as I go.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/labs"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              Labs &amp; learning
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <span className="text-line" aria-hidden="true">
              /
            </span>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <Github className="size-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="container-page py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/70 px-6 py-14 sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 grid-backdrop opacity-20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(34,211,238,0.12),transparent_55%)]"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Looking for someone who can test an application and explain it clearly?
            </h2>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-muted">
              I am available for security internships, junior application security roles,
              and scoped web application assessments. The quickest way to reach me is email.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-[#2f6fdc]"
              >
                {site.email}
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line bg-elevated/60 px-5 text-sm font-medium text-ink transition-colors hover:border-cyan/50"
              >
                Contact page
                <ArrowUpRight className="size-4 text-cyan" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
