"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FadeIn } from "@/components/motion-primitives";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const reviews = [
  {
    quote:
      "Our walkway and beds look incredible. Crew was on time every day and the yard was left spotless.",
    name: "Jennifer M.",
    place: "Shrewsbury",
    service: "Hardscaping & planting",
  },
  {
    quote:
      "Snow removal for our storefront has been flawless. They communicate before every storm.",
    name: "David R.",
    place: "Worcester",
    service: "Commercial snow",
  },
  {
    quote:
      "Fair pricing, detailed quote, and they actually listened to what we wanted.",
    name: "The Chen family",
    place: "Westborough",
    service: "Landscape design",
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="border-b border-limestone-secondary/15 bg-limestone-cream/40 py-10 sm:py-14 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-limestone-secondary font-semibold tracking-wide uppercase">
                Reviews
              </p>
              <h2 className="font-heading text-limestone-primary mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Neighbors trust Limestone
              </h2>
            </div>
            <a
              href={SITE.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-limestone-secondary/40 bg-white"
              )}
            >
              <span className="mr-1 text-amber-500" aria-hidden>
                ★
              </span>
              4.8 on Google (24 reviews)
            </a>
          </div>
        </FadeIn>

        <div className="mt-10 hidden gap-6 md:grid md:grid-cols-3">
          {reviews.map((r, i) => (
            <FadeIn key={r.name} delay={i * 0.08}>
              <ReviewCard {...r} />
            </FadeIn>
          ))}
        </div>

        <div className="relative mt-8 md:hidden">
          <Carousel>
            <CarouselContent>
              {reviews.map((r) => (
                <CarouselItem key={r.name}>
                  <ReviewCard {...r} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1" />
            <CarouselNext className="-right-1" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function ReviewCard(r: (typeof reviews)[0]) {
  const initials = r.name
    .split(/\s/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="border-limestone-secondary/15 h-full shadow-sm">
      <CardContent className="flex h-full flex-col gap-4 pt-6">
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="size-4 fill-amber-400 text-amber-400"
              aria-hidden
            />
          ))}
        </div>
        <p className="text-limestone-ink leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
        <div className="mt-auto flex items-center gap-3 pt-2">
          <Avatar className="border border-limestone-secondary/20">
            <AvatarFallback className="bg-limestone-cream text-limestone-primary font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{r.name}</p>
            <p className="text-muted-foreground text-sm">
              {r.place} · {r.service}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
