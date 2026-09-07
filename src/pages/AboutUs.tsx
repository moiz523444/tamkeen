import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <main className="w-full bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center min-h-[40vh]">
        <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4 block">ABOUT US</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight max-w-3xl mb-6">
          Empowering Pakistan's Next Generation of Investors
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
          Tamkeen Securities is Pakistan's first fully digital securities broker — built on the conviction that every Pakistani deserves access to the tools, knowledge, and markets that create lasting wealth.
        </p>
      </section>

      {/* 2. What does Tamkeen mean? */}
      <section className="bg-[#1e2a4a] text-white py-20 px-6 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-4 block">THE NAME</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What does Tamkeen mean?</h2>
            <p className="text-slate-300 leading-relaxed">
              <strong>Tamkeen (تمكين)</strong> is an Arabic word meaning empowerment — to give someone the ability, authority, and means to achieve their goals. It is this principle that drives everything we do: empowering ordinary Pakistanis to build financial independence through legal investing on PSX.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-6 rounded-xl flex flex-col items-center justify-center text-center border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <span className="text-2xl font-bold mb-1">تمكين</span>
              <span className="text-xs text-slate-400">Tamkeen - Empowerment</span>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl flex flex-col items-center justify-center text-center border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <span className="text-xl font-bold mb-1">PSX</span>
              <span className="text-xs text-slate-400">Pakistan Stock Exchange</span>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl flex flex-col items-center justify-center text-center border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <span className="text-xl font-bold mb-1">PMEX</span>
              <span className="text-xs text-slate-400">Commodity Exchange</span>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl flex flex-col items-center justify-center text-center border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <span className="text-xl font-bold mb-1">SECP</span>
              <span className="text-xs text-slate-400">Licensed & Regulated</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl mb-6">🔭</div>
            <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-4">OUR VISION</h3>
            <p className="text-gray-600 leading-relaxed">
              To promote Islamic and conventional investments via the Pakistan Stock Exchange, enabling broad financial independence among the masses — and to become the primary, generational choice for individuals seeking wealth through PSX.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl mb-6">🎯</div>
            <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-4">OUR MISSION</h3>
            <p className="text-gray-600 leading-relaxed">
              To make investing simple, accessible, and trustworthy for every Pakistani — by combining cutting-edge digital technology with professional market expertise, transparent pricing, and dedicated personal support.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="bg-slate-100 py-20 px-6 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Core Values</h2>
            <p className="text-gray-500">The principles that guide every decision we make at Tamkeen Securities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="text-2xl mb-4">🤝</div>
              <h4 className="font-bold text-brand-dark mb-2">Financial Empowerment</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                "Tamkeen" derives from Arabic — meaning to empower. We exist to help every Pakistani achieve financial independence through legal, structured investing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="text-2xl mb-4">☪️</div>
              <h4 className="font-bold text-brand-dark mb-2">Islamic Investment Principles</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                We actively promote Shariah-compliant investment opportunities on PSX, enabling investors to grow wealth in accordance with their values.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="text-2xl mb-4">🏛️</div>
              <h4 className="font-bold text-brand-dark mb-2">Trust & Transparency</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                SECP licensed, PSX and PMEX full member. All commissions and charges disclosed upfront with no hidden fees.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="text-2xl mb-4">🌍</div>
              <h4 className="font-bold text-brand-dark mb-2">Broad Accessibility</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                From a student opening a Sahulat account with PKR 5,000 to an overseas Pakistani investing via Roshan Digital — Tamkeen serves every investor.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="text-2xl mb-4">📈</div>
              <h4 className="font-bold text-brand-dark mb-2">Professional Standards</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Institutional-grade research, market data, and execution — delivered through a simple, fully digital experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="text-2xl mb-4">🔒</div>
              <h4 className="font-bold text-brand-dark mb-2">Security & Compliance</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Client funds are held in segregated accounts. Full regulatory compliance with SECP, NCCPL, and CDC frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Regulatory Standing */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Regulatory Standing</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">Tamkeen Securities operates under the full oversight of Pakistan's financial regulatory framework.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col justify-center min-h-[140px] hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h4 className="font-bold text-brand-dark mb-1">SECP</h4>
            <p className="text-xs text-gray-500 font-medium mb-3">Securities & Exchange Commission of Pakistan</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">Primary Regulator — Licensed Broker</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col justify-center min-h-[140px] hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h4 className="font-bold text-brand-dark mb-1">PSX</h4>
            <p className="text-xs text-gray-500 font-medium mb-3">Pakistan Stock Exchange</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">TREC Holder — Equity Trading</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col justify-center min-h-[140px] hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h4 className="font-bold text-brand-dark mb-1">PMEX</h4>
            <p className="text-xs text-gray-500 font-medium mb-3">Pakistan Mercantile Exchange</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">Registered Broker — Commodity Futures</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col justify-center min-h-[140px] hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h4 className="font-bold text-brand-dark mb-1">NCCPL / CDC</h4>
            <p className="text-xs text-gray-500 font-medium mb-3">Clearing & Depository</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">Clearing Member · Depository Participant</p>
          </div>
        </div>
      </section>

      {/* 6. Our Offices */}
      <section className="bg-slate-100 py-20 px-6 lg:px-12 w-full">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-brand-dark">Our Offices</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center text-xl">🏢</div>
                <h4 className="font-bold text-brand-dark">Lahore — Head Office</h4>
              </div>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue mt-1">📍</span>
                  <span>Office No. 2, Ground Floor, LSE Plaza (North), PSX Building, 19-Khayaban-e-Aiwan-e-Iqbal Road, Lahore</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue mt-1">📞</span>
                  <div className="flex flex-col">
                    <span>+92 423 631 2132</span>
                    <span>+92 334 823 3007</span>
                    <span>+92 323 357 5795</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-blue">✉️</span>
                  <span>info@tamkeensecurities.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-blue">👤</span>
                  <span>Muhammad Hassan Arshad — +92 334 623 3007</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center text-xl">🏢</div>
                <h4 className="font-bold text-brand-dark">Karachi — Facilitation Centre</h4>
              </div>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue mt-1">📍</span>
                  <span>Office No. 12, Al-Syed Arcade, 2nd Floor, Block No. 5, Gulshan-e-Iqbal, Karachi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue mt-1">📞</span>
                  <div className="flex flex-col">
                    <span>+92 21 37123045</span>
                    <span>+92 335 0724724</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-blue">✉️</span>
                  <span>info@tamkeensecurities.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-blue">👤</span>
                  <span>Mr. Aqeel — +92 335 0724724</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
