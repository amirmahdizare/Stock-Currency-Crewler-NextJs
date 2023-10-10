import React, { ReactNode } from 'react'

export const Table = ({ children, ...props }: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) => {
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" {...props}>
            {children}
        </table>
    )
}
