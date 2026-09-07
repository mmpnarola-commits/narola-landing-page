import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}

// Variant styles per VISUAL_DIRECTION.md §7/§8. Primary uses Interactive Blue (not Brand
// Blue) specifically because Brand Blue fails WCAG AA contrast with white text (~3.65:1,
// see VISUAL_DIRECTION.md §2) — Interactive Blue (~4.76:1) is the accessibility fix.
// Global `:focus-visible` styling (globals.css) already applies to this element; nothing
// here overrides it.
const VARIANT_STYLES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-interactive-blue text-white hover:bg-[#005fb8]",
  secondary:
    "border border-interactive-blue text-interactive-blue hover:bg-interactive-blue/10",
};

// Plain `<a>`, not `next/link`: every href in this project is a same-page anchor
// (there are no other routes to navigate to in this single-page site), so Link's
// route-prefetching behavior would add nothing.
export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-button font-semibold transition-colors ${VARIANT_STYLES[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
