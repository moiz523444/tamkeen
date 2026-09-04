import React, { useState, useEffect } from 'react';

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const karachiTime = time.toLocaleTimeString('en-US', { 
    timeZone: 'Asia/Karachi', 
    hour: 'numeric', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  });

  const londonTime = time.toLocaleTimeString('en-GB', { 
    timeZone: 'Europe/London', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: false
  });

  const newYorkTime = time.toLocaleTimeString('en-US', { 
    timeZone: 'America/New_York', 
    hour: 'numeric', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  });

  return (
    <div className="w-full flex flex-col font-sans">
      {/* Top Light Bar (Times) */}
      <div className="bg-[#f8fafc] text-[#64748b] text-[11px] py-2 flex justify-center items-center gap-4">
        <span className="flex items-center gap-1.5">Karachi <span className="font-bold text-gray-500 ">{karachiTime}</span></span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1.5">London <span className="font-bold text-gray-500">{londonTime} GMT</span></span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1.5">New York <span className="font-bold text-gray-500">{newYorkTime} EST</span></span>
      </div>
      
      {/* Dark Navy Ticker */}
      <div className="bg-[#1e3a8a] text-white text-[10px] py-2 overflow-hidden flex whitespace-nowrap">
        <div className="flex w-max animate-ticker">
          {/* First set of items */}
          <div className="flex gap-6 px-4">
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">AED/PKR</span> <span className="font-bold">75.65</span> <span className="text-rose-400 font-bold">▼ 0.03%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">JPY/PKR</span> <span className="font-bold">1.73</span> <span className="text-emerald-400 font-bold">▲ 0.05%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">Gold</span> <span className="font-bold">4,470.30</span> <span className="text-emerald-400 font-bold">▲ 0.34%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">Silver</span> <span className="font-bold">66.81</span> <span className="text-rose-400 font-bold">▼ 0.12%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">WTI</span> <span className="font-bold">85.10</span> <span className="text-emerald-400 font-bold">▲ 0.88%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">Brent</span> <span className="font-bold">90.14</span> <span className="text-emerald-400 font-bold">▲ 0.62%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">KSE 100</span> <span className="font-bold">178,975.67</span> <span className="text-rose-400 font-bold">▼ 0.41%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">KSE 30</span> <span className="font-bold">52,702.72</span> <span className="text-rose-400 font-bold">▼ 0.44%</span>
            </span>
          </div>

          {/* Duplicated set for seamless loop */}
          <div className="flex gap-6 px-4">
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">AED/PKR</span> <span className="font-bold">75.65</span> <span className="text-rose-400 font-bold">▼ 0.03%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">JPY/PKR</span> <span className="font-bold">1.73</span> <span className="text-emerald-400 font-bold">▲ 0.05%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">Gold</span> <span className="font-bold">4,470.30</span> <span className="text-emerald-400 font-bold">▲ 0.34%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">Silver</span> <span className="font-bold">66.81</span> <span className="text-rose-400 font-bold">▼ 0.12%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">WTI</span> <span className="font-bold">85.10</span> <span className="text-emerald-400 font-bold">▲ 0.88%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">Brent</span> <span className="font-bold">90.14</span> <span className="text-emerald-400 font-bold">▲ 0.62%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">KSE 100</span> <span className="font-bold">178,975.67</span> <span className="text-rose-400 font-bold">▼ 0.41%</span>
            </span>
            <span className="text-blue-800">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-200">KSE 30</span> <span className="font-bold">52,702.72</span> <span className="text-rose-400 font-bold">▼ 0.44%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
