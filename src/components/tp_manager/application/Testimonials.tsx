import React from 'react';
import type { Testimonial } from '../../../types/candidate';
import QuoteIcon from '../../../assets/Testimonials.svg'; 

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 rounded-lg shadow-sm border border-gray-200"
            style={{ backgroundColor: '#F2F7F8' }}
          >
            {/* Quote icon + text */}
            <div className="flex items-start space-x-2 mb-4">
              <img
                src={QuoteIcon}
                alt="Quote"
                className="w-6 h-6 opacity-30 mt-1 flex-shrink-0"
              />
              <p className="text-gray-700 italic leading-relaxed flex-1">
                “{testimonial.content}”
              </p>
            </div>

            {/* Rotated closing quote icon at the bottom */}
            <div className="flex justify-end mb-4">
              <img
                src={QuoteIcon}
                alt="Closing Quote"
                className="w-6 h-6 opacity-30 rotate-180"
              />
            </div>

            {/* Author info */}
            <div className="flex items-center space-x-3">
              {testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
              )}
              <div className="text-sm">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;