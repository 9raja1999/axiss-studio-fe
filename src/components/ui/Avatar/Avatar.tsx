import { cn } from '@/utils';
import { IAvatarProps } from '@/types';

export default function Avatar({ image, size, color, className }: IAvatarProps) {
  return (
    <div
      className={cn('rounded-full overflow-hidden border', className)}
      style={{
        width: size,
        height: size,
        borderColor: color,
        backgroundColor: color,
      }}
    >
      <img src={image} alt='Avatar' className='w-full h-full object-contain' />
    </div>
  );
}
