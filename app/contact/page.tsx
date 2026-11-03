import type { Metadata } from "next";
import { CopyEmail } from "@/components/ui/copy-email";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/section";
import { CvDownload } from "@/components/ui/cv-download";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Raheem Quham Folahan — web application security and penetration testing. Email, GitHub and LinkedIn.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: Mail,
    note: "Best for roles, assessments and questions about the work.",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/raheem-quham",
    href: site.linkedin,
    Icon: Linkedin,
    note: "Professional profile and background.",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/raheemquham-prog",
    href: site.github,
    Icon: Github,
    note: "Repositories and code.",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's talk about the work"
        intro="Available for security internships, junior application security roles, and scoped web application assessments. Email is the fastest route — I reply to every serious enquiry."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-3">
            {channels.map(({ label, value, href, Icon, note, external }, i) => (
              <Reveal key={label} delay={i * 60}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-surface/40 p-5 transition-colors duration-200 hover:border-cyan/40 hover:bg-surface/70"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-line bg-elevated/70 text-cyan">
                    <Icon className="size-[1.05rem]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                      {label}
                    </span>
                    <span className="mt-1 block truncate text-[0.9375rem] font-medium text-ink">
                      {value}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">{note}</span>
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <CvDownload />
                <CopyEmail email={site.email} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="rounded-xl border border-line bg-surface/60 p-6 sm:p-7">
              <h2 className="label-mono">Before you write</h2>
              <ul className="mt-5 space-y-4 text-[0.875rem] leading-relaxed text-muted">
                <li>
                  <span className="font-medium text-ink">For a role: </span>
                  include the title, the organisation, and what the team works on. A link to the
                  job description helps.
                </li>
                <li>
                  <span className="font-medium text-ink">For an assessment: </span>
                  describe the target application, the environment, and the timeframe. Testing is
                  only performed with written authorisation and an agreed scope.
                </li>
                <li>
                  <span className="font-medium text-ink">For anything else: </span>
                  questions about a project or a write-up are welcome — the case studies are
                  written to be readable by someone technical.
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-2 border-t border-line pt-5 text-xs text-muted">
                <MapPin className="size-3.5 text-cyan/70" aria-hidden="true" />
                Based in Nigeria · available remotely
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
