"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  /** Use `true` in footer / on dark backgrounds */
  variant?: "default" | "onDark";
};

export function LogoMark({ className, variant = "default" }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "relative inline-block size-10 shrink-0 overflow-hidden rounded-full md:size-11",
        variant === "default"
          ? "ring-1 ring-limestone-secondary/30"
          : "ring-1 ring-white/25",
        className
      )}
    >
      <Image
        src="/Logo.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 40px, 44px"
      />
    </span>
  );
}
