import data from '@/app/_lib/data/caseStudy.json';
import DynamicImport from '../../../../components/dynamicImport';

export default function CaseStudyDetail() {
  return (
    <div>
      {data?.map((component, idx) => (
        <DynamicImport key={idx} name={component.name} data={component.data} />
      ))}
    </div>
  );
}
