import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Days Since Carti Dropped',
  description: 'Tracking the number of days since recording artist Playboi Carti has dropped an album',
  keywords: ['Playboi Carti', 'Carti', 'Whole Lotta Red', 'Die Lit', 'Self Titled', 'Days Since', 'Days Since Carti Dropped', 'Days Since Carti Dropped an Album', 'Days Since Carti Dropped Whole Lotta Red', 'Days Since Carti Dropped Die Lit', 'Days Since Carti Dropped Self Titled', 'WLR'],
  authors: [{ name: 'Tosin Ogunjobi' }],
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
