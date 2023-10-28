import { ComponentCardNo } from "@/constant";
//卡片
export interface CardComponentsProps {
    cardNo: ComponentCardNo; 
    data:any
    animate?:boolean
    pageCardNo:string
  }
 
  //导航栏
export interface NavItem {
  menuName: string;
  menuUrl: string;
  children?: NavItem[] | null;
  [key: string]: any
}
//导航栏
export interface SubNavProps {
  readonly navItem: Partial<NavItem>;
}

export interface CustomImageProps {
  local?: string;
  src: string;
  h?: string;
  w?: string;
  fixed?: string;
  alt: string;
  quality?: string;
  fill:boolean
  className?:string
}


export interface MenuItem {
  menuName: string;
  menuUrl:string
  children:any
}

export interface SiteMap {
  siteMap: MenuItem[];
}

export interface SiteMapProps {
  data: SiteMap;
  animate:boolean
}

export interface MenuProps {
  data: MenuItem[];
}

export interface SubMenuProps {
  items: MenuItem[];
}

export interface LastMenuProps {
  items: MenuItem[];
}
export interface FourMenuProps{
  items: MenuItem[];
}



export interface pageData {
  struct: Array<{
    [key: string]: any;
  }>;
  tdk: tdk;
  icon:{
    url:string
  }
}

export interface tdk {
[key:string]:string
}

export type AllStringType = Record<string,string>


