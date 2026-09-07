import { Download, Smartphone, Monitor, FileText, FileEdit } from 'lucide-react';

const DownloadCard = ({ icon, title, platform, subtitle, extra }: any) => (
  <div className="bg-white px-3 py-3 pr-6 rounded-full shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer w-full">
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-xl shrink-0">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="font-bold text-brand-dark text-sm mb-0.5">{title}</h4>
        <div className="flex items-center gap-2 text-[11px]">
          {platform && <span className="px-1.5 py-0.5 bg-[#f1f5f9] text-slate-600 font-bold rounded">{platform}</span>}
          <span className="text-gray-400 font-medium">{subtitle}</span>
          {extra && <span className="text-gray-400">— {extra}</span>}
        </div>
      </div>
    </div>
    <div className="w-6 h-6 flex items-center justify-center text-gray-400 group-hover:text-brand-blue transition-colors shrink-0">
      <Download className="w-4 h-4" />
    </div>
  </div>
);

const Downloads = () => {
  return (
    <main className="w-full bg-[#f4f6f8] min-h-screen pb-24">
      {/* 1. Header Section */}
      <div className="bg-white w-full border-b border-gray-100">
        <section className="pt-24 pb-12 px-6 lg:px-12 max-w-5xl mx-auto">
          <span className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-4 block">RESOURCES</span>
          <h1 className="text-4xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Downloads
          </h1>
          <p className="text-slate-500 text-base max-w-xl leading-relaxed mb-8">
            Trading apps, desktop terminals, regulatory documents, and account opening forms — everything in one place.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-[#f4f6f8] text-slate-600 px-4 py-2 rounded-full text-xs font-medium border border-slate-200">
            <span className="opacity-70 text-sm">✏️</span> Back-office OMS provided by <strong className="text-brand-blue font-bold">EClear Services Limited</strong>
          </div>
        </section>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 mt-12 space-y-12">
        {/* 2. Mobile Trading App */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="w-6 h-6 text-brand-dark" />
            <div>
              <h3 className="text-lg font-bold text-brand-dark">Mobile Trading App</h3>
              <p className="text-xs text-slate-500 mt-0.5">Trade on PSX and PMEX from anywhere with eClear NXG — the official Tamkeen Securities mobile trading app.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-9">
            <DownloadCard 
              icon="🍎"
              title="eClear NXG — iOS (App Store)"
              platform="iOS"
              subtitle="Free"
            />
            <DownloadCard 
              icon="🤖"
              title="eClear NXG — Android (Google Play)"
              platform="Android"
              subtitle="Free"
            />
          </div>
        </section>

        {/* 3. Desktop Trading Application */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="w-6 h-6 text-brand-dark" />
            <div>
              <h3 className="text-lg font-bold text-brand-dark">Desktop Trading Application</h3>
              <p className="text-xs text-slate-500 mt-0.5">Full-featured Windows trading terminal powered by EClear OMS. Requires Java runtime.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-0 md:ml-9">
            <DownloadCard 
              icon="☕"
              title="Java Runtime (Oracle)"
              platform="Prerequisite"
              subtitle="Required"
            />
            <DownloadCard 
              icon="📊"
              title="EClear Trading Application"
              platform="Windows"
              subtitle=".jnlp"
            />
            <DownloadCard 
              icon="🍎"
              title="EClear Trading App (iOS)"
              platform="iOS"
              subtitle="Alternate"
            />
          </div>
        </section>

        {/* 4. Investor Awareness Documents */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-brand-dark" />
            <div>
              <h3 className="text-lg font-bold text-brand-dark">Investor Awareness Documents</h3>
              <p className="text-xs text-slate-500 mt-0.5">Regulatory documents and compliance policies as required by SECP.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-9">
            <DownloadCard 
              icon="📋"
              title="KYC / CDD Policy"
              platform="PDF"
              subtitle="Policy Document"
            />
            <DownloadCard 
              icon="🛡️"
              title="Anti-Money Laundering (AML) Policy"
              platform="PDF"
              subtitle="Policy Document"
            />
          </div>
        </section>

        {/* 5. Account Opening Forms */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileEdit className="w-6 h-6 text-brand-dark" />
            <div>
              <h3 className="text-lg font-bold text-brand-dark">Account Opening Forms</h3>
              <p className="text-xs text-slate-500 mt-0.5">Download and complete the relevant account opening form for your investor profile.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-9">
            <DownloadCard 
              icon="💻"
              title="Digital Account Opening Form"
              platform="Online Form"
              subtitle="Interactive"
            />
            <DownloadCard 
              icon="📃"
              title="Sahulat Account Form"
              platform="PDF"
              subtitle="Printable"
            />
          </div>
        </section>

        {/* 6. Software Disclosure */}
        <section className="pt-4 pb-12">
          <div className="bg-[#0f172a] text-white p-5 rounded-xl flex items-start gap-4 shadow-xl w-full">
            <div className="bg-blue-600 rounded flex items-center justify-center w-6 h-6 shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold font-serif italic">i</span>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1.5">Software Disclosure</h4>
              <p className="text-slate-400 text-xs leading-relaxed max-w-4xl">
                Tamkeen Securities uses the back-office and order management system (OMS) provided by <strong className="text-white">EClear Services Limited</strong>. The eClear NXG mobile app and EClear desktop terminal are third-party applications integrated into our trading infrastructure. All trade execution is conducted through PSX and PMEX regulated channels.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Downloads;
