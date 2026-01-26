'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button/Button';
import { ButtonSizeEnum, ButtonVariantEnum } from '@enums';
import { useScroll } from '@/hooks/useScroll';
import AnchorLink from '@/components/ui/AnchorLink/AnchorLink';
import { useState } from 'react';
import Icons from '../../ui/Icon/Icons';
import ImagesDropdown from '../ImagesDropdown/ImagesDropdown';

const caseStudies = [
  { name: 'Mooventis', image: '/images/case-studies/mooventis.png' },
  { name: 'Little Book', image: '/images/case-studies/little-book.png' },
  { name: 'Proctor Parhai', image: '/images/case-studies/proctor-parhai.png' },
  { name: '3D ship kiosk', image: '/images/case-studies/little-book.png' },
  { name: '3D stall - stoof D', image: '/images/case-studies/mooventis.png' },
  { name: '3D navy stall', image: '/images/case-studies/proctor-parhai.png' },
];

export default function EditorialHeaderDesktop() {
  const { scrolled } = useScroll(20);
  const [openCaseStudy, setOpenCaseStudy] = useState(false);

  return (
    <header
      className={clsx(
        'w-full sticky transition-all z-2 bg-white',
        scrolled ? 'top-0 py-2 backdrop-blur-xl bg-white/20' : 'top-5',
      )}
    >
      <div className='grid grid-cols-[1fr_auto_1fr] items-center w-[90%] mx-auto'>
        {/* left navigation */}
        <nav>
          <ul className='flex gap-4 list-none'>
            <li>
              <Button
                classNames='font-sans'
                size={ButtonSizeEnum.SMALL}
                variant={ButtonVariantEnum.TERTIARY}
              >
                Home
              </Button>
            </li>
            <li>
              <Button
                classNames='font-sans'
                size={ButtonSizeEnum.SMALL}
                variant={ButtonVariantEnum.TERTIARY}
              >
                About
              </Button>
            </li>
            <li className='relative'>
              <Button
                classNames='font-sans'
                size={ButtonSizeEnum.SMALL}
                variant={ButtonVariantEnum.TERTIARY}
                icon={{ config: { name: 'carret.svg', size: 16 }, position: 'right' }}
                onClick={() => setOpenCaseStudy((prev) => !prev)}
              >
                Case Studies
              </Button>

              <AnimatePresence>
                {openCaseStudy && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className={clsx(
                      'absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50',
                      'w-[92vw] max-w-[500px] lg:w-[500px]',
                      'rounded-2xl bg-white backdrop-blur-xl',
                      'border border-[#E5E7EB] shadow-[0_10px_40px_rgba(0,0,0,0.08)]',
                    )}
                  >
                    <ImagesDropdown data={caseStudies} />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </nav>

        {/* Center company logo */}
        <div className='justify-self-center'>
          <AnchorLink href='/'>
            <Image src='/logo.svg' alt='Axiss Studio Logo' width={210} height={48} />
          </AnchorLink>
        </div>

        {/* Right CTAs */}
        <div className='flex justify-end gap-4'>
          <Button
            classNames='font-sans'
            size={ButtonSizeEnum.SMALL}
            variant={ButtonVariantEnum.TERTIARY}
          >
            Contact Now
          </Button>
          <Button
            classNames='font-sans'
            size={ButtonSizeEnum.SMALL}
            variant={ButtonVariantEnum.SECONDARY}
          >
            Lets Collab.
          </Button>
        </div>
      </div>
    </header>
  );
}
