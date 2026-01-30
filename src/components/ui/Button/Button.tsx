import clsx from 'clsx';
import { motion } from 'framer-motion';
import { IButtonProps } from '@/types';
import { ButtonSizeEnum, ButtonVariantEnum } from '@enums';
import Icons from '@/components/ui/Icon/Icons';
import AnchorLink from '@/components/ui/AnchorLink/AnchorLink';

const variantStyles = {
  [ButtonVariantEnum.PRIMARY]: 'bg-primary text-white',
  [ButtonVariantEnum.SECONDARY]:
    'border-4 border-secondary-light rounded-full text-white bg-[radial-gradient(circle_at_bottom,_#ffffff,_#ff7a3e_30%)] shadow-[inset_0_4px_6px_0_#FFD0BF] transition-all duration-300',
  [ButtonVariantEnum.TERTIARY]:
    'bg-tertiary text-primary border border-transparent hover:border-primary transition-colors duration-200',
};

const sizeStyles = {
  [ButtonSizeEnum.SMALL]: 'px-[24px] py-[8px] text-base font-normal',
  [ButtonSizeEnum.MEDIUM]: 'px-[27px] py-[15px] text-base',
  [ButtonSizeEnum.LARGE]: 'px-8 py-4 text-base',
};

export default function Button(props: IButtonProps) {
  const { size, variant, href, type, classNames, children, icon, ...restProps } = props;

  const buttonClass = clsx(
    'font-sans inline-flex items-center justify-center w-fit rounded-full cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    classNames,
  );

  if (href) {
    return (
      <AnchorLink href={href}>
        <button className={buttonClass} {...restProps}>
          {icon && icon.position === 'left' && (
            <span className='mr-4'>
              <Icons {...icon?.config} />
            </span>
          )}
          {children}
          {icon && icon.position === 'right' && (
            <span className='ml-4'>
              <Icons {...icon?.config} />
            </span>
          )}
        </button>
      </AnchorLink>
    );
  }
  return (
    <button className={buttonClass} {...restProps}>
      {icon && icon.position === 'left' && (
        <span className='mr-4'>
          <Icons {...icon?.config} />
        </span>
      )}
      {children}
      {icon && icon.position === 'right' && (
        <span className='ml-4'>
          <Icons {...icon?.config} />
        </span>
      )}
    </button>
  );
}
