'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import { useDrawers } from '@/components/context/DrawersContext';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button/Button';
import { IExpertiseSliderProps } from '@/types';
import { ButtonSizeEnum, ButtonTypeEnum, ButtonVariantEnum } from '@/enums';
import { cn } from '@/utils';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ExpertiseSlider(props: IExpertiseSliderProps) {
  const { title, slides } = props;
  const { openDrawer } = useDrawers();
  return (
    <section className='w-full py-7 md:pt-[200px]'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-8 w-[90%] mx-auto mb-6 md:mb-22 lg:mb-22'>
        <div className='col-span-12 md:col-span-12'>
          <h1 className='font-sans text-4xl text-primary font-medium leading-snug md:leading-[120%] md:text-[80x] lg:text-[80px]'>
            {title}
          </h1>
        </div>
      </div>
      <div className='w-full md:w-[95%] md:ml-auto overflow-x-hidden'>
        <Swiper
          direction='horizontal'
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
              <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                variants={{
                  rest: { boxShadow: '0px 0px 25px 0px #EFEFEF' },
                  hover: { boxShadow: '0px 0px 25px 0px #EFEFEF' },
                }}
                className='relative w-full h-[450px] sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden'
              >
                {/* Initial to show this */}
                <motion.div
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className={cn(
                    'w-full h-full flex flex-col items-center justify-between cursor-pointer p-5 md:p-[40px]',
                  )}
                  style={{ background: slide.bgColor ?? '#EFEFEF' }}
                >
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-sans text-[24px] font-medium leading-snug md:leading-[130%] mb-0 text-tertiary'>
                      Design
                    </p>
                    <p className='font-sans text-[24px] font-medium leading-snug md:leading-[130%] mb-0 text-tertiary'>
                      {slide.design}
                    </p>
                  </div>
                  {slide.primaryImage && (
                    <div>
                      <Image
                        src={slide?.primaryImage?.src}
                        alt={slide?.primaryImage?.alt}
                        width={slide?.primaryImage?.width ?? 300}
                        height={slide?.primaryImage?.height ?? 300}
                      />
                    </div>
                  )}
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-sans text-[24px] font-medium leading-snug md:leading-[130%] mb-0 text-tertiary'>
                      Service Code
                    </p>
                    <p className='font-sans text-[24px] font-medium leading-snug md:leading-[130%] mb-0 text-tertiary'>
                      {slide.serviceCode}
                    </p>
                  </div>
                </motion.div>

                {/* On hover of above div show this with animation no css change in stle */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className='absolute inset-0 w-full h-full bg-tertiary rounded-3xl flex flex-col justify-between p-5 md:p-[40px] cursor-pointer bg-[#FFFFFF]'
                  style={{
                    backgroundImage: "url('/images/vectors/mesh-vector.svg')",
                    backgroundPositionX: 'left',
                    backgroundPositionY: '150px',
                  }}
                >
                  {slide?.secondaryImage && (
                    <Image
                      src={slide?.secondaryImage?.src}
                      alt={slide?.secondaryImage?.alt}
                      width={slide?.secondaryImage?.width ?? 104}
                      height={slide?.secondaryImage?.height ?? 104}
                    />
                  )}
                  <div className='w-full'>
                    <h4 className='font-sans text-[#001524] font-medium text-2xl md:font-semibold md:text-[40px] text-left leading-snug md:leading-[130%] mb-[16px]'>
                      {slide?.title}
                    </h4>
                    <p className='font-sans text-[#001524] font-normal text-xl md:font-medium md:text-[24px] text-left leading-snug md:leading-[130%] mb-[24px] tracking-[-3%]'>
                      {slide?.description}
                    </p>
                    <button
                      className='text-[#F95E27]! p-0! text-[24px]! hover:border-0! transition-none! cursor-pointer'
                      onClick={() => openDrawer('contact', {})}
                    >
                      Get In Touch
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
