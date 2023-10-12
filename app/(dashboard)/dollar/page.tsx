import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata ={
    title:'آربیتراژ دلار و تتر'
}

export default function page() {
  return (
    <div className='flex flex-row gap-4 items-center'>

        <span>تتر</span>
        <span>155</span>

        <span>دلار</span>
        <span>5451</span>
        

    </div>
  )
}
