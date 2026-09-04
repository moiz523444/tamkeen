import React from 'react';

const DirectMarketAccess = () => {
  return (
    <div className="w-full bg-white py-20 px-6 lg:px-12 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side (Dark Box) */}
        <div className="bg-[#1e293b] rounded-3xl p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-4 gap-4 mb-12">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="h-8 bg-slate-700/50 rounded animate-pulse"></div>
            ))}
          </div>
          
          <div className="relative z-10">
            <div className="text-emerald-400 font-bold text-sm mb-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span> Total Investment Value
            </div>
            <div className="text-4xl font-extrabold text-white">Rs. 4,82,308</div>
          </div>
          
          {/* Decorative floating element */}
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">↑</div>
            <div className="flex flex-col">
              <span className="text-[8px] text-gray-500 font-bold">PROFIT (TODAY)</span>
              <span className="text-xs font-bold text-gray-800">Rs. 12,450</span>
            </div>
          </div>
        </div>

        {/* Right Side (Text) */}
        <div>
          <h2 className="text-3xl font-extrabold text-[#0f172a] mb-6 leading-tight">
            Empowering Investors Through Direct Market Access
          </h2>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Tamkeen Securities provides state-of-the-art platforms for seamless trading on the Pakistan Stock Exchange. Execute trades with lightning speed and rely on our robust infrastructure.
          </p>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            Whether you are a seasoned investor or just starting out, we offer the tools, research, and support to help you achieve your financial goals.
          </p>
          
          <div className="flex gap-4 mb-8">
            <button className="px-6 py-3 border border-[#1e3a8a] text-[#1e3a8a] text-sm font-bold rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-extrabold text-[#1e3a8a]">5</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Trading Platforms</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#1e3a8a]">5,000+</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Active Traders</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#1e3a8a]">30+</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Years Experience</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DirectMarketAccess;
