import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { PageHeader, NextLink } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/section";
import { CvDownload } from "@/components/ui/cv-download";
import { SkillsSection } from "@/components/sections/skills";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Raheem Quham Folahan approaches web application security: reconnaissance-led testing, clear findings, and a full-stack background that informs how applications are assessed.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Understand the application before testing it",
    body: "Mapping routes, roles, data flows and session behaviour comes first. Most meaningful findings come from understanding intended behaviour well enough to recognise when it is broken.",
  },
  {
    title: "Look for logic, not just signatures",
    body: "Scanners catch known patterns. Access-control gaps, broken object-level authorisation and business-logic abuse need a human to reason about what an application is supposed to allow.",
  },
  {
    title: "Report findings that can be acted on",
    body: "Every finding should explain the request, the impact, and the change that fixes it — in language a developer can work from without asking for clarification.",
  },
  {
    title: "Work only inside authorisation",
    body: "Testing happens in labs, on my own systems, or within an agreed scope. Nothing else is in bounds.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="A security practice built on understanding how applications work"
        intro="I focus on web application security and penetration testing. My starting point is the application itself — its requests, its API, its assumptions about who should be allowed to do what."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div className="space-y-6 text-[1.0125rem] leading-relaxed text-muted">
            <p>
              I work in web application security, with a particular interest in the testing
              work: reconnaissance, vulnerability assessment, and the application logic
              flaws that automated tooling rarely reaches. Burp Suite is where most of my
              hands-on testing happens, supported by Python and Bash scripting when a task
              needs repeating or a request needs reshaping.
            </p>
            <p>
              That focus is grounded in development. I build full-stack applications with
              React, Node.js, Express and MongoDB, and I have delivered a client application
              from requirements through to deployment. Writing the code and then testing it
              gives a useful perspective: I know where developers tend to cut corners,
              because I have had to make the same decisions.
            </p>
            <p>
              My practical experience so far comes from structured internships and lab
              work — web application and API testing assignments, scripting tasks, and
              hands-on labs in TryHackMe and PortSwigger Web Security Academy. I document
              what I do as I go, because a finding that cannot be explained is not worth
              much.
            </p>
            <p>
              I am at an early stage of my career and I am direct about that. What I bring
              is a clear specialisation, a method, and a habit of finishing work to a
              documented standard.
            </p>
          </div>

          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-surface/60 p-6">
              <h2 className="label-mono">At a glance</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs text-muted/80">Focus</dt>
                  <dd className="mt-0.5 text-ink">Web application &amp; API security testing</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted/80">Primary tool</dt>
                  <dd className="mt-0.5 text-ink">Burp Suite · Nmap · Scapy</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted/80">Scripting</dt>
                  <dd className="mt-0.5 text-ink">Python · Bash · JavaScript</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted/80">Development</dt>
                  <dd className="mt-0.5 text-ink">React · Node.js · Express · MongoDB</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted/80">Certified</dt>
                  <dd className="mt-0.5 text-ink">ACTD Ethical Hacking · OPSWAT OCFA</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-col gap-2 border-t border-line pt-5">
                <CvDownload />
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid min-h-11 place-items-center rounded-lg border border-line text-muted transition-colors hover:text-ink"
                  >
                    <Github className="size-4" aria-hidden="true" />
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid min-h-11 place-items-center rounded-lg border border-line text-muted transition-colors hover:text-ink"
                  >
                    <Linkedin className="size-4" aria-hidden="true" />
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    aria-label="Email"
                    className="grid min-h-11 place-items-center rounded-lg border border-line text-muted transition-colors hover:text-ink"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line/70 bg-surface/30 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="label-mono">How I work</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {principles.map((item, i) => (
              <div key={item.title} className="bg-base/80 p-6 sm:p-7">
                <span className="font-mono text-[0.625rem] tracking-widest text-muted/60">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-[0.9375rem] font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />

      <section className="container-page py-16 sm:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-md text-[0.9375rem] leading-relaxed text-muted">
            The projects section documents the work behind this — including the labs and the
            client build.
          </p>
          <div className="flex gap-6">
            <NextLink href="/projects">Projects</NextLink>
            <NextLink href="/experience">Experience</NextLink>
          </div>
        </div>
      </section>
    </>
  );
}
