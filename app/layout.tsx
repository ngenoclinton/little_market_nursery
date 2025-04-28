import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import Navbar from "@/components/navbar/NavigationBar"
import Footer from "@/components/Footer"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
})

export const metadata = {
  title: "Little Market Nursery",
  description: "Nurturing Young Minds- Providing exceptional care and education for your children. A nurturing environment for children to learn, grow, and thrive.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="min-h-screen flex flex-col">
          <Navbar/>
          <div className="flex-grow pt-[160px]">{children}</div>
          <Footer/>
      </body>
    </html>
  )
}
