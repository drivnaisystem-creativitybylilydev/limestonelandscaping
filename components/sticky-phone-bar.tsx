"use client";

import { MessageSquare, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { useQuote } from "@/components/quote-context";
import { cn } from "@/lib/utils";

/** Mobile-first floating actions (form is in hero). */
export function StickyPhoneBar() {
  const { openQuote } = useQuote();

  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-30 border-t border-limestone-secondary/20 bg-background/95 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md shadow-[0_-4px_20px_rgba(45,80,22,0.06)]">
      <div className="mx-auto flex max-w-lg gap-2 sm:max-w-none sm:justify-center">
        <a
          href={`tel:+1${SITE.phoneTel}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "border-limestone-secondary/40 text-limestone-primary h-11 min-w-0 flex-1 gap-1.5 px-3 text-sm font-semibold sm:h-12 sm:gap-2 sm:px-6 sm:text-base md:flex-initial"
          )}
        >
          <Phone className="size-4 shrink-0 sm:size-5" aria-hidden />
          <span className="truncate">Call</span>
        </a>
        <Button
          type="button"
          size="default"
          onClick={openQuote}
          className="bg-limestone-primary hover:bg-limestone-primary/90 h-11 min-w-0 flex-[1.15] gap-1.5 px-3 text-sm font-semibold sm:h-12 sm:gap-2 sm:px-8 sm:text-base md:flex-initial"
        >
          <MessageSquare className="size-4 shrink-0 sm:size-5" aria-hidden />
          Quote
        </Button>
      </div>
    </div>
  );
}
