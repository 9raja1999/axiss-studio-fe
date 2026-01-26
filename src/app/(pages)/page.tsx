import EditorialBanner from '@/components/functional/EditorialBanner/EditorialBanner';
import EditorialBrands from '@/components/functional/EditorialBrands/EditorialBrands';
import data from '@/app/_lib/data/home.json';
import EditorialTwoColumn from '@/components/functional/EditorialTwoColumn/EditorialTwoColumn';
import EditorialOneColumnScrollable from '@/components/functional/EditorialOneColumnScrollable/EditorialOneColumnScrollable';
import EditorialInfiniteSlider from '@/components/functional/EditoriaInfiniteSlider/EditorialInfiniteSlider';
import TestimonialSlider from '@/components/functional/TestimonialSlider/TestimonialSlider';
import EditorialPhases from '@/components/functional/EditorialPhases/EditorialPhases';
import EditorialSliderSimple from '@/components/functional/EditorialSliderSimple/EditorialSliderSimple';

export default function Home() {
  return (
    <>
      <EditorialBanner {...data?.editorialBanner} />
      <EditorialBrands {...data?.editorialBrands} />
      <EditorialInfiniteSlider
        title='If Design Feels Scattered, You’re Not Alone!'
        showDescription={true}
        description={'Most teams come \n to us feeling this:'}
        slides={[
          {
            type: 'minimalist',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/kuick-app.png',
              alt: 'kuickapp showcase image',
            },
          },
          {
            type: 'minimalist',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/social-dreams.png',
              alt: 'social dreams showcase image',
            },
          },
          {
            type: 'minimalist',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/proctor-parhai.png',
              alt: 'proctor parhai showcase image',
            },
          },
          {
            type: 'minimalist',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/proctor-parhai.png',
              alt: 'proctor parhai showcase image',
            },
          },
          {
            type: 'minimalist',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/proctor-parhai.png',
              alt: 'proctor parhai showcase image',
            },
          },
          {
            type: 'minimalist',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/social-dreams.png',
              alt: 'social dreams showcase image',
            },
          },
        ]}
      />
      <EditorialTwoColumn {...data?.editorialTwoColumn} />
      <EditorialSliderSimple />
      <EditorialPhases />
      <EditorialOneColumnScrollable {...data?.editorialOneColumnScrollable} />
      <EditorialInfiniteSlider
        title='Where Strategy Meets Conversion-Focused Design'
        showDescription={true}
        description='Each landing page you see here is designed to tell a story, build trust, and push users toward one clear goal — growth.'
        slides={[
          {
            type: 'simple',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/kuick-app.png',
              alt: 'kuickapp showcase image',
            },
          },
          {
            type: 'simple',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/social-dreams.png',
              alt: 'social dreams showcase image',
            },
          },
          {
            type: 'simple',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/proctor-parhai.png',
              alt: 'proctor parhai showcase image',
            },
          },
          {
            type: 'simple',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/proctor-parhai.png',
              alt: 'proctor parhai showcase image',
            },
          },
          {
            type: 'simple',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/proctor-parhai.png',
              alt: 'proctor parhai showcase image',
            },
          },
          {
            type: 'simple',
            bordered: true,
            borderColor: '#F4F4F4',
            borderWidth: 4,
            image: {
              src: '/images/showcase/social-dreams.png',
              alt: 'social dreams showcase image',
            },
          },
        ]}
      />
      <TestimonialSlider {...data?.testimonialSlider} />
    </>
  );
}
