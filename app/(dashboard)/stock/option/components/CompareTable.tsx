'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead } from '@/app/(dashboard)/components'
import { TableRow } from '@/app/(dashboard)/components/TableRow/TableRow'
import moment from 'jalali-moment'
import { SASymbolListItemType } from '@/app/types'
import { convertToMoment, convertToNumber } from '@/app/utils'

export const CompareTable = ({ data, baseSymbol, type }: { data: Array<SASymbolListItemType>, baseSymbol: SASymbolListItemType, type: 'sell' | 'buy' }) => {


    const RenderState = ({ item }: { item: SASymbolListItemType }) => {

        let isProfitable: boolean

        if (type == 'buy') isProfitable = (Number(item.full_name.split('-')[1]) + Number(item.final_price)) < Number(baseSymbol.final_price)

        else isProfitable = (Number(baseSymbol.final_price) + Number(item.final_price)) < Number(item.full_name.split('-')[1])


        if (isProfitable)
            return <span className='text-green-500 font-bold'>در سود</span>
        else
            return <span className='text-red-500 font-bold'>در ضرر</span>
    }

    const profit = (item: SASymbolListItemType) => {
        let profit = 0
        if (type == 'buy') profit = (1 - ((Number(item.full_name.split('-')[1]) + Number(item.final_price)) / Number(baseSymbol.final_price))) * 100

        else profit = (1 - (Number(baseSymbol.final_price) + Number(item.final_price)) / Number(item.full_name.split('-')[1])) * 100

        return profit
    }

    if (!Array.isArray(data))
        return <></>

    if (data
        .filter(item => Math.ceil(convertToMoment(item.full_name.split('-')[2]).diff(moment(), 'day', true)) > 0)
        .length == 0)
        return <span className='text-center text-gray-400'>موردی موجود نیست</span>

    return <Table >
        <TableHead>
            <TableRow className='text-center'>
                <TableCell>نام کامل</TableCell>
                <TableCell >نماد</TableCell>
                <TableCell>قیمت</TableCell>
                <TableCell>قیمت اعمال</TableCell>
                <TableCell>تاریخ قرارداد</TableCell>
                <TableCell>وضعیت</TableCell>
                <TableCell>سود اربیتراژ</TableCell>
                <TableCell>مدت زمان باقی مانده تا پایان قرارداد</TableCell>
                {/* <TableCell>سود درصد</TableCell> */}
                {/*<TableCell>برتر به سود بانکی 22%</TableCell>
                <TableCell>برتر به بالاترین سود صندوق درامد ثابت 24%</TableCell> */}
            </TableRow>
        </TableHead>
        <TableBody>
            {data
                .sort((a, b) => profit(a) > profit(b) ? -1 : 1
                )
                .filter(item => Math.ceil(convertToMoment(item.full_name.split('-')[2]).diff(moment(), 'day', true)) > 0)
                .map(item => {


                    return <TableRow className='text-center' hoverEffect>
                        <TableCell className='font-bold whitespace-nowrap'>{item?.full_name}</TableCell>
                        <TableCell><a className='text-blue-800' href={`http://www.tsetmc.com/instInfo/${item.instance_code}`} target='_blank'>{item.name}</a></TableCell>
                        {/* <TableCell>{item.state}</TableCell> */}
                        <TableCell>{Number(item.final_price)?.toLocaleString()}</TableCell>
                        <TableCell>{convertToNumber(item.full_name.split('-')[1], true, false)}</TableCell>
                        <TableCell>{item.full_name.split('-')[2]}</TableCell>
                        <TableCell><RenderState item={item} /></TableCell>
                        <TableCell dir='ltr' className={profit(item) > 0 ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>{profit(item).toFixed(2)}%</TableCell>
                        <TableCell>{Math.ceil(convertToMoment(item.full_name.split('-')[2]).diff(moment(), 'day', true))} </TableCell>
                    </TableRow>
                })}
        </TableBody>
    </Table>

}
