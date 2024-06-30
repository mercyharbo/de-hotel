import { Inter } from 'next/font/google'
import Navbar from '@/app/component/NavComp'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'D WHITE ROYALTY PLACE',
  description:
    'D White Royalty Place - Lagos, Abuja - Maitama, A symbol of efficiency and exceptional service delivery. We provide unparalleled & unbeatable classic lodging and apartment services to our valuable customers/guests. Our mission and vision statement says it all – To always provide that one time experience to our customers.',
  keyword: [
    'Wireless',
    'Internet',
    'Adequate Parking',
    'Security Guard',
    'Flatscreen TV',
    'Laundry',
    'In House Bar',
    '24 hours Electricity',
    'CCTV Camera',
    '24 hour Front Desk services',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`flex flex-col ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
