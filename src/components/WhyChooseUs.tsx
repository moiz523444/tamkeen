import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: '🛡️', title: 'Regulated & Secure', desc: 'Licensed by SECP and regulated by the PSX.' },
    { icon: '⚡', title: 'Lightning Fast Trading', desc: 'Execute trades instantly with zero delay.' },
    { icon: '📱', title: 'Omnichannel Access', desc: 'Trade on Web, Mobile, or Desktop seamlessly.' },
    { icon: '🎓', title: 'Financial Literacy', desc: 'Free educational resources and webinars.' },
    { icon: '🤝', title: 'Dedicated Support', desc: '24/7 customer service via chat and call.' },
    { icon: '📊', title: 'Advanced Analytics', desc: 'Access premium charting and technical tools.' },
  ];

  return (
    <div className="w-full bg-[#f8fafc] py-20 px-6 lg:px-12 flex justify-center border-t border-gray-100">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl font-extrabold text-[#0f172a] mb-2">Why Choose Tamkeen Securities?</h2>
        <p className="text-sm text-gray-500 mb-12">Discover the Tamkeen difference in your investment journey.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4 text-left hover:border-[#1e3a8a]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-lg shrink-0">
                {r.icon}
              </div>
              <div>
                <h4 className="font-bold text-[#0f172a] text-sm mb-0.5">{r.title}</h4>
                <p className="text-[10px] text-gray-500 leading-tight">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
