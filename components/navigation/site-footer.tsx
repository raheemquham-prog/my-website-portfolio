import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";

const socials = [
  { href: site.github, label: "GitHub", Icon: Github },
  { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-surface/40">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span
                className="grid size-8 place-items-center rounded-md border border-line bg-elevated font-mono text-[0.7rem] text-cyan"
                aria-hidden="true"
              >
                RQ
              </span>
              <span className="text-sm font-semibold text-ink">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Web application security, penetration testing, and the secure development
              practices that make both meaningful.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="label-mono">Navigate</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label-mono">Elsewhere</h2>
            <ul className="mt-4 space-y-2.5">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                  >
                    <Icon className="size-3.5 text-cyan/70" aria-hidden="true" />
                    {label}
                    <ArrowUpRight
                      className="size-3 opacity-0 transition-opacity group-hover:opacity-60"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line/70 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono tracking-wide">
            Security testing is only ever performed with authorisation.
          </p>
        </div>
      </div>
    </footer>
  );
}
