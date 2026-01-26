'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import EditorialHeaderDesktop from './EditorialHeaderDesktop';
import EditorialHeaderMobile from './EditorialHeaderMobile';

export default function EditorialHeader() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return isMobile ? <EditorialHeaderMobile /> : <EditorialHeaderDesktop />;
}
