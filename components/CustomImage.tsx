import { CustomImageProps } from "@/interface";
import ImageProcess from "@/utils/ImageProcess";
import Image from "next/image";
import type { FC } from "react";

const CustomImage: FC<CustomImageProps> = ({
  src,
  fill,
  fixed,
  alt = "",
  quality = 75,
  ...props
}) => {
  return (
    <Image
      loader={ImageProcess}
      src={src || ""}
      fill={fill}
      alt={alt}
      title={alt}
      {...props}
    />
  );
};

export default CustomImage;
