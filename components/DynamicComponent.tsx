import type { FC } from 'react';
import React from 'react';
import ComponentMap from './ComponentMap';

interface DynamicComponentProps {
  cardNo: string;
  data: Record<string, any>;
  animate?:boolean

}

const DynamicComponent: FC<DynamicComponentProps> = ({ cardNo, data }): any => {
  const Component = ComponentMap[cardNo];
  return Component && <Component data={data} />;
};

export default DynamicComponent;
