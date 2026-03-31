"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SITE } from "@/lib/site";
import { LogoMark } from "@/components/logo-mark";
import { useQuote } from "@/components/quote-context";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Our work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#areas", label: "Service area" },
  { href: "#quote", label: "Free quote" },
];

export function SiteHeader() {
  const { openQuote } = useQuote();

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    if (id === "quote") {
      openQuote();
      return;
    }
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="bg-background/90 supports-backdrop-filter:bg-background/80 sticky top-0 z-40 border-b border-limestone-secondary/15 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:py-3.5">
        <Link
          href="/"
          className="flex items-center gap-3 text-left focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`${SITE.name} home`}
        >
          <LogoMark />
          <div className="leading-tight">
            <span className="text-limestone-primary block font-semibold tracking-tight">
              Limestone
            </span>
            <span className="text-muted-foreground block text-xs font-medium">
              Landscaping
            </span>
          </div>
        </Link>

        <nav
          className="text-limestone-ink hidden items-center gap-6 text-sm font-medium lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              className="text-limestone-ink hover:text-limestone-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+1${SITE.phoneTel}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "border-limestone-secondary/40 text-limestone-primary hidden min-h-11 items-center gap-1.5 px-3 font-semibold md:inline-flex"
            )}
          >
            <Phone className="size-4 shrink-0" aria-hidden />
            <span className="hidden lg:inline">{SITE.phoneDisplay}</span>
            <span className="lg:hidden">Call</span>
          </a>
          <Button
            type="button"
            size="sm"
            onClick={openQuote}
            className="bg-limestone-primary hover:bg-limestone-primary/90 hidden min-h-11 px-4 font-semibold sm:inline-flex"
          >
            Get quote
          </Button>

          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "border-limestone-secondary/40 min-h-11 min-w-11 lg:hidden"
              )}
              aria-label="Open menu"
            >
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,380px)] gap-0">
              <SheetHeader className="border-b border-border pb-4 text-left">
                <SheetTitle className="text-limestone-primary font-semibold">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 py-4" aria-label="Mobile">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="hover:bg-muted rounded-lg px-3 py-3 text-base font-medium"
                    onClick={(e) => {
                      go(e, item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                <a
                  href={`tel:+1${SITE.phoneTel}`}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-limestone-primary hover:bg-limestone-primary/90 inline-flex h-12 w-full items-center justify-center gap-2 font-semibold"
                  )}
                >
                  <Phone className="size-4" aria-hidden />
                  Call {SITE.phoneDisplay}
                </a>
                <Button
                  type="button"
                  variant="secondary"
                  className="h-12 w-full font-semibold"
                  onClick={() => {
                    openQuote();
                  }}
                >
                  Get free quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
