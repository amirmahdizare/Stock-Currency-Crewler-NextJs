import React, { ReactNode } from 'react'

export const TableHead = ({ children , ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>) => {
    return (
        <thead className=" text-gray-700 uppercase bg-gray-100 " {...props}>
            {children}
        </thead>
    )
}
