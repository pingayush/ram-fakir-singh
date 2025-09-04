import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ram Fakir Singh Sewa Samiti | Manpower & Govt Tenders',
  description: 'Varanasi-based organization providing manpower supply and working on government tenders. Careers and contact available.',
  keywords: [
    'Ram Fakir Singh Sewa Samiti',
    'Varanasi',
    'Government Tenders',
    'Manpower Supply',
    'Jobs',
  ],
  openGraph: {
    title: 'Ram Fakir Singh Sewa Samiti',
    description: 'Manpower supply and government tender expertise in Varanasi, Uttar Pradesh',
    url: 'https://example.com',
    siteName: 'Ram Fakir Singh Sewa Samiti',
    locale: 'en_IN',
    type: 'website',
  },
  metadataBase: new URL('https://example.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col">
        {children}
      </body>
    </html>
  )
}
