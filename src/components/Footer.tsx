
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-navy py-6">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-light text-sm">
          <div>© {new Date().getFullYear()} Legal Mise. All Rights Reserved.</div>
          <div className="mt-2 md:mt-0">
            <a href="#" className="hover:underline mr-4">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
