
import { FC, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer, value }) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="h3 text-left">{question}</AccordionTrigger>
      <AccordionContent className="body-text">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

const FAQSection: FC = () => {
  return (
    <section className="bg-gray-light section-padding">
      <div className="container-narrow">
        <h2 className="h2 mb-12 text-center">Still Have Questions? Straight Answers:</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <FAQItem 
            value="item-1"
            question="Is Fractional GC really cheaper?"
            answer="Yes. Factor in preventing costly errors, avoiding unnecessary legal work, and our lower overhead compared to big firms. Most clients save 40-60% compared to traditional firms while getting more relevant startup expertise."
          />
          <FAQItem 
            value="item-2"
            question="How does the flat-rate model work?"
            answer="We offer several tiers of service based on your stage and needs, from basic compliance packages to comprehensive legal support. Each includes a set number of advisory hours, document reviews, and standard services. Any additional work is quoted upfront - no surprises."
          />
          <FAQItem 
            value="item-3"
            question="What if I need specialized expertise outside your wheelhouse?"
            answer="For specialized matters (like patent prosecution or international tax), we maintain a network of trusted specialists who work through us at pre-negotiated rates. You get the expertise without the markup, and we manage the relationship."
          />
          <FAQItem 
            value="item-4"
            question="How quickly can you respond to urgent matters?"
            answer="Our service agreement includes response time commitments - typically same-day for urgent matters and 24-48 hours for standard questions. Unlike big firms where you might be in a queue, your startup gets priority attention."
          />
          <FAQItem 
            value="item-5"
            question="Will investors be concerned you're not a 'name-brand' firm?"
            answer="Smart investors care about effective legal protection, not letterhead. Many actually prefer seeing founders who make intelligent choices about legal spend. We've supported numerous successful funding rounds and can provide references."
          />
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
