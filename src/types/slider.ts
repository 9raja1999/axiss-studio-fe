import { IImageProps } from './image';

export type SlideEditorialInfinite = {
  type: 'minimalist' | 'simple';
  hoverColor?: string;
  bordered: boolean;
  borderColor: string;
  borderWidth: number;
  image: IImageProps;
  secondaryImage?: IImageProps;
};
export interface IEditorialInfiniteSliderProps {
  title: string;
  showDescription: boolean;
  description?: string;
  slides: SlideEditorialInfinite[];
}

export interface IEditorialFullWidthSliderProps {
  slides: Array<{
    logo: string;
    backgroundColor: string;
    image: string;
    title: string;
    cta: {
      title: string;
      href: string;
      className: string;
    };
    testimonial: {
      avatar: string;
      authorName: string;
      content: string;
      rating: number;
      authorTitle: string;
    };
  }>;
}

export interface IMessagingSliderProps {
  slides: Array<{
    image: string;
    bgColor: string;
    title: string;
    subTitle: string;
    message?: string;
  }>;
}

export interface ITestimonialSliderProps {
  title: string;
  testimonials: Array<{
    avatar: string;
    authorName: string;
    authorTitle: string;
    rating: number;
    description: string;
  }>;
}
