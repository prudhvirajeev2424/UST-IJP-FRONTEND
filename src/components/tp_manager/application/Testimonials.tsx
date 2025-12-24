import React from "react";
import type { Testimonial } from "../../../types/candidate";
import QuoteIcon from "../../../assets/Testimonials.svg";
import Group172902 from "../../../assets/Group 172902.svg";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 rounded-lg  border-gray-200 bg-[#FFFFFF]"
          >
            {/* Quote icon + text */}
            <div className="flex items-start space-x-2 mb-4">
              <img
                src={QuoteIcon}
                alt="Quote"
                className="w-6 h-6 opacity-4 "
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
                className="w-6 h-6 opacity-4"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>

            {/* Author info */}
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img src={Group172902} alt="badge" className="w-12 h-12" />
              </div>

              <div className="text-sm">
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
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
