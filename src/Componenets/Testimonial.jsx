import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'>
      <Title 
        title="What Our Guests Say" 
        subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world." 
      />
      
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="group relative rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          >
            {/* Card with glowing border only on hover */}
            <div className="p-[2px] rounded-xl">
              <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-500 group-hover:glowing-border">
                
                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img 
                    className="w-12 h-12 rounded-full border border-gray-200" 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                  />
                  <div>
                    <p className="font-playfair text-xl">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.address}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-4">
                  <StarRating />
                </div>

                {/* Review */}
                <p className="text-gray-600 max-w-90 mt-4 italic leading-relaxed">
                  "{testimonial.review}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
