import { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Icons from '@/components/ui/Icon/Icons';
import Image from 'next/image';
import AnchorLink from '../../ui/AnchorLink/AnchorLink';

interface IImagesDropdownProps {
  data: Array<{ name: string; image: string }>;
}

export default function MegaMenuDropdown({ data }: IImagesDropdownProps) {
  const [selectedCase, setSelectedCase] = useState(data[0]);

  return (
    <div className='flex gap-6 h-full pt-7 pl-8 overflow-hidden w-full max-w-[500px] lg:w-[500px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden rounded-2xl bg-white backdrop-blur-xl border border-[#E5E7EB]'>
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
              onMouseEnter={() => setSelectedCase(cs)}
            >
              {selectedCase.name === cs.name ? `• ${cs.name}` : cs.name}
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-start gap-2 mb-8'>
          <AnchorLink href='#'>
            <Icons name='behance.svg' size={24} />
          </AnchorLink>

          <AnchorLink href='#'>
            <Icons name='dribble.svg' size={24} />
          </AnchorLink>
        </div>
      </div>

      <div className='flex-1 border-t border-l border-[#E5E7E7] rounded-tl-4xl overflow-hidden relative'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedCase.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className='absolute inset-0 flex justify-center items-center overflow-hidden'
          >
            <Image
              src={selectedCase.image}
              alt={selectedCase.name}
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
