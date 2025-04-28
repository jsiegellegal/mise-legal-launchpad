
import { FC } from 'react';

const ProblemSection: FC = () => {
  return (
    <section className="bg-gray-light section-padding">
      <div className="container-narrow">
        <h2 className="h2 mb-8 text-center">Bleeding Cash on Legal? Is Bad Advice Costing You Deals?</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <p className="body-text">
              <span className="font-bold">That $800/hour invoice lands. Your runway shrinks. Again.</span> Are endless Big Law bills burning through your funding?
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <p className="body-text">
              <span className="font-bold">Your lawyer asks basic questions about SaaS metrics. Deals stall. Opportunities vanish.</span> Is generic legal advice slowing you down when speed matters most?
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <p className="body-text">
              <span className="font-bold">You sign contracts praying they're okay. Compliance feels like a minefield.</span> Are you losing sleep worrying about hidden risks that could cripple your startup?
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <p className="body-text">
              <span className="font-bold">You're drowning in legal tasks instead of building your product or closing sales.</span> Is managing legal chaos stealing your focus from what truly drives growth?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
