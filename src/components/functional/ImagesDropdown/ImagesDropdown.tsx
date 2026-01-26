import { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Icons from '@/components/ui/Icon/Icons';
import Image from 'next/image';

interface IImagesDropdownProps {
  data: Array<{ name: string; image: string }>;
}

export default function ImagesDropdown({ data }: IImagesDropdownProps) {
  const [selectedCase, setSelectedCase] = useState(data[0]);

  return (
    <div className='flex gap-6 h-full pt-7 pl-8'>
      {/* Case Study List */}
      <div>
        <h4 className='font-sans text-base text-[16px] font-normal mb-[16px] text-primary opacity-20'>
          Case study
        </h4>
        <ul className='list-none ml-0 mb-6.5'>
          {data.map((cs) => (
            <li
              key={cs.name}
              className={clsx(
                'font-sans text-[14px] font-light mb-2 cursor-pointer',
                selectedCase.name === cs.name ? 'text-secondary font-medium' : 'text-[#929292]',
              )}
              onClick={() => setSelectedCase(cs)}
            >
              {selectedCase.name === cs.name ? `• ${cs.name}` : cs.name}
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-start gap-2 mb-8'>
          <Icons name='behance.svg' size={24} />
          <Icons name='dribble.svg' size={24} />
        </div>
      </div>

      {/* Right Image */}
      <div
        className='flex-1 border-t border-l border-[#E5E7E7] rounded-tl-4xl bg-no-repeat bg-contain'
        style={{
          backgroundImage: `url(${selectedCase?.image})`,
          backgroundPosition: 'right 0',
        }}
      ></div>
    </div>
  );
}
