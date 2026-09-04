import React from 'react';
import { Apple, Play } from 'lucide-react';

const CTABanner = () => {
  return (
    <div className="w-full bg-[#1e3a8a] py-16 px-6 flex flex-col items-center text-center">
      <h2 className="text-3xl font-extrabold text-white mb-4">Start Trading on PSX Today</h2>
      <p className="text-blue-100 text-sm mb-8 max-w-md">Join thousands of successful investors. Open your account completely digitally in under 5 minutes.</p>

      <div className="flex gap-4 mb-12">
        <button className="px-8 py-3 bg-white text-[#1e3a8a] text-sm font-bold rounded-lg shadow-lg hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 transition-all duration-300">
          Open Digital Account
        </button>
        <button className="px-8 py-3 bg-[#1e293b] text-white text-sm font-bold rounded-lg shadow-lg hover:bg-[#0f172a] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 border border-slate-700">
          Try Demo Account
        </button>
      </div>

      {/* <div className="text-[10px] text-blue-200 uppercase tracking-widest mb-6">Available on all devices</div> */}

      {/* <div className="flex flex-wrap justify-center gap-4">
        <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Apple className="w-5 h-5 text-gray-900" />
          <div className="text-left">
            <div className="text-[8px] text-gray-500 leading-none">Download on the</div>
            <div className="text-xs font-bold text-gray-900 leading-none">App Store</div>
          </div>
        </button>
        <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Play className="w-5 h-5 text-gray-900" />
          <div className="text-left">
            <div className="text-[8px] text-gray-500 leading-none">GET IT ON</div>
            <div className="text-xs font-bold text-gray-900 leading-none">Google Play</div>
          </div>
        </button>
        <button className="flex items-center justify-center bg-white px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-xs font-bold text-gray-900">
          Web Platform
        </button>
        <button className="flex items-center justify-center bg-white px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-xs font-bold text-gray-900">
          Desktop Pro
        </button>
      </div> */}
    </div>
  );
};

export default CTABanner;
