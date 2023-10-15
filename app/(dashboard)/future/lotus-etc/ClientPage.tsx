'use client'
import React from 'react'
import { CompareTable } from './components/CompareTable'
import { useAllCurrencies, useAllSymbols } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'

export const ClientPage = () => {

  const { data: allCurrency } = useAllSymbols()


  const lotus = allCurrency?.find(item => item.name == 'طلا')

  return (
    <div className='flex flex-col gap-4 items-stretch'>

      <span className='font-bold text-lg border-b pb-2'>آربیتراژ طلای 24 عیار آتی بورس کالا</span>

      <div className='flex flex-row gap-2'>
        <span>قیمت هرواحد شمش طلا:</span>

        <span className='font-bold'>{convertToNumber(lotus?.final_price ?? 0, true, false)}</span>

      </div>

      <CompareTable />


    </div>
  )
}
