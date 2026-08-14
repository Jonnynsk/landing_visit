import { ArrowRight, MessageCircle, Zap, Link, Search } from 'lucide-react';
import { content } from '../data/content';

const ServicesSection = () => {
  const icons = [MessageCircle, Zap, Link, Search];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h2 className="section-title text-light-text mb-4">
            {content.services.title}
          </h2>
          <p className="text-base sm:text-lg text-light-textMuted max-w-3xl mx-auto">
            {content.services.subtitle}
          </p>
        </div>

        {/* Карточки услуг */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {content.services.items.map((service, index) => {
            const IconComponent = icons[index] || MessageCircle;
            return (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  {/* Иконка */}
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl w-fit mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-xl font-bold text-light-text mb-3">
                    {service.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-light-textMuted mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Что входит */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-light-text mb-2">Что входит:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-center gap-2 text-sm text-light-textMuted">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Кнопка */}
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="mt-auto bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Узнать подробнее
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
