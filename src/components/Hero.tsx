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
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Текстовая часть */}
          <div className="animate-slide-up">
            {/* Бейдж */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star size={16} className="text-accent" />
              <span className="text-sm font-medium">{content.hero.badge}</span>
            </div>

            {/* Заголовок */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {content.hero.title}
            </h1>

            {/* Описание */}
            <p className="text-lg text-dark-textMuted mb-8 leading-relaxed">
              {content.hero.description}
            </p>

            {/* Список преимуществ */}
            <div className="space-y-3 mb-8">
              {content.hero.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span className="text-dark-textMuted">{feature}</span>
                </div>
              ))}
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Получить демо-версию
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className="border border-dark-textMuted text-dark-text px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Рассчитать стоимость
              </button>
            </div>

            {/* Текст доверия */}
            <p className="text-sm text-dark-textMuted">
              {content.hero.trustText}
            </p>
          </div>

          {/* Фото эксперта */}
          <div className="animate-scale-in">
            <div className="relative">
              {/* Placeholder для фото */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8">
                <div className="bg-dark-bg rounded-2xl p-12 text-center border-2 border-dashed border-dark-textMuted/30">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                    <span className="text-6xl font-bold text-white">
                      {content.expert.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-dark-textMuted text-lg">Ваше фото</p>
                </div>
              </div>

              {/* Плавающие бейджи */}
              <div className="absolute -top-4 -left-4 bg-white text-dark-bg px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                AI Agents
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Automation
              </div>
              <div className="absolute top-1/2 -right-8 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform -translate-y-1/2">
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
