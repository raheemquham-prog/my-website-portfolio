import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-cyan">
        404 · Not found
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
        This page does not exist
      </h1>
      <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted">
        The link may be outdated. Everything on this site is reachable from the navigation above.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg border border-line bg-elevated/60 px-5 text-sm font-medium text-ink transition-colors hover:border-cyan/50"
      >
        <ArrowLeft className="size-4 text-cyan" aria-hidden="true" />
        Back to home
      </Link>
    </section>
  );
}
