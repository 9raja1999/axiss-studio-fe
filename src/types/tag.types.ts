import { IIconProps } from './icon.types';

export interface ITagProps {
  name: string;
  color?: string;
  icon?: IIconProps;
  classNames?: string;
}

export interface ITagListProps {
  list: Array<ITagProps>;
  limit: number;
  classNames?: string;
  limitTagClassName?: string;
}
