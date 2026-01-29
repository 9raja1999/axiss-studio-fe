import data from '@/app/_lib/data/about.json';
import EditorialFAQs from '@/components/functional/EditorialFAQs/EditorialFAQs';
import EditorialStepper from '@/components/functional/EditorialStepper/EditorialStepper';
import EditorialBanner from '@/components/functional/EditorialBanner/EditorialBanner';
import EditorialTwoColumn from '../../../components/functional/EditorialTwoColumn/EditorialTwoColumn';

export default function AboutPage() {
  return (
    <>
      <EditorialBanner {...data.editorialBanner} />
      <EditorialTwoColumn {...data.editorialTwoColumn} />
      <EditorialStepper />
      <EditorialFAQs {...data?.faqs} />
    </>
  );
}
