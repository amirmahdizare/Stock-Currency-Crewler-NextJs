import React from 'react'

export const TableBody = ({ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>) => {
    return (
        <tbody {...props}>
            {children}
        </tbody>

    )
}
