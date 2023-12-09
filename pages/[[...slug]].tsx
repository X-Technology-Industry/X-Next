import DynamicComponent from "@/components/DynamicComponent";
import Metadata from "@/components/Metadata";
import { ArrayItemINT } from "@/interface";
import { request } from "@/utils/request";
import { dateToFullDate } from "@/utils/tool";
import { getServerSideSitemapLegacy } from "next-sitemap";
import type { FC } from "react";

interface PageProps {
  pageData: any;
}

/* export const getServerSideProps = async (ctx: any) => {
  const { res } = ctx;
  const [path] = ctx.resolvedUrl.split("?");
  try {
    if (path === "/search-result") {
      const res = (await request({
        url: "/page/struct",
        params: { path },
        method: "GET",
      })) as { struct: any };
      const targetObject = res.struct?.find(
        (obj: any) => obj.cardNo === "21001"
      );

      const pageCardNo = targetObject?.pageCardNo;
      let pageNum = Number(ctx.query.pageNum);
      let searchType = Number(ctx.query.searchType);
      const pageSize = 10;
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
      console.log("pageData----------", pageData);

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
      const turelist = list.map((item: ArrayItemINT, index: number) => {
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
    if (pageData?.httpCode === 301) {
      res.statusCode = 301;
      return {
        redirect: {
          destination: pageData.redirectUrl,
          permanent: true,
        },
      };
    }
    if (path != "/404" && !pageData.path) {
      return {
        notFound: true,
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
    if (pageData.struct.find((item: any) => item.cardNo === "11004")) {
      const { pageCardNo } = pageData.struct.find(
        (item: any) => item.cardNo === "11004"
      );
      let pageNum = Number(ctx.query.pageNum ?? 1);
      const pageSize = 3;
      const data = {
        path,
        params: {
          [pageCardNo]: {
            pageNum,
            pageSize,
          },
        },
      };

      const pageDat = await request({
        url: "/page/struct",
        method: "POST",
        data,
      });
      pageData = pageDat as any;
      return { props: { pageData } };
    }
    if (pageData.struct.find((item: any) => item.cardNo === "21023")) {
      const { pageCardNo } = pageData.struct.find(
        (item: any) => item.cardNo === "21023"
      );
      let pageNum = Number(ctx.query.pageNum ?? 1);
      const pageSize = 12;
      const data = {
        path,
        params: {
          [pageCardNo]: {
            pageNum,
            pageSize,
          },
        },
      };

      const pageDat = await request({
        url: "/page/struct",
        method: "POST",
        data,
      });
      pageData = pageDat as any;
      
      return { props: { pageData } };
    }
    return { props: { pageData } };
  } catch (error) {
    console.warn("Error Happend", error);
    return { props: { pageData: {} } };
  }
}; */

export const getServerSideProps = async (ctx: any) => {
  const pageData = {
    struct: [
      {
        cardNo: "99999",
      },
    ],
  };
  try {
    return {
      props: { pageData },
    };
  } catch (error) {}
};
const Page: FC<PageProps> = ({ pageData: { struct, tdk, icon, path } }) => {
  return (
    <div>
      <Metadata data={tdk} icon={icon} path={path} />
      {struct?.map((item: any, index: any) => (
        <DynamicComponent cardNo={item.cardNo} data={item.card} key={index} />
      ))}
    </div>
  );
};

export default Page;
