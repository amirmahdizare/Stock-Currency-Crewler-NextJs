'use client'
import React, { useState } from 'react'
import { useAllSymbols } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'
import { SASymbolListItemType } from '@/app/types'
import { CompareTable } from './components/CompareTable'
import { Header } from '../../components'

export const ClientPage = () => {

  const [selectedSymbol, setSelectedSymbols] = useState<SASymbolListItemType | undefined>()

  const { data: symbols , dataUpdatedAt , isFetching } = useAllSymbols()


  const filterOfOption = (item: SASymbolListItemType, index: number, array: SASymbolListItemType[]) => array.findIndex(inner =>
    inner.full_name.includes(` ${item.name}`)
    && inner.full_name.includes('اخت')
    && inner.market == '-'
    && inner.industry == '-') != -1

  return (
    <div className='flex flex-col gap-4 items-stretch '>

      <Header
        dataUpdatedAt={dataUpdatedAt}
        isFetching={isFetching}
        title='آربیتراژ بازار اختیار معامله'
      />

      <span className='font-bold text-lg border-b pb-2'></span>
      <div className='flex flex-row gap-4 w- full overflow-auto whitespace-nowrap'>


        {symbols?.filter(filterOfOption).map(s =>
          <span onClick={() => setSelectedSymbols(s)} className={'border p-2 rounded-lg  cursor-pointer '.concat(selectedSymbol == s ? 'bg-gray-300 ' : 'hover:bg-gray-50')}>{s.name}</span>
        )}
      </div>



      <div className='grid grid-cols-2 gap-4 '>

        {!!selectedSymbol && <div className='col-span-2 flex flex-row gap-4 border-y py-4'>

          <a className='text-blue-800 font-bold' href={`http://www.tsetmc.com/instInfo/${selectedSymbol.instance_code}`} target='_blank'>{selectedSymbol?.name}</a>
          <span>( {selectedSymbol?.full_name} )</span>
          <span >قیمت : <strong>{convertToNumber(selectedSymbol?.final_price ?? 0, true, false)}</strong></span>
          <div className='flex flex-row gap-2'>
            <span>تغییر:</span>
            <span
              dir='ltr'
              className={selectedSymbol.final_price_change > 0 ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
              ({selectedSymbol.final_price_change_percent}%)
              &nbsp;
              {convertToNumber(selectedSymbol.final_price_change, true, false)}
            </span>
          </div>

        </div>}
        {!!selectedSymbol && <>

          <div className='col-span-2 lg:col-span-1 border rounded-lg p-4 flex flex-col gap-2 overflow-auto'>
            <span className='font-bold  pb-2 '>اختیار خرید</span>
            <CompareTable
              data={symbols?.filter(item => item.full_name.includes(` ${selectedSymbol?.name}` ?? '') && item.full_name.includes('اخت') && item.full_name.includes('خ') && item.full_name.split('-').length == 3) ?? []}
              baseSymbol={selectedSymbol}
              type='buy'
            />


          </div>

          <div className='col-span-2 lg:col-span-1 border rounded-lg p-4 flex flex-col gap-2 overflow-auto'>
            <span className='font-bold pb-2 '>اختیار فروش</span>
            <CompareTable
              data={symbols?.filter(item => item.full_name.includes(` ${selectedSymbol?.name}` ?? '') && item.full_name.includes('اخت') && item.full_name.includes('ف') && item.full_name.split('-').length == 3) ?? []}
              baseSymbol={selectedSymbol}
              type='sell'
            />
          </div>

        </>}
      </div>


    </div>
  )
}
