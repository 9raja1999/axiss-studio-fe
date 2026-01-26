import { IMessagingSliderProps } from './slider';

export interface IEditorialBannerProps {
  title: string;
  subTitle: string;
  description: string;
  slides: IMessagingSliderProps['slides'];
}
