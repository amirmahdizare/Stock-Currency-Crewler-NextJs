import React from 'react'
import { Metadata } from 'next'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'آربتراژ اوراق سکه با بازار'
}

export default function page() {
    return (
        <>
            <ClientPage />
        </>
    )
}
