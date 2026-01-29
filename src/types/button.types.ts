import { ButtonSizeEnum, ButtonVariantEnum } from '@enums';
import { ButtonTypeEnum } from '../enums';
import { IIconProps } from './icon.types';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSizeEnum;
  variant: ButtonVariantEnum;
  href?: string;
  type?: ButtonTypeEnum;
  icon?: {
    config: IIconProps;
    position: 'left' | 'right';
  };
  classNames?: string;
}
