import { Metadata } from 'next'
import React from 'react'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'آربیتراژ صندوق طلای لوتوس (طلا)'
}
export default function page() {
    return (
        <>
            <ClientPage />
        </>
    )
}
