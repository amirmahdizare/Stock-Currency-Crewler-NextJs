import React, { ReactNode } from 'react'

export const TableHead = ({ children , ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>) => {
    return (
        <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" {...props}>
            {children}
        </thead>
    )
}
