import { content } from '../data/content';

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const competencies = [
    'AI Agents', 'Business Automation', 'CRM', 'Integrations', 
    'Chatbots', 'Analytics', 'Process Optimization', 'LLM / AI Tools'
  ];

  return (
    <section id="about" className="section-padding bg-light-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in">
          {/* Фото */}
          <div className="order-2 lg:order-1 min-w-0">
            <div className="relative overflow-hidden mx-auto max-w-sm lg:max-w-none">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-12 text-center border-2 border-dashed border-light-border">
                  <div className="w-40 h-40 sm:w-64 sm:h-64 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-4xl sm:text-6xl font-bold text-white">
                      {content.expert.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-light-textMuted text-base sm:text-lg">Ваше фото</p>
                </div>
              </div>
            </div>
          </div>

          {/* Текст */}
          <div className="order-1 lg:order-2 min-w-0">
            <h2 className="section-title text-light-text mb-4 sm:mb-6">
              Обо мне
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-light-text mb-2">
                {content.expert.name}
              </h3>
              <p className="text-lg text-primary font-medium mb-4">
                {content.expert.role}
              </p>
            </div>

            <p className="text-base sm:text-lg text-light-textMuted mb-4 sm:mb-6 leading-relaxed">
              {content.expert.description}
            </p>

            {/* Факты */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-light-text">Работаю с бизнес-задачами, а не просто настраиваю технологии</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-light-text">Помогаю выбрать решение под бюджет и процессы компании</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-light-text">Объясняю простым языком и довожу до результата</span>
              </div>
            </div>

            {/* Компетенции */}
            <div className="mb-8">
              <h4 className="font-semibold text-light-text mb-4">Компетенции</h4>
              <div className="flex flex-wrap gap-2">
                {competencies.map((comp, index) => (
                  <span 
                    key={index}
                    className="bg-light-bg text-light-text px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Кнопка */}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white px-6 sm:px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              Обсудить задачу
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
