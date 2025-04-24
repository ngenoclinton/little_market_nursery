"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function PreLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="relative h-32 w-32 animate-pulse">
          <Image src="/Nursery-logo.png" alt="Kid's Promising Tomorrow Logo" fill className="object-contain" />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-[#3aa756]">
        Little Market <span className="text-[#df2020]">Nursery</span>
        </h2>
        <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-full animate-loader bg-[#3aa756] transition-all"></div>
        </div>
      </div>
    </div>
  )
}
