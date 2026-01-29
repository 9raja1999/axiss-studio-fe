import { motion } from 'framer-motion';
import { cn } from '@/utils';
import ContactForm from '@/components/functional/Forms/ContactForm';
import Icons from '@/components/ui/Icon/Icons';

type IContactDrawerProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function ContactDrawer({ onClose }: IContactDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='fixed inset-0 z-40 bg-black/40'
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 right-0 z-50 md:h-screen w-full sm:w-2/3 lg:w-1/3 bg-white shadow-lg p-6 md:px-[64px] md:py-[40px] md:rounded-l-4xl',
        )}
      >
        <div className='flex items-center justify-end mb-[8px]'>
          <div
            className='rounded-full w-[48px] h-[48px] flex items-center justify-center bg-[#F7F7F9] cursor-pointer'
            onClick={onClose}
          >
            <Icons name='cross.svg' size={24} />
          </div>
        </div>
        <ContactForm
          title='Email us'
          titleSize={16}
          subTitle='info@axissstudio.com'
          subTitleSize={32}
        />
      </motion.div>
    </>
  );
}
