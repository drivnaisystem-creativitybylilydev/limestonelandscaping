"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Snowflake,
  Sparkles,
  Sprout,
  Sun,
  Trees,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion-primitives";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Spring services",
    icon: Sprout,
    accent: "Spring wake-up for beds, turf, and planting.",
    items: [
      "Cleanup & mulching",
      "Planting & design",
      "Lawn fertilization",
    ],
  },
  {
    title: "Summer services",
    icon: Sun,
    accent: "Crisp lawns and outdoor spaces all season.",
    items: [
      "Weekly lawn maintenance",
      "Irrigation systems",
      "Hardscaping & patios",
    ],
  },
  {
    title: "Fall services",
    icon: Leaf,
    accent: "Prep your landscape for cold weather.",
    items: ["Leaf removal", "Aeration & overseeding", "Winterization"],
  },
  {
    title: "Winter services",
    icon: Snowflake,
    accent: "Reliable clearing when the snow flies.",
    items: [
      "Snow plowing — commercial & residential",
      "Ice management",
      "Emergency response",
    ],
  },
  {
    title: "Year-round",
    icon: Trees,
    accent: "Design, build, and maintain in one partnership.",
    items: [
      "Landscape design",
      "Construction projects",
      "Property maintenance",
    ],
  },
  {
    title: "Specialty",
    icon: Sparkles,
    accent: "Statement features built to last.",
    items: ["Retaining walls", "Outdoor lighting", "Water features"],
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="w-full border-b border-limestone-secondary/15 bg-white py-10 sm:py-14 md:py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <FadeIn>
          <p className="text-limestone-secondary font-semibold tracking-wide uppercase">
            What we do
          </p>
          <h2 className="font-heading text-limestone-primary mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Full-service landscaping & snow removal
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            From seasonal care to major builds, Limestone handles the details
            so you can enjoy the view — not chase contractors.
          </p>
        </FadeIn>

        <div className="mt-12 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              >
                <Card className="border-limestone-secondary/20 h-full shadow-sm transition-shadow hover:shadow-lg">
                  <CardHeader className="gap-3">
                    <div className="bg-limestone-cream text-limestone-primary inline-flex size-12 items-center justify-center rounded-xl">
                      <s.icon className="size-6" strokeWidth={1.75} />
                    </div>
                    <CardTitle className="text-limestone-primary text-xl">
                      {s.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {s.accent}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <ul className="text-limestone-ink space-y-1.5 text-sm">
                      {s.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-limestone-accent mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#quote"
                      className={cn(
                        buttonVariants({ variant: "link" }),
                        "text-limestone-secondary h-auto p-0 font-semibold"
                      )}
                    >
                      Learn more →
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
