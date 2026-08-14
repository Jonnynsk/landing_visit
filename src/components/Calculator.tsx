import { useState } from 'react';
import { Calculator as CalcIcon, ArrowRight } from 'lucide-react';

const Calculator = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    scale: '',
    integrations: '',
    urgency: '',
    materials: ''
  });

  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  const basePrices: { [key: string]: number } = {
    'audit': 30000,
    'agent': 90000,
    'automation': 120000,
    'integration': 70000
  };

  const multipliers = {
    scale: { '1': 1, '2-5': 1.7, '6+': 2.6 },
    integrations: { '0': 0, '1-2': 25000, '3+': 60000 },
    materials: { 'full': 1, 'partial': 1.1, 'none': 1.2 },
    urgency: { 'standard': 1, 'fast': 1.3 }
  };

  const calculatePrice = () => {
    if (!formData.projectType) return;

    let basePrice = basePrices[formData.projectType];
    let total = basePrice;

    // Применяем множители
    if (formData.scale) total *= multipliers.scale[formData.scale as keyof typeof multipliers.scale];
    if (formData.integrations) total += multipliers.integrations[formData.integrations as keyof typeof multipliers.integrations];
    if (formData.materials) total *= multipliers.materials[formData.materials as keyof typeof multipliers.materials];
    if (formData.urgency) total *= multipliers.urgency[formData.urgency as keyof typeof multipliers.urgency];

    setResult({
      min: Math.round(total * 0.85),
      max: Math.round(total * 1.25)
    });
  };

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="section-padding bg-light-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Заголовок */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4">
              <CalcIcon size={20} />
              <span className="font-medium text-sm sm:text-base">Калькулятор</span>
            </div>
            <h2 className="section-title text-light-text mb-4">
              Рассчитайте примерную стоимость внедрения
            </h2>
            <p className="text-base sm:text-lg text-light-textMuted">
              Ответьте на несколько вопросов и получите ориентировочный диапазон стоимости.
            </p>
          </div>

          {/* Форма калькулятора */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Тип проекта */}
              <div>
                <label className="block text-sm font-medium text-light-text mb-2">
                  Тип проекта
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full p-3 border border-light-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Выберите тип</option>
                  <option value="audit">Аудит и стратегия автоматизации</option>
                  <option value="agent">ИИ-агент / чат-бот</option>
                  <option value="automation">Автоматизация бизнес-процесса</option>
                  <option value="integration">Интеграция сервисов и CRM</option>
                </select>
              </div>

              {/* Масштаб задачи */}
              <div>
                <label className="block text-sm font-medium text-light-text mb-2">
                  Масштаб задачи
                </label>
                <select
                  value={formData.scale}
                  onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                  className="w-full p-3 border border-light-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Выберите масштаб</option>
                  <option value="1">1 процесс</option>
                  <option value="2-5">2–5 процессов</option>
                  <option value="6+">6+ процессов</option>
                </select>
              </div>

              {/* Интеграции */}
              <div>
                <label className="block text-sm font-medium text-light-text mb-2">
                  Нужные интеграции
                </label>
                <select
                  value={formData.integrations}
                  onChange={(e) => setFormData({ ...formData, integrations: e.target.value })}
                  className="w-full p-3 border border-light-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Выберите количество</option>
                  <option value="0">Без интеграций</option>
                  <option value="1-2">1–2 интеграции</option>
                  <option value="3+">3+ интеграции</option>
                </select>
              </div>

              {/* Срочность */}
              <div>
                <label className="block text-sm font-medium text-light-text mb-2">
                  Срочность
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  className="w-full p-3 border border-light-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Выберите срок</option>
                  <option value="standard">Стандартный срок</option>
                  <option value="fast">Ускоренный запуск</option>
                </select>
              </div>

              {/* Готовность материалов */}
              <div>
                <label className="block text-sm font-medium text-light-text mb-2">
                  Готовность материалов
                </label>
                <select
                  value={formData.materials}
                  onChange={(e) => setFormData({ ...formData, materials: e.target.value })}
                  className="w-full p-3 border border-light-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Выберите вариант</option>
                  <option value="full">Есть регламенты и данные</option>
                  <option value="partial">Частично есть</option>
                  <option value="none">Пока нет, нужна помощь</option>
                </select>
              </div>

              {/* Кнопка расчета */}
              <div className="sm:col-span-2">
                <button
                  onClick={calculatePrice}
                  disabled={!formData.projectType}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Рассчитать стоимость
                </button>
              </div>
            </div>

            {/* Результат */}
            {result && (
              <div className="animate-scale-in">
                <div className="bg-gradient-to-r from-success/10 to-accent/10 rounded-xl p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-2xl font-bold text-light-text mb-2">
                    Ориентировочная стоимость: от {formatPrice(result.min)} до {formatPrice(result.max)}
                  </h3>
                  <p className="text-light-textMuted mb-4">
                    Точная стоимость зависит от процессов, интеграций и требований к безопасности. 
                    Оставьте заявку — я уточню детали и подготовлю понятное предложение.
                  </p>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                  >
                    Получить расчет
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
