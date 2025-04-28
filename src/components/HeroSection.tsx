
import { FC } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: FC = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="h1 mb-4">
              Stop Overpaying for Startup Law.
              <span className="block"> Get Expert GC Without the Big Law Bill.</span>
            </h1>
            <p className="body-text mb-6">
              Buried in contracts? Worried about funding rounds? Get proactive, flat-rate legal support built exclusively 
              for startups like yours. Move fast, stay protected.
            </p>
            <Button className="btn-primary">Secure My Free Consultation</Button>
            <p className="caption mt-2">Get clarity in 30 mins. No obligation.</p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Legal professional working for startup" 
              className="rounded-lg shadow-lg w-full object-cover h-[300px] md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
