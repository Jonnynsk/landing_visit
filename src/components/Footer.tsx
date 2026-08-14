import { Mail, Phone, MessageCircle, Youtube, Linkedin } from 'lucide-react';
import { content } from '../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuSections = [
    { label: 'Услуги', id: 'services' },
    { label: 'Кейсы', id: 'cases' },
    { label: 'Калькулятор', id: 'calculator' },
    { label: 'Обо мне', id: 'about' },
    { label: 'Отзывы', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' }
  ];

  const services = [
    'ИИ-агенты и чат-боты',
    'Автоматизация процессов',
    'Интеграции и API',
    'Аудит и стратегия'
  ];

  return (
    <footer className="bg-dark-bg text-dark-text overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Информация о компании */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{content.expert.name}</h3>
            <p className="text-dark-textMuted mb-6 leading-relaxed">
              ИИ-агенты и автоматизация бизнес-процессов. Помогаю бизнесу экономить время и улучшать работу с клиентами.
            </p>
            
            {/* Контакты */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <a href={`mailto:${content.expert.email}`} className="text-dark-textMuted hover:text-white transition-colors break-all">
                  {content.expert.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <a href={`tel:${content.expert.phone}`} className="text-dark-textMuted hover:text-white transition-colors">
                  {content.expert.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-2">
              {menuSections.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-dark-textMuted hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="font-semibold text-white mb-4">Услуги</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-dark-textMuted">{service}</span>
                </li>
              ))}
            </ul>

            {/* Соцсети */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Соцсети</h4>
              <div className="flex gap-3">
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                  <MessageCircle size={20} className="text-dark-text" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                  <Youtube size={20} className="text-dark-text" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                  <Linkedin size={20} className="text-dark-text" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-dark-textMuted/20 mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <p className="text-dark-textMuted text-sm">
            © {currentYear} {content.expert.name}. Все права защищены.
          </p>
          <a href="#" className="text-dark-textMuted hover:text-white transition-colors text-sm mt-2 md:mt-0">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
