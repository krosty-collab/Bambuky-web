"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Item = { q: string; answer: ReactNode };

export default function FAQAccordion({
  items,
  sectionId,
}: {
  items: Item[];
  sectionId: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

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
                onClick={() => setOpen(isOpen ? null : i)}
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
