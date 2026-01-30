'use client';

import WheelContent from '@/components/ui/WheelContent/WheelContent';
import Button from '@/components/ui/Button/Button';
import MessagingSlider from '@/components/functional/MessagingSlider/MessagingSlider';
import StatCard from '@/components/ui/StatCard/StatCard';
import { ButtonSizeEnum, ButtonTypeEnum, ButtonVariantEnum } from '@/enums';
import { IEditorialBannerProps } from '@/types';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

export default function EditorialBanner({
  title,
  subTitle,
  description,
  bgImages,
  slides,
  cookieBot,
  wheel,
  meshVector,
  statistics,
}: IEditorialBannerProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <section
      className='relative h-screen w-full bg-no-repeat'
      {...(bgImages
        ? {
            style: {
              backgroundImage: bgImages?.map((image) => `url(${image.image})`).join(', '),
              backgroundPosition: bgImages?.map((image) => image.position).join(', '),
            },
          }
        : {})}
    >
      <div className='w-[90%] h-full mx-auto grid grid-cols-12 gap-x-4 md:gap-x-6'>
        {/* Empty columns hidden on mobile */}
        <div className='hidden md:block md:col-span-2'></div>

        {/* Center content */}
        <div
          className='col-span-12 md:col-span-8 w-full flex flex-col items-center justify-center md:justify-end-safe pb-[5%] h-full! bg-no-repeat bg-contain sm:px-6'
          {...(meshVector
            ? {
                style: {
                  backgroundImage: `url(${meshVector?.image})`,
                  backgroundPosition: meshVector.position ?? 'center bottom',
                },
              }
            : {})}
        >
          <h2 className='font-sans text-base sm:text-base md:text-lg text-center text-[#596E85] font-normal mb-4 sm:mb-5 md:mb-7'>
            {title}
          </h2>
          <h1 className='font-sans font-medium text-2xl sm:text-3xl md:text-6xl lg:text-7xl text-center leading-snug md:leading-none tracking-[-0.03em] mb-4 sm:mb-5 md:mb-7'>
            {subTitle}
          </h1>
          <p className='whitespace-pre-line font-sans font-normal text-[14px] sm:text-[16px] md:text-[20px] text-[#596E85] text-center mb-6 sm:mb-8 md:mb-12'>
            {description}
          </p>

          {/* Wheel content */}
          {wheel && (
            <div className='mb-6 sm:mb-7 md:mb-12'>
              <WheelContent text={wheel?.text} />
            </div>
          )}

          {/* Cookies */}
          {cookieBot && (
            <div className='flex flex-row items-center justify-between gap-3 sm:gap-6 px-4 py-3 w-full max-w-[350px] md:w-103 border border-[#E6E6E6] rounded-full bg-tertiary'>
              <p className='font-sans text-sm sm:text-base text-primary font-light mb-2 sm:mb-0 text-center sm:text-left whitespace-nowrap'>
                The website uses <span className='font-normal'>Cookies</span>
              </p>
              <Button
                size={ButtonSizeEnum.SMALL}
                type={ButtonTypeEnum.BUTTON}
                variant={ButtonVariantEnum.PRIMARY}
                classNames='h-9 sm:h-10 py-[6px] sm:py-[8px] px-4 sm:px-[20px]'
              >
                Accept
              </Button>
            </div>
          )}

          {statistics && (
            <div className='flex items-start flex-wrap divide-y md:flex-nowrap justify-center  mb-2 gap-2 md:divide-x md:divide-y-0 divide-gray-300'>
              {statistics?.map((stat, idx) => (
                <StatCard {...stat} />
              ))}
            </div>
          )}
        </div>

        <div className='hidden md:block md:col-span-2'></div>
      </div>

      {/* Slider */}
      {slides && !isMobile && (
        <div className='md:absolute bottom-4 md:bottom-[10%] right-0 md:w-1/4 w-full md:transform-none px-4'>
          <MessagingSlider slides={slides} />
        </div>
      )}
    </section>
  );
}
