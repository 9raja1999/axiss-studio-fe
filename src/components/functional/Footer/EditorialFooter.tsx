'use client';
import Image from 'next/image';
import Button from '@/components/ui/Button/Button';
import { ButtonSizeEnum, ButtonVariantEnum } from '@enums';
import AnchorLink from '@/components/ui/AnchorLink/AnchorLink';
import Divider from '@/components/ui/Divider/Divider';
import { useDrawers } from '@/components/context/DrawersContext';

export default function EditorialFooter() {
  const { openDrawer } = useDrawers();

  return (
    <footer className='relative min-h-[400px] bg-primary w-full pt-[80px] md:min-h-[450px] lg:min-h-[512px] overflow-hidden'>
      {/* ===== Background blurred ===== */}
      <div
        className='absolute rounded-full pointer-events-none'
        style={{
          width: '1239px',
          height: '1239px',
          top: '-151px',
          left: '1044px',
          background: 'rgba(249, 94, 39, 0.7)',
          filter: 'blur(555px)',
        }}
      />
      <div
        className='absolute rounded-full pointer-events-none'
        style={{
          width: '955px',
          height: '955px',
          top: '-22px',
          left: '528px',
          background: 'rgba(255, 255, 255, 0.3)',
          filter: 'blur(267px)',
        }}
      />

      {/* ===== Footer content ===== */}
      <div className='w-[90%] mx-auto relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          <div>
            <Image src='/white-logo.svg' width={210} height={48} alt='Axiss Studio Logo' />
            <p className='font-sans text-base font-normal text-white my-6 max-w-sm'>
              An Experience Design Agency focusing on building functional, simple, human-centered
              digital products for future.
            </p>

            <Button
              size={ButtonSizeEnum.SMALL}
              variant={ButtonVariantEnum.SECONDARY}
              onClick={() => openDrawer('contact', {})}
            >
              Contact Us Now
            </Button>
          </div>

          <div>
            <h3 className='font-sans text-base font-normal text-white mb-4'>Navigation</h3>
            <ul className='list-none space-y-4'>
              <li>
                <AnchorLink href='/' classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'>
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href='/about'
                  classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
                >
                  About
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href='/contact'
                  classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
                >
                  Contact Us
                </AnchorLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-sans text-base font-normal text-white mb-4'>Case Study</h3>
            <ul className='list-none space-y-4'>
              <li>
                <AnchorLink
                  href='/mooventis'
                  classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
                >
                  Mooventis
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href='/little-book'
                  classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
                >
                  Little Book
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href='/proctor-parhai'
                  classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
                >
                  Proctor Parhai
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href='/3d-ship-kiosk'
                  classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
                >
                  3D Ship Kiosk
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href='/3d-stall-stoof-d'
                  classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
                >
                  3D Stall - Stoof D
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href='/3d-navey-stall'
                  classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
                >
                  3D Navey Stall
                </AnchorLink>
              </li>
            </ul>
          </div>

          <div>
            <p className='font-sans text-base font-normal text-white mb-[32px] max-w-sm'>
              For whose daily routines involve PDF presentations
            </p>

            <Button
              size={ButtonSizeEnum.MEDIUM}
              variant={ButtonVariantEnum.PRIMARY}
              classNames='bg-white text-primary!'
              icon={{
                config: {
                  name: 'download.svg',
                  size: 24,
                  alt: 'download icon',
                },
                position: 'right',
              }}
              href='#'
            >
              Download & Share PDF 🙂
            </Button>
          </div>
        </div>

        <Divider />

        <div className='flex justify-between flex-wrap mt-[8px]'>
          <p className='mb-0 font-sans text-base capitalize text-[rgba(255,255,255,0.7)]'>
            © 2021-2026, Axissstudio | All Rights Reserved.
          </p>

          <ul className='mt-0! list-none flex gap-4 mt-2 flex-wrap'>
            <li>
              <AnchorLink
                href='/sitemap.xml'
                classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
              >
                Sitemap
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href='/privacy-policy'
                classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
              >
                Privacy Policy
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href='terms-and-conditions'
                classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
              >
                Terms of User
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href='/cookie-policy'
                classNames='text-[rgba(255,255,255,0.7)] font-sans text-base'
              >
                Cookie Policy
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
