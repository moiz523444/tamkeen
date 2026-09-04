import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const CountUp = ({ to, suffix = '' }: { to: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(val).toLocaleString() + suffix;
          }
        }
      });
    }
  }, [isInView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const DirectMarketAccess = () => {
  return (
    <div className="w-full bg-white py-20 px-6 lg:px-12 flex justify-center overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side (Dark Box) */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="bg-[#17253b] rounded-3xl p-8 pb-10 shadow-2xl relative">
            {/* Background Blur */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Top Badges */}
            <div className="grid grid-cols-3 gap-3 mb-28 relative z-10">
              {['PSX', 'PMEX', 'CDC', 'NCCPL', 'SECP', 'SBP'].map((item) => (
                <div key={item} className="h-10 flex items-center justify-center bg-[#1e293b] border border-slate-700/60 text-slate-300 text-[11px] font-bold rounded-lg shadow-sm hover:border-blue-500/30 transition-colors cursor-default">
                  {item}
                </div>
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="text-slate-400 font-medium text-xs mb-1.5">
                Portfolio Value
              </div>
              <div className="text-[2.5rem] font-extrabold text-white flex items-baseline mb-2">
                <span className="text-3xl mr-2 font-bold">Rs.</span> <CountUp to={482350} />
              </div>
              <div className="text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                ▲ +12.4% this year
              </div>
            </div>
            
            {/* Decorative floating element */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-2 sm:-right-6 bg-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] flex items-center gap-3 z-20 border border-gray-100/50 w-max"
            >
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-lg shadow-inner border border-amber-100">
                🏆
              </div>
              <div className="flex flex-col pr-3">
                <span className="text-sm font-bold text-gray-900 leading-tight">SECP Regulated</span>
                <span className="text-[10px] text-gray-500 font-medium mt-0.5">PSX & PMEX Member</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side (Text) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-3xl font-extrabold text-[#0f172a] mb-6 leading-tight">
            Empowering Investors Through Direct Market Access
          </h2>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Tamkeen Securities provides state-of-the-art platforms for seamless trading on the Pakistan Stock Exchange. Execute trades with lightning speed and rely on our robust infrastructure.
          </p>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            Whether you are a seasoned investor or just starting out, we offer the tools, research, and support to help you achieve your financial goals.
          </p>
          
          <div className="flex gap-4 mb-8">
            <button className="px-6 py-3 border border-[#1e3a8a] text-[#1e3a8a] text-sm font-bold rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-extrabold text-[#1e3a8a]"><CountUp to={5} /></div>
              <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Trading Platforms</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#1e3a8a]"><CountUp to={5000} suffix="+" /></div>
              <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Active Traders</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#1e3a8a]"><CountUp to={30} suffix="+" /></div>
              <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Years Experience</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default DirectMarketAccess;
