import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderCmp from './components/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minhas anotações',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <HeaderCmp />
        <div className='max-w-3xl mx-auto mt-4 leading-7 container px-3'>
          {children}
        </div>
      </body>
    </html>
  )
}
