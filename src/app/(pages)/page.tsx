import data from '@/app/_lib/data/home.json';
import DynamicImport from '@/components/dynamicImport';

export default function Home() {
  return (
    <div>
      {data?.map((component, idx) => (
        <DynamicImport key={idx} name={component.name} data={component.data} />
      ))}
    </div>
  );
}
