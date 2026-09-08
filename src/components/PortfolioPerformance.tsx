const PortfolioPerformance = () => {
  const data = [
    { name: 'Conservative', returnPct: 14.5, type: 'Income & Stability' },
    { name: 'Balanced', returnPct: 21.3, type: 'Growth & Income' },
    { name: 'Aggressive', returnPct: 35.7, type: 'Maximum Growth' }
  ];

  return (
    <div className="w-full bg-[#f8fafc] py-16 px-6 lg:px-12 flex justify-center border-t border-gray-100">
      <div className="max-w-6xl w-full">
        <h2 className="text-xl font-bold text-[#0f172a] mb-6">Portfolio Performance</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 cursor-default group">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm font-bold text-gray-700">{item.name}</div>
                <div className="text-xs font-semibold text-gray-400">{item.type}</div>
              </div>
              <div className="text-3xl font-bold mb-4 text-emerald-500">
                +{item.returnPct}%
              </div>
              <div className="flex justify-between items-end mt-2">
                <div className="text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">
                  Historical Avg Return
                </div>
                {/* Dummy chart graphic */}
                <svg width="60" height="20" viewBox="0 0 60 20" className="stroke-emerald-400" fill="none" strokeWidth="2">
                  <path d="M0 20 Q15 15 30 10 T60 0" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPerformance;
