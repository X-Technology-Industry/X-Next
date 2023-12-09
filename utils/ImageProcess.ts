import type { FC } from "react";

interface ImageProcessProps {
  src: string;
  width: string;
  quality: number;
}

const ImageProcess: FC<ImageProcessProps> = ({ src, width, quality }) => {
  // 使用本地文件
  if (quality === 100) {
    return src;
  }
  const domain = `https://img.yofishseo.com/yiyuweb`;
  const suffix = `?x-oss-process=image/auto-orient,1/interlace,1/resize,m_lfit,w_${width},limit_0/quality,Q_${
    quality || 75
  }/format,webp`;

  if (src?.startsWith("http")) {
    return `${src}${suffix}`;
  }

  const host = `${domain}${src}${suffix}`;

  return host;
};

export default ImageProcess;
