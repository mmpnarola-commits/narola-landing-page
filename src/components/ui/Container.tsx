import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// Shared max-width wrapper per VISUAL_DIRECTION.md §4 (1280px max width, responsive
// horizontal padding). Every section should use this rather than a custom width.
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
