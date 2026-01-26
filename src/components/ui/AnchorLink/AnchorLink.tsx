'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { IAnchorLinkProps } from '@/types';

export default function AnchorLink(props: IAnchorLinkProps) {
  const { href, children, classNames, ...rest } = props;
  if (!href) return null;

  const isExternal = href.startsWith('https://') || href.startsWith('http://');
  const anchorClass = clsx('decoration-0 font-sans text-base', classNames);

  if (isExternal) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className={anchorClass} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={anchorClass} {...rest}>
      {children}
    </Link>
  );
}
