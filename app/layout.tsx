import './css/style.css'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const cabinet = localFont({
  src: [
    {
      path: '../public/fonts/CabinetGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/CabinetGrotesk-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/CabinetGrotesk-Extrabold.woff2',
      weight: '800',
    },
  ],
  variable: '--font-cabinet-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'Résidence Le Lorraine - Hébergements Courte Durée et Cures Thermales',
  description: 'Présentation des logements, tout ce que vous devez savoir avant de réserver votre logement pour une cure à La Bourboule',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cabinet.variable} font-inter antialiased bg-white text-gray-800 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
