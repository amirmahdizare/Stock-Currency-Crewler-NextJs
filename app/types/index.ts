import { Icon123 } from "@tabler/icons-react";
import { ReactNode } from "react";

export interface MenuItemType {
    title: string,
    icon: typeof Icon123,
    link: string,
    innerItems?: Array<Omit<MenuItemType, 'icon'>>
}