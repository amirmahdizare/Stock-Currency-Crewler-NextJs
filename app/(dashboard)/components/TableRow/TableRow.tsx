import React, { ReactNode } from 'react'

export const TableRow = ({ children, className, hoverEffect, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> & { hoverEffect?: boolean }) => {
    return (
        <tr className={" border-b  dark:border-gray-700 ".concat([className ?? '', hoverEffect ? 'hover:bg-gray-50' : ''].join(' '))} {...props}>
            {children}
        </tr>
    )
}
