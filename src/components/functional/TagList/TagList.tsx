import { ITagListProps } from '@/types';
import { cn } from '@/utils';
import Tag from '../../ui/Tag/Tag';

export default function TagList({ list, limit, classNames, limitTagClassName }: ITagListProps) {
  const visible = list.slice(0, limit);
  const remaining = list.length - limit;

  return (
    <div className={cn('flex flex-row flex-wrap gap-2 md:gap-[16px]', classNames)}>
      {visible.map((tag, idx) => (
        <Tag key={idx} {...tag} />
      ))}

      {remaining > 0 && <Tag name={`+${remaining}`} classNames={limitTagClassName} />}
    </div>
  );
}
