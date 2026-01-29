'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icons from '@/components/ui/Icon/Icons';
import { cn } from '@/utils';
import { IEditorialFaqsProps } from '@/types';

export default function EditorialFAQs({ title, questions }: IEditorialFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <section className='w-full py-[80px]'>
      <div className='w-[90%] mx-auto grid grid-cols-12 gap-x-4 md:gap-x-6 mb-[32px]'>
        <div className='hidden md:block md:col-span-1'></div>
        <div className='col-span-12 md:col-span-10'>
          <h2 className='font-sans text-center text-[80px] font-medium leading-snug md:leading-[120%]'>
            {title}
          </h2>
        </div>
        <div className='hidden md:block md:col-span-1'></div>
      </div>

      <div className='w-[90%] mx-auto grid grid-cols-12 gap-x-4 md:gap-x-6'>
        <div className='hidden md:block md:col-span-1'></div>
        <div className='col-span-12 md:col-span-10'>
          {questions.map((_, index) => (
            <div
              key={index}
              className={cn(
                'py-[40px]',
                index == questions?.length - 1 ? '' : 'border-b border-[#596E85]',
              )}
            >
              <div
                className='flex items-center justify-between cursor-pointer gap-5 md:gap-14'
                onClick={() => toggleFAQ(index)}
              >
                <motion.p
                  className='font-sans mb-0 text-[32px] font-medium leading-snug md:leading-[120%]'
                  animate={{ color: openIndex === index ? '#f95e27' : '#000000' }}
                  transition={{ duration: 0.5 }}
                >
                  {_?.question}
                </motion.p>
                <Icons name={openIndex === index ? 'carret-up.svg' : 'carret-down.svg'} size={32} />
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='font-sans text-[24px] font-normal text-[#596E85] leading-snug md:leading-[120%] mt-3 mb-0 overflow-hidden'
                  >
                    {_?.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className='hidden md:block md:col-span-1'></div>
      </div>
    </section>
  );
}
