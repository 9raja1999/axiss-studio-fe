import { IImageProps } from './image.types';

export interface ICaseStudyImage extends IImageProps {
  colSpan?: number;
  rowSpan?: number;
}

export interface ICaseStudySingleColumnProps {
  title: string;
  description: string;
  images: Array<ICaseStudyImage>;
  rowHeight: string;
  colSize: number;
  classNames?: string;
}
