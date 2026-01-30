import Image from 'next/image';
import Avatar from '@/components/ui/Avatar/Avatar';
import { ICaseStudyDescriptionProps } from '@/types';
import { cn } from '../../../utils';

export default function CaseStudyDescription({
  tagLine,
  title,
  description,
  logo,
  deliveribles,
  platforms,
  mainImage,
  testimonial,
  images,
}: ICaseStudyDescriptionProps) {
  return (
    <section className='w-full py-7 md:py-[100px]'>
      <div className='w-[90%] mx-auto grid grid-cols-12 mb-6 md:mb-[80px]'>
        <div className='hidden md:block md:col-span-1'></div>
        <div className='col-span-12 md:col-span-10'>
          <p className='font-sans text-base text-[#596E85] text-left font-normal mb-4 md:mb-[24px]'>
            {tagLine}
          </p>
          <h1 className='font-sans text-2xl md:text-[80px] font-medium leading-snug md:leading-[100%] mb-4 md:mb-[24px]'>
            {title}
          </h1>
          <p className='font-sans text-base md:text-[20px] text-[#001524] font-light leading-snug mb-6 md:leading-[140%] pr-0 md:pr-28 md:mb-[64px]'>
            {description}
          </p>

          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-[18px]'>
            <div className='flex-1 shrink-0'>
              <img src={logo} alt='logo' />
            </div>

            {deliveribles && (
              <div className='md:border-l md:border-[#596E85] pl-[18px]'>
                <p className='font-sans text-base text-[#596E85] font-normal leading-snug md:leading-[120%] mb-3'>
                  {deliveribles?.label}
                </p>
                <p className='font-sans text-[20px] font-semibold'>{deliveribles?.value}</p>
              </div>
            )}
            {platforms && (
              <div className='md:border-l md:border-[#596E85] pl-[18px]'>
                <p className='font-sans text-base text-[#596E85] font-normal leading-snug md:leading-[120%] mb-3'>
                  {platforms?.label}
                </p>
                <p className='font-sans text-[20px] font-semibold'>{platforms?.value}</p>
              </div>
            )}
          </div>
        </div>
        <div className='hidden md:block md:col-span-1'></div>
      </div>

      <div className='w-[90%] mx-auto grid grid-cols-12 mb-6 md:mb-[200px]'>
        <div className='col-span-12'>
          <div className='relative w-full aspect-[16/10] border border-[#E7E7E7] rounded-4xl overflow-hidden shadow-[0_0_60px_0_#A1A1A10F]'>
            {mainImage && (
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                className={cn('object-cover object-top', mainImage.className)}
              />
            )}
          </div>
        </div>
      </div>

      {/* testimonial */}
      {testimonial && (
        <div className='w-[90%] mx-auto grid grid-cols-12 mb-6 md:mb-[200px]'>
          <div className='hidden md:block md:col-span-1'></div>
          <div className='col-span-12 md:col-span-10'>
            <div className='md:px-[69px] flex items-start gap-3 md:gap-[38px]'>
              <div>
                <h2 className='font-urbanist text-6xl md:text-[96px] text-[#F95E27]'>“</h2>
              </div>
              <div>
                <h2 className='font-sans text-3xl md:text-[48px] font-normal leading-snug md:leading-[120%] text-left mb-6 md:mb-[48px]'>
                  {testimonial?.review}
                </h2>
                <div className='flex items-center gap-6'>
                  {testimonial?.avatar && (
                    <Avatar
                      image={testimonial?.avatar?.image}
                      size={testimonial?.avatar?.size}
                      color={testimonial?.avatar?.color}
                      className={testimonial.avatar.className}
                    />
                  )}
                  <div>
                    {testimonial?.title && (
                      <p className='font-sans text-xl md:text-[28px] font-normal text-left'>
                        {testimonial?.title}
                      </p>
                    )}
                    {testimonial?.subTitle && (
                      <p className='font-sans text-base md:text-[20px] font-light text-[#596E85]'>
                        {testimonial?.subTitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:block md:col-span-1'></div>
        </div>
      )}

      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 aspect-[1320/700]'>
        <div className='md:col-span-7'>
          <div className=' h-full rounded-3xl overflow-hidden bg-white border border-[#E7E7E7] pt-2 pl-2  md:pt-[32px] md:pl-[32px]'>
            <div className='relative h-full bg-[#FFFFFF] border-t border-l border-[#E7E7E7] rounded-tl-3xl'>
              {images[0] && (
                <Image
                  src={images[0]?.src}
                  alt={images[0]?.alt}
                  fill
                  className='object-cover object-top'
                />
              )}
            </div>
          </div>
        </div>

        <div className='md:col-span-5 grid grid-rows-2 gap-6'>
          <div className='h-full overflow-hidden rounded-3xl bg-[#E6F4FE] border border-[#E7E7E7] pt-2 pl-2 md:pt-[40px] md:pl-[40px]'>
            <div className='relative h-full bg-white border-t border-l border-[#E7E7E7] rounded-tl-3xl'>
              {images[1] && (
                <Image
                  src={images[1]?.src}
                  alt={images[1]?.alt}
                  fill
                  className='object-cover object-top'
                />
              )}
            </div>
          </div>

          <div className='h-full rounded-3xl overflow-hidden bg-[#F6EFFC] border border-[#E7E7E7] px-2 pt-2 md:px-[40px] md:pt-[40px]'>
            <div className='relative h-full bg-white border-t border-l border-r border-[#E7E7E7] rounded-t-3xl'>
              {images[2] && (
                <Image
                  src={images[2]?.src}
                  alt={images[2]?.alt}
                  fill
                  className='object-cover object-top'
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
