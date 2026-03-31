"use client";

import { FadeIn } from "@/components/motion-primitives";
import { SERVICE_AREAS, SITE } from "@/lib/site";

export function ServiceAreas() {
  return (
    <section
      id="areas"
      className="border-b border-limestone-secondary/15 bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <p className="text-limestone-secondary font-semibold tracking-wide uppercase">
            Service area
          </p>
          <h2 className="font-heading text-limestone-primary mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Proudly serving {SITE.primaryArea}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            Based in {SITE.primaryArea} and surrounding towns within roughly 30
            miles — reach out if you&apos;re nearby.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <ul className="columns-2 gap-8 text-base sm:columns-3">
              {SERVICE_AREAS.map((city) => (
                <li key={city} className="mb-2 break-inside-avoid">
                  <span className="text-limestone-primary font-medium">{city}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6 text-sm">
              Don&apos;t see your town? We often travel for larger projects —
              include your address in the quote form.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-xl ring-1 ring-black/10">
              <iframe
                title="Service area map — Central Massachusetts"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-72.15%2C42.15%2C-71.65%2C42.42&layer=mapnik"
                className="aspect-[4/3] h-[280px] w-full border-0 md:h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="text-muted-foreground bg-muted/40 px-3 py-2 text-xs">
                Map is indicative for demo. Replace with Google Maps embed for
                production.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
