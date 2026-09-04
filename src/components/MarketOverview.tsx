import React from 'react';

const MarketOverview = () => {
  const data = [
    { name: 'KSE 100', value: '47,832.10', change: '-342.10', pct: '-0.71%', up: false },
    { name: 'KMI 30', value: '82,193.12', change: '-120.45', pct: '-0.15%', up: false },
    { name: 'KSE 30', value: '16,056.89', change: '+15.20', pct: '+0.09%', up: true },
    { name: 'ALL SHR', value: '32,156.00', change: '-110.00', pct: '-0.34%', up: false },
  ];

  return (
    <div className="w-full bg-[#f8fafc] py-16 px-6 lg:px-12 flex justify-center border-t border-gray-100">
      <div className="max-w-6xl w-full">
        <h2 className="text-xl font-bold text-[#0f172a] mb-6">Market Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="text-sm font-bold text-gray-700 mb-2">{item.name}</div>
              <div className="text-2xl font-bold text-[#0f172a] mb-2">{item.value}</div>
              <div className="flex justify-between items-end mt-4">
                <div className={`text-xs font-semibold ${item.up ? 'text-emerald-500' : 'text-red-500'}`}>
                  {item.change} ({item.pct})
                </div>
                {/* Dummy chart graphic */}
                <svg width="60" height="20" viewBox="0 0 60 20" className={item.up ? 'stroke-emerald-400' : 'stroke-red-400'} fill="none" strokeWidth="2">
                  <path d={item.up ? "M0 20 Q15 15 30 10 T60 0" : "M0 0 Q15 5 30 10 T60 20"} />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
