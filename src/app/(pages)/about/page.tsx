import DynamicImport from '@/components/dynamicImport';
import data from '@/app/_lib/data/about.json';

export default function AboutPage() {
  return (
    <>
      {data?.map((component, idx) => (
        <DynamicImport name={component.name} data={component.data} />
      ))}
    </>
  );
}
