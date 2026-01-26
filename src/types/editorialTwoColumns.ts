import { ImageProps } from 'next/image';
import { ITagProps } from './tag';

export interface IEditorialTwoColumnsProps {
  title: string;
  subTitle: string;
  description: string;
  tagsRender: {
    heading: string;
    tags: ITagProps[];
  };
  imageList: {
    title: string;
    list: Array<{
      image: ImageProps;
      text: string;
    }>;
  };
}
