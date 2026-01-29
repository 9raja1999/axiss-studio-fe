import { ITestimonialCardProps } from '../../../types';
import Icons from '@/components/ui/Icon/Icons';
import Rating from '@/components/ui/Rating/Rating';

export default function TestimonialCard(props: ITestimonialCardProps) {
  const { avatarUrl, authorName, content, rating, authorTitle } = props;
  return (
    <div className='flex gap-4'>
      <div>
        <div className='relative w-12 h-12 md:w-16 md:h-16 overflow-hidden bg-white rounded-full'>
          <img src={avatarUrl} className='absolute rounded-full' alt='avatar' />
        </div>
      </div>
      <div>
        <p className='font-sans text-white text-xl md:text-2xl max-w-sm'>{content}</p>
        {rating && (
          <div className='flex items-center gap-1 my-4'>
            {/* {Array.from({ length: rating }, (_, i) => (
              <Icons key={i} name='star.svg' size={16} />
            ))} */}
            <Rating value={4} size={16} classNames='mb-0!' showInfo={false} />
          </div>
        )}
        <h4 className='font-sans text-white capitalize text-base font-medium'>{authorName}</h4>
        {authorTitle && (
          <span className='font-sans text-white uppercase text-sm opacity-90'>{authorTitle}</span>
        )}
      </div>
    </div>
  );
}
