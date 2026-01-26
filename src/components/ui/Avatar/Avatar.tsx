import clsx from 'clsx';

interface IAvatarProps {
  image: string;
  size: number;
  color: string;
  className: string;
}

export default function Avatar({ image, size, color, className }: IAvatarProps) {
  return (
    <div
      className={clsx('rounded-full overflow-hidden border', className)}
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
