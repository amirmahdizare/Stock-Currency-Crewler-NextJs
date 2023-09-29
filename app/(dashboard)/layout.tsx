import React from 'react'
import { Profile } from './components'
import { Menu } from './components/Menu/Menu'

export default function layout() {
    return (
        <div className='flex flex-row gap-4 rounded-lg lg:border w-full h-full'>

            <div className='border-l   flex flex-col '>
                <Profile />


                
                <div className='flex h-[1px] bg-gray-200 '></div>

                <Menu/>
            </div>
        </div>
    )
}
