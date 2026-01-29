import { IStatCardProps } from '@/types';
import { cn } from '../../../utils';

export default function StatCard({ label, value, labelClass, valueClass }: IStatCardProps) {
  return (
    <div className='w-full md:w-[480px] md:min-h-[141px]'>
      <p
        className={cn(
          labelClass ? labelClass : '',
          'font-sans text-center text-lg font-normal text-[#596E85] capitalize mb-6 leading-snug md:text-[28px] md:leading-[140%] md:mb-3',
        )}
      >
        {label}
      </p>
      <p
        className={cn(
          valueClass ? valueClass : '',
          'font-sans text-center text-2xl mb-0 md:text-[120px] leading-snug md:leading-none tracking-tighter',
        )}
      >
        {value}
      </p>
    </div>
  );
}
