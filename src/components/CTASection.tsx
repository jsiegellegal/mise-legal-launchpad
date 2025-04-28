
import { FC } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const CTASection: FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section className="bg-navy text-white section-padding">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Strategic Legal Partner?</h2>
          <p className="text-gray-light mb-8">
            Get expert fractional GC support designed for your startup's growth, with flexible pricing that makes sense. Let's discuss how we can partner.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input 
                type="email" 
                placeholder="Work Email" 
                className="border border-gray text-navy w-full" 
                required
              />
            </div>
            <div>
              <Input 
                type="text" 
                placeholder="Company Name (Optional)" 
                className="border border-gray text-navy w-full" 
              />
            </div>
            <div>
              <Button 
                type="submit"
                className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-3 px-6"
              >
                Request Info
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-gray-light mt-4">
            We'll follow up shortly. No spam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
