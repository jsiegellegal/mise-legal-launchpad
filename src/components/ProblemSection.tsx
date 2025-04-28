
import { FC } from 'react';

const ProblemSection: FC = () => {
  return (
    <section className="bg-gray-light section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <h2 className="h2 mb-6 text-center">Seeking Value Beyond High Legal Bills?</h2>
          <p className="body-text mb-6">
            Traditional law firms can be expensive and inflexible. Legal Mise provides a smarter alternative: your dedicated Fractional General Counsel. We offer:
          </p>
          
          <div className="space-y-6 mt-8">
            <div>
              <h3 className="h3 mb-2">Flexible & Cost-Effective Pricing</h3>
              <p className="body-text">
                Partner-level expertise with transparent options – including predictable retainers, project fees, or hourly rates – designed to fit your budget and needs, often saving significantly compared to Big Law.
              </p>
            </div>
            
            <div>
              <h3 className="h3 mb-2">Startup-Focused Guidance</h3>
              <p className="body-text">
                Practical advice on funding, commercial contracts, employment matters, IP, corporate governance, and compliance from lawyers who know the startup journey inside and out.
              </p>
            </div>
            
            <div>
              <h3 className="h3 mb-2">Long-Term Strategic Partnership</h3>
              <p className="body-text">
                We act as part of your team, deeply involved in understanding your goals and helping you make informed decisions to drive growth and mitigate risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
