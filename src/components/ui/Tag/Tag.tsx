import { ITagProps } from '@/types/tag';
import Icons from '../Icon/Icons';

export default function Tag({ name, color, icon }: ITagProps) {
  return (
    <span className='inline-flex items-center gap-4 px-[24px] py-[7px] capitalize whitespace-nowrap border border-[#EAEAEA] font-sans text-[24px] rounded-full font-light'>
      {icon && <Icons {...icon} />}
      {name}
    </span>
  );
}
