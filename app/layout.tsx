import './globals.css'
import type { Metadata } from 'next'
import { Inter, Vazirmatn } from 'next/font/google'
import { ClientLayout } from './ClientLayout'

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
      <body className={vazir.className.concat(' lg:p-2  mt-8 lg:mt-0')}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
