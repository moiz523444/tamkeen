import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white/70 backdrop-blur-lg border-b border-gray-200/50 px-6 lg:px-12 py-4 flex items-center justify-between z-50 sticky top-0 transition-all shadow-sm"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-cyan-500 text-white flex items-center justify-center font-extrabold rounded-xl shadow-md group-hover:shadow-lg transition-shadow">T</div>
        <div className="flex flex-col">
          <span className="font-extrabold text-brand-dark tracking-tight leading-none text-base">TAMKEEN SECURITIES</span>
          <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase mt-0.5">PSX · PMEX · Advisory</span>
        </div>
      </div>

      {/* Middle: Toggle Pill */}
      <div className="hidden md:flex bg-gray-100/80 p-1.5 rounded-full items-center border border-gray-200/50">
        <button className="bg-white text-brand-blue text-xs font-bold px-5 py-2 rounded-full shadow-sm">PSX</button>
        <button className="text-gray-500 text-xs font-semibold px-5 py-2 rounded-full hover:text-brand-dark transition-colors">PMEX</button>
        <button className="text-gray-500 text-xs font-semibold px-5 py-2 rounded-full hover:text-brand-dark transition-colors">Advisory</button>
      </div>

      {/* Right: Links & Buttons */}
      <div className="hidden lg:flex items-center gap-8">
        <div className="flex gap-6 text-sm font-semibold text-gray-600">
          <a href="#" className="hover:text-brand-blue transition-colors">Home</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Markets</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Research</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Support</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-brand-dark border border-gray-200 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">Login</button>
          <button className="text-sm font-semibold text-white bg-brand-blue px-5 py-2.5 rounded-lg hover:bg-blue-700 hover:shadow-md hover:shadow-brand-blue/30 transition-all">Open Account</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

