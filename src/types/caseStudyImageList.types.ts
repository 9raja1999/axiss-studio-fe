import { IImageProps } from './image.types';
import { ITagListProps } from './tag.types';

export interface ICaseStudyImageListProps {
  title: string;
  description: string;
  tagList?: ITagListProps;
  images: Array<IImageProps>;
}
