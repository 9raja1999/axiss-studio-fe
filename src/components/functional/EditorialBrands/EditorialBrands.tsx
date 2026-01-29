import { motion } from 'framer-motion';
import BrandCard from './BrandCard';
import { IEditorialbrandsProps } from '@/types';

export default function EditorialBrands({ title, brands }: IEditorialbrandsProps) {
  return (
    <section className='w-full py-7 md:pb-[200px]'>
      <div className='w-[90%] mx-auto'>
        <h2 className='text-center mb-[48px] font-sans text-[21px] text-[#596E85] font-normal'>
          {title}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
          {brands?.map((brand, idx) => (
            <BrandCard key={idx} image={brand?.image} brandName={brand?.brandName} />
          ))}
        </div>
      </div>
    </section>
  );
}
