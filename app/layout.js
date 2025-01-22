import './globals.css'
    import { Inter } from "next/font/google"

    const inter = Inter({ subsets: ['latin'] })

    export const metadata = {
      title: 'Aafiya Poems',
      description: 'A collection of poems for Aafiya',
    }

    export default function RootLayout({ children }) {
      return (
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      )
    }
