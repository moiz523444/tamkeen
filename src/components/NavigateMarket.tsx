import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const initialWatchlist = [
  { sym: 'CNERGY', price: 15.46, change: 1.24, up: true },
  { sym: 'BOP', price: 34.98, change: -8.56, up: false },
  { sym: 'PRL', price: 184.42, change: 9.09, up: true },
  { sym: 'KEL', price: 7.24, change: -2.51, up: false },
  { sym: 'UNITY', price: 9.98, change: -3.20, up: false },
];

const initialHoldings = [
  { name: 'OGDC', val: 142000, pct: 8.2, up: true },
  { name: 'MCB', val: 98500, pct: 2.1, up: true },
  { name: 'Gold (PMEX)', val: 52380, pct: -1.4, up: false },
];

const NavigateMarket = () => {
  const [watchlist, setWatchlist] = useState(initialWatchlist);
  const [holdings] = useState(initialHoldings);
  const [portfolioValue] = useState(482350);
  const [profitVal] = useState(24150);

  useEffect(() => {
    const interval = setInterval(() => {
      setWatchlist(prev => prev.map(item => {
        if (Math.random() > 0.6) return item;
        const changeAmt = (Math.random() * 0.2) - 0.1;
        const newPrice = Math.max(0.1, item.price + changeAmt);
        return {
          ...item,
          price: newPrice,
          up: changeAmt >= 0
        };
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0f172a] py-20 px-6 lg:px-12 flex justify-center">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Everything You Need to Navigate the Market</h2>
        <p className="text-sm text-slate-400 mb-12 max-w-2xl mx-auto">
          A unified dashboard for PSX equities, PMEX commodities, and advisory — built for speed and clarity.
        </p>
        
        {/* Dashboard Mockup UI */}
        <div className="w-full bg-[#1e293b]/50 backdrop-blur-md rounded-xl border border-slate-700 shadow-2xl overflow-hidden text-left flex flex-col">
          
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700/50 bg-[#1e293b]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">T</div>
              <span className="text-white font-bold text-sm tracking-wide">eClear NXG</span>
            </div>
            <div className="flex items-center gap-5 text-xs font-medium text-slate-400">
              <span className="hover:text-white cursor-pointer">PSX</span>
              <span className="hover:text-white cursor-pointer">PMEX</span>
              <span className="hover:text-white cursor-pointer">Advisory</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold ml-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Live
              </span>
            </div>
          </div>

          {/* 3 Columns */}
          <div className="flex flex-col lg:flex-row w-full p-2">
            
            {/* Col 1: Portfolio */}
            <div className="w-full lg:w-1/3 p-6 border-b lg:border-b-0 lg:border-r border-slate-700/50">
              <div className="text-slate-500 text-xs font-medium mb-1">Portfolio Value</div>
              <div className="text-3xl font-black text-white mb-1">Rs. {portfolioValue.toLocaleString()}</div>
              <div className="text-emerald-400 text-[11px] font-bold mb-8 flex items-center gap-1">
                ▲ +Rs. {profitVal.toLocaleString()} today (+5.27%)
              </div>
              
              <div className="space-y-2">
                {holdings.map((h, i) => (
                  <div key={i} className="bg-[#0f172a]/60 rounded p-3 flex justify-between items-center border border-slate-700/30">
                    <span className="text-slate-300 font-bold text-xs w-24">{h.name}</span>
                    <span className="text-slate-400 text-xs">Rs. {h.val.toLocaleString()}</span>
                    <span className={`text-xs font-bold w-12 text-right ${h.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {h.up ? '+' : ''}{h.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2: Watchlist */}
            <div className="w-full lg:w-1/3 p-6 border-b lg:border-b-0 lg:border-r border-slate-700/50">
              <div className="text-slate-500 text-xs font-medium mb-6">Watchlist</div>
              <div className="space-y-5">
                {watchlist.map((w, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-slate-300 font-bold text-xs w-16">{w.sym}</span>
                    <motion.span 
                      key={w.price}
                      initial={{ backgroundColor: w.up ? 'rgba(52, 211, 153, 0.2)' : 'rgba(251, 113, 133, 0.2)', color: w.up ? '#34d399' : '#fb7185' }}
                      animate={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#cbd5e1' }}
                      transition={{ duration: 1.2 }}
                      className="text-xs w-16 text-right px-1 -ml-1 rounded"
                    >
                      {w.price.toFixed(2)}
                    </motion.span>
                    <span className={`text-xs font-bold w-16 text-right ${w.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {w.up ? '▲' : '▼'} {Math.abs(w.change).toFixed(2)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3: Recent Activity */}
            <div className="w-full lg:w-1/3 p-6">
              <div className="text-slate-500 text-xs font-medium mb-6">Recent Activity</div>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded h-max">BUY</span>
                    <div className="flex flex-col">
                      <span className="text-slate-300 font-bold text-xs">PRL - 50 shares</span>
                      <span className="text-slate-500 text-[10px] mt-0.5">Rs. 104.42</span>
                    </div>
                  </div>
                  <span className="text-slate-500 text-[10px]">10:32 AM</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <span className="bg-rose-500/20 text-rose-400 text-[10px] font-bold px-2 py-0.5 rounded h-max">SELL</span>
                    <div className="flex flex-col">
                      <span className="text-slate-300 font-bold text-xs">Gold - 10 tola</span>
                      <span className="text-slate-500 text-[10px] mt-0.5">Rs. 4,470</span>
                    </div>
                  </div>
                  <span className="text-slate-500 text-[10px]">10:15 AM</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded h-max">BUY</span>
                    <div className="flex flex-col">
                      <span className="text-slate-300 font-bold text-xs">BOP - 100 shares</span>
                      <span className="text-slate-500 text-[10px] mt-0.5">Rs. 34.99</span>
                    </div>
                  </div>
                  <span className="text-slate-500 text-[10px]">09:58 AM</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <span className="bg-rose-500/20 text-rose-400 text-[10px] font-bold px-2 py-0.5 rounded h-max">SELL</span>
                    <div className="flex flex-col">
                      <span className="text-slate-300 font-bold text-xs">CNERGY - 500 shares</span>
                      <span className="text-slate-500 text-[10px] mt-0.5">Rs. 15.46</span>
                    </div>
                  </div>
                  <span className="text-slate-500 text-[10px]">09:41 AM</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigateMarket;
