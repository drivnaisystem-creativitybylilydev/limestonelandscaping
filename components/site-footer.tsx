"use client";

import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { SITE } from "@/lib/site";
import { useQuote } from "@/components/quote-context";

export function SiteFooter() {
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
    <footer className="bg-limestone-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark variant="onDark" className="size-11 md:size-12" />
            <span className="font-semibold leading-tight">{SITE.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Premium landscaping, hardscaping, and snow removal for homes and
            businesses across {SITE.primaryArea}.
          </p>
          <div className="mt-5 flex gap-3 text-sm">
            <a
              href="#"
              className="hover:bg-white/10 rounded-lg border border-white/20 px-3 py-2 font-medium"
              aria-label="Facebook (placeholder link)"
            >
              Facebook
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-white/10 rounded-lg border border-white/20 px-3 py-2 font-medium"
              aria-label="Limestone Landscaping on Instagram"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/90">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href="#services" onClick={(e) => go(e, "#services")} className="hover:text-white">
                View all services
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => go(e, "#gallery")} className="hover:text-white">
                Project gallery
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={openQuote}
                className="hover:text-white text-left"
              >
                Request a quote
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/90">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href={`tel:+1${SITE.phoneTel}`} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.address}</li>
            <li className="text-white/60">Mon–Sat · 7am–6pm</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/90">
            Legal
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link href="#" className="hover:text-white">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms of service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-white/45">
            Website by{" "}
            <span className="text-white/65">Drivn.AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
