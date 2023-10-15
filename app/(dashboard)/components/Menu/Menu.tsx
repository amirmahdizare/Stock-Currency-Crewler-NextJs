'use client'
import React, { useState } from 'react'
import { menuItems } from './items'
import Link from 'next/link'
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'

export const Menu = () => {

    const [openedMenus, setOpenedMenus] = useState<{ [key: string]: boolean }>({})

    const pathname = usePathname()

    console.log(pathname)

    return (
        <div className='flex flex-col gap-8 items-start py-4'>
            {menuItems.map(({ icon: Icon, ...item }) => {

                if (item?.innerItems?.length == 0 || !item.innerItems)
                    return <Link href={item.link} className={'flex flex-row gap-4 items-center pr-4 hover:text-red-700'.concat(item.link == pathname ? 'text-red-700' : '')}>
                        <Icon width={15} height={15} />
                        <span>{item.title}</span>
                    </Link>


                return <div className='flex flex-col items-start gap-3 px-4'>

                    <div className='flex flex-row gap-2 items-center cursor-pointer ' onClick={() => setOpenedMenus({ ...openedMenus, [item.link]: !openedMenus?.[item.link] })}>

                        <Icon width={15} height={15} />

                        <span className='text-black'>{item.title}</span>
                        {/* <IconChevronDown width={15} height={15} className={openedMenus?.[item.link] ? 'rotate-180 transition-all  text-gray-500' : ' transition-all text-gray-500'} /> */}
                    </div>

                    { item.innerItems?.map(l => <Link href={item.link.concat(l.link)} className={'flex flex-row gap-4 items-center pr-4 text-sm hover:text-gray-700 '.concat(item.link.concat(l.link) == pathname ? 'text-red-700 font-semibold' : ' text-gray-600 ')}>{l.title}</Link>)}
                </div>
            })}
        </div>
    )
}
