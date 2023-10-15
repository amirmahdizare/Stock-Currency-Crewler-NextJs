'use client'
import React, { ReactNode, useState } from 'react'
import { Profile } from './components'
import { Menu } from './components/Menu/Menu'
import { IconMenu2, IconBellFilled, IconArrowRight } from '@tabler/icons-react'
import ClickAwayListener from 'react-click-away-listener'

export default function layout({ children }: { children: ReactNode }) {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={'flex flex-row  rounded-lg lg:border w-full h-full items-start '.concat(isOpen ? 'backdrop-brightness-75 lg:backdrop-brightness-100' : '')}>

            <div className='fixed top-0 right-0 w-full flex flex-row gap-4 justify-between items-center lg:hidden bg-white shadow p-2'>

                <div className='flex flex-row hover:bg-gray-50 cursor-pointer rounded-[50%] p-2' onClick={() => setIsOpen(!isOpen)}><IconMenu2 width={17.5} height={17.5} /></div>

                <span>AMKZ</span>

                <IconBellFilled width={17.5} height={17.5} />

            </div>


            <ClickAwayListener onClickAway={()=>setIsOpen(false)}>

                <div className={'lg:border-l  shadow lg:shadow-none  bg-white gap-2 lg:gap-0  flex flex-col lg:static fixed h-full  top-0 right-0  transition-all duration-300 rouneded-lg lg:rounded-none '.concat(isOpen ? ' lg:translate-x-0' : ' translate-x-full opacity-0 lg:opacity-100 lg:translate-x-0')}>

                    <div className='flex flex-row justify-end'>
                        <div className='flex flex-row hover:bg-gray-50 cursor-pointer rounded-[50%] p-2 lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                            <IconArrowRight width={17.5} height={17.5} />
                        </div>
                    </div>


                    <Profile />

                    <div className='flex h-[1px] bg-gray-200 '></div>

                    <Menu />

                </div>
            </ClickAwayListener>

            <div className='flex-1 p-4 overflow-auto'>
                {children}
            </div>

        </div>
    )
}
