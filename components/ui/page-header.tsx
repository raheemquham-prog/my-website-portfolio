import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section";

export function PageHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line/70">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 grid-backdrop opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_-20%,rgba(59,130,246,0.16),transparent_55%)]" />
      </div>
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-5 max-w-3xl text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-[1.0125rem] leading-relaxed text-muted">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}

export function Breadcrumb({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-[0.8125rem] text-muted transition-colors hover:text-ink"
    >
      <ArrowLeft className="size-3.5" aria-hidden="true" />
      {children}
    </Link>
  );
}

export function NextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-cyan"
    >
      {children}
      <ArrowUpRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}
