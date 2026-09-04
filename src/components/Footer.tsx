import React from 'react';
import { ArrowRight } from 'lucide-react';

// Custom SVGs for brand icons since lucide-react removed them
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Top CTA area */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center bg-[#102a4c] p-8 md:p-12 rounded-[32px] mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Ready to start trading?</h3>
            <p className="text-blue-200 text-sm">Open your digital account in under 5 minutes.</p>
          </div>
          <div className="relative z-10">
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-[#102a4c] text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Open Account Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white text-[#102a4c] flex items-center justify-center font-black text-sm shadow-sm">
                T
              </div>
              <span className="text-lg font-extrabold text-white">Tamkeen Securities</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-sm leading-relaxed">
              Pakistan's leading digital brokerage platform, providing access to PSX, PMEX, and expert financial advisory.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#3b82f6] hover:text-white transition-colors cursor-pointer"><TwitterIcon /></div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#3b82f6] hover:text-white transition-colors cursor-pointer"><LinkedinIcon /></div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#3b82f6] hover:text-white transition-colors cursor-pointer"><FacebookIcon /></div>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Platforms</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Web Trading</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App (iOS)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App (Android)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Desktop Pro</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Branch Network</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SECP Regulations</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tamkeen Securities. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Regulated by SECP</span>
            <span>TREC Holder PSX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
