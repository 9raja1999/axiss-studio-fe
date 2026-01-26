'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMessagingSliderProps } from '@/types';
import 'swiper/css';
import 'swiper/css/pagination';

export default function MessagingSlider({ slides }: IMessagingSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      direction='horizontal'
      initialSlide={0}
      slidesPerView={1.5}
      spaceBetween={24}
      speed={3000}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {slides?.map((slide, idx) => (
        <SwiperSlide key={idx} className='w-[200px] pl-[10%]'>
          <div
            className={`relative h-[280px] border border-[#F4F4F4] rounded-2xl`}
            style={{ backgroundColor: slide.bgColor }}
          >
            <Image
              src={slide.image}
              alt='profile image'
              fill
              className='object-cover rounded-2xl'
            />
            <AnimatePresence>
              {/* Show message only if this slide is active */}
              {slide.message && idx === activeIndex && (
                <motion.div
                  key={slide.message}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className='absolute top-4 left-0 transform translate-x-[-50%] pr-3'
                >
                  <span className='font-sans text-white text-base font-normal bg-secondary rounded-l-full rounded-tr-full px-5 py-2.5 inline-block'>
                    {slide.message}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className='font-sans text-base font-normal mb-2 capitalize'>{slide.title}</p>
          <p className='font-sans text-[12px] text-[#596E85] font-normal uppercase'>
            {slide.subTitle}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
