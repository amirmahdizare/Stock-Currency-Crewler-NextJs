import { Metadata } from 'next'
import React from 'react'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'آربتراژ آتی صندوق های لوتوس'
}


export default function page() {
    return (
        <>
            <ClientPage />
        </>
    )
}
