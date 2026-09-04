import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const initialData = [
  { name: 'KSE 100', value: 47832.10, change: -342.10, pct: -0.71, up: false },
  { name: 'KMI 30', value: 82193.12, change: -120.45, pct: -0.15, up: false },
  { name: 'KSE 30', value: 16056.89, change: 15.20, pct: 0.09, up: true },
  { name: 'ALL SHR', value: 32156.00, change: -110.00, pct: -0.34, up: false },
];

const MarketOverview = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(item => {
        if (Math.random() > 0.5) return item;
        const fluctuate = (Math.random() * 20 - 10);
        const newValue = item.value + fluctuate;
        const newChange = item.change + fluctuate;
        const newPct = (newChange / (newValue - newChange)) * 100;
        return {
          ...item,
          value: newValue,
          change: newChange,
          pct: newPct,
          up: newChange >= 0
        };
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#f8fafc] py-16 px-6 lg:px-12 flex justify-center border-t border-gray-100">
      <div className="max-w-6xl w-full">
        <h2 className="text-xl font-bold text-[#0f172a] mb-6">Market Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 cursor-default group">
              <div className="text-sm font-bold text-gray-700 mb-2">{item.name}</div>
              <div className="text-2xl font-bold mb-2">
                <motion.div
                  key={item.value}
                  initial={{ 
                    backgroundColor: item.up ? 'rgba(16, 185, 129, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                    color: item.up ? '#059669' : '#e11d48'
                  }}
                  animate={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    color: '#0f172a'
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="inline-block px-2 py-1 -ml-2 rounded-lg"
                >
                  {item.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </motion.div>
              </div>
              <div className="flex justify-between items-end mt-2">
                <div className={`text-xs font-semibold`}>
                  <motion.div
                    key={item.change}
                    initial={{ backgroundColor: item.up ? 'rgba(16, 185, 129, 0.15)' : 'rgba(244, 63, 94, 0.15)' }}
                    animate={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className={`inline-block px-2 py-1 -ml-2 rounded-md ${item.up ? 'text-emerald-500' : 'text-red-500'}`}
                  >
                    {item.change > 0 ? '+' : ''}{item.change.toFixed(2)} ({item.pct > 0 ? '+' : ''}{item.pct.toFixed(2)}%)
                  </motion.div>
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
