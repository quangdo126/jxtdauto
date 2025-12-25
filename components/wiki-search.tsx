"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { searchWiki, type SearchItem } from "@/lib/search-index"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function WikiSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (query.trim().length > 0) {
      const searchResults = searchWiki(query)
      setResults(searchResults)
      setIsOpen(true)
      setSelectedIndex(-1)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
        setQuery("")
      } else if (event.key === "ArrowDown" && isOpen && results.length > 0) {
        event.preventDefault()
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
      } else if (event.key === "ArrowUp" && isOpen && results.length > 0) {
        event.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
      } else if (event.key === "Enter" && isOpen && selectedIndex >= 0 && results[selectedIndex]) {
        event.preventDefault()
        handleSelectResult(results[selectedIndex])
      } else if (event.key === "/" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, results, selectedIndex])

  const handleSelectResult = (item: SearchItem) => {
    setQuery("")
    setIsOpen(false)
    router.push(item.href)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleClear = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => {
            if (query.trim().length > 0 && results.length > 0) {
              setIsOpen(true)
            }
          }}
          placeholder="Tìm kiếm... (Ctrl+/)"
          className="w-full rounded-md border bg-background py-2 pl-10 pr-10 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-md border bg-popover shadow-lg">
          <div className="max-h-[400px] overflow-y-auto p-2">
            {results.map((item, index) => (
              <button
                key={`${item.href}-${index}`}
                onClick={() => handleSelectResult(item)}
                className={cn(
                  "w-full rounded-md px-3 py-2 text-left text-sm transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  selectedIndex === index && "bg-accent text-accent-foreground"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground">{item.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {item.description}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{item.category}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && query.trim().length > 0 && results.length === 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-md border bg-popover p-4 text-center text-sm text-muted-foreground shadow-lg">
          Không tìm thấy kết quả nào
        </div>
      )}
    </div>
  )
}

