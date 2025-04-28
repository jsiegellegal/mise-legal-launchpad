
import { FC } from 'react';
import { Button } from './ui/button';

const HeroSection: FC = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container-narrow">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="h1 mb-6">
            Expert General Counsel for Your Startup. Without the Big Law Price Tag.
          </h1>
          <p className="body-text mb-8 max-w-2xl">
            Get comprehensive, ongoing legal support from experienced counsel who understand startups. Flexible pricing options, partner-level expertise.
          </p>
          <Button 
            className="bg-teal hover:bg-teal-dark text-white font-semibold py-3 px-6"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
