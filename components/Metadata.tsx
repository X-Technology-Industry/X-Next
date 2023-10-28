import Head from "next/head";
import type { FC } from "react";
import { ReactNode } from "react";

interface MetadataProps {
  data: Record<string, string>;
  children?: ReactNode;
  icon:icon
}

interface icon{
  url:string
}

const Metadata: FC<MetadataProps> = ({ data, children,icon }) => {
  if (!data) return
  return (
    <Head>
      {Object?.entries(data).map(([key, value], index) =>
        key === "title" ? (
          <title key={index}>{value}</title>
        ) : (
          <meta key={index} name={key} content={value} />
        )
      )}
      <link rel="icon" href={icon?.url}/>
      <meta
          id="viewport"
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1; user-scalable=no;"
        />
      {children}
    </Head>
  );
};

export default Metadata;
