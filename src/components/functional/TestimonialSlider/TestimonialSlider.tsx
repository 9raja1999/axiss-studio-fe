'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { motion, AnimatePresence } from 'framer-motion';

import Avatar from '@/components/ui/Avatar/Avatar';
import Rating from '../../ui/Rating/Rating';
import { ITestimonialSliderProps } from '@/types';

export default function TestimonialSlider({ title, testimonials }: ITestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials?.[activeIndex];

  return (
    <section className='w-full mb-[200px]'>
      <div className='w-[90%] mx-auto grid grid-cols-12 gap-x-4 md:gap-x-6 mb-[56px]'>
        <div className='col-span-12 md:col-span-8'>
          <h2 className='font-sans font-medium text-[80px] leading-snug md:leading-[120%] whitespace-pre-line'>
            {title}
          </h2>
        </div>
      </div>
      <div className='w-[90%] mx-auto grid grid-cols-12 gap-x-6'>
        {/* LEFT — Swiper vertical */}
        <div className='col-span-2 h-[600px]'>
          <Swiper
            direction='vertical'
            slidesPerView='auto'
            spaceBetween={24}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className='h-full'
          >
            {testimonials?.map((t, idx) => (
              <SwiperSlide key={idx} style={{ height: 'auto' }}>
                <div
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer transition-opacity ${
                    activeIndex === idx ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <Avatar image={t.avatar} size={64} color='#EEF0F3' className='mb-6' />
                  <p className='ml-3'>{t.authorName}</p>
                  <p className='ml-3'>{t.authorTitle}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT — Framer Motion */}
        <div className='col-span-10 flex items-center'>
          <AnimatePresence mode='wait'>
            {active && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className='w-full pl-[112px]'
              >
                <Rating value={active.rating} size={32} className='mb-[18px]' />

                <p className='font-sans text-[48px] leading-[120%]'>{active.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
