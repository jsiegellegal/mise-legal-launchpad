
import { FC } from 'react';
import { Scale } from 'lucide-react';

const Navbar: FC = () => {
  return (
    <header className="bg-white py-3 border-b border-gray-100">
      <div className="container-narrow flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-teal" strokeWidth={2} />
          <div className="flex flex-col">
            <span className="text-navy font-bold text-xl leading-tight">Legal Mise</span>
            <span className="text-[10px] text-gray -mt-1 tracking-widest">FRACTIONAL GC</span>
          </div>
        </div>
        <div className="caption hidden md:block">Member: California Bar Association</div>
      </div>
    </header>
  );
};

export default Navbar;
