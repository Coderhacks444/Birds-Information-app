import type { ReactNode } from 'react'
import './globals.css'
import './mobile.css'
import './accessibility.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata = {
  title: 'Muji Birds - Complete Bird Care Guide',
  description: 'Complete guide for bird care, breeding, and medicine',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🦜</text></svg>',
  },
  referrer: 'strict-origin-when-cross-origin',
  formatDetection: {
    email: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body>
        <Navigation />
        <main className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
