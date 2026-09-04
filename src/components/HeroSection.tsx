import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full bg-white overflow-hidden py-16 px-6 lg:px-12 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-[#1e3a8a] text-white text-[10px] font-bold rounded-full">TAMKEEN SECURITIES</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 border border-gray-200 text-[10px] font-bold rounded-full">PSX Markets Open</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 border border-gray-200 text-[10px] font-bold rounded-full">PMEX Markets Open</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-[1.1] tracking-tight mb-6">
            Invest Smarter.<br/>Grow Stronger.
          </h1>
          
          <p className="text-gray-500 mb-8 max-w-md leading-relaxed text-sm">
            Tamkeen Securities is a premier brokerage house in Pakistan. We provide seamless access to the stock market, mutual funds, and advisory.
          </p>
          
          <div className="flex gap-4 mb-10">
            <button className="px-6 py-3 bg-[#1e3a8a] text-white text-sm font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20">
              Open Trading Account
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 text-sm font-bold rounded-lg hover:bg-gray-50 transition-colors">
              Explore Features →
            </button>
          </div>
          
          <div className="flex gap-8">
            <div>
              <div className="text-lg font-bold text-[#0f172a]">PKR 5,000</div>
              <div className="text-[10px] font-semibold text-[#1e3a8a]">Min. Investment</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div>
              <div className="text-lg font-bold text-[#0f172a]">100%</div>
              <div className="text-[10px] font-semibold text-[#1e3a8a]">Digital Account</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div>
              <div className="text-lg font-bold text-[#0f172a]">PSX Listed</div>
              <div className="text-[10px] font-semibold text-[#1e3a8a]">Market Access</div>
            </div>
          </div>
        </div>

        {/* Right Side Mockup */}
        <div className="relative flex justify-center items-center">
          {/* Blurred Background Circle */}
          <div className="absolute w-[400px] h-[400px] bg-blue-50 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
          
          {/* Floating Card 1 */}
          <div className="absolute -left-4 top-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 z-20 flex flex-col gap-1 w-32">
            <span className="text-[8px] font-bold text-gray-500 uppercase">KSE 100 Index</span>
            <span className="text-sm font-bold text-[#0f172a]">47,832.10</span>
            <span className="text-[9px] font-bold text-emerald-500">▲ 1.24%</span>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute -right-4 top-20 bg-[#1e3a8a] text-white p-3 rounded-xl shadow-lg z-20 flex items-center gap-2">
            <span className="text-xl">🛡️</span>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold">Digital Account</span>
              <span className="text-[8px] text-blue-200">Open in minutes</span>
            </div>
          </div>

          {/* Floating Card 3 */}
          <div className="absolute -bottom-4 right-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 z-20 flex flex-col gap-1">
            <span className="text-[8px] font-bold text-emerald-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Trade Executed</span>
            <span className="text-xs font-bold text-[#0f172a]">ENGRO x 50</span>
            <span className="text-[9px] text-gray-500">PKR 14,275.00</span>
          </div>

          {/* Mobile Phone */}
          <div className="relative z-10 w-[260px] h-[520px] bg-white rounded-[40px] shadow-2xl border-8 border-slate-800 overflow-hidden flex flex-col">
            <div className="bg-[#1e3a8a] p-4 text-white pb-6 rounded-b-[24px]">
              <div className="text-[8px] text-blue-200 mb-1">Total Portfolio Value</div>
              <div className="text-xl font-bold mb-1">Rs. 485,200</div>
              <div className="text-[8px] bg-white/20 inline-block px-1.5 py-0.5 rounded">▲ +2.64% Today</div>
            </div>
            <div className="p-4 flex-1 bg-gray-50">
              <div className="text-[10px] font-bold text-gray-700 mb-2">My Watchlist</div>
              <div className="space-y-2">
                {[
                  { sym: 'HUBC', name: 'Hub Power', price: '115.40', up: true },
                  { sym: 'OGDC', name: 'OGDCL', price: '124.50', up: true },
                  { sym: 'SYS', name: 'Systems Ltd', price: '412.10', up: false },
                ].map((s, i) => (
                  <div key={i} className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center border border-gray-100">
                    <div>
                      <div className="text-[10px] font-bold text-[#1e3a8a]">{s.sym}</div>
                      <div className="text-[8px] text-gray-400">{s.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-gray-800">{s.price}</div>
                      <div className={`text-[8px] font-bold ${s.up ? 'text-emerald-500' : 'text-red-500'}`}>{s.up ? '▲' : '▼'} 1.2%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
