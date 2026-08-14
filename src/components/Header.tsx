import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { content } from '../data/content';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Услуги', id: 'services' },
    { label: 'Кейсы', id: 'cases' },
    { label: 'Калькулятор', id: 'calculator' },
    { label: 'Обо мне', id: 'about' },
    { label: 'Отзывы', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Контакты', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-light-text hover:text-primary transition-colors"
            >
              {content.expert.name}
            </button>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-light-text hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Кнопка CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Получить демо
            </button>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light-text p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Мобильное меню dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-xl shadow-xl mt-2 py-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-light-text hover:text-primary hover:bg-light-bg rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium mt-2"
              >
                Получить демо
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
