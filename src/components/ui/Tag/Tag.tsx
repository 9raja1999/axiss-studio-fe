import Icons from '@/components/ui/Icon/Icons';
import { ITagProps } from '@/types';
import { cn } from '@/utils';

export default function Tag({ name, color, icon, classNames }: ITagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-4 p-2 md:px-[24px] md:py-[7px] capitalize whitespace-nowrap border border-[#EAEAEA] font-sans text-xl md:text-[24px] rounded-full font-light',
        classNames,
      )}
    >
      {icon && <Icons {...icon} />}
      {name}
    </span>
  );
}
