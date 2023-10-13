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

export interface CertainIncomeItem {
    symbol: string,
    price: number,
    monthlyProfit: number
    // profitToman: number
}


export interface SASymbolListItemType {
    name: string,
    market: string,
    instance_code: number,
    last_trade_date: string,
    last_trade_time: string
    namad_code: string,
    industry_code: string,
    industry: string,
    state: string,
    full_name: string
    first_price: number,
    yesterday_price: number,
    close_price: number,
    close_price_change: number,
    close_price_change_percent: number,
    final_price: number,
    final_price_change: number,
    final_price_change_percent: number,
    eps: number,
    free_float: number
    highest_price: number
    lowest_price: number
    daily_price_high: number
    daily_price_low: 9108.00,
    "P:E": number,
    trade_number: number,
    trade_volume: number,
    trade_value: number,
    all_stocks: number,
    basis_volume: number,
    real_buy_volume: number,
    co_buy_volume: number,
    real_sell_volume: number,
    co_sell_volume: number,
    real_buy_value: number,
    co_buy_value: number,
    real_sell_value: number,
    co_sell_value: number,
    real_buy_count: number,
    co_buy_count: number,
    real_sell_count: number,
    co_sell_count: number,
    "1_sell_count": number,
    "2_sell_count": number,
    " 3_sell_count": number,
    "4_sell_count": number,
    "5_sell_count": number,
    " 1_buy_count": number,
    "2_buy_count": number,
    "3_buy_count": number,
    "4_buy_count": number,
    "5_buy_count": number,
    "1_sell_price": number,
    "2_sell_price": number,
    "3_sell_price": number,
    "4_sell_price": number,
    "5_sell_price": number,
    "1_buy_price": number,
    "2_buy_price": number,
    "3_buy_price": number,
    "4_buy_price": number,
    "5_buy_price": number,
    "1_sell_volume": number,
    "2_sell_volume": number,
    "3_sell_volume": number,
    "4_sell_volume": number,
    "5_sell_volume": number,
    "1_buy_volume": number,
    "2_buy_volume": number,
    "3_buy_volume": number,
    "4_buy_volume": number,
    "5_buy_volume": number,
    market_value: number
}