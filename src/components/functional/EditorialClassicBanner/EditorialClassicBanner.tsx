interface IEditorialClassicBannerProps {
  tagLine: string;
  title: string;
}

export default function EditorialClassicBanner({ tagLine, title }: IEditorialClassicBannerProps) {
  return (
    <section className='w-full relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-end-safe justify-center border overflow-hidden bg-primary'>
      <div
        className='absolute rounded-full pointer-events-none'
        style={{
          width: '1239px',
          height: '1239px',
          top: '-151px',
          left: '1044px',
          background: 'rgba(249, 94, 39, 0.7)',
          filter: 'blur(555px)',
        }}
      />
      <div
        className='absolute rounded-full pointer-events-none'
        style={{
          width: '955px',
          height: '955px',
          top: '-22px',
          left: '528px',
          background: 'rgba(255, 255, 255, 0.3)',
          filter: 'blur(267px)',
        }}
      />
      <div>
        <p className='font-sans capitalize text-center text-xl text-white mb-6'>{tagLine}</p>
        <h1 className='font-sans capitalize text-3xl md:text-[80px] font-medium text-white leading-snug md:leading-[120%] mb-7'>
          {title}
        </h1>
      </div>
    </section>
  );
}
