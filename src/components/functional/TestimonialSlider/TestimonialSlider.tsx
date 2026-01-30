'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Avatar from '@/components/ui/Avatar/Avatar';
import Rating from '@/components/ui/Rating/Rating';
import { ITestimonialSliderProps } from '@/types';
import { cn } from '@/utils';
import 'swiper/css';

export default function TestimonialSlider({ title, testimonials }: ITestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const active = testimonials?.[activeIndex];

  return (
    <section className='w-full py-7 md:pt-[200px]'>
      <div className='w-[90%] mx-auto grid grid-cols-12 gap-x-4 md:gap-x-6 mb-[56px]'>
        <div className='col-span-12 md:col-span-8'>
          <h2 className='font-sans font-medium text-5xl md:text-[80px] leading-snug md:leading-[120%] whitespace-pre-line'>
            {title}
          </h2>
        </div>
      </div>
      <div className='w-[90%] mx-auto grid grid-cols-12 gap-x-6'>
        {/* LEFT — Swiper vertical */}
        <div className={cn('col-span-12 md:col-span-2', isMobile ? 'w-full mb-4' : 'h-[600px]')}>
          <Swiper
            direction={isMobile ? 'horizontal' : 'vertical'}
            slidesPerView='auto'
            spaceBetween={24}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className='h-full'
          >
            {testimonials?.map((t, idx) => (
              <SwiperSlide key={idx} style={{ height: 'auto' }} className='h-auto! w-auto!'>
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
        <div className='col-span-12 md:col-span-10 flex items-center'>
          <AnimatePresence mode='wait'>
            {active && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className='w-full md:pl-[112px]'
              >
                <Rating value={active.rating} size={32} classNames='mb-[18px]' showInfo={true} />

                <p className='font-sans text-2xl md:text-[48px] leading-[120%]'>
                  {active.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
