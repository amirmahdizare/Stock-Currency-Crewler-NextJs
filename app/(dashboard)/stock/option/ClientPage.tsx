'use client'
import React, { useState } from 'react'
// import { CompareTable } from './components/CompareTable'
import { useAllCurrencies, useAllSymbols } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'
import { SASymbolListItemType } from '@/app/types'
import { CompareTable } from './components/CompareTable'

export const ClientPage = () => {

  const [selectedSymbol, setSelectedSymbols] = useState<SASymbolListItemType | undefined>()

  const { data: symbols } = useAllSymbols()


  const filterOfOption = (item: SASymbolListItemType, index: number, array: SASymbolListItemType[]) => array.findIndex(inner =>
    inner.full_name.includes(item.name)
    && inner.full_name.includes('اخت')
    && inner.market == '-'
    && inner.industry == '-') != -1

  return (
    <div className='flex flex-col gap-4 items-stretch'>
      <span className='font-bold text-lg border-b pb-2'>آربیتراژ بازار اختیار معامله</span>
      <div className='flex flex-row gap-4 w- full overflow-auto whitespace-nowrap'>


        {symbols?.filter(filterOfOption).map(s =>
          <span onClick={() => setSelectedSymbols(s)} className={'border p-2 rounded-lg  cursor-pointer '.concat(selectedSymbol == s ? 'bg-gray-300 ' : 'hover:bg-gray-50')}>{s.name}</span>
        )}
      </div>



      <div className='grid grid-cols-2 gap-4'>

        {!!selectedSymbol && <div className='col-span-2 flex flex-row gap-4 border-y py-4'>

          <span className='font-bold text-blue-800'>{selectedSymbol?.name}</span>
          <span>({selectedSymbol?.full_name})</span>
          <span>{convertToNumber(selectedSymbol?.final_price ?? 0, true, false)}</span>
          {/* <span dir='ltr'>تومان {convertToNumber(selectedSymbol?.final_price_change ?? 0, true, false)} </span> */}


        </div>}
        {!!selectedSymbol && <>

          <div className='col-span-2 lg:col-span-1 border rounded-lg p-2'>
            <span className='font-bold  pb-2 my-2'>اختیار خرید</span>
            <CompareTable
              data={symbols?.filter(item => item.full_name.includes(selectedSymbol?.name ?? '') &&item.full_name.includes('اخت') && item.full_name.includes('خ')) ?? []}
              baseSymbol={selectedSymbol}
              type='buy'
            />


          </div>

          <div className='col-span-2 lg:col-span-1 border rounded-lg p-2'>
            <span className='font-bold pb-2 my-2'>اختیار فروش</span>
            <CompareTable
              data={symbols?.filter(item => item.full_name.includes(selectedSymbol?.name ?? '')&&item.full_name.includes('اخت') && item.full_name.includes('ف')) ?? []}
              baseSymbol={selectedSymbol}
              type='sell'
            />
          </div>

        </>}
      </div>


    </div>
  )
}
