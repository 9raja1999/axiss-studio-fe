'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '@/hooks/useScroll';
import clsx from 'clsx';
import Button from '@/components/ui/Button/Button';
import AnchorLink from '@/components/ui/AnchorLink/AnchorLink';
import Icons from '@/components/ui/Icon/Icons';
import MegaMenuDropdown from '@/components/functional/MegaMenuDropdown/MegaMenuDropdown';
import { ButtonSizeEnum, ButtonVariantEnum } from '@enums';
import { cn } from '@/utils';
import { useDrawers } from '../../context/DrawersContext';

const caseStudies = [
  { name: 'Mooventis', image: '/images/case-studies/mooventis.png' },
  { name: 'Little Book', image: '/images/case-studies/little-book.png' },
  { name: 'Proctor Parhai', image: '/images/case-studies/proctor-parhai.png' },
  { name: '3D ship kiosk', image: '/images/case-studies/little-book.png' },
  { name: '3D stall - stoof D', image: '/images/case-studies/mooventis.png' },
  { name: '3D navy stall', image: '/images/case-studies/proctor-parhai.png' },
];

export default function EditorialHeaderMobile() {
  const { scrolled } = useScroll(20);
  const { openDrawer } = useDrawers();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [openCaseStudy, setOpenCaseStudy] = useState(false);

  // Close menu if click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        'w-full fixed top-0 z-50 bg-white shadow-md',
        scrolled ? 'backdrop-blur-xl bg-white/20' : '',
      )}
    >
      <div className='flex items-center justify-between w-[90%] mx-auto py-3'>
        {/* Logo */}
        <AnchorLink href='/'>
          <Image src='/logo.svg' alt='Axiss Studio Logo' width={180} height={40} />
        </AnchorLink>

        {/* Hamburger menu */}
        <button className='p-2 rounded-md' onClick={() => setMenuOpen((prev) => !prev)}>
          <Icons name='hamburger.svg' size={24} />
        </button>
      </div>

      {/* Slide-down mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='absolute top-full left-0 w-full bg-white shadow-lg border-t border-[#E5E7EB] z-40'
          >
            <div className='flex flex-col gap-4 p-4'>
              {/* Navigation Links */}
              <Button
                classNames='font-sans text-left w-full'
                size={ButtonSizeEnum.SMALL}
                variant={ButtonVariantEnum.TERTIARY}
              >
                Home
              </Button>
              <Button
                classNames='font-sans text-left w-full'
                size={ButtonSizeEnum.SMALL}
                variant={ButtonVariantEnum.TERTIARY}
              >
                About
              </Button>

              {/* Case Studies Dropdown */}
              <div className='w-full'>
                <Button
                  classNames='font-sans text-left w-full'
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
                      className={clsx('w-full mt-3')}
                    >
                      <MegaMenuDropdown data={caseStudies} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button
                classNames='font-sans w-full!'
                size={ButtonSizeEnum.SMALL}
                variant={ButtonVariantEnum.TERTIARY}
                onClick={() => openDrawer('contact', {})}
              >
                Contact Now
              </Button>
              <Button
                classNames='font-sans w-full!'
                size={ButtonSizeEnum.SMALL}
                variant={ButtonVariantEnum.SECONDARY}
                onClick={() => openDrawer('contact', {})}
              >
                Lets Collab.
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
