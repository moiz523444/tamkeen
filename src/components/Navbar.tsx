import React from 'react';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 lg:px-12 py-3 flex items-center justify-between z-50 sticky top-0">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#1e3a8a] text-white flex items-center justify-center font-bold rounded">T</div>
        <div className="flex flex-col">
          <span className="font-bold text-[#1e3a8a] leading-none text-sm">TAMKEEN SECURITIES</span>
          <span className="text-[10px] text-gray-500">PSX · PMEX · Advisory</span>
        </div>
      </div>

      {/* Middle: Toggle Pill */}
      <div className="hidden md:flex bg-gray-100 p-1 rounded-full items-center">
        <button className="bg-[#1e3a8a] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">PSX</button>
        <button className="text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full hover:text-gray-900">PMEX</button>
        <button className="text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full hover:text-gray-900">Advisory</button>
      </div>

      {/* Right: Links & Buttons */}
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex gap-4 text-xs font-medium text-gray-600">
          <a href="#" className="hover:text-[#1e3a8a]">Home</a>
          <a href="#" className="hover:text-[#1e3a8a]">Markets</a>
          <a href="#" className="hover:text-[#1e3a8a]">Research</a>
          <a href="#" className="hover:text-[#1e3a8a]">Support</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-xs font-semibold text-gray-600 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">Login</button>
          <button className="text-xs font-semibold text-white bg-[#1e3a8a] px-4 py-2 rounded hover:bg-blue-900">Open Account</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
