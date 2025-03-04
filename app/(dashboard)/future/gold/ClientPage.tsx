'use client'
import React from 'react'
import { CompareTable } from './components/CompareTable'
import { useAllCurrencies, useFutureSymbols } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'
import { Header } from '../../components'

export const ClientPage = () => {

  const { data: allCurrency } = useAllCurrencies()

  const {dataUpdatedAt , isFetching} = useFutureSymbols()



  const tala24 = allCurrency?.data.find(item => item.slug == 'TALA_24')
  return (
    <div className='flex flex-col gap-4 items-stretch'>

      {/* <span className='font-bold text-lg border-b pb-2'>آربیتراژ طلای 24 عیار آتی بورس کالا</span> */}

      <Header
        dataUpdatedAt={dataUpdatedAt}
        isFetching={isFetching}
        title='آربیتراژ طلای 24 عیار آتی بورس کالا'
      />

      <div className='flex flex-row gap-2'>
        <span>قیمت هرواحد شمش طلا:</span>

        <span className='font-bold'>{convertToNumber(tala24?.price ?? 0, true, false)}</span>

      </div>

      <CompareTable />


    </div>
  )
}
