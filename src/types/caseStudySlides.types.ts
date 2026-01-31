import { IImageProps } from './image.types';

export interface ICaseStudySliderprops {
  title: string;
  description: string;
  slides: Array<{
    bgColor: string;
    image: IImageProps;
  }>;
}
