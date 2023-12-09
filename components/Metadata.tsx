import { DOMAIN } from "@/utils/request";
import Head from "next/head";
import type { FC } from "react";
import { ReactNode } from "react";

interface MetadataProps {
  data: Record<string, string>;
  children?: ReactNode;
  icon: icon;
  path?: string;
}

interface icon {
  url: string;
}

const Metadata: FC<MetadataProps> = ({ data, children, icon, path }) => {
  if (!data) return;
  return (
    <Head>
      {Object?.entries(data).map(([key, value], index) =>
        key === "title" ? (
          <title key={index}>{value}</title>
        ) : (
          <meta key={index} name={key} content={value} />
        )
      )}
      <link rel="icon" href={icon?.url} />
      <link rel="canonical" href={'https://'+DOMAIN + path} />

      <meta
        id="viewport"
        name="viewport"
        content="width=device-width; initial-scale=1.0; maximum-scale=1; user-scalable=no;"
      />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data?.title} />
      <meta property="og:url" content={path}></meta>
      <meta property="og:description" content={data?.description} />
      {children}
    </Head>
  );
};

export default Metadata;
