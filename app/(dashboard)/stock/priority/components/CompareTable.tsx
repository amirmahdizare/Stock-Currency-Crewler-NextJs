'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead } from '@/app/(dashboard)/components'
import { TableRow } from '@/app/(dashboard)/components/TableRow/TableRow'
import { data } from './data'
import { useQuery } from 'react-query'
// import { saRequest } from '@/app/config/api'
import { useAllSymbols } from '@/app/hooks'
import moment from 'jalali-moment'

export const CompareTable = () => {

    const { data: symbols } = useAllSymbols()

    console.log(symbols)
    return <Table >
        <TableHead>
            <TableRow className='text-center'>
                <TableCell>نام سهم</TableCell>
                <TableCell>نماد</TableCell>
                <TableCell>نماد حق تقدم</TableCell>
                {/* <TableCell>وضعیت</TableCell> */}
                <TableCell>قیمت نماد پایه</TableCell>
                <TableCell>قیمت حق تقدم</TableCell>
                <TableCell>سود درصد</TableCell>
                <TableCell>تاریخ پایان مهلت استفاده</TableCell>
                <TableCell>مدت زمان باقی مانده تا پایان مرحله</TableCell>
                {/* <TableCell>کدال</TableCell> */}
                <TableCell>TSE</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map(item => {

                const symbolPrice = symbols?.find(s => s.name == item.symbol)?.final_price ?? 0
                const pSymbolPrice = symbols?.find(s => s.name == item.pSymbol)?.final_price ?? 0

                const symbol = symbols?.find(s => s.name == item.symbol)

                const profitPercent = ((Number(symbolPrice) / (Number(pSymbolPrice) + 1000)) - 1) * 100

                console.log(moment(item?.deadline ?? '', 'jYYYY/jMM/jDD'))

                return <TableRow className='text-center' hoverEffect>
                    <TableCell className='font-bold'>{symbol?.full_name}</TableCell>
                    <TableCell>{item.symbol}</TableCell>
                    <TableCell>{item.pSymbol}</TableCell>
                    {/* <TableCell>{item.state}</TableCell> */}
                    <TableCell>{Number(symbolPrice)?.toLocaleString()}</TableCell>
                    <TableCell>{Number(pSymbolPrice)?.toLocaleString()}</TableCell>
                    <TableCell className={profitPercent > 0 ? 'text-green-500 font-bold' : ''}>{(symbolPrice && pSymbolPrice) ? Number(profitPercent).toFixed(2) : '-'}%</TableCell>
                    <TableCell>{item?.deadline} </TableCell>
                    <TableCell>{item?.deadline ? Math.ceil(moment(item?.deadline, 'jYYYY/jMM/jDD').diff(moment(), 'day',true)) : '-'} روز</TableCell>
                    {/* <TableCell>کدال</TableCell> */}
                    <TableCell><a className='text-blue-800' href={`http://www.tsetmc.com/instInfo/${symbols?.find(s => s.name == item.symbol)?.instance_code}`} target='_blank'>لینک به TSE</a></TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>

}
