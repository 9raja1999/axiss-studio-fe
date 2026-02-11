import Image from 'next/image';
import Tag from '@/components/ui/Tag/Tag';
import { IEditorialTwoColumnsProps } from '@/types';
import { cn } from '../../../utils';

export default function EditorialTwoColumn({
  title,
  subTitle,
  description,
  tagsRender,
  imageList,
  compact,
}: IEditorialTwoColumnsProps) {
  return (
    <section className='w-full py-7 md:pt-[200px]'>
      <div
        className={cn(
          'w-[90%] mx-auto grid grid-cols-12 gap-x-4 md:gap-x-6 mb-6',
          compact ? 'md:w-[60%]' : 'md:w-[90%] md:mb-[120px]',
        )}
      >
        <div className='col-span-12 md:col-span-7 w-full'>
          <h2 className='font-sans text-5xl md:text-[80px] font-medium leading-snug align-middle tracking-tight'>
            {title}
          </h2>
        </div>
        {!compact && <div className='hidden md:block md:col-span-1'></div>}
        <div className='col-span-12 md:col-span-4 w-full pt-[14px]'>
          <p className='font-sans font-normal text-3xl md:text-[24px] mb-[24px] md:leading-[140%]'>
            {subTitle}
          </p>
          <p className='font-sans text-2xl md:text-[30px] font-light md:leading-[140%] mb-[24px]'>
            {description}
          </p>

          {tagsRender && (
            <>
              <p className='font-sans text-xl md:text-[20px] text-[#596E85] capitalize font-normal mb-[24px]'>
                {tagsRender?.heading}
              </p>
              <div className='flex flex-wrap gap-3'>
                {tagsRender?.tags?.map((tag, idx) => (
                  <Tag key={idx} name={tag?.name} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className={cn(
          'w-[90%] mx-auto grid grid-cols-12 gap-x-4 md:gap-x-6',
          compact ? 'md:w-[60%]' : 'md:w-[90%]',
        )}
      >
        <div className='col-span-12 md:col-span-4 w-full'>
          <h3 className='font-sans text-center text-4xl md:text-left md:text-[38px] font-normal text-[#596E85] whitespace-pre-line md:leading-[120%]'>
            {imageList?.title}
          </h3>
        </div>
        {!compact && <div className='hidden md:block md:col-span-1'></div>}
        <div className='col-span-12 md:col-span-7 w-full'>
          <div className='w-full flex flex-col gap-3 md:gap-[32px]'>
            {imageList?.list?.map((image, idx) => (
              <div
                key={idx}
                className='flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-[40px]'
              >
                <div
                  className={`relative shrink-0 w-full md:w-auto`}
                  style={{
                    width: image?.image?.width,
                    height: image.image?.height,
                  }}
                >
                  <Image
                    src={image?.image?.src}
                    alt={image?.image?.alt}
                    fill
                    className='object-center object-contain'
                  />
                </div>
                <h4 className='font-sans text-center text-2xl md:text-left md:text-[36px] font-medium mb-0 whitespace-pre-line'>
                  {image.text}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
