'use client';

import Image from 'next/image';
import { ReactSVG } from 'react-svg';
import { IIconProps } from '@/types';

export default function Icons(props: IIconProps) {
  const { name, size = 24, className, strokeColor, strokeWidth, alt = 'icon', fill } = props;

  const isSvg = name.toLowerCase().endsWith('.svg');
  const src = `/icons/${name}`; // assumes icons are in public/icons

  if (isSvg) {
    return (
      <ReactSVG
        src={src}
        beforeInjection={(svg) => {
          svg.setAttribute('width', `${size}`);
          svg.setAttribute('height', `${size}`);
          if (fill) {
            svg.querySelectorAll('path').forEach((path) => {
              path.setAttribute('fill', fill);
            });
          }

          if (strokeColor) svg.setAttribute('stroke', strokeColor);
          if (strokeWidth) svg.setAttribute('stroke-width', `${strokeWidth}`);
          if (className) svg.setAttribute('class', className);
        }}
        fallback={() => <span>Icon not found</span>}
        loading={() => <span>Loading...</span>}
      />
    );
  }

  // Non-SVG: PNG, JPG, WEBP
  return <Image src={src} width={size} height={size} className={className} alt={alt} />;
}
