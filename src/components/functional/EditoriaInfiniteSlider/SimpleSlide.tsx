'use client';

import { SlideEditorialInfinite } from '@/types';
import clsx from 'clsx';

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
      className={clsx(
        `${bordered ? `border-${borderWidth} border-[${borderColor}]` : ''} w-full min-h-[559px]! rounded-3xl  bg-no-repeat bg-contain`,
      )}
      style={{
        backgroundImage: `url(${image?.src})`,
        backgroundPosition: 'center 0',
      }}
    ></div>
  );
}
