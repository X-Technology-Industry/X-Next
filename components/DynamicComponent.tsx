import Foo from "@/card/Foo";
import type { FC, ReactNode } from "react";
import React from "react";

interface DynamicComponentProps {
  cardNo: string;
  data: Record<string, any>;
  animate?: boolean;
}
const ComponentMap = new Map<string, any>();
ComponentMap.set("99999", Foo);


const DynamicComponent: FC<DynamicComponentProps> = ({
  cardNo,
  data,
}): JSX.Element | null => {
  const SelectedComponent = ComponentMap.get(cardNo);

  if (!SelectedComponent) {
    return null; // 或者返回默认的组件或错误信息
  }

  return <SelectedComponent data={data} />;
};

export default DynamicComponent;
