"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { useQuote } from "@/components/quote-context";
import { cn } from "@/lib/utils";

const BG =
  "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=2000&q=80";

export function FinalCta() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const { scrollToQuote } = useQuote();

  const primaryCta = () => {
    scrollToQuote();
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-12 sm:py-16 md:py-22 lg:py-28"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
        aria-hidden
      >
        <Image
          src={BG}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-limestone-primary/95 via-limestone-primary/88 to-limestone-secondary/90" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
            Ready to transform your property?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Get your free quote today and see why homeowners and businesses
            across {SITE.primaryArea} trust Limestone.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              type="button"
              size="lg"
              onClick={primaryCta}
              className="bg-limestone-accent text-limestone-ink hover:bg-limestone-accent/90 min-h-[52px] px-10 text-base font-semibold"
            >
              Get free quote now
            </Button>
            <a
              href={`tel:+1${SITE.phoneTel}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "min-h-[52px] border-white/60 bg-transparent px-10 text-base font-semibold text-white hover:bg-white/15"
              )}
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
