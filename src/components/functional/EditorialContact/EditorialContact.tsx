import Image from 'next/image';
import ContactForm from '../Forms/ContactForm';

export default function EditorialContact() {
  return (
    <section className='w-full py-7 md:py-[200px]'>
      <div className='w-[90%] mx-auto grid grid-cols-12 gap-x-4 md:gap-x-6'>
        <div className='col-span-12 md:col-span-5'>
          <h3 className='font-sans whitespace-pre-line text-5xl md:text-[56px] font-medium leading-snug md:leading-[120%] mb-[24px]'>
            {'Have a project idea in mind? Let’s get started'}
          </h3>
          <p className='font-sans whitespace-pre-line text-3xl md:text-[24px] font-normal leading-snug md:leading-[120%] text-[#596E85] mb-[108px]'>
            {
              'We’ll schedule a call to discuss your idea. After discovery sessions we’ll send a proposal, and upon \n approval, we’ll get started.'
            }
          </p>
          <div className='relative w-full h-[280px] md:w-[200px]'>
            {/* Image container */}
            <div className='relative w-full h-full rounded-4xl bg-[#596E85] overflow-hidden'>
              <Image
                src='/images/profiles/profile-one.png'
                alt='profile image'
                fill
                className='object-contain rounded-2xl'
              />
            </div>

            {/* Ola bubble */}
            <div className='absolute top-4 right-0' style={{ transform: 'translateX(60%)' }}>
              <span className='font-sans text-white text-base font-normal bg-secondary rounded-r-full rounded-tl-full px-5 py-2.5 inline-block'>
                Ola!
              </span>
            </div>
            <p className='font-sans mt-[16px] mb-[8px] text-base font-normal capitalize'>
              Olena Kovalenko
            </p>
            <p className='font-sans uppercase text-[#596E85] text-[12px]'>CEO</p>
          </div>
        </div>
        <div className='hidden md:block md:col-span-1'></div>
        <div className='col-span-12 md:col-span-6'>
          <ContactForm
            title='Email us'
            titleSize={24}
            subTitle='info@axissstudio.com'
            subTitleSize={64}
          />
        </div>
      </div>
    </section>
  );
}
