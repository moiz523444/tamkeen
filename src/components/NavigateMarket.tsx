import React from 'react';

const NavigateMarket = () => {
  return (
    <div className="w-full bg-[#0f172a] py-20 px-6 lg:px-12 flex justify-center">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Everything You Need to Navigate the Market</h2>
        <p className="text-sm text-slate-400 mb-12 max-w-2xl mx-auto">
          Comprehensive tools designed for both beginners and professional traders. Get the edge you need to succeed.
        </p>
        
        {/* Dashboard Mockup UI */}
        <div className="w-full max-w-5xl mx-auto bg-[#1e293b] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden text-left flex flex-col md:flex-row">
          
          {/* Left panel */}
          <div className="w-full md:w-1/3 bg-[#0f172a]/50 p-6 border-r border-slate-700">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-[10px] font-bold">T</div>
              <span className="text-white font-bold text-sm">Dashboard</span>
            </div>
            
            <div className="text-slate-400 text-[10px] font-bold mb-2 uppercase">Portfolio Value</div>
            <div className="text-2xl font-black text-white mb-1">Rs. 4,82,308</div>
            <div className="text-emerald-400 text-xs font-bold mb-8">+2.4% Today</div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Available Cash</span>
                <span className="text-white font-bold">Rs. 45,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Invested</span>
                <span className="text-white font-bold">Rs. 437,308</span>
              </div>
            </div>
          </div>
          
          {/* Right panel */}
          <div className="w-full md:w-2/3 p-6">
            <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
              <div className="flex gap-6">
                <span className="text-white font-bold text-sm border-b-2 border-blue-500 pb-4 -mb-[17px]">Holdings</span>
                <span className="text-slate-400 font-medium text-sm">Orders</span>
                <span className="text-slate-400 font-medium text-sm">History</span>
              </div>
            </div>
            
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] text-slate-500 uppercase border-b border-slate-700/50">
                  <th className="pb-2">Symbol</th>
                  <th className="pb-2 text-right">Shares</th>
                  <th className="pb-2 text-right">Avg Price</th>
                  <th className="pb-2 text-right">Current</th>
                  <th className="pb-2 text-right">Return</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 font-bold text-white">ENGRO</td>
                  <td className="py-3 text-right text-slate-300">500</td>
                  <td className="py-3 text-right text-slate-300">280.00</td>
                  <td className="py-3 text-right text-white font-bold">285.50</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">+1.96%</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 font-bold text-white">HUBC</td>
                  <td className="py-3 text-right text-slate-300">1000</td>
                  <td className="py-3 text-right text-slate-300">110.50</td>
                  <td className="py-3 text-right text-white font-bold">115.40</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">+4.43%</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-white">SYS</td>
                  <td className="py-3 text-right text-slate-300">200</td>
                  <td className="py-3 text-right text-slate-300">420.00</td>
                  <td className="py-3 text-right text-white font-bold">412.10</td>
                  <td className="py-3 text-right text-rose-400 font-bold">-1.88%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NavigateMarket;
