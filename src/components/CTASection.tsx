
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const CTASection: FC = () => {
  return (
    <section className="bg-navy text-white section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Worrying About Legal. Start Scaling Smarter.</h2>
          <p className="text-gray-light text-lg mb-8">
            Ready to ditch the Big Law bills and legal headaches? Book your free, no-strings-attached consultation now.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-white">Full Name</Label>
              <Input id="name" className="bg-white" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="company" className="text-white">Company Name</Label>
              <Input id="company" className="bg-white" placeholder="Your company" />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">Work Email</Label>
              <Input id="email" className="bg-white" placeholder="you@company.com" />
            </div>
            <div>
              <Label htmlFor="needs" className="text-white">What are your primary legal needs?</Label>
              <Textarea id="needs" className="bg-white" placeholder="Brief description of your needs" />
            </div>
            <Button className="w-full btn-primary">Claim My Free Strategy Consultation</Button>
            <p className="caption text-center text-gray-light">30 mins. Zero obligation. 100% confidential.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
