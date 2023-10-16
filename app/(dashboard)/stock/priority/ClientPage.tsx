'use client'
import React from 'react'
import { CompareTable } from './components/CompareTable'
import { useAllSymbols } from '@/app/hooks'
import moment from 'jalali-moment'
import { Header, Loading } from '../../components'
import { convertDataUpdate } from '@/app/utils'

export const ClientPage = () => {

  const { dataUpdatedAt, isLoading, isFetching } = useAllSymbols()

  return (
    <div className='flex flex-col gap-4 '>

      <Header
        dataUpdatedAt={dataUpdatedAt}
        isFetching={isFetching}
        title='جدول آربیتراژ حق تقدم'
      />
      <CompareTable />
    </div>
  )
}
