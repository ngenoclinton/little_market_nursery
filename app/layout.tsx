import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/NavigationBar"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Little Learners Kindergarten",
  description: "Nurturing young minds with care and creativity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} font-nunito`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
