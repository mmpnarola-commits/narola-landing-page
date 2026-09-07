"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/content/navigation";
import { siteConfig } from "@/content/siteConfig";

// Client Component: needs state for the mobile menu toggle and a scroll listener for the
// sticky-header shadow. Per VISUAL_DIRECTION.md §5: sticky (not fixed), 64px mobile /
// 72px desktop, simplified in-page anchor nav (not the production mega-menu), one primary
// CTA, hamburger + full-width panel on mobile carrying the same links plus the CTA.
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-16 bg-white transition-shadow md:h-[72px] ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/" className="shrink-0">
          {/* Plain <img>, not next/image: SVGs are blocked by Next's image optimizer
              unless next.config.ts opts in, and a vector logo gains nothing from raster
              optimization anyway. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-button text-ink transition-colors hover:text-interactive-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={siteConfig.primaryCta.href}>{siteConfig.primaryCta.label}</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-surface-muted bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-3 text-button text-ink transition-colors hover:bg-surface-muted hover:text-interactive-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2">
              <Button
                href={siteConfig.primaryCta.href}
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {siteConfig.primaryCta.label}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
