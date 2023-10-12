import React from 'react'
import { Metadata } from 'next'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'آربیتراژ صندوق طلا با ارزش ذاتی'
}

export default function page() {
    return (
        <>
            <ClientPage />
        </>
    )
}
