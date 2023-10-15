import { MenuItemType } from "@/app/types";
import { IconChartPie2, IconChartArrowsVertical, IconCoins, IconDatabaseDollar, IconCurrencyDollar } from '@tabler/icons-react'
export const menuItems: MenuItemType[] = [

    {
        title: 'قیمت ارز و طلا',
        link: '/dollar',
        icon: IconCurrencyDollar
    },
    {
        icon: IconChartPie2,
        title: 'سهام',
        link: '/stock',
        innerItems: [
            {
                link: '/priority',
                title: 'حق تقدم',
            },
            {
                link: '/option',
                title: 'اختیار معامله (آپشن)',
            },
        ]
    },
    {
        title: 'آتی',
        icon: IconChartArrowsVertical,
        link: '/future',
        innerItems: [
            {
                link: '/lotus',
                title: 'صندوق لوتوس'
            },
            {
                link: '/gold',
                title: 'شمس طلا 24 عیار'
            }
        ]
    },
    {
        link: '/goldandcoin',
        title: 'طلا و سکه',
        icon: IconCoins,
        innerItems: [
            // {
            //     link: '/etc',
            //     title: 'صندوق طلا'
            // },
            {
                link: '/coindiff',
                title: 'اوراق سکه با بازار'
            }
        ]
    },
    // {
    //     title: 'درآمد ثابت',
    //     link: '/certainincome',
    //     icon: IconDatabaseDollar
    // },
    // {
    //     title: 'دلار',
    //     link: '/dollar',
    //     icon: IconCurrencyDollar
    // },


]