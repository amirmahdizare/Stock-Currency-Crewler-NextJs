import React from 'react'
import { Table, TableBody, TableCell, TableHead } from '@/app/(dashboard)/components'
import { TableRow } from '@/app/(dashboard)/components/TableRow/TableRow'
import { useAllCurrencies, useAllSymbols } from '@/app/hooks'
import { convertToNumber } from '@/app/utils'
import { IconMinus, IconPlus } from '@tabler/icons-react'

export const CompareTable = () => {

    const { data } = useAllSymbols()

    const { data: currencies } = useAllCurrencies()

    const coin = currencies?.data.find(item => item.name == 'سکه امامی')


    return <Table className='border rounded-xl '>
        <TableHead>
            <TableRow className='text-center'>
                <TableCell>گواهی</TableCell>
                <TableCell>نماد</TableCell>
                <TableCell>قیمت </TableCell>
                <TableCell>سود (تومان) آربیتراژ با بازار آزاد</TableCell>

            </TableRow>
        </TableHead>
        <TableBody>
            {data
                ?.filter(item => item.full_name.includes('تمام سكه'))
                .sort((a, b) => coin?.price ? (coin?.price - a['1_sell_price'] * 100 > coin?.price - b['1_sell_price'] * 100 ? 1 : -1) : 0)
                .map(item => {
                    const diff = coin?.price ? coin?.price - item['1_sell_price'] * 100 : 0
                    return <TableRow className='text-center' hoverEffect>
                        <TableCell>{item.full_name}</TableCell>
                        <TableCell><a className='text-blue-800 hover:text-orange-900' href={`http://www.tsetmc.com/instInfo/${item.instance_code}`} target='_blank'>{item.name}</a></TableCell>
                        <TableCell>{convertToNumber(item['1_sell_price'] * 100)}</TableCell>
                        <TableCell className={'text-blue-700 font-bold'}>
                            {/* {diff > 0 ? <IconPlus /> : <IconMinus />} */}
                            {convertToNumber(Math.abs(diff))}
                            &nbsp;
                            {diff > 0 ? 'پایین تر از بازار' : 'بالاتر از بازار'}
                        </TableCell>
                    </TableRow>
                })}
        </TableBody>
    </Table>

}
