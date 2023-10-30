import type { Metadata } from 'next'
import './globals.css'
import Header from './Components/Header'
import Footer from './Components/Footer'


export const metadata: Metadata = {
  title: 'Community Media App',
  description: 'This app is designed for community engagement and . ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>      
        <Header />
          {children}      
        <Footer />
      </body>
    </html>
  )
}
