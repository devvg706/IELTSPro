import React, { useState } from "react";
import { faqs } from "../../data/AccordionData";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

const AccordionBar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          <Highlighter color="#22d3ee"  animationDuration={1000} isView="true" action="underline">Frequently Asked Questions</Highlighter>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Find quick answers to the most common questions about our IELTSPro
          platform, courses, and features.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden shadow-md"
          >
            {/* Question */}
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-medium hover:bg-slate-800/80 transition-colors"
            >
              <span>{faq.title}</span>
              {openIndex === index ? (
                <ChevronUp className="text-blue-400" size={20} />
              ) : (
                <ChevronDown className="text-slate-400" size={20} />
              )}
            </button>
            {/* Answer */}
            {openIndex === index && (
              <div className="px-6 pb-4 text-slate-400 text-sm leading-relaxed border-t border-slate-700">
                {faq.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccordionBar;
