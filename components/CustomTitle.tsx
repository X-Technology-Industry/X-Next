import type { FC } from "react";
import ClientRender from "./ClientRender";

interface CustomTitleProps {
  title: any;
  [key: string]: any;
  className?:string
}

const CustomTitle: FC<CustomTitleProps> = ({ title = "", ...props }) => {
  if (!title) return null;
  const parts = title.split("::");
  const tagName = parts[0];
  const content = parts[1];
  let html = `<${tagName}>${content}</${tagName}>`;
  if (parts.length < 2) {
    html = `<p>${parts[0] || ""}</p>`;
  }
  
  return (
    <ClientRender>
      <p {...props} dangerouslySetInnerHTML={{ __html: html }} />
    </ClientRender>
  );
};

export default CustomTitle;
