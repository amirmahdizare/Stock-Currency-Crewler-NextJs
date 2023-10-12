import { Icon123 } from "@tabler/icons-react";
import { ReactNode } from "react";

export interface MenuItemType {
    title: string,
    icon: typeof Icon123,
    link: string,
    innerItems?: Array<Omit<MenuItemType, 'icon'>>
}

export interface PriorityStockItem {
    symbol: string,
    pSymbol: string,
    state: string,
    symbolPrice: number,
    pSymbolPrice: number,
    profitPercent: number,
    daysToEnd: number,
}

export interface LotusFutureData {
    fSymbol: string,
    price: number,
    // symbolPrice: number,
    deadline: string,
    profitPercent: number,
    daysToEnd: number,
    garrantPrice: number
}


export interface ETCItem {
    symbol: string,
    price: number,
    nav: number
    profitPercent: number,
}



export interface CoinItem {
    symbol: string,
    price: number,
    profitPercent: number,
    profitToman: number
}