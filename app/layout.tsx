import './globals.css'
import Header from 'components/header'
import SystemInfo from 'components/server-info'
import Footer from 'components/footer'
import { Suspense } from 'react'

export const metadata = {
  title: 'Next.js 13 + React Server Components Demo',
  description:
    'Hacker News clone built with Next.js 13 and the app directory (beta).',
  themeColor: '#ffa52a',
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          <div className="page">
            <Suspense>
              {children}
              <Footer />
              <SystemInfo />
            </Suspense>
          </div>
        </main>
      </body>
    </html>
  )
}
