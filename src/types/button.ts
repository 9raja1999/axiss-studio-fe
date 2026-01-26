import { ButtonSizeEnum, ButtonVariantEnum } from '@enums';
import { ButtonTypeEnum } from '../enums';
import { IIconProps } from './icon';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSizeEnum;
  variant: ButtonVariantEnum;
  type?: ButtonTypeEnum;
  icon?: {
    config: IIconProps;
    position: 'left' | 'right';
  };
  classNames?: string;
}
