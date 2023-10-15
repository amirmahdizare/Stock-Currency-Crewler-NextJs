'use client'
import React from 'react'
import { Table, TableBody, TableCell, TableHead } from '@/app/(dashboard)/components'
import { TableRow } from '@/app/(dashboard)/components/TableRow/TableRow'
import { intialFutureData } from './data'
import { useAllCurrencies, useAllSymbols, useFutureSymbols } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'
import { FutureItemType } from '@/app/types'
import moment from 'jalali-moment'

export const CompareTable = () => {

    const { data } = useFutureSymbols()

    const { data: symbols } = useAllSymbols()


    const lotus = symbols?.find(item => item.name == 'طلا')

    const profit = (item: FutureItemType) => (1 - (Number(lotus?.final_price) / (item.lastTradedPrice ?? item.yesterdaySettle))) * 100


    return <Table className='border rounded-xl '>
        <TableHead>
            <TableRow className='text-center'>
                <TableCell>نام کامل</TableCell>
                <TableCell>نماد آتی</TableCell>
                <TableCell>قیمت </TableCell>
                <TableCell>سود درصد</TableCell>
                <TableCell>سررسید</TableCell>
                <TableCell>مدت زمان باقی مانده تا سررسید</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data?.filter(item => item.symbol.includes('ETC'))?.map(item => <TableRow className='text-center' hoverEffect>
                <TableCell>{intialFutureData.find(d => d.symbol == item.symbol)?.title}</TableCell>
                <TableCell>{item.symbol}</TableCell>
                <TableCell>{convertToNumber((item?.lastTradedPrice ?? item?.yesterdaySettle), true, false)}</TableCell>
                <TableCell className={profit(item) > 0 ? 'text-green-500 font-bold' : ' text-red-500 font-bold'}>{profit(item).toFixed(2)}%</TableCell>
                <TableCell>{intialFutureData.find(d => d.symbol == item.symbol)?.deadline}</TableCell>
                <TableCell>{Math.ceil(moment(intialFutureData.find(d => d.symbol == item.symbol)?.deadline, 'jYYYY/jMM/jDD').diff(moment(), 'day', true))}</TableCell>
            </TableRow>)}
        </TableBody>
    </Table>

}
