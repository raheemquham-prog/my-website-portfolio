import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors duration-200 min-h-11 px-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-[#2f6fdc] shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]",
  secondary:
    "border border-line bg-elevated/60 text-ink hover:border-cyan/50 hover:bg-elevated",
  ghost: "text-muted hover:text-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "children" | "className">) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-surface/80 px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide text-muted">
      {children}
    </span>
  );
}

export function StatusDot({ tone = "cyan" }: { tone?: "cyan" | "ok" | "muted" }) {
  const color = tone === "ok" ? "bg-ok" : tone === "muted" ? "bg-muted" : "bg-cyan";
  return (
    <span className="relative flex size-2" aria-hidden="true">
      <span className={`absolute inline-flex size-full rounded-full ${color} opacity-40 motion-safe:animate-ping`} />
      <span className={`relative inline-flex size-2 rounded-full ${color}`} />
    </span>
  );
}
