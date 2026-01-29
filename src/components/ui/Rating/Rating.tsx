'use client';

import clsx from 'clsx';
import Icons from '../Icon/Icons';
import { cn } from '../../../utils';

type RatingProps = {
  value: number; // decimal allowed (ex: 3.7)
  max?: number;
  size: number;
  filledColor?: string;
  emptyColor?: string;
  classNames?: string;
  showInfo: boolean;
};

export default function Rating({
  value,
  max = 5,
  size = 32,
  filledColor = '#FFAA51',
  emptyColor = '#EEF0F3',
  classNames,
  showInfo,
}: RatingProps) {
  const clamped = clamp(value, 0, max);
  const percentage = (clamped / max) * 100;

  return (
    <div className={cn('flex items-center justify-start mb-[18px]', classNames)}>
      <div
        className={clsx(`relative inline-block`)}
        aria-label={`Rating ${clamped} out of ${max}`}
        role='img'
      >
        {/* Empty stars */}
        <div className='flex items-center space-x-1'>
          {Array.from({ length: max }).map((_, i) => (
            <Icons key={i} name='star.svg' size={size} fill={emptyColor} />
          ))}
        </div>

        {/* Filled stars (clipped for decimals) */}
        <div
          className='absolute inset-0 overflow-hidden'
          style={{ width: `${percentage}%` }}
          aria-hidden
        >
          <div className='flex items-center space-x-1'>
            {Array.from({ length: max }).map((_, i) => (
              <Icons key={i} name='star.svg' size={size} fill={filledColor} />
            ))}
          </div>
        </div>
      </div>
      {showInfo && (
        <div className='ml-[10px] border-l border-[#EEF0F3] pl-[10px] font-sans text-[24px] font-light'>
          {value.toFixed(1)}
        </div>
      )}
    </div>
  );
}

/* ---------------- helpers ---------------- */

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
