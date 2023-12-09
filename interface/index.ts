export interface cardDataINT {
  data: {
    [key: string]: any;
  };
}

export interface tdk {
  [key: string]: string;
}

export type AllStringType = Record<string, string>;

export type ArrayItemINT = Record<string, any>;

export interface CustomImageProps {
  src: string;
  h?: number;
  w?: number;
  fixed?: string;
  alt: string;
  quality?: string;
  fill: boolean;
  className?: string;
  readonly loader?: any;
}

export interface IconINT {
  width: string;
  height: string;
  fill?: string;
  className?: string;
  [key: string]: any;
}

export interface NavItem {
  menuName: string;
  menuUrl: string;
  children?: NavItem[] | null;
  [key: string]: any;
}
//导航栏
export interface SubNavProps {
  readonly navItem: Partial<NavItem>;
  [key: string]: any;
}

export interface MenuItem {
  menuName: string;
  menuUrl: string;
  children: any;
}

export interface SiteMap {
  siteMap: MenuItem[];
}

export interface SiteMapProps {
  data: SiteMap;
  animate: boolean;
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
export interface FourMenuProps {
  items: MenuItem[];
}
