import { IEditorialPhasesProps } from '@/types';
import Divider from '../../ui/Divider/Divider';
import Tag from '../../ui/Tag/Tag';

export default function EditorialPhases({ title, description, phases }: IEditorialPhasesProps) {
  return (
    <section className='w-full py-7 md:pt-[200px]'>
      <div className='w-[90%] mx-auto mb-6 grid grid-cols-12 gap-x-4 md:gap-x-6'>
        <div className='hidden md:block md:col-span-1'></div>
        <div className='col-span-12 md:col-span-5'>
          <h2 className='font-sans text-4xl font-medium leading-snug md:text-[80px] md:leading-[120%]'>
            {title}
          </h2>
        </div>
        <div className='col-span-12 md:col-span-5'>
          <p className='font-sans text-3xl md:text-[28px] text-[#001524] font-light leading-snug md:leading-[140%]'>
            {description}
          </p>
        </div>
        <div className='hidden md:block md:col-span-1'></div>
      </div>
      {phases?.map((phase, idx) => (
        <>
          <div
            key={idx}
            className='w-[90%] mx-auto grid grid-cols-12 gap-x-4 md:gap-x-6 py-[100px] '
          >
            <div className='hidden md:block md:col-span-1'></div>
            <div className='col-span-12 md:col-span-2'>
              <h3 className='font-sans text-[#596E85] text-[38px] font-normal'>Phase {idx + 1}</h3>
            </div>
            <div className='col-span-12 md:col-span-8'>
              <p className='font-sans text-3xl md:text-[40px] text-[#001524] font-medium leading-snug md:leading-[120%] mb-[16px]'>
                {phase?.title}
              </p>
              <p className='font-sans whitespace-pre-line text-[24px] leading-snug text-[#001524] font-light md:leading-[120%] mb-[24px]'>
                {phase?.description}
              </p>
              {phase.tags && (
                <div className='flex items-center gap-2 flex-wrap'>
                  {phase.tags.map((tag, idx) => (
                    <Tag name={tag.name} icon={tag.icon} />
                  ))}
                </div>
              )}
            </div>
            <div className='hidden md:block md:col-span-1'></div>
          </div>
          {idx !== phases.length - 1 && (
            <div className='w-[90%] mx-auto grid grid-cols-12 gap-x-4 md:gap-x-6'>
              <div className='hidden md:block md:col-span-1'></div>
              <div className='col-span-12 md:col-span-10'>
                <Divider />
              </div>
              <div className='hidden md:block md:col-span-1'></div>
            </div>
          )}
        </>
      ))}
    </section>
  );
}
