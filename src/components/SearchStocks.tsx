
import { Search } from 'lucide-react';

const SearchStocks = () => {
  return (
    <div className="w-full bg-[#f8fafc] py-12 px-6 flex justify-center border-t border-gray-100">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-xl font-bold text-[#0f172a] mb-2">Search Stocks</h2>
        <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">ENTER SYMBOL OR COMPANY NAME</p>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 hover:border-blue-300 hover:shadow-md focus:-translate-y-0.5 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent shadow-sm text-sm transition-all duration-300"
            placeholder="e.g. HUBC, Engro, Systems..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchStocks;
