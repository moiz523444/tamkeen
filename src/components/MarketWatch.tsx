import React from 'react';

const MarketWatch = () => {
  const tableData = [
    { sym: 'WTL', name: 'WorldCall Telecom', price: '1.25', chg: '+0.05', pct: '+4.17%', vol: '12.4M' },
    { sym: 'KEL', name: 'K-Electric Limited', price: '2.10', chg: '-0.02', pct: '-0.94%', vol: '8.2M' },
    { sym: 'PRL', name: 'Pak Refinery', price: '15.40', chg: '+0.40', pct: '+2.67%', vol: '5.1M' },
    { sym: 'OGDC', name: 'Oil & Gas Dev', price: '98.50', chg: '-1.20', pct: '-1.20%', vol: '4.8M' },
    { sym: 'TELE', name: 'Telecard Limited', price: '7.80', chg: '+0.15', pct: '+1.96%', vol: '4.2M' },
  ];

  return (
    <div className="w-full bg-white py-16 px-6 lg:px-12 flex justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-xl font-bold text-[#0f172a] mb-6">Market Watch</h2>
        
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button className="px-4 py-1.5 text-xs font-semibold bg-[#1e3a8a] text-white rounded shadow-sm">Top Active</button>
          <button className="px-4 py-1.5 text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-200 rounded hover:bg-gray-100">Top Gainers</button>
          <button className="px-4 py-1.5 text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-200 rounded hover:bg-gray-100">Top Losers</button>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-left bg-white">
            <thead className="bg-[#f8fafc] border-b border-gray-200">
              <tr>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase">Symbol</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase">Company</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase text-right">Price</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase text-right">Change</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase text-right">Volume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tableData.map((row, idx) => {
                const isUp = row.chg.startsWith('+');
                return (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-4 px-4 font-bold text-[#1e3a8a] text-sm">{row.sym}</td>
                    <td className="py-4 px-4 text-xs text-gray-600 font-medium">{row.name}</td>
                    <td className="py-4 px-4 text-right font-bold text-gray-800 text-sm">{row.price}</td>
                    <td className="py-4 px-4 text-right">
                      <span className={`text-xs font-bold ${isUp ? 'text-emerald-500' : 'text-red-500'}`}>
                        {row.chg} ({row.pct})
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right text-xs text-gray-500">{row.vol}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketWatch;
