"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { trackFAQ } from "@/lib/analytics";

type Item = { q: string; answer: ReactNode };

export default function FAQAccordion({
  items,
  sectionId,
}: {
  items: Item[];
  sectionId: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number, question: string) {
    const next = open === i ? null : i;
    setOpen(next);
    if (next !== null) trackFAQ(question, sectionId);
  }

  return (
    <dl className="faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            className={`faq-item${isOpen ? " faq-open" : ""}`}
            key={`${sectionId}-${i}`}
          >
            <dt>
              <button
                className="faq-trigger"
                onClick={() => toggle(i, item.q)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </dt>
            {isOpen && (
              <dd className="faq-answer">
                <p>{item.answer}</p>
              </dd>
            )}
          </div>
        );
      })}
    </dl>
  );
}
