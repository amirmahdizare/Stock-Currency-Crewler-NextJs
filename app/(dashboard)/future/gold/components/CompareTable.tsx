'use client'
import React from 'react'
import { Table, TableBody, TableCell, TableHead } from '@/app/(dashboard)/components'
import { TableRow } from '@/app/(dashboard)/components/TableRow/TableRow'
import { intialFutureData } from './data'
import { useAllCurrencies, useFutureSymbols } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'
import { FutureItemType } from '@/app/types'
import moment from 'jalali-moment'

export const CompareTable = () => {

    const { data } = useFutureSymbols()

    const { data: allCurrency } = useAllCurrencies()


    const tala24 = allCurrency?.data.find(item => item.slug == 'TALA_24')

    const profit = (item:FutureItemType) => ( 1- (Number(tala24?.price) / (item.lastTradedPrice ?? item.yesterdaySettle) )) *100 -0.5

    return <Table className='border rounded-xl '>
        <TableHead>
            <TableRow className='text-center'>
                <TableCell>نام کامل</TableCell>
                <TableCell>نماد آتی</TableCell>
                <TableCell>قیمت </TableCell>
                <TableCell>سود درصد</TableCell>
                <TableCell>سررسید</TableCell> 
              <TableCell>مدت زمان باقی مانده تا سررسید</TableCell>
                {/* <TableCell>وجه تضمین</TableCell> */}
            </TableRow>
        </TableHead>
        <TableBody>
            {data?.filter(item => item.symbol.includes('GB'))?.map(item => <TableRow className='text-center' hoverEffect>
                <TableCell>{intialFutureData.find(d => d.symbol == item.symbol)?.title}</TableCell>
                <TableCell>{item.symbol}</TableCell>
                <TableCell>{convertToNumber((item?.lastTradedPrice ?? item?.yesterdaySettle) * 10, true, true)}</TableCell>
                <TableCell className={profit(item) > 0 ?  'text-green-500 font-bold' : ' text-red-500 font-bold'}>{profit(item).toFixed(2)}%</TableCell>
               <TableCell>{intialFutureData.find(d => d.symbol == item.symbol)?.deadline}</TableCell> 
                <TableCell>{Math.ceil(moment(intialFutureData.find(d => d.symbol == item.symbol)?.deadline, 'jYYYY/jMM/jDD').diff(moment(), 'day', true))}</TableCell>
                {/* <TableCell>{item.daysToEnd} روز</TableCell> */}
                {/* <TableCell>*</TableCell> */}

            </TableRow>)}
        </TableBody>
    </Table>

}
