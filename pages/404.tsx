import DynamicComponent from "@/components/DynamicComponent";
import Metadata from "@/components/Metadata";
import { request } from "@/utils/request";
import type { FC } from "react";

interface Custom404Props {
  [key: string]: any;
}

export const getStaticProps = async (ctx: any) => {
  try {
    let pageData = (await request({
      url: "/page/struct",
      data: { path: "/404" },
      method: "POST",
    })) as { path: any; httpCode: any; redirectUrl: any; struct: any };

    return { props: { pageData }, revalidate: 1800 };
  } catch (error) {}
};

const Custom404: FC<Custom404Props> = (props) => {
  const struct = props?.pageData?.struct;
  const tdk = props?.pageData?.tdk;
  const icon = props?.pageData?.icon;
  const path = props?.pageData?.path;

  return (
    <div
      className={`${
        struct?.find((obj: any) => obj.cardNo === "30005")
          ? "pt-[6.5rem] sm:pt-[4rem] "
          : ""
      }`}
    >
      <Metadata data={tdk} icon={icon} path={path} />

      {struct?.map((item: any, index: number) => (
        <DynamicComponent cardNo={item.cardNo} data={item.card} key={index} />
      ))}
    </div>
  );
};

export default Custom404;
