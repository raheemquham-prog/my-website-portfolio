"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line/80 bg-base/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} — home`}
        >
          <span
            className="grid size-8 place-items-center rounded-md border border-line bg-elevated font-mono text-[0.7rem] font-medium tracking-tight text-cyan transition-colors group-hover:border-cyan/50"
            aria-hidden="true"
          >
            RQ
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
            Raheem Quham
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative rounded-md px-3 py-2 text-[0.8125rem] transition-colors ${
                isActive(item.href)
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
              {isActive(item.href) ? (
                <span
                  className="absolute inset-x-3 -bottom-px h-px bg-cyan"
                  aria-hidden="true"
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-elevated/60 px-4 py-2 text-[0.8125rem] font-medium text-ink transition-colors hover:border-cyan/50"
          >
            Get in touch
            <ArrowUpRight className="size-3.5 text-cyan" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-lg border border-line bg-elevated/60 text-ink md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-base/98 backdrop-blur-md md:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`flex min-h-12 items-center justify-between border-b border-line/60 py-3 text-[0.9375rem] last:border-0 ${
                  isActive(item.href) ? "text-cyan" : "text-ink"
                }`}
              >
                {item.label}
                <ArrowUpRight className="size-4 opacity-40" aria-hidden="true" />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 mb-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-4 text-sm font-medium text-white"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
