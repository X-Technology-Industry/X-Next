import { lazy } from "react";

export const ComponentMap = {
  "9999": lazy(() => import("@/card/Foo")),
} as any;

export default ComponentMap;
