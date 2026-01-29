import { ITagProps } from '@/types/tag.types';
import Icons from '../Icon/Icons';

export default function Tag({ name, color, icon }: ITagProps) {
  return (
    <span className='inline-flex items-center gap-4 p-2 md:px-[24px] md:py-[7px] capitalize whitespace-nowrap border border-[#EAEAEA] font-sans text-xl md:text-[24px] rounded-full font-light'>
      {icon && <Icons {...icon} />}
      {name}
    </span>
  );
}
