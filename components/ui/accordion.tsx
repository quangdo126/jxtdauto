"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextType {
  openIndex: number | null
  setOpenIndex: (index: number | null) => void
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined)

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  index: number
}

export function AccordionItem({ title, children, index }: AccordionItemProps) {
  const context = React.useContext(AccordionContext)
  
  if (!context) {
    throw new Error("AccordionItem must be used within Accordion")
  }

  const { openIndex, setOpenIndex } = context
  const isOpen = openIndex === index

  const handleToggle = () => {
    setOpenIndex(isOpen ? null : index)
  }

  return (
    <div className="border-b last:border-b-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-semibold transition-colors hover:text-primary"
        onClick={handleToggle}
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  )
}

export function Accordion({ children }: { children: React.ReactNode }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="space-y-0">{children}</div>
    </AccordionContext.Provider>
  )
}
