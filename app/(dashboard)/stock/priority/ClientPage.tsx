import React from 'react'
import { CompareTable } from './components/CompareTable'

export const ClientPage = () => {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <span className='font-bold'>جدول آربیتراژ حق تقدم</span>
      <CompareTable />
    </div>
  )
}
