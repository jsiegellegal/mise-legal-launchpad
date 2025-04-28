
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <header className="bg-white py-3 border-b border-gray-100">
      <div className="container-narrow flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-navy font-bold text-xl">Legal Mise</div>
        </div>
        <div className="caption hidden md:block">Member: California Bar Association</div>
      </div>
    </header>
  );
};

export default Navbar;
