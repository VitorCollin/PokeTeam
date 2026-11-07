import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={`${className} bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl  `}
    >
      {children}
    </div>
  );
}
