'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Plus, Minus } from "lucide-react" // Import the Plus and Minus icons
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What cars do you have in your inventory?",
    answer: "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris."
  },
  {
    question: "What cars do you have in your inventory?",
    answer: "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta."
  },
  {
    question: "What cars do you have in your inventory?",
    answer: "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta."
  },
  {
    question: "What cars do you have in your inventory?",
    answer: "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta."
  },
  {
    question: "What cars do you have in your inventory?",
    answer: "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta."
  },
]

export default function HomeFaq() {
  // Track the expanded state using the 'value' prop from Accordion
  const [expandedItem, setExpandedItem] = useState<string | undefined>(undefined); // Change null to undefined

  return (
    <div className="mx-auto px-4 mt-[100px] container">
      <h1 className="mb-4 text-center lg:text-5xl text-3xl font-bold text-gray-900">FAQs</h1>
      <p className="mb-8 text-center text-gray-800 mt-[24px]">
        If you have any questions that aren&apos;t listed below, please send your question to :
        <a href="mailto:info@ExpatGlobalGirls.com" className="text-gray-800 hover:underline">
          info@ExpatGlobalGirls.com
        </a>
      </p>

      <Accordion
        type="single"
        collapsible
        value={expandedItem} // Control expanded state here
        onValueChange={(value) => setExpandedItem(value)} // Update the state when the value changes
        className="space-y-4"
      >
        {faqs.map((faq, index) => {
          const itemValue = `item-${index}`;
          return (
            <AccordionItem
              key={index}
              value={itemValue} // Set the value of the item to control its state
              className="rounded-lg border border-gray-200 px-6 py-4"
            >
              <AccordionTrigger className="flex items-center justify-between">
                <span className="text-left text-lg font-[500] text-[#212121]">
                  {faq.question}
                </span>
                <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-gray-500">
                  {/* Show + icon when collapsed */}
                  {expandedItem !== itemValue && (
                    <Plus className="transition-all duration-200" size={16} />
                  )}
                  {/* Show - icon when expanded */}
                  {expandedItem === itemValue && (
                    <Minus className="transition-all duration-200" size={16} />
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-[18px] text-[#949494] font-[400]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
