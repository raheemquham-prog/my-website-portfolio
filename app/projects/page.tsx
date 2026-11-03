import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/section";
import { Tag } from "@/components/ui/button";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from Raheem Quham Folahan: Python security-testing tooling, a controlled USB social-engineering lab, and a deployed client full-stack application.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Selected work"
        title="Projects and case studies"
        intro="Three pieces of work documented end to end: what the objective was, what I built, and what came out of it."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="space-y-4">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <article className="group relative grid gap-6 rounded-xl border border-line bg-surface/40 p-6 transition-colors duration-300 hover:border-cyan/35 hover:bg-surface/70 sm:p-8 lg:grid-cols-[1fr_15rem] lg:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="label-mono">{project.category}</span>
                    <span className="size-1 rounded-full bg-line" aria-hidden="true" />
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted/70">
                      {project.type}
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-semibold leading-snug text-ink sm:text-2xl">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="after:absolute after:inset-0 focus-visible:outline-none"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
                    {project.summary}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink">
                    Read the case study
                    <ArrowUpRight
                      className="size-3.5 text-cyan transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="lg:border-l lg:border-line lg:pl-6">
                  <h3 className="label-mono">Stack</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] text-ok transition-colors hover:text-ink"
                    >
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                      Live application
                    </a>
                  ) : (
                    <p className="mt-5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted/60">
                      No public repository
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-[0.8125rem] leading-relaxed text-muted/80">
          Security projects are documented as written case studies. Where a project involves
          offensive technique, only concepts, methodology and defensive outcomes are published —
          never payloads or executable detail.
        </p>
      </section>
    </>
  );
}
