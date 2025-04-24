"use client"

import type React from "react"

import { User, Phone, Mail, Calendar, MapPin, Edit, HelpCircle } from "lucide-react"
import type { ReactNode } from "react"

interface FormInputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  icon?: "user" | "phone" | "mail" | "calendar" | "map" | "edit" | "help" | "child" | "gender" | "relationship"
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  className?: string
  textarea?: boolean
  rows?: number
}

export default function FormInput({
  id,
  label,
  type = "text",
  placeholder = "",
  required = false,
  icon,
  value,
  onChange,
  className = "",
  textarea = false,
  rows = 4,
}: FormInputProps) {
  const getIcon = (): ReactNode => {
    switch (icon) {
      case "user":
        return <User size={18} className="text-[#df2020]" />
      case "phone":
        return <Phone size={18} className="text-[#df2020]" />
      case "mail":
        return <Mail size={18} className="text-[#df2020]" />
      case "calendar":
        return <Calendar size={18} className="text-[#df2020]" />
      case "map":
        return <MapPin size={18} className="text-[#df2020]" />
      case "edit":
        return <Edit size={18} className="text-[#df2020]" />
      case "help":
        return <HelpCircle size={18} className="text-[#df2020]" />
      case "child":
        return <User size={18} className="text-[#df2020]" />
      case "gender":
        return <User size={18} className="text-[#df2020]" />
      case "relationship":
        return <User size={18} className="text-[#df2020]" />
      default:
        return null
    }
  }

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="flex items-center text-sm font-medium text-gray-700 mb-1">
        {icon && <span className="mr-2">{getIcon()}</span>}
        {label}
        {required && <span className="text-[#df2020] ml-1">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3aa756] focus:border-transparent"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3aa756] focus:border-transparent"
        />
      )}
    </div>
  )
}
