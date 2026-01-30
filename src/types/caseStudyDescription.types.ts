import { IAvatarProps } from './avatar.types';
import { IImageProps } from './image.types';

export interface ICaseStudyDescImage extends IImageProps {
  colSpan?: number;
  rowSpan?: number;
}

export interface ICaseStudyDescriptionProps {
  tagLine: string;
  title: string;
  description: string;
  logo: string;
  deliveribles: { label: string; value: string };
  platforms: { label: string; value: string };
  mainImage: IImageProps;
  testimonial?: {
    review: string;
    avatar: IAvatarProps;
    title: string;
    subTitle: string;
  };
  images: Array<ICaseStudyDescImage>;
}
