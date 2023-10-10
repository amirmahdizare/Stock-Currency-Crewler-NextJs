import React, { ReactNode } from 'react'

export const TableCell = ({ children  , ...props }: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>) => {
    return (
        <td className="px-6 py-4" {...props}>
            {children}
        </td>
    )
}
