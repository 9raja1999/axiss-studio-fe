'use client';

import { SlideEditorialInfinite } from '@/types';
import Image from 'next/image';
import { cn } from '@/utils';

export default function SimpleSlide({
  type,
  hoverColor,
  image,
  secondaryImage,
  bordered,
  borderColor,
  borderWidth,
}: SlideEditorialInfinite) {
  return (
    <div
      className={cn(
        'relative w-full h-[450px] sm:h-[450px] md:h-[559px] rounded-3xl overflow-hidden bg-gray-50',
        bordered ? `border-${borderWidth} border-[${borderColor}]` : '',
      )}
    >
      <Image
        src={image?.src}
        alt=''
        fill
        className='object-contain object-center'
        sizes='(max-width: 768px) 300px, (max-width: 1024px) 400px, 559px'
        priority
      />
    </div>
  );
}
