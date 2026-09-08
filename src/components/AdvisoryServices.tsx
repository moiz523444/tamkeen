const AdvisoryServices = () => {
  const services = [
    { title: 'Portfolio Management', icon: '📊', desc: 'Comprehensive strategies to optimize asset allocation and maximize returns.' },
    { title: 'Equity Research', icon: '🔍', desc: 'In-depth fundamental and technical analysis to identify the best market opportunities.' },
    { title: 'Strategic Advisory', icon: '🎯', desc: 'Personalized guidance to navigate complex financial decisions with confidence.' },
    { title: 'Personalized Asset Allocation', icon: '🧩', desc: 'Customized investment mix designed to align with your risk profile and objectives.' },
    { title: 'Retirement Planning', icon: '⏳', desc: 'Long-term strategies to ensure financial security and a comfortable retirement.' },
    { title: 'Fixed Income Investments', icon: '🛡️', desc: 'Stable and reliable investment options to protect your capital and generate steady income.' },
  ];

  return (
    <div className="w-full bg-white py-20 px-6 lg:px-12 flex justify-center">
      <div className="max-w-6xl w-full text-center">
        <h3 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Our Expertise</h3>
        <h2 className="text-3xl font-extrabold text-[#0f172a] mb-4">Empowering Investors Through Smarter Market Access</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our advisory team leverages deep market knowledge and advanced analytics to design portfolios tailored to your unique goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-12">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {srv.icon}
              </div>
              <div>
                <h4 className="font-bold text-[#0f172a] mb-1">{srv.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0f172a] rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">Schedule an Advisory Consultation</h3>
            <p className="text-sm text-gray-300 mb-8 max-w-lg mx-auto">
              Speak to our dedicated advisors to create a personalized strategy for your financial needs and long-term goals.
            </p>
            <button className="bg-amber-500 hover:bg-amber-400 text-[#0f172a] text-sm font-bold py-3.5 px-8 rounded-xl transition-colors shadow-lg shadow-amber-500/20">
              Request Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdvisoryServices;
