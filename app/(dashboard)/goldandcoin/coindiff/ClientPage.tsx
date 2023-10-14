'use client'
import React from 'react'
import { CompareTable } from './components/CompareTable'
import { useAllCurrencies } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'

export const ClientPage = () => {

  const { data } = useAllCurrencies()


  const coin = data?.data.find(item => item.name == 'سکه امامی')
  return (
    <div className='flex flex-col gap-4 items-stretch'>
      <span className='font-bold text-lg border-b pb-2'>آربیتراژ گواهی سکه تحویل یک روزه بورس کالا با بازار آزاد</span>
      {coin && <div className='flex flex-row gap-2'>
        <span>قیمت سکه بازار آزاد:</span>

        <span className='font-bold'>{(convertToNumber(coin?.price)).toLocaleString()}</span>

      </div>}

      <CompareTable />


    </div>
  )
}
