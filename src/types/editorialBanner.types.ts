import { IMessagingSliderProps } from './slider.types';
import { IStatCardProps } from './statCard.types';

export interface IEditorialBannerProps {
  title: string;
  subTitle: string;
  description: string;
  slides?: IMessagingSliderProps['slides'];
  bgImages?: Array<{
    image: string;
    position: string;
  }>;
  cookieBot: boolean;
  wheel?: {
    text: string;
  };
  meshVector?: {
    image: string;
    position: string;
  };
  statistics?: Array<IStatCardProps>;
}
