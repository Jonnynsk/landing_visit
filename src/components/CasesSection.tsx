import { ExternalLink, Target, TrendingUp } from 'lucide-react';
import { content } from '../data/content';

const CasesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cases" className="py-20 bg-light-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-light-text mb-4">
            {content.cases.title}
          </h2>
          <p className="text-lg text-light-textMuted max-w-3xl mx-auto">
            {content.cases.subtitle}
          </p>
        </div>

        {/* Карточки кейсов */}
        <div className="grid md:grid-cols-2 gap-8">
          {content.cases.items.map((caseItem, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                {/* Тег ниши */}
                <div className="inline-flex items-center gap-2 bg-light-bg px-3 py-1 rounded-full mb-4">
                  <Target size={14} className="text-primary" />
                  <span className="text-sm font-medium text-light-text">{caseItem.niche}</span>
                </div>

                {/* Задача */}
                <div className="mb-4">
                  <h4 className="font-semibold text-light-text mb-2">Задача</h4>
                  <p className="text-light-textMuted">{caseItem.task}</p>
                </div>

                {/* Решение */}
                <div className="mb-4">
                  <h4 className="font-semibold text-light-text mb-2">Решение</h4>
                  <p className="text-light-text">{caseItem.solution}</p>
                </div>

                {/* Результат */}
                <div className="mb-6">
                  <h4 className="font-semibold text-light-text mb-2 flex items-center gap-2">
                    <TrendingUp size={16} className="text-success" />
                    Результат
                  </h4>
                  <p className="text-light-text">{caseItem.result}</p>
                </div>

                {/* Кнопка */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  Обсудить похожую задачу
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
