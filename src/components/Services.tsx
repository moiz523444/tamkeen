import React from 'react';

const Services = () => {
  const services = [
    { title: 'Equity Trading', icon: '📈', desc: 'Seamless access to Pakistan Stock Exchange with real-time data.' },
    { title: 'Mutual Funds', icon: '💰', desc: 'Invest in top-performing mutual funds effortlessly.' },
    { title: 'PMEX Trading', icon: '🛢️', desc: 'Trade commodities with our advanced PMEX platform.' },
    { title: 'Roshan Digital Account', icon: '🌍', desc: 'Exclusively for Non-Resident Pakistanis.' },
    { title: 'Advisory Services', icon: '🤝', desc: 'Expert financial advice tailored to your goals.' },
    { title: 'Research & Insights', icon: '📊', desc: 'In-depth market analysis and research reports.' },
  ];

  return (
    <div className="w-full bg-[#f8fafc] py-20 px-6 lg:px-12 flex justify-center border-t border-gray-100">
      <div className="max-w-6xl w-full text-center">
        <h3 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Our Services</h3>
        <h2 className="text-3xl font-extrabold text-[#0f172a] mb-12">Comprehensive Financial Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0">
                {srv.icon}
              </div>
              <div>
                <h4 className="font-bold text-[#0f172a] mb-1">{srv.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
