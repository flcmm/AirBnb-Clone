import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'AirBNB Clone',
  description: 'AirBNB Clone using NextJS 13 App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
