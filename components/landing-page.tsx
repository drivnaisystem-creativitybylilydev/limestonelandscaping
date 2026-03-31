"use client";

import { BeforeAfterShowcase } from "@/components/before-after-showcase";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { QuoteProvider } from "@/components/quote-context";
import { ServiceAreas } from "@/components/service-areas";
import { ServicesGrid } from "@/components/services-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyPhoneBar } from "@/components/sticky-phone-bar";
import { Testimonials } from "@/components/testimonials";
import { WhyChoose } from "@/components/why-choose";

function LandingInner() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24">
        <Hero />
        <ServicesGrid />
        <BeforeAfterShowcase />
        <WhyChoose />
        <Testimonials />
        <ServiceAreas />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyPhoneBar />
    </>
  );
}

export function LandingPage() {
  return (
    <QuoteProvider>
      <LandingInner />
    </QuoteProvider>
  );
}
