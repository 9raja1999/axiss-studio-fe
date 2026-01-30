import Image from 'next/image';
import { ICaseStudySingleColumnProps } from '@/types';
import { cn } from '../../../utils';

export default function CaseStudySingleColumn({
  title,
  description,
  images,
  rowHeight,
  colSize,
  classNames,
}: ICaseStudySingleColumnProps) {
  return (
    <section className='w-full'>
      <div
        className={cn(`mx-auto grid grid-cols-12 gap-x-4 md:gap-x-6 mb-6 md:mb-[120px] w-[90%]`)}
      >
        <div className='hidden md:block md:col-span-1'></div>
        <div className='col-span-12 md:col-span-6'>
          <h2 className='font-sans text-5xl md:text-[48px] font-medium leading-snug md:leading-[120%] text-left'>
            {title}
          </h2>
        </div>
        <div className='col-span-12 md:col-span-4'>
          <p className='font-sans text-3xl md:text-[32px] font-light leading-snug md:leading-[120%] text-left'>
            {description}
          </p>
        </div>
        <div className='hidden md:block md:col-span-1'></div>
      </div>
      <div
        className={cn(
          `w-[90%] mx-auto grid grid-cols-${colSize} gap-6 mb-6 md:mb-[200px] justify-center!`,
          classNames,
        )}
        style={{
          gridAutoRows: rowHeight || '200px',
        }}
      >
        {images.map((img, idx) => {
          return (
            <div
              key={idx}
              style={{
                gridColumn: img.colSpan ? `span ${img.colSpan}` : 'span 12',
                gridRow: img.rowSpan ? `span ${img.rowSpan}` : 'span 1',
              }}
              className='place-self-center w-full h-full'
            >
              <div className='relative w-full h-full rounded-4xl border border-[#E7E7E7] overflow-hidden shadow-[0_0_60px_0_#A1A1A10F]'>
                <Image src={img.src} alt={img.alt ?? ''} fill className='object-cover object-top' />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
