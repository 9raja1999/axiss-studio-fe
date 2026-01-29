'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { SlideEditorialInfinite } from '@/types';

export default function MinimalistSlide({
  type,
  hoverColor,
  image,
  secondaryImage,
  bordered,
  borderColor,
  borderWidth,
}: SlideEditorialInfinite) {
  return (
    // <div className='relative overflow-hidden w-full min-h-[559px] rounded-3xl'>
    //   <Image src={image.src} fill className='border object-contain' alt='' />
    // </div>
    <div className='relative group w-full h-[559px] rounded-3xl overflow-hidden border border-[#F4F4F4] p-[32px]'>
      <div
        className='absolute inset-0 z-3 opacity-0 hover:opacity-100 transition bg-no-repeat shadow-[0_0_25px_0_#EFEFEF]
'
        style={{
          backgroundImage: "url('/images/vectors/mesh-vector.svg')",
          backgroundPositionX: 'right',
          backgroundPositionY: '100px',
        }}
      ></div>
      <div className='z-2 relative h-[100%] flex flex-col items-start justify-between'>
        <div>
          <Image
            src={'/images/vectors/comma.png'}
            width={64}
            height={64}
            alt='comma image'
            className='border z-2 mb-[12px]'
          />
          <p className='font-sans text-[32px] font-light whitespace-pre-line leading-snug md:leading-[120%]'>
            {'Our UI looks good, \n but it doesn’t \n convert.'}
          </p>
        </div>

        <div className='w-[82px] h-[56px] group-hover:bg-secondary bg-[#E9E9E9] transition-all rounded-full relative overflow-hidden'>
          <Image
            alt='avatar'
            src={'/images/profiles/profile-one.png'}
            fill
            className='object-contain'
          />
        </div>
      </div>
      <img
        src={image?.src as string}
        alt=''
        className={clsx(
          'z-1',
          image.className ??
            'absolute rotate-[19deg] right-[-50%] bottom-[-10%] scale-[2.5] object-contain',
        )}
      />
    </div>
  );
}
