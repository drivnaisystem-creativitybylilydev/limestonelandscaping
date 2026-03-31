"use client";

import { FadeIn } from "@/components/motion-primitives";
import { ImageCompareSlider } from "@/components/image-compare-slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const slides = [
  {
    label: "Full property refresh",
    budget: "Project budget: $12k – $18k",
  },
  {
    label: "Patio & planting",
    budget: "Project budget: $8k – $12k",
  },
  {
    label: "Front entrance makeover",
    budget: "Project budget: $10k – $15k",
  },
];

export function BeforeAfterShowcase() {
  return (
    <section
      id="gallery"
      className="border-b border-limestone-secondary/15 bg-limestone-cream/50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <p className="text-limestone-secondary font-semibold tracking-wide uppercase">
            Transformations
          </p>
          <h2 className="font-heading text-limestone-primary mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Before & after
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            Drag the slider to preview the interaction — replace placeholders
            with your real project photography.
          </p>
        </FadeIn>

        <div className="relative mt-12">
          <Carousel className="mx-auto max-w-4xl">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.label}>
                  <Card className="overflow-hidden p-3 shadow-md md:p-4">
                    <ImageCompareSlider
                      placeholder
                      beforeLabel="Before"
                      afterLabel="After"
                    />
                    <p className="text-limestone-primary mt-3 font-semibold">
                      {slide.label}
                    </p>
                    <p className="text-muted-foreground text-sm">{slide.budget}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-limestone-secondary/30 -left-2 sm:-left-12" />
            <CarouselNext className="border-limestone-secondary/30 -right-2 sm:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
