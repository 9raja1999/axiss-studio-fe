import { IBrand } from '@/types';

interface IBrandCardProps extends IBrand {}
export default function BrandCard({ image, brandName }: IBrandCardProps) {
  return (
    <div className='bg-[#F7F7F9] h-[116px] rounded-2xl flex items-center justify-center'>
      <img src={image} alt='company logo' />
    </div>
  );
}
