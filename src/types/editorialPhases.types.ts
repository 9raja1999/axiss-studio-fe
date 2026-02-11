import { ITagProps } from './tag.types';

export interface IEditorialPhasesProps {
  title: string;
  description: string;
  phases: Array<{ title: string; description: string; tags: Array<ITagProps> }>;
}
