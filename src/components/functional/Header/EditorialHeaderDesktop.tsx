'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useScroll } from '@/hooks/useScroll';
import Button from '@/components/ui/Button/Button';
import AnchorLink from '@/components/ui/AnchorLink/AnchorLink';
import MegaMenuDropdown from '@/components/functional/MegaMenuDropdown/MegaMenuDropdown';
import { useDrawers } from '@/components/context/DrawersContext';
import { ButtonSizeEnum, ButtonVariantEnum } from '@enums';
import { cn } from '@/utils';

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
  const { openDrawer } = useDrawers();
  const [openCaseStudy, setOpenCaseStudy] = useState(false);

  return (
    <header
      className={cn(
        'w-full fixed transition-all z-2 bg-white',
        scrolled ? 'top-0 py-2 backdrop-blur-xl bg-white/20' : 'top-0 py-3',
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
                href='/'
              >
                Home
              </Button>
            </li>
            <li>
              <Button
                classNames='font-sans'
                size={ButtonSizeEnum.SMALL}
                variant={ButtonVariantEnum.TERTIARY}
                href='/about'
              >
                About
              </Button>
            </li>
            <li className='relative group'>
              {/* Case Studies button */}
              <Button
                classNames='font-sans'
                size={ButtonSizeEnum.SMALL}
                variant={ButtonVariantEnum.TERTIARY}
                icon={{ config: { name: 'carret.svg', size: 16 }, position: 'right' }}
              >
                Case Studies
              </Button>

              {/* Dropdown */}
              <div
                className={cn(
                  'absolute top-full left-1/2 -translate-x-1/2',
                  'opacity-0 pointer-events-none',
                  'group-hover:opacity-100 group-hover:pointer-events-auto',
                  'transition-all duration-200',
                  'pt-3',
                )}
              >
                <MegaMenuDropdown data={caseStudies} />
              </div>
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
            onClick={() => openDrawer('contact', {})}
          >
            Contact Now
          </Button>
          <Button
            classNames='font-sans'
            size={ButtonSizeEnum.SMALL}
            variant={ButtonVariantEnum.SECONDARY}
            onClick={() => openDrawer('contact', {})}
          >
            Lets Collab.
          </Button>
        </div>
      </div>
    </header>
  );
}
