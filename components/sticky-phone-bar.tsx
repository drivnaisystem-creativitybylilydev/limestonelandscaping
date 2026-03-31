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
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-30 border-t border-limestone-secondary/20 bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md">
      <div className="mx-auto flex max-w-lg gap-2 sm:max-w-none sm:justify-center">
        <a
          href={`tel:+1${SITE.phoneTel}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "border-limestone-secondary/40 text-limestone-primary min-h-12 min-w-[48px] flex-1 gap-2 font-semibold sm:flex-initial sm:px-6"
          )}
        >
          <Phone className="size-5 shrink-0" aria-hidden />
          <span className="truncate">Call</span>
        </a>
        <Button
          type="button"
          size="lg"
          onClick={openQuote}
          className="bg-limestone-primary hover:bg-limestone-primary/90 min-h-12 min-w-[48px] flex-[1.2] gap-2 font-semibold sm:flex-initial sm:px-8"
        >
          <MessageSquare className="size-5 shrink-0" aria-hidden />
          Free quote
        </Button>
      </div>
    </div>
  );
}
