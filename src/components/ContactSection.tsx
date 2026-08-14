import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = { name: '', phone: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите ваш телефон';
    } else if (!/^[\+]?[78]?[\s\-\(]?\d{3}[\s\-\)]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Имитация отправки формы
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', phone: '' });
        
        // Сброс состояния через 5 секунд
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очистка ошибки при вводе
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Получить демо-версию и расчёт под вашу задачу
            </h2>
            <p className="text-lg text-white/80">
              Оставьте контакты — я свяжусь, уточню задачу и предложу подходящий вариант внедрения.
            </p>
          </div>

          {/* Форма */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-light-text mb-2">
                  Заявка отправлена
                </h3>
                <p className="text-light-textMuted">
                  Свяжусь с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Поле имени */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light-text mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.name ? 'border-error' : 'border-light-border'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-error text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Поле телефона */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-light-text mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.phone ? 'border-error' : 'border-light-border'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-error text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Кнопка отправки */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Отправить заявку
                    </>
                  )}
                </button>

                {/* Текст согласия */}
                <p className="text-center text-sm text-light-textMuted">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
