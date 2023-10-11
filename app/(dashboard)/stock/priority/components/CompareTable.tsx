import React from 'react'
import { Table, TableBody, TableCell, TableHead } from '@/app/(dashboard)/components'
import { TableRow } from '@/app/(dashboard)/components/TableRow/TableRow'
import { data } from './data'

export const CompareTable = () => {


    return <Table >
        <TableHead>
            <TableRow className='text-center'>
                <TableCell>نماد</TableCell>
                <TableCell>نماد حق تقدم</TableCell>
                <TableCell>وضعیت</TableCell>
                <TableCell>قیمت نماد پایه</TableCell>
                <TableCell>قیمت حق تقدم</TableCell>
                <TableCell>سود درصد</TableCell>
                <TableCell>مدت زمان باقی مانده تا پایان مرحله</TableCell>
                <TableCell>کدال</TableCell>
                <TableCell>TSE</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map(item => <TableRow className='text-center' hoverEffect>
                <TableCell>{item.symbol}</TableCell>
                <TableCell>{item.pSymbol}</TableCell>
                <TableCell>{item.state}</TableCell>
                <TableCell>{item.symbolPrice.toLocaleString()}</TableCell>
                <TableCell>{item.pSymbolPrice.toLocaleString()}</TableCell>
                <TableCell className={item.profitPercent > 0 ?  'text-green-500 font-bold' : ''}>{item.profitPercent}%</TableCell>
                <TableCell>{item.daysToEnd} روز</TableCell>
                <TableCell>کدال</TableCell>
                <TableCell>TSE</TableCell>
            </TableRow>)}
        </TableBody>
    </Table>

}
