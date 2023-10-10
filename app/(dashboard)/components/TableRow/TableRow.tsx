import React, { ReactNode } from 'react'

export const TableRow = ({ children }: { children: ReactNode }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {children}
        </tr>
    )
}
