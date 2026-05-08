"use client";

import { cn } from "@/lib/utils";

interface PhoneShellProps {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  onClick?: () => void;
}

export function PhoneShell({ children, className, bg = "bg-[#FAFAFA]", onClick }: PhoneShellProps) {
  return (
    <main
      onClick={onClick}
      className={cn(
        "w-full max-w-[400px] sm:rounded-[40px] sm:shadow-2xl overflow-hidden relative flex flex-col h-[100dvh] sm:h-[850px]",
        bg,
        className
      )}
    >
      {children}
    </main>
  );
}
