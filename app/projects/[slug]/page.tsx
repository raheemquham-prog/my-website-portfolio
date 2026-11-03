import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ExternalLink, Info } from "lucide-react";
import { Breadcrumb, NextLink } from "@/components/ui/page-header";
import { Reveal, SectionLabel } from "@/components/ui/section";
import { Tag } from "@/components/ui/button";
import { getProject, projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — case study`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.summary,
    about: project.category,
    keywords: project.technologies.join(", "),
  };

  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-line/70">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 grid-backdrop opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_-30%,rgba(59,130,246,0.16),transparent_55%)]" />
          </div>

          <div className="container-page relative py-12 sm:py-16 lg:py-20">
            <Breadcrumb href="/projects">All projects</Breadcrumb>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <SectionLabel>{project.category}</SectionLabel>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted/60">
                    {project.type}
                  </span>
                </div>
                <h1 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.75rem]">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-2xl text-[1.0125rem] leading-relaxed text-muted">
                  {project.summary}
                </p>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-line bg-elevated/60 px-4 text-sm font-medium text-ink transition-colors hover:border-cyan/50"
                  >
                    <ExternalLink className="size-4 text-cyan" aria-hidden="true" />
                    View live application
                  </a>
                ) : null}
              </div>

              <dl className="space-y-5 self-start rounded-xl border border-line bg-surface/60 p-5">
                <div>
                  <dt className="label-mono">Technologies</dt>
                  <dd className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </dd>
                </div>
                {project.environment ? (
                  <div>
                    <dt className="label-mono">Environment</dt>
                    <dd className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink/90">
                      {project.environment}
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt className="label-mono">Type</dt>
                  <dd className="mt-1.5 text-[0.8125rem] text-ink/90">{project.category}</dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <div className="container-page py-14 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.5fr] lg:gap-16">
            <div className="min-w-0">
              <Reveal>
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  Overview
                </h2>
                <p className="mt-4 text-[1.0125rem] leading-relaxed text-muted">
                  {project.overview}
                </p>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  My contribution
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.contribution.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted"
                    >
                      <span
                        className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-cyan/70"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  Technical approach
                </h2>
                <div className="mt-5 space-y-px overflow-hidden rounded-xl border border-line bg-line">
                  {project.approach.map((step, i) => (
                    <div key={step.heading} className="bg-base/80 p-5 sm:p-6">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[0.625rem] tracking-widest text-muted/60">
                          0{i + 1}
                        </span>
                        <h3 className="text-[0.9375rem] font-semibold text-ink">
                          {step.heading}
                        </h3>
                      </div>
                      <p className="mt-2 pl-[1.9rem] text-[0.875rem] leading-relaxed text-muted">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  Outcomes
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted"
                    >
                      <span
                        className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-ok/80"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {project.disclosure ? (
                <Reveal className="mt-12">
                  <div className="flex gap-3 rounded-xl border border-line bg-elevated/40 p-5">
                    <Info className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                    <p className="text-[0.8125rem] leading-relaxed text-muted">
                      <span className="font-medium text-ink">Disclosure note. </span>
                      {project.disclosure}
                    </p>
                  </div>
                </Reveal>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-line bg-surface/50 p-5">
                <h2 className="label-mono">On this page</h2>
                <ul className="mt-3 space-y-2 text-[0.8125rem] text-muted">
                  <li>Overview</li>
                  <li>My contribution</li>
                  <li>Technical approach</li>
                  <li>Outcomes</li>
                </ul>
                <div className="mt-5 border-t border-line pt-4">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-[0.8125rem] text-muted transition-colors hover:text-ink"
                  >
                    Back to all projects
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          <nav
            aria-label="Project navigation"
            className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <NextLink href={`/projects/${next.slug}`}>
              Next project: {next.title}
            </NextLink>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              Discuss this work
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
