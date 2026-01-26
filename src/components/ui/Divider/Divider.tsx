type DividerProps = {
  text?: string;
  className?: string;
};

export default function Divider({ text, className }: DividerProps) {
  if (!text) {
    // plain line
    return <hr className={`border-t border-[#DCDCDC] my-4 ${className ?? ''}`} />;
  }

  return (
    <div className={`flex items-center my-4 ${className ?? ''}`}>
      <div className='flex-1 border-t border-[#DCDCDC]'></div>
      <span className='px-4 text-[#DCDCDC]'>{text}</span>
      <div className='flex-1 border-t border-[#DCDCDC]'></div>
    </div>
  );
}
