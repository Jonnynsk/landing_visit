import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { content } from '../data/content';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-light-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-light-text mb-4">
              {content.faq.title}
            </h2>
          </div>

          {/* Аккордеон FAQ */}
          <div className="space-y-4">
            {content.faq.items.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-light-bg/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-light-text pr-4">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-primary flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0">
                    <p className="text-light-textMuted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
