import { Building2, Mail } from 'lucide-react';

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
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const ContactUs = () => {
  return (
    <main className="w-full bg-[#f4f6f8] min-h-screen">
      {/* 1. Header Section */}
      <div className="bg-white w-full border-b border-gray-100">
        <section className="pt-24 pb-16 px-6 lg:px-12 max-w-6xl mx-auto">
          <span className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-4 block">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Contact Us
          </h1>
          <p className="text-slate-500 text-base max-w-xl leading-relaxed">
            Reach out to our team in Lahore or Karachi. We're here to help you get started.
          </p>
        </section>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Our Offices */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-brand-dark mb-4">Our Offices</h3>
            
            {/* Lahore Office */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-brand-dark">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-brand-dark text-[15px]">Lahore — Head Office</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-2">ADDRESS</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Office No. 2, Ground Floor, LSE Plaza (North), PSX Building, 19-Khayaban-e-Aiwan-e-Iqbal Road, Lahore
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-2">PHONE</p>
                  <div className="text-sm text-gray-500 flex flex-col gap-1 mb-4">
                    <span>+92 423 631 2132</span>
                    <span>+92 334 623 3007</span>
                    <span>+92 323 357 5795</span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-2">CONTACT PERSON</p>
                  <p className="text-sm text-gray-500">Muhammad Hassan Arshad</p>
                </div>
              </div>
            </div>

            {/* Karachi Office */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-brand-dark">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-brand-dark text-[15px]">Karachi — Facilitation Centre</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-2">ADDRESS</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Office No. 12, Al-Syed Arcade, 2nd Floor, Block No. 5, Gulshan-e-Iqbal, Karachi
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-2">PHONE</p>
                  <div className="text-sm text-gray-500 flex flex-col gap-1 mb-4">
                    <span>+92 21 37123045</span>
                    <span>+92 335 0724724</span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-2">CONTACT PERSON</p>
                  <p className="text-sm text-gray-500">Mr. Aqeel</p>
                </div>
              </div>
            </div>

            {/* Email & Social Media */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
              <h4 className="font-bold text-brand-dark text-[15px]">Email & Social Media</h4>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-brand-dark">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:info@tamkeensecurities.com" className="text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors">
                  info@tamkeensecurities.com
                </a>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                  <FacebookIcon />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#E4405F] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                  <InstagramIcon />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                  <TwitterIcon />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Send Us a Message */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-brand-dark mb-4">Send Us a Message</h3>
            
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <form className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-brand-dark">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-sm"
                    />
                  </div>
                  
                  {/* Age */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-brand-dark">
                      Age
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your age"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-brand-dark">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-sm"
                    />
                  </div>
                  
                  {/* Mobile / WhatsApp */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-brand-dark">
                      Mobile / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+92 300 0000000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Source of Income */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-brand-dark">
                    Source of Income
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-sm appearance-none bg-white text-gray-500">
                    <option value="" disabled selected>Select source of income</option>
                    <option value="salary">Salary</option>
                    <option value="business">Business</option>
                    <option value="investments">Investments</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button 
                  type="button"
                  className="w-full bg-[#1e2a4a] text-white font-bold py-4 rounded-xl hover:bg-[#101828] transition-colors mt-2 shadow-sm"
                >
                  Submit →
                </button>

                {/* Footer text */}
                <p className="text-center text-[11px] text-gray-500 mt-2">
                  Or call us directly: <strong className="text-brand-dark font-medium">+92 334 623 3007</strong> (Lahore)  <strong className="text-brand-dark font-medium">+92 335-0724724</strong> (Karachi)
                </p>

              </form>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
