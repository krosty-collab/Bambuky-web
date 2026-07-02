"use client";

import { useState } from "react";
import type { FAQ as FAQType } from "@/lib/faqs";
import { trackFAQ } from "@/lib/analytics";

export default function FAQ({ items, id }: { items: FAQType[]; id?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number, question: string) {
    const next = open === i ? null : i;
    setOpen(next);
    if (next !== null) trackFAQ(question, id);
  }

  return (
    <section className="faq-section" id={id}>
      <div className="container">
        <div className="section-header">
          <p className="label">Preguntas frecuentes</p>
          <h2 className="heading">Resolvemos tus dudas</h2>
        </div>
        <dl className="faq-list">
          {items.map((faq, i) => (
            <div
              className={`faq-item${open === i ? " faq-open" : ""}`}
              key={i}
            >
              <dt>
                <button
                  className="faq-trigger"
                  onClick={() => toggle(i, faq.q)}
                  aria-expanded={open === i}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
              </dt>
              {open === i && (
                <dd className="faq-answer">
                  <p>{faq.a}</p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
