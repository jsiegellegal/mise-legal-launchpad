
import { FC } from 'react';

interface ComparisonPointProps {
  title: string;
  description: string;
}

const ComparisonPoint: FC<ComparisonPointProps> = ({ title, description }) => {
  return (
    <div className="mb-8">
      <h3 className="h3 mb-2">{title}</h3>
      <p className="body-text">{description}</p>
    </div>
  );
};

const DifferentiationSection: FC = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-narrow">
        <h2 className="h2 mb-12 text-center">Why Smart Startups Ditch Big Law for Legal Mise</h2>
        
        <div className="space-y-8">
          <ComparisonPoint 
            title="Big Law is Built for Giants, Not Startups"
            description="They're slow, expensive ($$$$), and often unfamiliar with the unique challenges startups face. We're designed specifically for early-stage and growing companies."
          />
          <ComparisonPoint 
            title="Predictable Costs vs. Terrifying Bills"
            description="Our flat-rate/project fees mean no surprises. Know exactly what you're paying and what you're getting, so you can budget with confidence."
          />
          <ComparisonPoint 
            title="Proactive Prevention vs. Reactive Firefighting"
            description="We build your legal shield before you need it, not after problems emerge. Our preventive approach costs less and protects more than emergency legal services."
          />
          <ComparisonPoint 
            title="True Partner vs. Distant Advisor"
            description="We integrate like an in-house team member who understands your business intimately, not an outsider who bills by the six-minute increment."
          />
          <ComparisonPoint 
            title="Flexible Scaling vs. Rigid Structures"
            description="Need more help for Series A? Less during quiet periods? Our support flexes with your needs, unlike traditional firms that push maximum billable hours."
          />
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
