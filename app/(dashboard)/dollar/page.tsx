import { Metadata } from 'next'
import React from 'react'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
  title: 'آربیتراژ دلار و تتر'
}

export default function page() {
  return (
    <>
      <ClientPage />
    </>
  )
}
