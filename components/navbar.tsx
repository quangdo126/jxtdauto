"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, X, Download } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { WikiSearch } from "@/components/wiki-search"

const navItems = [
  { href: "/", label: "Wiki" },
  { href: "/changelog", label: "Changelog" },
  { href: "/lien-he", label: "Liên hệ" },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/vltt2pc.webp"
            alt="jxtdAuto Wiki"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl font-bold">jxtdAuto Wiki</span>
        </Link>
        
        {/* Desktop Search */}
        <div className="hidden flex-1 justify-center px-4 lg:flex">
          <WikiSearch />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden items-center space-x-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href || (item.href === "/" && pathname === "/")
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          
          <Button size="sm" asChild className="dark:text-white">
            <a href="https://www.wjxtdauto.net/" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4 dark:text-white" />
              Tải Auto
            </a>
          </Button>
          
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t lg:hidden">
          <div className="container flex flex-col space-y-2 py-4">
            <div className="px-2 pb-2">
              <WikiSearch />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent",
                  pathname === item.href || (item.href === "/" && pathname === "/")
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-2 dark:text-white" asChild>
              <a href="https://www.wjxtdauto.net/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <Download className="mr-2 h-4 w-4 dark:text-white" />
                Tải Auto
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

