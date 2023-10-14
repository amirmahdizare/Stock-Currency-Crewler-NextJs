'use client'
import React from 'react'
import { Table, TableBody, TableCell, TableHead } from '@/app/(dashboard)/components'
import { TableRow } from '@/app/(dashboard)/components/TableRow/TableRow'
import { useAllSymbols } from '@/app/hooks'

export const CompareTable = () => {

    const { data } = useAllSymbols()


    return <Table className='border rounded-xl '>
        <TableHead>
            <TableRow className='text-center'>
                <TableCell>نام</TableCell>
                <TableCell>نماد</TableCell>
                <TableCell>قیمت</TableCell>
                {/* <TableCell>NAV</TableCell> */}
                {/* <TableCell>اختلاف</TableCell> */}
            </TableRow>
        </TableHead>
        <TableBody>
            {data?.filter(item => item.market == 'بورس کالا' && item.industry == 'صندوق سرمایه گذاری قابل معامله' && item.full_name.includes('طلا')).map(item => <TableRow className='text-center' hoverEffect>
                <TableCell>{item.full_name}</TableCell>
                <TableCell><a className='text-blue-800 hover:text-orange-500' href={`http://www.tsetmc.com/instInfo/${item.instance_code}`} target='_blank'>{item.name}</a></TableCell>
                <TableCell>{Number(item.final_price).toLocaleString()}</TableCell>
                {/* <TableCell>{item.first_price}</TableCell> */}
                {/* <TableCell className={item.profitPercent > 0 ? 'text-green-500 font-bold' : ''}>{item.profitPercent}%</TableCell> */}
            </TableRow>)}
        </TableBody>
    </Table>

}
