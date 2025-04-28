
import { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const FAQSection: FC = () => {
  return (
    <section className="bg-gray-light section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <h2 className="h2 mb-8 text-center">Common Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-navy font-semibold text-left">
                How does pricing work?
              </AccordionTrigger>
              <AccordionContent className="body-text">
                We offer flexible options including monthly retainers, fixed project fees, and hourly billing, discussed upfront to provide cost transparency and fit your specific needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-navy font-semibold text-left">
                Is this suitable if my needs vary?
              </AccordionTrigger>
              <AccordionContent className="body-text">
                Absolutely. Our fractional model and flexible pricing are designed to adapt. We tailor the scope and billing structure to your requirements, scaling support up or down as needed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
