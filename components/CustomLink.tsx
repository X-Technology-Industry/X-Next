import Link, { LinkProps } from "next/link";
import type { FC, ReactNode } from "react";

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  rel?: string;
}

const CustomLink: FC<CustomLinkProps> = ({ children, href, ...props }) => {
  return (
    <Link href={href ?? ""} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
