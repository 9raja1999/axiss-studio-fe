'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button/Button';
import TestimonialCard from '@/components/functional/TestimonialCard/TestimonialCard';
import AnchorLink from '@/components/ui/AnchorLink/AnchorLink';
import { cn } from '@/utils';
import { ButtonSizeEnum, ButtonVariantEnum } from '@/enums';
import { IEditorialFullWidthSliderProps } from '@/types';

export default function EditorialOneColumnScrollable({ slides }: IEditorialFullWidthSliderProps) {
  return (
    <section className='w-full py-7 md:pt-[200px] relative'>
      {slides.map((slide, idx) => (
        <motion.div
          key={idx}
          className='sticky top-0 w-[100%] h-screen mx-auto mb-5 md:mb-[100px]!'
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div
            className={cn(
              'w-full h-full  grid grid-cols-12 gap-6 md:gap-8 overflow-hidden pt-4 md:pt-[64px]',
            )}
            style={{
              backgroundColor: slide?.backgroundColor ? slide.backgroundColor : '#eee',
            }}
          >
            <div className='hidden md:block md:col-span-1'></div>

            <div className='col-span-12 md:col-span-4 flex flex-col items-center justify-center'>
              <div>
                <img src={slide?.logo} alt='logo' className='h-8 md:h-auto' />

                <h2 className='font-sans text-white font-medium text-2xl md:text-[38px] my-6 md:my-8'>
                  {slide?.title}
                </h2>

                {slide.cta && (
                  <AnchorLink href={slide?.cta?.href}>
                    <Button
                      size={ButtonSizeEnum.MEDIUM}
                      variant={ButtonVariantEnum.PRIMARY}
                      classNames={cn(
                        'bg-white text-primary! font-normal mb-8 md:mb-[77px]',
                        slide?.cta?.className,
                      )}
                    >
                      {slide?.cta?.title}
                    </Button>
                  </AnchorLink>
                )}
                <div className='mb-4 md:mb-[64px]'>
                  <TestimonialCard
                    avatarUrl={slide?.testimonial?.avatar}
                    authorName={slide?.testimonial?.authorName}
                    content={slide?.testimonial?.content}
                    rating={slide?.testimonial?.rating}
                    authorTitle={slide?.testimonial?.authorTitle}
                  />
                </div>
              </div>
            </div>

            <div
              className='col-span-12 md:col-span-7 relative bg-no-repeat bg-cover bg-white rounded-tl-4xl h-64 md:h-auto '
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'right top',
              }}
            ></div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
