"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-md mb-4 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 bg-[#f8f9fa] hover:bg-gray-100 text-left font-medium text-[#3aa756] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-white">{children}</div>
      </div>
    </div>
  )
}

interface AccordionProps {
  children: React.ReactNode
}

export function Accordion({ children }: AccordionProps) {
  return <div className="w-full">{children}</div>
}
