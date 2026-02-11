'use client';
import { useRef, useState } from 'react';
import Icons from '@/components/ui/Icon/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { IEditorialInfiniteSliderProps } from '@/types';
import { cn } from '@/utils';
import SimpleSlide from './SimpleSlide';
import MinimalistSlide from './MinimalistSlide';
import 'swiper/css';
import 'swiper/css/pagination';

export default function EditorialInfiniteSlider(props: IEditorialInfiniteSliderProps) {
  const { title, showDescription, description, slides } = props;
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
    <section className='w-full py-7 md:pt-[200px]'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-8 w-[90%] mx-auto mb-6 md:mb-22 lg:mb-22'>
        <div className='md:col-span-8'>
          <h1 className='font-sans text-4xl text-primary font-medium leading-snug md:leading-[120%] md:text-[80x] lg:text-[80px]'>
            {title}
          </h1>
        </div>
        {showDescription && (
          <>
            <div className='hidden md:block md:col-span-1'></div>
            <div className='md:col-span-3'>
              {description && (
                <p className='font-sans text-2xl whitespace-pre-line text-[#596E85]! leading-snug md:leading-[120%] md:text-[38px] font-normal max-w-sm mb-6'>
                  {description}
                </p>
              )}

              <div className='flex items-center justify-start gap-2'>
                <button
                  onClick={toggleAutoplay}
                  className='relative w-6 h-6 overflow-hidden bg-[#596E85] rounded-full cursor-pointer'
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
          </>
        )}
      </div>
      <div className='w-full md:w-[95%] md:ml-auto overflow-x-hidden'>
        <Swiper
          direction='horizontal'
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          initialSlide={0}
          slidesPerView={3.2}
          spaceBetween={20}
          speed={3000}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 8 }, // small mobile
            480: { slidesPerView: 1.1, spaceBetween: 8 },
            640: { slidesPerView: 2.2, spaceBetween: 20 }, // tablets
            768: { slidesPerView: 3.5, spaceBetween: 20 }, // larger tablets
            1024: { slidesPerView: 3.5, spaceBetween: 20 }, // desktop
          }}
          freeMode={true} // enables smooth continuous scrolling
          modules={[Mousewheel, Pagination, Autoplay]}
          className='h-full'
        >
          {slides?.map((slide, idx) => (
            <SwiperSlide key={idx} className='md:w-[424px]!'>
              {slide.type == 'minimalist' ? (
                <MinimalistSlide {...slide} />
              ) : (
                <SimpleSlide {...slide} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
