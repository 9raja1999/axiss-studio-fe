import Stepper from '@/components/ui/Stepper/Stepper';
import { IEditorialStepperProps } from '../../../types';

export default function EditorialStepper({ title, steps }: IEditorialStepperProps) {
  return (
    <section className='w-full py-7 md:pt-[200px]'>
      <div className='w-[90%] mx-auto grid grid-cols-12'>
        <div className='col-span-12'>
          <h1 className='font-sans text-[80px] text-center font-medium leading-snug mb-7 md:mb-[56px] md:leading-[120%]'>
            {title}
          </h1>
          <Stepper steps={steps} />
        </div>
      </div>
    </section>
  );
}
