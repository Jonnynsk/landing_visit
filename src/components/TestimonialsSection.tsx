import { Star } from 'lucide-react';
import { content } from '../data/content';

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-light-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-light-text mb-4">
            {content.testimonials.title}
          </h2>
          <p className="text-lg text-light-textMuted max-w-3xl mx-auto">
            {content.testimonials.subtitle}
          </p>
        </div>

        {/* Карточки отзывов */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.testimonials.items.map((testimonial, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                {/* Аватар и рейтинг */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-text">{testimonial.name}</h4>
                    <p className="text-sm text-light-textMuted">{testimonial.role}</p>
                  </div>
                </div>

                {/* Рейтинг */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Текст отзыва */}
                <p className="text-light-textMuted leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
