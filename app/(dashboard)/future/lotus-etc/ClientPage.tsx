'use client'
import React from 'react'
import { CompareTable } from './components/CompareTable'
import { useAllCurrencies, useAllSymbols, useFutureSymbols } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'
import { Header } from '../../components'

export const ClientPage = () => {

  const { data: allCurrency } = useAllSymbols()

  const {dataUpdatedAt , isFetching} = useFutureSymbols()


  const lotus = allCurrency?.find(item => item.name == 'طلا')

  return (
    <div className='flex flex-col gap-4 items-stretch'>


      <Header
        dataUpdatedAt={dataUpdatedAt}
        isFetching={isFetching}
        title='آربیتراژ صندوق طلای لوتوس بورس کالا'
      />

      {/* <span className='font-bold text-lg border-b pb-2'>آربیتراژ صندوق طلای لوتوس بورس کالا</span> */}

      <div className='flex flex-row gap-2'>
        <span>قیمت هرواحد طلای لوتوس:</span>

        <span className='font-bold'>{convertToNumber(lotus?.final_price ?? 0, true, false)}</span>

      </div>

      <CompareTable />


    </div>
  )
}
