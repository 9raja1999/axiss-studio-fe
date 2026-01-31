'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icons from '@/components/ui/Icon/Icons';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ICaseStudySliderprops } from '@/types';
import 'swiper/css';
import 'swiper/css/pagination';
import { cn } from '../../../utils';

export default function CaseStudySlider({ title, description, slides }: ICaseStudySliderprops) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const totalSlides = slides?.length || 0;
  const progress = totalSlides ? ((activeIndex + 1) / totalSlides) * 100 : 0;

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;

    if (isPlaying) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section className='w-full py-7 md:py-[100px]'>
      <div className='w-[90%] mx-auto grid grid-cols-12 gap-6'>
        <div className='col-span-10 col-start-2 grid grid-cols-10 gap-6'>
          <div className='col-span-10 w-full flex flex-wrap gap-6 md:gap-[120px]'>
            <div className='flex-1 shrink-0'>
              <h2 className='font-sans text-5xl font-medium leading-snug md:leading-[120%]'>
                {title}
              </h2>
            </div>
            <div className='w-[336px]'>
              <p className='font-sans text-3xl md:text-[38px] leading-snug md:leading-[120%] text-[#596E85] mb-4 md:mb-[56px]'>
                {description}
              </p>

              <div className='flex items-center justify-start gap-2'>
                <button
                  onClick={toggleAutoplay}
                  className='relative w-6 h-6 overflow-hidden bg-[#596E85] rounded-full'
                >
                  <Icons
                    name={isPlaying ? 'pause.svg' : 'play.svg'}
                    size={8}
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                  />
                </button>

                <div className='flex items-center gap-1 w-1/3'>
                  {/* Progress bar */}
                  <div className='relative flex-1 h-2 bg-gray-100 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-secondary rounded-l-full transition-all duration-300'
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Steps */}
                  <div className='flex items-center gap-1'>
                    {slides?.map((_, i) => (
                      <span
                        key={i}
                        onClick={() => swiperRef.current?.slideToLoop(i)}
                        className={cn(
                          'w-2 h-2 rounded-full bg-gray-100 cursor-pointer',
                          i === activeIndex && 'bg-secondary',
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[95%] grid grid-cols-12 gap-6 ml-auto md:mt-[120px]'>
        <div className='col-start-2 col-span-12'>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            direction='horizontal'
            initialSlide={0}
            slidesPerView={2.5}
            spaceBetween={20}
            speed={3000}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 8 },
              480: { slidesPerView: 1.1, spaceBetween: 8 },
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              768: { slidesPerView: 2.5, spaceBetween: 20 },
              1024: { slidesPerView: 2.5, spaceBetween: 20 },
            }}
            freeMode={true}
            modules={[Mousewheel, Pagination, Autoplay]}
            className='h-full'
          >
            {slides?.map((slide, idx) => (
              <SwiperSlide key={idx} className='md:w-[536px]! md:h-[536px]! overflow-hidden'>
                <div
                  className='w-full h-full rounded-4xl pl-6 pt-6 md:pl-[56px] md:pt-[56px] overflow-hidden border border-[#E7E7E7]'
                  style={{ background: slide?.bgColor }}
                >
                  <div className='rounded-tl-3xl h-full relative overflow-hidden'>
                    <Image
                      src={slide?.image?.src}
                      alt={slide?.image?.alt}
                      fill
                      className={cn('object-cover object-left', slide?.image?.className)}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
