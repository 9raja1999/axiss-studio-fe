import Stepper from '@/components/ui/Stepper/Stepper';

export default function EditorialStepper() {
  return (
    <section className='w-full py-[80px]'>
      <div className='w-[90%] mx-auto grid grid-cols-12'>
        <div className='col-span-12'>
          <h1 className='font-sans text-[80px] text-center font-medium leading-snug mb-7 md:mb-[56px] md:leading-[120%]'>
            Our Values
          </h1>
          <Stepper />
        </div>
      </div>
    </section>
  );
}
