'use client'
import React, { useState } from 'react'
// import { CompareTable } from './components/CompareTable'
import { useAllCurrencies, useAllSymbols } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'
import { SASymbolListItemType } from '@/app/types'

export const ClientPage = () => {

  const [selectedSymbol, setSelectedSymbols] = useState<SASymbolListItemType | undefined>()

  const { data: symbols } = useAllSymbols()

  return (
    <div className='flex flex-col gap-4 items-stretch'>
      <span className='font-bold text-lg border-b pb-2'>آربیتراژ بازار اختیار معامله</span>
      <div className='flex flex-row gap-4 w- full overflow-auto whitespace-nowrap'>


        {symbols?.filter((item, index, array) => array.findIndex(inner =>
          inner.full_name.includes(item.name)
          && inner.full_name.includes('اخت')
          && inner.market == '-'
          && inner.industry == '-') != -1).map(s =>
            <span onClick={() => setSelectedSymbols(s)} className={'border p-2 rounded-lg  cursor-pointer '.concat(selectedSymbol == s ? 'bg-gray-300 ' : 'hover:bg-gray-50')}>{s.name}</span>
          )}
      </div>



      <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-2 lg:col-span-1 border rounded-lg p-2'>
          <span className='font-bold  border-b pb-2'>اختیار خرید</span>


        </div>

        <div className='col-span-2 lg:col-span-1 border rounded-lg p-2'>
          <span className='font-bold  border-b pb-2'>اختیار فروش</span>

        </div>

      </div>


    </div>
  )
}
