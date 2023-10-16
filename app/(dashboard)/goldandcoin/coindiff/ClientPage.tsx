'use client'
import React from 'react'
import { CompareTable } from './components/CompareTable'
import { useAllCurrencies, useAllSymbols } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'
import { Header } from '../../components'

export const ClientPage = () => {

  const { data } = useAllCurrencies()

  const { dataUpdatedAt, isFetching } = useAllSymbols()


  const coin = data?.data.find(item => item.name == 'سکه امامی')
  return (
    <div className='flex flex-col gap-4 items-stretch'>


      <Header
        dataUpdatedAt={dataUpdatedAt}
        isFetching={isFetching}
        title='آربیتراژ گواهی سکه تحویل یک روزه بورس کالا با بازار آزاد'
      />

      
      {coin && <div className='flex flex-row gap-2'>
        <span>قیمت سکه بازار آزاد:</span>

        <span className='font-bold'>{(convertToNumber(coin?.price)).toLocaleString()}</span>

      </div>}

      <CompareTable />


    </div>
  )
}
