'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@/components/ui/Button/Button';
import Divider from '@/components/ui/Divider/Divider';
import { ButtonSizeEnum, ButtonTypeEnum, ButtonVariantEnum } from '../../../enums';

type FormValues = {
  fullName: string;
  email: string;
  projectDescription: string;
  referral: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: 'onChange', // validate on blur
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form submitted:', data);
    // TODO: handle POST request or API call
    reset(); // reset after submit
  };

  return (
    <div className='w-full'>
      <p className='font-sans text-center text-[#596E85] text-[24px] font-normal leading-snug md:leading-[120%]'>
        Email us
      </p>
      <h3 className='font-sans text-center text-[#001524] text-[64px] font-medium leading-snug md:leading-[120%]'>
        info@axissstudio.com
      </h3>

      <Divider text='Or' className='mb-[42px]' />

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='flex flex-col w-full gap-[16px] mb-[32px]'>
          {/* Full Name */}
          <div>
            <input
              type='text'
              placeholder='Full Name'
              className={`w-full border p-5 rounded-2xl ${
                errors.fullName ? 'border-red-500' : 'border-[#E7E7E7]'
              }`}
              {...register('fullName', { required: 'Full Name is required' })}
            />
            {errors.fullName && (
              <p className='text-red-500 text-sm mt-1'>{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type='email'
              placeholder='email@company.com'
              className={`w-full border p-5 rounded-2xl ${
                errors.email ? 'border-red-500' : 'border-[#E7E7E7]'
              }`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
          </div>

          {/* Project Description */}
          <div>
            <textarea
              placeholder='Project description'
              className={`w-full border p-5 rounded-2xl h-[150px] ${
                errors.projectDescription ? 'border-red-500' : 'border-[#E7E7E7]'
              }`}
              {...register('projectDescription', {
                required: 'Project description is required',
                minLength: {
                  value: 20,
                  message: 'Description must be at least 20 characters',
                },
              })}
            />
            {errors.projectDescription && (
              <p className='text-red-500 text-sm mt-1'>{errors.projectDescription.message}</p>
            )}
          </div>

          {/* Referral */}
          <div>
            <input
              type='text'
              placeholder='How did you find Axissstudio'
              className={`w-full border p-5 rounded-2xl ${
                errors.referral ? 'border-red-500' : 'border-[#E7E7E7]'
              }`}
              {...register('referral', { required: 'This field is required' })}
            />
            {errors.referral && (
              <p className='text-red-500 text-sm mt-1'>{errors.referral.message}</p>
            )}
          </div>
        </div>

        <p className='font-sans text-center text-[#596E85] text-base font-normal mb-[40px]'>
          By filling in the form, you agree to our Privacy Policy, including our cookie use.
        </p>

        <div className='flex items-center justify-center'>
          <Button
            type={ButtonTypeEnum.SUBMIT}
            size={ButtonSizeEnum.MEDIUM}
            variant={ButtonVariantEnum.SECONDARY}
            classNames='px-[70px]'
          >
            Lets Talk
          </Button>
        </div>
      </form>
    </div>
  );
}
