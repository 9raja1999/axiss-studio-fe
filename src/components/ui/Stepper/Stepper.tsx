import { IStepperProps } from '@/types';

export default function Stepper({ steps }: IStepperProps) {
  return (
    <div className='relative mx-auto'>
      {/* Center spine */}
      <div
        className='absolute left-1/2 top-0 bottom-0 w-px border'
        style={{
          borderImageSource:
            'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 7.52%, #000000 86.2%, rgba(0,0,0,0) 100%)',
          borderImageSlice: 1,
          borderStyle: 'solid',
          opacity: '20%',
        }}
      />

      <div className='space-y-16'>
        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div key={i} className='grid grid-cols-2'>
              {/* LEFT */}
              <div className={isLeft ? 'text-right' : ''}>
                {isLeft && (
                  <>
                    <div className='flex items-center gap-[24px] justify-end'>
                      <div className='flex-1'>
                        <h3 className='font-sans text-[40px] font-medium leading-snug md:leading-[120%] whitespace-nowrap'>
                          {step.title}
                        </h3>

                        <p className='mt-[16px] font-sans text-[24px] font-light leading-snug md:leading-[120%] ml-auto'>
                          {step.description}
                        </p>
                      </div>

                      <span className='h-px bg-slate-300 w-[100px]' />
                    </div>
                  </>
                )}
              </div>

              {/* RIGHT */}
              <div>
                {!isLeft && (
                  <>
                    <div className='flex items-center-safe gap-[24px]'>
                      <span className='h-px bg-slate-300 w-[100px]' />

                      <div className=' flex-1'>
                        <h3 className='font-sans text-[40px] font-medium leading-snug md:leading-[120%] whitespace-nowrap'>
                          {step.title}
                        </h3>

                        <p className='mt-[16px] font-sans text-[24px] font-light leading-snug md:leading-[120%] ml-auto'>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
