'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead } from '@/app/(dashboard)/components'
import { TableRow } from '@/app/(dashboard)/components/TableRow/TableRow'
import { data } from './data'
import { useAllSymbols } from '@/app/hooks'
import moment from 'jalali-moment'
import { IconCheck, IconX } from '@tabler/icons-react'

export const CompareTable = () => {

    const { data: symbols } = useAllSymbols()


    return <Table >
        <TableHead>
            <TableRow className='text-center'>
                <TableCell>نام سهم</TableCell>
                <TableCell>نماد</TableCell>
                <TableCell>نماد حق تقدم</TableCell>
                <TableCell>قیمت نماد پایه</TableCell>
                <TableCell>قیمت حق تقدم</TableCell>
                <TableCell>سود درصد</TableCell>
                <TableCell>تاریخ پایان مهلت استفاده</TableCell>
                <TableCell>مدت زمان باقی مانده تا پایان مرحله</TableCell>
                <TableCell>برتر به سود بانکی 22%</TableCell>
                <TableCell>برتر به بالاترین سود صندوق درامد ثابت 24%</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data
                .sort((a, b) => {
                    const aSymbolPrice = symbols?.find(s => s.name == a.symbol)?.final_price ?? 0
                    const aPSymbolPrice = symbols?.find(s => s.name == a.pSymbol)?.final_price ?? 0


                    const bSymbolPrice = symbols?.find(s => s.name == b.symbol)?.final_price ?? 0
                    const bPSymbolPrice = symbols?.find(s => s.name == b.pSymbol)?.final_price ?? 0

                    return ((Number(aSymbolPrice) / (Number(aPSymbolPrice) + 1000)) - 1) > ((Number(bSymbolPrice) / (Number(bPSymbolPrice) + 1000)) - 1) ? -1 : 1
                })
                .map(item => {

                    const symbolPrice = symbols?.find(s => s.name == item.symbol)?.final_price ?? 0
                    const pSymbolPrice = symbols?.find(s => s.name == item.pSymbol)?.final_price ?? 0

                    const symbol = symbols?.find(s => s.name == item.symbol)

                    const profitPercent = ((Number(symbolPrice) / (Number(pSymbolPrice) + 1000)) - 1) * 100

                    const elepsedDays = Math.ceil(moment(item?.deadline, 'jYYYY/jMM/jDD').diff(moment(), 'day', true))

                    console.log(moment(item?.deadline ?? '', 'jYYYY/jMM/jDD'))

                    return <TableRow className='text-center' hoverEffect>
                        <TableCell className='font-bold'>{symbol?.full_name}</TableCell>
                        <TableCell><a className='text-blue-800' href={`http://www.tsetmc.com/instInfo/${symbols?.find(s => s.name == item.symbol)?.instance_code}`} target='_blank'>{item.symbol}</a></TableCell>
                        <TableCell><a className='text-blue-800' href={`http://www.tsetmc.com/instInfo/${symbols?.find(s => s.name == item.pSymbol)?.instance_code}`} target='_blank'>{item.pSymbol}</a></TableCell>
                        {/* <TableCell>{item.state}</TableCell> */}
                        <TableCell>{Number(symbolPrice)?.toLocaleString()}</TableCell>
                        <TableCell>{Number(pSymbolPrice)?.toLocaleString()}</TableCell>
                        <TableCell className={profitPercent > 0 ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>{(symbolPrice && pSymbolPrice) ? Number(profitPercent).toFixed(2) : '-'}%</TableCell>
                        <TableCell>{item?.deadline} </TableCell>
                        <TableCell>{item?.deadline ? elepsedDays : '-'} روز</TableCell>
                        <TableCell className='align-middle text-center'>{(profitPercent / elepsedDays) > (22 / elepsedDays) ? <IconCheck color='green' /> : <IconX color='red' />}</TableCell>
                        <TableCell className='align-middle text-center'>{(profitPercent / elepsedDays) > (24 / elepsedDays) ? <IconCheck color='green' /> : <IconX color='red' />}</TableCell>
                        {/* <TableCell><a className='text-blue-800' href={`http://www.tsetmc.com/instInfo/${symbols?.find(s => s.name == item.symbol)?.instance_code}`} target='_blank'>لینک به TSE</a></TableCell> */}
                    </TableRow>
                })}
        </TableBody>
    </Table>

}
