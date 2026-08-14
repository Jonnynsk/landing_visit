import { Target, Zap, Clock, Users, BarChart3, Shield } from 'lucide-react';
import { content } from '../data/content';

const PainsSection = () => {
  const icons = [Target, Zap, Clock, Users, BarChart3, Shield];

  return (
    <section id="pains" className="section-padding bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h2 className="section-title text-light-text mb-4">
            {content.pains.title}
          </h2>
          <p className="text-base sm:text-lg text-light-textMuted max-w-3xl mx-auto">
            {content.pains.subtitle}
          </p>
        </div>

        {/* Боли и решения */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-16">
          {content.pains.items.map((item, index) => {
            const IconComponent = icons[index] || Target;
            return (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-light-card rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-light-text">Боль</h3>
                  </div>
                  <p className="text-light-textMuted mb-4">{item.pain}</p>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <h4 className="font-semibold text-light-text">Решение</h4>
                  </div>
                  <p className="text-light-text">{item.solution}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* УТП блок */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-4 sm:p-8 animate-fade-in">
          <h3 className="text-xl sm:text-2xl font-bold text-light-text mb-4 sm:mb-6 text-center">
            Почему выбирают меня
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {content.pains.utp.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <p className="text-light-text font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainsSection;
