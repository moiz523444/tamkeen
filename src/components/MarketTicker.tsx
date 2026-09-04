

const MarketTicker = () => {
  return (
    <div className="flex items-center px-4 py-1.5 bg-white border-b border-slate-200/80 text-xs overflow-x-auto gap-4 whitespace-nowrap scrollbar-hide">
      <div className="text-[11px] font-medium text-slate-500 mr-4 border-r border-slate-200 pr-4">
        Karachi 7:30 PM PKT | London 15:30 GMT | New York 10:30 AM EST
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-800">KSE 100</span>
        <span className="text-xs font-bold text-slate-800">176,975.67</span>
        <span className="bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded font-bold text-[11px]">▼ 0.41%</span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-800">USD/PKR</span>
        <span className="text-xs font-bold text-slate-800">278.55</span>
        <span className="bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-bold text-[11px]">▲ 0.12%</span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-800">GBP/PKR</span>
        <span className="text-xs font-bold text-slate-800">376.80</span>
        <span className="bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-bold text-[11px]">▲ 0.08%</span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-800">GOLD</span>
        <span className="text-xs font-bold text-slate-800">2,045.10</span>
        <span className="bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded font-bold text-[11px]">▼ 0.20%</span>
      </div>
    </div>
  );
};

export default MarketTicker;
