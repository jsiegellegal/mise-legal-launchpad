
import { FC } from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ quote, name, title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="text-2xl text-teal mb-2">"</div>
      <p className="text-lg italic text-gray-dark mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
        <div>
          <p className="font-semibold text-navy">{name}</p>
          <p className="text-sm text-gray">{title}</p>
        </div>
      </div>
    </div>
  );
};

const SocialProofSection: FC = () => {
  return (
    <section className="bg-gray-light section-padding">
      <div className="container-narrow">
        <h2 className="h2 mb-12 text-center">Don't Just Take Our Word For It. See Why Founders Trust Legal Mise:</h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="w-32 h-12 bg-white rounded flex items-center justify-center shadow-sm">
            <div className="text-gray font-bold">ACME Inc.</div>
          </div>
          <div className="w-32 h-12 bg-white rounded flex items-center justify-center shadow-sm">
            <div className="text-gray font-bold">TechCo</div>
          </div>
          <div className="w-32 h-12 bg-white rounded flex items-center justify-center shadow-sm">
            <div className="text-gray font-bold">StartupX</div>
          </div>
          <div className="w-32 h-12 bg-white rounded flex items-center justify-center shadow-sm">
            <div className="text-gray font-bold">LaunchPad</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Legal Mise provides incredible value. They understand our business and deliver practical advice that has saved us both money and headaches."
            name="Sarah Johnson"
            title="CEO, TechStart"
          />
          <TestimonialCard 
            quote="Working with Legal Mise changed how we think about legal support. Their proactive approach helped us close our seed round faster than expected."
            name="Michael Chen"
            title="Founder, DataCraft"
          />
          <TestimonialCard 
            quote="Unlike our previous attorneys, Legal Mise actually understands the SaaS business model and provides advice that makes sense for our stage and goals."
            name="Jessica Wong"
            title="COO, CloudService"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
