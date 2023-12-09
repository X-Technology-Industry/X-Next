const cheerio = require("cheerio");

export const formatDateYearMonthDayEn = (timestamp: number): string => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
};

export const handleDownLoadFile = (url: string, name: string) => {
  fetch(url)
    // record.doc_url为文件url地址
    .then((res) => res.blob())
    .then((blob) => {
      downloadFile(blob, name);
    });
};

export const downloadFile = (blob: any, filename: string) => {
  let url = window.URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
};

export const handleContentWithoutImg = (str: string = "") =>
  str ? cheerio.load(str).text() : "";

//#region 处理时间戳相关函数
//#region 【日】
export const dateToDay = (timestamp: number) => {
  const date = new Date(timestamp);
  const day = date.getDate(); // 获取日期
  return day;
};
//#endregion

//#region 【年】+【月】
export const dateToYearMonth = (timestamp: number) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const formattedYearMonth = `${year}-${month < 10 ? "0" + month : month}`;
  return formattedYearMonth;
};
//#endregion

//#region 【年】【月】【日】
export const dateToFullDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const year = date.getFullYear(); // 获取年份
  const month = date.getMonth() + 1; // 获取月份（注意月份从0开始，需要加1）
  const day = date.getDate(); // 获取日期

  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`; // 拼接年份、月份和日期
  return formattedDate;
};
//#endregion
//#endregion
