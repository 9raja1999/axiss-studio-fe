import Icons from '../Icon/Icons';

export default function CircularButtonSVG() {
  const text = ' Watch our showreel •'; // dots for nice caps
  const size = 140; // container size
  const radius = 60; // radius of circle

  return (
    <div className='relative w-[140px] h-[140px] flex items-center justify-center'>
      {/* SVG Circular Text */}
      <svg width={size} height={size} className='absolute inset-0' viewBox={`0 0 ${size} ${size}`}>
        <defs>
          {/* Top semi-circle */}
          <path
            id='topPath'
            d={`
              M ${size / 2 - radius},${size / 2} 
              A ${radius},${radius} 0 0,1 ${size / 2 + radius},${size / 2}
            `}
          />
          {/* Bottom semi-circle */}
          <path
            id='bottomPath'
            d={`
              M ${size / 2 + radius},${size / 2} 
              A ${radius},${radius} 0 0,1 ${size / 2 - radius},${size / 2}
            `}
          />
        </defs>

        {/* Top semi-circle text */}
        <text className='fill-primary font-sans text-[18px] tracking-[1px]'>
          <textPath href='#topPath' startOffset='50%' textAnchor='middle'>
            {text}
          </textPath>
        </text>

        {/* Bottom semi-circle text */}
        <text className='fill-primary font-sans text-[18px] tracking-[1px]'>
          <textPath href='#bottomPath' startOffset='50%' textAnchor='middle'>
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Play Icon */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
        <Icons name='play.svg' size={24} />
      </div>
    </div>
  );
}
