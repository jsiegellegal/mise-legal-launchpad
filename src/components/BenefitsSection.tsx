
import { FC } from 'react';
import { Check } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-3">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal/10 text-teal">
          <Check size={24} />
        </div>
      </div>
      <h3 className="h3 mb-2">{title}</h3>
      <p className="body-text">{description}</p>
    </div>
  );
};

const BenefitsSection: FC = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-narrow">
        <h2 className="h2 mb-4 text-center">The Smart Legal Solution Built for Startup Budgets & Speed</h2>
        <p className="body-text text-center mb-12">Legal Mise stops the pain. Our Fractional GC model gives you exactly what you need:</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            title="Cut Legal Costs Dramatically" 
            description="Keep up to 50% (or more) of your legal budget while getting better, more targeted support tailored to your startup's needs."
          />
          <BenefitCard 
            title="Mitigate Risk Proactively" 
            description="We spot issues before they become problems, building protection into your operations before costly mistakes happen."
          />
          <BenefitCard 
            title="Accelerate Your Deals" 
            description="Get fast, practical advice from someone who understands your business metrics and can move at startup speed."
          />
          <BenefitCard 
            title="Reclaim Your Focus" 
            description="Offload legal stress and complexity to a trusted partner so you can concentrate on building and scaling your business."
          />
          <BenefitCard 
            title="Pay Only For What You Need" 
            description="Flexible support scales with your startup, from early-stage to Series A and beyond, without the big firm overhead."
          />
          <BenefitCard 
            title="Access Expert Knowledge" 
            description="Tap into specialized startup legal expertise without the premium price tag that usually comes with it."
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
