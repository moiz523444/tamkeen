import React from 'react';
import { ArrowRight } from 'lucide-react';

const Insights = () => {
  const articles = [
    { cat: 'Market Report', date: 'Oct 15, 2026', title: 'KSE-100 crosses 47,000 points amid positive sentiment', excerpt: 'The stock market witnessed a bullish trend today driven by strong corporate earnings...' },
    { cat: 'Technical Analysis', date: 'Oct 14, 2026', title: 'Key resistance levels to watch for Oil & Gas sector', excerpt: 'Our technical team analyzes the recent breakout in the energy sector and what to expect...' },
    { cat: 'Economic Update', date: 'Oct 12, 2026', title: 'SBP announces monetary policy decision', excerpt: 'The State Bank of Pakistan has maintained the policy rate, signaling macroeconomic stability...' },
    { cat: 'Company News', date: 'Oct 10, 2026', title: 'Engro Corp declares record dividend for Q3', excerpt: 'Engro Corporation reported strong quarterly results and announced a historic dividend payout...' }
  ];

  return (
    <div className="w-full bg-white py-20 px-6 lg:px-12 flex justify-center border-t border-gray-100">
      <div className="max-w-6xl w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-2">Blog</h3>
            <h2 className="text-2xl font-extrabold text-[#0f172a]">Research & Market Insights</h2>
          </div>
          <button className="text-sm font-bold text-[#1e3a8a] flex items-center gap-1 hover:gap-2 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((a, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-[#1e3a8a] bg-blue-50 px-2 py-1 rounded group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors duration-300">{a.cat}</span>
                  <span className="text-[10px] text-gray-400 font-medium">{a.date}</span>
                </div>
                <h4 className="font-bold text-[#0f172a] text-sm mb-2 group-hover:text-[#1e3a8a] transition-colors line-clamp-2">{a.title}</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
              </div>
              <div className="text-[10px] font-bold text-[#1e3a8a] flex items-center gap-1">Read More →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
