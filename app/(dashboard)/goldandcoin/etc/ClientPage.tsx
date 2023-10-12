import React from 'react'
import { CompareTable } from './components/CompareTable'

export const ClientPage = () => {
  return (
    <div className='flex flex-col gap-4 items-stretch'>
        <div className='flex flex-row gap-2'>
            <span>قیمت هرواحد شمش طلا:</span>

            <span>{(15200).toLocaleString()}</span>

        </div>

        <CompareTable />


    </div>
  )
}
