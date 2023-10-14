'use client'
import React from 'react'
// import { CompareTable } from './components/CompareTable'
import { useAllCurrencies, useAllSymbols } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'

export const ClientPage = () => {


  const { data: symbols } = useAllSymbols()

  return (
    <div className='flex flex-col gap-4 items-stretch'>
      <span className='font-bold text-lg border-b pb-2'>آربیتراژ بازار اختبار معامله</span>

     {/* {symbols?.filter((item , index , array))=> {
      a
     }} <span></span> */}


      {/* <CompareTable data={[]} /> */}


    </div>
  )
}
