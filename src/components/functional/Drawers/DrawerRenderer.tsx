import { AnimatePresence } from 'framer-motion';
import { useDrawers } from '@/components/context/DrawersContext';
import ContactDrawer from './ContactDrawer';

export default function DrawerRenderer() {
  const { drawer, closeDrawer, isOpen } = useDrawers();

  switch (drawer.name) {
    case 'contact':
      return (
        <AnimatePresence>
          <ContactDrawer onClose={closeDrawer} isOpen={isOpen} />;
        </AnimatePresence>
      );
    default:
      return null;
  }
}
