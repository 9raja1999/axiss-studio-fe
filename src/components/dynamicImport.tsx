'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { IDynamicImportProps } from '@/types';

type DynamicComponent = ComponentType<any>;

const COMPONENTS_MAP: Record<string, DynamicComponent> = {
  caseStudyDescription: dynamic(
    () => import('@/components/functional/CaseStudyDescription/CaseStudyDescription'),
  ),
  caseStudyImageList: dynamic(
    () => import('@/components/functional/CaseStudyImageList/CaseStudyImageList'),
  ),
  caseStudySingleColumn: dynamic(
    () => import('@/components/functional/CaseStudySingleColumn/CaseStudySingleColumn'),
  ),
};

export default function DynamicImport({ name, data }: IDynamicImportProps) {
  const Component = COMPONENTS_MAP[name];

  if (!Component) {
    return <p className='font-sans bg-gray-50 p-8'>Component not found with name {name}</p>;
  }

  return <Component {...data} />;
}
