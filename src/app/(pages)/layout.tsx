import React from 'react';
import EditorialHeader from '../../components/functional/Header/EdorialHeader';
import EditorialFooter from '../../components/functional/Footer/EditorialFooter';
import EditorialContact from '../../components/functional/EditorialContact/EditorialContact';
import { DrawersProvider } from '../../components/context/DrawersContext';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DrawersProvider>
        <EditorialHeader />
        {children}
        <EditorialContact />
        <EditorialFooter />
      </DrawersProvider>
    </div>
  );
}
