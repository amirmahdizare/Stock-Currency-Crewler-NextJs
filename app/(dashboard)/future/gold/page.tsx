import { Metadata } from 'next'
import React from 'react'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'آربیتراژ شمش طلای 24 عیار'
}
export default function page() {
    return (
        <>
            <ClientPage />
        </>
    )
}
