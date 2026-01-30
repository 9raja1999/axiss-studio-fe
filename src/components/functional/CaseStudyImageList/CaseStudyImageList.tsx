import Image from 'next/image';
import TagList from '@/components/functional/TagList/TagList';
import { ICaseStudyImageListProps } from '@/types';

export default function CaseStudyImageList({
  title,
  description,
  tagList,
  images,
}: ICaseStudyImageListProps) {
  return (
    <section className='w-full py-7 md:py-[100px]'>
      <div className='w-[90%] mx-auto grid grid-cols-12'>
        <div className='hidden md:block md:col-span-1'></div>
        <div className='col-span-12 md:col-span-10 px-0 mb-6 md:px-28 md:mb-28'>
          <h1 className='font-sans text-5xl text-left mb-6 md:mb-[32px] md:text-[48px] font-medium leading-snug md:leading-[120%]'>
            {title}
          </h1>
          <p className='font-sans text-base font-normal text-left text-[#596E85] mb-4 md:mb-[32px]'>
            {description}
          </p>

          {tagList && (
            <div className=''>
              <TagList
                list={tagList?.list ?? []}
                limit={tagList?.limit}
                limitTagClassName={tagList?.limitTagClassName}
                classNames={tagList?.classNames}
              />
            </div>
          )}
        </div>
        <div className='hidden md:block md:col-span-1'></div>
      </div>

      <div className='w-[90%] mx-auto grid grid-cols-12 gap-6'>
        {/* Center wrapper */}
        <div className='col-span-10 col-start-2 grid grid-cols-10 gap-6 aspect-[1096/2776]'>
          <div className='col-span-5'>
            <div className='h-full border overflow-hidden rounded-3xl bg-[#E6F4FE] border border-[#E7E7E7] pt-2 pl-2  md:pt-[48px] md:pl-[48px]'>
              <div className='relative h-full bg-[#FFFFFF] border-t border-l border-[#E7E7E7] rounded-tl-3xl overflow-hidden'>
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

          <div className='col-span-5'>
            <div className='h-full border overflow-hidden rounded-3xl bg-[#F6EFFC] border border-[#E7E7E7] pt-2 px-2  md:pt-[48px] md:px-[48px]'>
              <div className='relative h-full overflow-hidden bg-[#FFFFFF] border-t border-l border-r border-[#E7E7E7] rounded-t-3xl'>
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
          </div>

          <div className='col-span-10 row-span-2'>
            <div className='h-full overflow-hidden border rounded-3xl bg-[#F7F7F7] border border-[#E7E7E7] pt-2 px-2  md:pt-[48px] md:px-[48px]'>
              <div className='relative h-full overflow-hidden bg-[#FFFFFF] border-t border-l border-r border-[#E7E7E7] rounded-t-3xl'>
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

          <div className='col-span-5'>
            <div className='h-full border overflow-hidden rounded-3xl bg-[#F6EFFC] border border-[#E7E7E7] pt-2 px-2  md:pt-[48px] md:px-[48px]'>
              <div className='relative h-full overflow-hidden bg-[#FFFFFF] border-t border-l border-r border-[#E7E7E7] rounded-t-3xl'>
                {images[3] && (
                  <Image
                    src={images[3]?.src}
                    alt={images[3]?.alt}
                    fill
                    className='object-cover object-top'
                  />
                )}
              </div>
            </div>
          </div>

          <div className='col-span-5'>
            <div className='h-full border overflow-hidden rounded-3xl bg-[#F6EFFC] border border-[#E7E7E7] pt-2 px-2  md:pt-[48px] md:px-[48px]'>
              <div className='relative h-full overflow-hidden bg-[#FFFFFF] border-t border-l border-r border-[#E7E7E7] rounded-t-3xl'>
                {images[4] && (
                  <Image
                    src={images[4]?.src}
                    alt={images[4]?.alt}
                    fill
                    className='object-cover object-top'
                  />
                )}
              </div>
            </div>
          </div>

          <div className='col-span-10 row-span-2'>
            <div className='h-full overflow-hidden border rounded-3xl bg-[#F7F7F7] border border-[#E7E7E7] pt-2 px-2  md:pt-[48px] md:px-[48px]'>
              <div className='relative h-full overflow-hidden bg-[#FFFFFF] border-t border-l border-r border-[#E7E7E7] rounded-t-3xl'>
                {images[5] && (
                  <Image
                    src={images[5]?.src}
                    alt={images[5]?.alt}
                    fill
                    className='object-cover object-top'
                  />
                )}
              </div>
            </div>
          </div>

          <div className='col-span-5'>
            <div className='h-full border overflow-hidden rounded-3xl bg-[#F6EFFC] border border-[#E7E7E7] pt-2 px-2  md:pt-[48px] md:px-[48px]'>
              <div className='relative h-full overflow-hidden bg-[#FFFFFF] border-t border-l border-r border-[#E7E7E7] rounded-t-3xl'>
                {images[6] && (
                  <Image
                    src={images[6]?.src}
                    alt={images[6]?.alt}
                    fill
                    className='object-cover object-top'
                  />
                )}
              </div>
            </div>
          </div>

          <div className='col-span-5'>
            <div className='h-full border overflow-hidden rounded-3xl bg-[#F6EFFC] border border-[#E7E7E7] pt-2 px-2  md:pt-[48px] md:px-[48px]'>
              <div className='relative h-full overflow-hidden bg-[#FFFFFF] border-t border-l border-r border-[#E7E7E7] rounded-t-3xl'>
                {images[7] && (
                  <Image
                    src={images[7]?.src}
                    alt={images[7]?.alt}
                    fill
                    className='object-cover object-top'
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
