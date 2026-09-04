import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="w-full relative bg-brand-light overflow-hidden py-24 px-6 lg:px-12 flex justify-center min-h-[90vh] items-center">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl mix-blend-multiply pointer-events-none animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="flex gap-3 mb-8 flex-wrap">
            <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-xs font-bold rounded-full">TAMKEEN SECURITIES</span>
            <span className="px-4 py-1.5 bg-white text-gray-600 border border-gray-200 text-xs font-semibold rounded-full shadow-sm">PSX Markets Open</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-dark leading-[1.1] mb-6">
            Invest Smarter.<br/>
            <span className="text-gradient">Grow Stronger.</span>
          </h1>
          
          <p className="text-gray-600 mb-10 max-w-lg leading-relaxed text-lg font-light">
            Pakistan's premier brokerage house. Seamless access to the stock market, mutual funds, and expert advisory all in one premium digital experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <button className="px-8 py-4 bg-brand-blue text-white text-base font-semibold rounded-xl hover:bg-blue-700 hover:shadow-xl hover:shadow-brand-blue/30 transition-all duration-300 flex items-center justify-center gap-2 group">
              Open Trading Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-brand-dark border border-gray-200 text-base font-semibold rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              Explore Features
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 border-y border-gray-200/60 py-6 w-full max-w-lg">
            <div>
              <div className="text-2xl font-extrabold text-brand-dark">PKR 5K</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">Min. Deposit</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-brand-dark">100%</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">Digital</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-brand-dark">PSX</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">Listed Access</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center h-full"
        >
          
          {/* Floating Card 1 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -left-8 top-16 glass-panel p-4 rounded-2xl z-20 flex flex-col gap-1.5 w-40"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-500 uppercase">KSE 100</span>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <span className="text-lg font-bold text-brand-dark">47,832.10</span>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md w-max">▲ 1.24%</span>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 top-32 bg-brand-dark text-white p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3 border border-white/10"
          >
            <div className="bg-brand-blue/20 p-2 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-brand-blue" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Secure Account</span>
              <span className="text-xs text-gray-400">Bank-grade security</span>
            </div>
          </motion.div>

          {/* Mobile Phone Mockup */}
          <div className="relative z-10 w-[280px] h-[580px] bg-white rounded-[48px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border-[10px] border-slate-900 overflow-hidden flex flex-col">
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-2xl w-32 mx-auto z-30"></div>
            
            <div className="bg-brand-dark p-6 pt-12 text-white pb-8">
              <div className="text-xs text-gray-400 mb-1.5 font-medium">Portfolio Value</div>
              <div className="text-3xl font-extrabold mb-3 tracking-tight">Rs. 485,200</div>
              <div className="text-xs bg-emerald-500/20 text-emerald-400 inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-medium">
                ▲ +2.64% Today
              </div>
            </div>
            <div className="p-5 flex-1 bg-gray-50/50">
              <div className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">Top Movers</div>
              <div className="space-y-3">
                {[
                  { sym: 'HUBC', name: 'Hub Power', price: '115.40', up: true },
                  { sym: 'OGDC', name: 'OGDCL', price: '124.50', up: true },
                  { sym: 'SYS', name: 'Systems Ltd', price: '412.10', up: false },
                ].map((s, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-xl shadow-sm flex justify-between items-center border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${s.up ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                        {s.sym[0]}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-dark">{s.sym}</div>
                        <div className="text-[10px] text-gray-500">{s.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-brand-dark">{s.price}</div>
                      <div className={`text-[10px] font-bold mt-0.5 ${s.up ? 'text-emerald-500' : 'text-red-500'}`}>{s.up ? '▲' : '▼'} 1.2%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

