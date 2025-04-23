import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import Navbar from "@/components/navbar/NavigationBar"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "Kid's Promising Tomorrow - Nurturing Young Minds",
  description: "A nurturing environment for children to learn, grow, and thrive.",
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
      </body>
    </html>
  )
}
