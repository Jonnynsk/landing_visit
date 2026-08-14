import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { content } from '../data/content';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-dark-bg text-dark-text relative overflow-hidden">
      {/* Градиентные пятна */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-10 w-48 h-48 sm:w-96 sm:h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-10 w-48 h-48 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Текстовая часть */}
          <div className="animate-slide-up min-w-0">
            {/* Бейдж */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              <Star size={16} className="text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">{content.hero.badge}</span>
            </div>

            {/* Заголовок */}
            <h1 className="text-[1.75rem] leading-tight sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              {content.hero.title}
            </h1>

            {/* Описание */}
            <p className="text-base sm:text-lg text-dark-textMuted mb-6 sm:mb-8 leading-relaxed">
              {content.hero.description}
            </p>

            {/* Список преимуществ */}
            <div className="space-y-3 mb-6 sm:mb-8">
              {content.hero.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-dark-textMuted">{feature}</span>
                </div>
              ))}
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Получить демо-версию
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className="w-full sm:w-auto border border-dark-textMuted text-dark-text px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                Рассчитать стоимость
              </button>
            </div>

            {/* Текст доверия */}
            <p className="text-xs sm:text-sm text-dark-textMuted">
              {content.hero.trustText}
            </p>
          </div>

          {/* Фото эксперта */}
          <div className="animate-scale-in min-w-0">
            <div className="relative overflow-hidden mx-auto max-w-sm lg:max-w-none">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                <div className="bg-dark-bg rounded-xl sm:rounded-2xl p-6 sm:p-12 text-center border-2 border-dashed border-dark-textMuted/30">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-4xl sm:text-6xl font-bold text-white">
                      {content.expert.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-dark-textMuted text-base sm:text-lg">Ваше фото</p>
                </div>
              </div>

              {/* Плавающие бейджи */}
              <div className="absolute top-2 left-2 sm:-top-4 sm:-left-4 bg-white text-dark-bg px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                AI Agents
              </div>
              <div className="absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 bg-accent text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                Automation
              </div>
              <div className="absolute top-1/2 right-2 sm:-right-8 bg-primary text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg transform -translate-y-1/2">
                CRM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
