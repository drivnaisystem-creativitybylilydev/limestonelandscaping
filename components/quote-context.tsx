"use client";

import * as React from "react";

type QuoteContextValue = {
  scrollToQuote: () => void;
  openQuote: () => void;
};

const QuoteContext = React.createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const scrollToQuote = React.useCallback(() => {
    document
      .getElementById("quote")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const value = React.useMemo(
    () => ({ scrollToQuote, openQuote: scrollToQuote }),
    [scrollToQuote]
  );

  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = React.useContext(QuoteContext);
  if (!ctx) {
    throw new Error("useQuote must be used within QuoteProvider");
  }
  return ctx;
}
