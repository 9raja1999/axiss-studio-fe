'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function EditorialSliderSimple() {
  return (
    <section className='w-full py-7 md:pt-[200px]'>
      <div className='w-[90%] mx-auto mb-5 grid grid-cols-12 gap-x-4 md:gap-x-6 md:mb-[56px]'>
        <div className='col-span-12'>
          <h2 className='font-sans text-5xl md:text-[80px] leading-snug md:leading-[120%] font-medium'>
            Field of Expertise
          </h2>
        </div>
      </div>
      <div className='md:pl-[5%]'>
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
          pagination={false}
        >
          <SwiperSlide className='md:w-[424px]! h-[550px]!'>
            <div className=' bg-red h-full w-full rounded-4xl'>
              <Image
                src={'/images/services/card1.png'}
                alt='service one'
                fill
                className='object-contain object-center'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='md:w-[424px]! h-[550px]!'>
            <div className=' bg-red h-full w-full rounded-4xl'>
              <Image
                src={'/images/services/card2.png'}
                alt='service one'
                fill
                className='object-contain object-center'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='md:w-[424px]! h-[550px]!'>
            <div className=' bg-red h-full w-full rounded-4xl'>
              <Image
                src={'/images/services/card3.png'}
                alt='service one'
                fill
                className='object-contain object-center'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='md:w-[424px]! h-[550px]!'>
            <div className=' bg-red h-full w-full rounded-4xl'>
              <Image
                src={'/images/services/card1.png'}
                alt='service one'
                fill
                className='object-contain object-center'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='md:w-[424px]! h-[550px]!'>
            <div className=' bg-red h-full w-full rounded-4xl'>
              <Image
                src={'/images/services/card3.png'}
                alt='service one'
                fill
                className='object-contain object-center'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
