import React from 'react'
import { Table, TableBody, TableCell, TableHead } from '@/app/(dashboard)/components'
import { TableRow } from '@/app/(dashboard)/components/TableRow/TableRow'
import { data } from './data'

export const CompareTable = () => {


    return <Table className='border rounded-xl '>
        <TableHead>
            <TableRow className='text-center'>
                <TableCell>نماد آتی</TableCell>
                <TableCell>سررسید آتی</TableCell>
                <TableCell>قیمت </TableCell>
                <TableCell>سود درصد</TableCell>
                <TableCell>وجه تضمین</TableCell>
                <TableCell>مدت زمان باقی مانده تا سررسید</TableCell>
                <TableCell>بورس کالا</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map(item => <TableRow className='text-center' hoverEffect>
                <TableCell>{item.fSymbol}</TableCell>
                <TableCell>{item.deadline}</TableCell>
                <TableCell>{item.price.toLocaleString()}</TableCell>
                <TableCell className={item.profitPercent > 0 ?  'text-green-500 font-bold' : ''}>{item.profitPercent}%</TableCell>
                {/* <TableCell>{item.profitPercent.toLocaleString()}</TableCell> */}
                <TableCell>{item.garrantPrice.toLocaleString()}</TableCell>
                <TableCell>{item.daysToEnd} روز</TableCell>
                <TableCell>*</TableCell>

            </TableRow>)}
        </TableBody>
    </Table>

}
