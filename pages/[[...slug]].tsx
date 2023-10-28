// import ComponentSelector from "@/card";
import DynamicComponent from "@/components/DynamicComponent";
import Metadata from "@/components/Metadata";
// import { ComponentCardNo } from "@/constant";
// import {
//   ANIMATE,
//   NEWSLISTPAGESIZE,
//   SEARCHLISTPAGESIZE,
//   SEARCHPAGE,
// } from "@/constant/frozenData";
import { AllStringType, pageData } from "@/interface";
import { request } from "@/utils/request";
// import { request } from "@/utils/request";
// import { dateToFullDate } from "@/utils/tools";
// import { getServerSideSitemapLegacy } from "next-sitemap";
import { type FC } from "react";

interface PageProps {
  pageData: pageData;
}

interface litItem {
  loc: string;
  lastmod: number;
  changefreq: string;
  priority: string;
}

export const getServerSideProps = async (ctx: any) => {
  /*   const { res } = ctx;
  const [path] = ctx.resolvedUrl.split("?");
  try {
    if (path === SEARCHPAGE) {
      const res = (await request({
        url: "/page/struct",
        params: { path },
        method: "GET",
      })) as { struct: any };
      const targetObject = res.struct?.find(
        (obj: any) => obj.cardNo === "21001"
      );
      const { pageCardNo } = targetObject;
      let pageNum = Number(ctx.query.pageNum);
      let searchType = Number(ctx.query.searchType);
      const pageSize = SEARCHLISTPAGESIZE;
      const search = ctx.query.search;
      const data = {
        path,
        params: {
          [pageCardNo]: {
            pageNum,
            pageSize,
            searchType,
            search,
          },
        },
      };
      const pageData = await request({
        url: "/page/struct",
        method: "POST",
        data,
      });
      return { props: { pageData } };
    }

    if (path === "/sitemap.xml") {
      const res = (await request({
        url: "/page/struct",
        params: { path },
        method: "GET",
      })) as { struct: any };
      const targetObject = res.struct?.find(
        (obj: any) => obj.cardNo === "21007"
      );
      const { list } = targetObject.card;
      const turelist = list.map((item: litItem, index: number) => {
        return {
          loc: item.loc,
          lastmod: item.lastmod ? dateToFullDate(item.lastmod) : null,
          changefreq: item.changefreq,
          priority: item.priority,
        };
      });
      return getServerSideSitemapLegacy(ctx, turelist);
    }
    let pageData = (await request({
      url: "/page/struct",
      data: { path },
      method: "POST",
    })) as { path: any; httpCode: any; redirectUrl: any; struct: any };

    if (path != "/404" && !pageData.path) {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
    }

    if (path == "/404" && !pageData.path) {
      return {
        redirect: {
          destination: "/_error",
          permanent: false,
        },
      };
    }
    if (pageData.struct.find((item: any) => item.cardNo === "11003")) {
      const { pageCardNo } = pageData.struct.find(
        (item: any) => item.cardNo === "11003"
      );
      let pageNum = Number(ctx.query.pageNum ?? 1);
      const pageSize = NEWSLISTPAGESIZE;
      const data = {
        path,
        params: {
          [pageCardNo]: {
            pageNum,
            pageSize,
          },
        },
      };
      console.log('看看数据',data);
      
      const pageDat = await request({
        url: "/page/struct",
        method: "POST",
        data,
      });
      pageData = pageDat as any;
      return { props: { pageData } };
    }
    if (pageData.httpCode === 301) {
      res.writeHead(301, { Location: pageData.redirectUrl });
      res.end();
      return {};
    }

    return { props: { pageData } }; */
  
  
  try {
    /*     const pageData = {
      struct: [
        {
          cardNo: "9999",
          card: {
            title: "X-Next",
          },
          pageCardNo: "1024",
        },
      ],
      tdk: {
        title: "X-Next",
        description: "X-Next",
        key: "X-Next",
      },
      iocn: {
        url: "",
      },
    };
    return {
      props: {
        pageData,
      },
    }; */
    const [path] = ctx.resolvedUrl.split("?");
    console.log('path',path);
    let pageData = (await request({
      url: "/page/struct",
      data: { path },
      method: "POST",
    }))
    
    
    return { props: { pageData } };
  } catch (error) {
    console.log("错误", error);
    return { props: { pageData: {} } };
  }
};

const Page: FC<PageProps> = ({ pageData: { struct, tdk, icon } }) => {
  console.log(struct);
  
  return (
    <div
      className={`${
        struct?.find((obj: any) => obj.cardNo === "30005")
          ? "pt-[6.5rem] sm:pt-[4rem] "
          : ""
      }`}
    >
      <Metadata data={tdk} icon={icon} />

      {struct?.map((item: any, index: any) => (
        <DynamicComponent
          cardNo={item.cardNo}
          data={item.card}
          key={index}
          animate={false}
        />
      ))}
    </div>
  );
};

export default Page;
