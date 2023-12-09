import type { FC } from "react";
import ClientRender from "./ClientRender";

interface RichTextProps {
  readonly html: string;
  className?: string;
}

const RichText: FC<RichTextProps> = ({ html, ...props }) => {
  return (
    <ClientRender>
      <div dangerouslySetInnerHTML={{ __html: html }} {...props} />
    </ClientRender>
  );
};

export default RichText;
