import React from 'react'
import { ClientPage } from './ClientPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'سود درآمد ثابت'
}

export default function page() {
    return (
        <>
            <ClientPage />
        </>
    )
}
