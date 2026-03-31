"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { QuoteForm } from "@/components/quote-form";
import { SITE } from "@/lib/site";
import { useQuote } from "@/components/quote-context";
import { cn } from "@/lib/utils";
import { BadgeCheck, Phone } from "lucide-react";
import heroBackground from "../public/backgroundhero.jpg";

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const { scrollToQuote } = useQuote();

  const scrollToWork = () => {
    document
      .getElementById("gallery")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[min(88vh,860px)] flex-col overflow-hidden pb-6 pt-24 sm:min-h-[min(90vh,900px)] sm:pb-10 sm:pt-28 md:min-h-[min(90vh,960px)] md:pb-16 md:pt-32"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
        aria-hidden
      >
        <Image
          src={heroBackground}
          alt=""
          fill
          priority
          quality={92}
          placeholder="blur"
          className="object-cover object-[60%_55%] sm:object-[58%_50%]"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/82 via-black/50 to-black/20 sm:from-black/76 sm:via-black/42 sm:to-black/18"
          aria-hidden
        />
      </motion.div>

      <div className="relative z-10 mx-auto mt-auto w-full max-w-7xl px-4">
        <div className="flex flex-col gap-7 pb-2 sm:gap-9 sm:pb-0 lg:flex-row lg:items-end lg:justify-between lg:gap-12 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative z-20 mb-0 flex min-h-0 min-w-0 w-full max-w-2xl flex-col justify-end text-white lg:mb-10 lg:max-w-none lg:flex-1 xl:max-w-none xl:pr-4"
          >
            <p className="mb-4 lg:mb-5">
              <span className="bg-black/45 text-limestone-cream inline-block rounded-full px-4 py-2 text-sm font-semibold tracking-wide uppercase ring-1 ring-white/20 backdrop-blur-sm sm:px-5 sm:text-base">
                {SITE.tagline}
              </span>
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-balance text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)] sm:text-5xl md:text-6xl lg:text-6xl lg:leading-[1.06] xl:text-7xl">
              Picture-perfect{" "}
              <span
                className="bg-gradient-to-br from-limestone-primary via-[#356019] to-limestone-secondary bg-clip-text font-extrabold text-transparent drop-shadow-[0_2px_10px_rgba(45,80,22,0.22)] [filter:drop-shadow(0_0_14px_rgba(107,156,74,0.65))_drop-shadow(0_0_28px_rgba(74,124,44,0.4))]"
              >
                Landscaping
              </span>{" "}
              for {SITE.heroCity}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-white drop-shadow-md sm:mt-6 sm:text-xl md:text-2xl lg:mt-7 lg:max-w-[42rem]">
              Transform your property with professional landscaping and snow
              removal — thoughtful design, dependable crews, and results
              you&apos;ll be proud to come home to.
            </p>

            <motion.div
              className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap lg:mt-11"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.div
                className="hidden lg:block"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Button
                  type="button"
                  size="lg"
                  onClick={scrollToQuote}
                  className="bg-limestone-accent text-limestone-ink hover:bg-limestone-accent/90 min-h-14 w-full px-9 text-lg font-semibold sm:w-auto"
                >
                  Get free quote
                </Button>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <button
                  type="button"
                  onClick={scrollToWork}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "min-h-14 w-full px-9 text-lg font-semibold sm:w-auto",
                    "max-lg:border-limestone-secondary/30 max-lg:bg-white/95 max-lg:text-limestone-primary max-lg:shadow-md backdrop-blur-sm hover:max-lg:bg-white",
                    "lg:border-white/70 lg:bg-black/35 lg:text-white lg:shadow-sm lg:hover:bg-black/45"
                  )}
                >
                  View our work
                </button>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href={`tel:+1${SITE.phoneTel}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "min-h-14 w-full gap-2 text-lg sm:w-auto",
                    "max-lg:border max-lg:border-limestone-secondary/30 max-lg:bg-white/95 max-lg:text-limestone-primary max-lg:shadow-md backdrop-blur-sm hover:max-lg:bg-white",
                    "lg:text-white lg:drop-shadow-md lg:hover:bg-white/15"
                  )}
                >
                  <Phone className="size-6 shrink-0" aria-hidden />
                  {SITE.phoneDisplay}
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-8 grid max-w-xl grid-cols-2 gap-2 text-sm font-medium sm:mt-10 sm:gap-2.5 sm:text-base lg:mt-14 lg:flex lg:max-w-none lg:flex-wrap lg:gap-x-8 lg:gap-y-4 lg:text-white/95"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              {[
                "15+ years experience",
                "Licensed & insured",
                "100+ projects completed",
              ].map((label, index) => (
                <div
                  key={label}
                  className={cn(
                    "flex items-center gap-2",
                    "rounded-xl border border-limestone-secondary/25 bg-white/95 px-3 py-2.5 text-limestone-ink shadow-md backdrop-blur-sm",
                    index === 2 && "max-lg:col-span-2",
                    "lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:text-white/95 lg:shadow-none"
                  )}
                >
                  <BadgeCheck
                    className={cn(
                      "size-6 shrink-0 text-limestone-primary lg:text-limestone-accent"
                    )}
                  />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div
            id="quote"
            className="relative z-20 w-full min-w-0 shrink-0 scroll-mt-24 sm:scroll-mt-28 lg:w-full lg:max-w-[420px] xl:max-w-[440px]"
          >
            <QuoteForm
              heading="Get your free quote"
              centerHeading
              className="shadow-2xl ring-1 ring-white/15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
