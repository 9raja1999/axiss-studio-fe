import { ITestimonialCardProps } from '../../../types';
import Icons from '../../ui/Icon/Icons';

export default function TestimonialCard(props: ITestimonialCardProps) {
  const { avatarUrl, authorName, content, rating, authorTitle } = props;
  return (
    <div className='flex gap-4'>
      <div>
        <div className='relative w-16 h-16 overflow-hidden bg-white rounded-full'>
          <img src={avatarUrl} className='absolute rounded-full' alt='avatar' />
        </div>
      </div>
      <div>
        <p className='font-sans text-white text-2xl max-w-sm'>{content}</p>
        {rating && (
          <div className='flex items-center gap-1 my-4'>
            {Array.from({ length: rating }, (_, i) => (
              <Icons key={i} name='star.svg' size={16} />
            ))}
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
