"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

type Props = {
  /** When true, shows styled placeholders instead of real photos (slider still works). */
  placeholder?: boolean;
  beforeSrc?: string;
  afterSrc?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
};

/**
 * Before/after compare slider. Left = before, right = after.
 * Use `placeholder` for demo blocks without photos.
 */
export function ImageCompareSlider({
  placeholder = false,
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: Props) {
  const [pct, setPct] = React.useState(50);
  const id = React.useId();

  const showImages = !placeholder && beforeSrc && afterSrc;

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full touch-pan-y overflow-hidden rounded-lg bg-muted outline-none",
        className
      )}
    >
      {showImages ? (
        <>
          <Image
            src={afterSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority={false}
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - pct}% 0 0)`,
            }}
            aria-hidden
          >
            <Image
              src={beforeSrc}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority={false}
            />
          </div>
        </>
      ) : (
        <>
          {/* After (right / full base) */}
          <div
            className="bg-limestone-cream/90 absolute inset-0 flex items-center justify-center border border-dashed border-limestone-secondary/35"
            aria-hidden
          >
            <div className="text-muted-foreground flex max-w-[70%] flex-col items-center gap-2 px-4 text-center">
              <ImageIcon className="size-10 opacity-50" strokeWidth={1.25} />
              <span className="text-xs font-semibold uppercase tracking-wide text-limestone-secondary">
                After
              </span>
              <span className="text-sm leading-snug">
                Photo placeholder — add your &ldquo;after&rdquo; shot here
              </span>
            </div>
          </div>
          {/* Before (left / clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - pct}% 0 0)`,
            }}
            aria-hidden
          >
            <div className="bg-muted absolute inset-0 flex items-center justify-center border border-dashed border-limestone-primary/25">
              <div className="text-muted-foreground flex max-w-[70%] flex-col items-center gap-2 px-4 text-center">
                <ImageIcon className="size-10 opacity-40" strokeWidth={1.25} />
                <span className="text-xs font-semibold uppercase tracking-wide text-limestone-primary">
                  Before
                </span>
                <span className="text-sm leading-snug text-limestone-ink/80">
                  Photo placeholder — add your &ldquo;before&rdquo; shot here
                </span>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="pointer-events-none absolute inset-x-0 top-2 z-[6] flex justify-between px-2 text-xs font-semibold text-white drop-shadow-md">
        <span className="rounded bg-black/45 px-2 py-1">{beforeLabel}</span>
        <span className="rounded bg-black/45 px-2 py-1">{afterLabel}</span>
      </div>

      <div
        className="border-limestone-primary pointer-events-none absolute inset-y-0 z-[5] w-1 -translate-x-1/2 bg-white shadow-md"
        style={{ left: `${pct}%` }}
        aria-hidden
      />

      <div
        className="border-limestone-primary pointer-events-none absolute top-1/2 z-[6] size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] bg-white shadow-lg"
        style={{ left: `${pct}%` }}
        aria-hidden
      />

      <label htmlFor={id} className="sr-only">
        Drag to compare before and after
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        className="absolute inset-0 z-10 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-[0.01] focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-white/80 [&::-webkit-slider-thumb]:h-full [&::-webkit-slider-thumb]:min-h-[44px] [&::-webkit-slider-thumb]:w-10 [&::-webkit-slider-thumb]:appearance-none"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-valuetext={`${pct}% before visible`}
      />
    </div>
  );
}
