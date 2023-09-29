import './globals.css'
import type { Metadata } from 'next'
import { Inter, Vazirmatn } from 'next/font/google'

const vazir = Vazirmatn({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'سود تو چیه',
  description: 'وبسایت آربیتراژستان',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir='rtl' className='text-[13px] lg:text-[14px]'>
      <body className={vazir.className.concat(' p-2 ')}>{children}</body>
    </html>
  )
}
