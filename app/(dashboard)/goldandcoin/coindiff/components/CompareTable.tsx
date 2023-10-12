import React from 'react'
import { Table, TableBody, TableCell, TableHead } from '@/app/(dashboard)/components'
import { TableRow } from '@/app/(dashboard)/components/TableRow/TableRow'
import { data } from './data'

export const CompareTable = () => {


    return <Table className='border rounded-xl '>
        <TableHead>
            <TableRow className='text-center'>
                <TableCell>گواهی</TableCell>
                <TableCell>قیمت </TableCell>
                <TableCell>سود درصد</TableCell>
                <TableCell>سود تومان</TableCell>

            </TableRow>
        </TableHead>
        <TableBody>
            {data.map(item => <TableRow className='text-center' hoverEffect>
                <TableCell>{item.symbol}</TableCell>
                <TableCell>{item.price.toLocaleString()}</TableCell>
                <TableCell className={item.profitPercent > 0 ? 'text-green-500 font-bold' : ''}>{item.profitPercent}%</TableCell>
                <TableCell className={item.profitPercent > 0 ? 'text-green-500 font-bold' : ''}>{item.profitToman.toLocaleString()}</TableCell>
            </TableRow>)}
        </TableBody>
    </Table>

}
