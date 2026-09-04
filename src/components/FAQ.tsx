import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    { q: 'How long does it take to open an account?', a: 'With our 100% digital onboarding process, you can open an account in under 5 minutes.' },
    { q: 'What is the minimum investment required?', a: 'You can start trading with as little as PKR 5,000.' },
    { q: 'Are my investments safe with Tamkeen Securities?', a: 'Yes, we are fully regulated by the SECP and a TREC holder of the PSX. Your assets are held in secure CDC custody.' },
    { q: 'What are your brokerage charges?', a: 'We offer highly competitive and transparent commission structures with no hidden fees.' },
    { q: 'Can Overseas Pakistanis open an account?', a: 'Yes, through the Roshan Digital Account (RDA) initiative, Non-Resident Pakistanis can easily invest.' }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="w-full bg-white py-20 px-6 flex justify-center">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl font-extrabold text-[#0f172a] mb-2">Frequently Asked Questions</h2>
        <p className="text-sm text-gray-500 mb-10">Got questions? We've got answers.</p>
        
        <div className="text-left space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              layout
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button 
                className="w-full flex justify-between items-center p-4 hover:bg-blue-50/50 transition-colors text-sm font-bold text-gray-800"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                {faq.q}
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-brand-blue" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50/50 border-t border-gray-100"
                  >
                    <div className="p-4 text-sm text-gray-600">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
