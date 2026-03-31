"use client";

import { CheckCircle2, ImagePlus } from "lucide-react";
import { FadeIn } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

const points = [
  "Family owned & operated",
  "Licensed & insured",
  "15+ years experience",
  `Serving ${SITE.primaryArea} since ${SITE.foundedYear}`,
  "Free consultations & quotes",
  "Satisfaction guaranteed",
];

export function WhyChoose() {
  return (
    <section className="border-b border-limestone-secondary/15 bg-white py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <p className="text-limestone-secondary font-semibold tracking-wide uppercase">
            Why Limestone
          </p>
          <h2 className="font-heading text-limestone-primary mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Craftsmanship you can see — communication you can count on
          </h2>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <CheckCircle2
                  className="text-limestone-accent mt-0.5 size-6 shrink-0"
                  aria-hidden
                />
                <span className="text-limestone-ink text-lg">{p}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <div
              className="bg-limestone-cream/50 flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 border-2 border-dashed border-limestone-secondary/30 px-8 text-center"
              aria-label="Team photo placeholder"
            >
              <div className="bg-background text-muted-foreground flex size-16 items-center justify-center rounded-full ring-1 ring-limestone-secondary/20">
                <ImagePlus className="size-8" strokeWidth={1.5} aria-hidden />
              </div>
              <div>
                <p className="text-limestone-primary text-sm font-semibold">
                  Image placeholder
                </p>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  Add a team or owner photo here when ready.
                </p>
              </div>
            </div>
            <div className="bg-limestone-primary p-6 text-white">
              <p className="text-limestone-accent text-sm font-semibold tracking-wide uppercase">
                Meet Ryan
              </p>
              <p className="mt-1 font-semibold leading-snug">
                Local crews, clear estimates, and hands-on ownership on every
                phase of your project.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
