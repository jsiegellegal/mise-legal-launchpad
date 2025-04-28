
import { FC } from 'react';
import { Check } from 'lucide-react';

const BenefitsSection: FC = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <h2 className="h2 mb-8 text-center">The Legal Mise Advantage</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-5 w-5 text-teal" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-1">Startup Specialists</h3>
                <p className="body-text">We focus exclusively on startups and their unique legal needs.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-5 w-5 text-teal" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-1">Flexible Pricing</h3>
                <p className="body-text">Choose from retainers, project fees, or hourly rates that work for you.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-5 w-5 text-teal" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-1">Integrated Partner</h3>
                <p className="body-text">We invest in understanding your business for the long haul.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
