"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Book, FileText, Settings, Play, Menu, X, Users, Activity, Heart, Package, Shield, Sword, ShieldAlert, Wrench, LogIn, Network, PiggyBank } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Bắt đầu",
    icon: Play,
    items: [
      { title: "Giới thiệu", href: "/huong-dan" },
      { title: "Cài đặt", href: "/huong-dan/cai-dat" },
      { title: "Cập nhật", href: "/huong-dan/cap-nhat" },
      { title: "Kích hoạt License", href: "/huong-dan/kich-hoat" },
      { title: "Phím tắt", href: "/huong-dan/phim-tat" },
    ],
  },
  {
    title: "Tab Cơ bản",
    icon: Settings,
    items: [
      { title: "Cách cấu hình", href: "/huong-dan/tab-co-ban/cach-cau-hinh" },
    ],
  },
  {
    title: "Tab Tổ đội",
    icon: Users,
    items: [
      { title: "Cách cấu hình", href: "/huong-dan/tab-to-doi/cach-cau-hinh" },
    ],
  },
  {
    title: "Tab Luyện công",
    icon: PiggyBank,
    items: [
      { title: "Cách cấu hình", href: "/huong-dan/tab-luyen-cong/cach-cau-hinh" },
    ],
  },
  {
    title: "Tab Phục hồi",
    icon: Heart,
    items: [
      { title: "Cách cấu hình", href: "/huong-dan/tab-phuc-hoi/cach-cau-hinh" },
    ],
  },
  {
    title: "Tab Hành trang",
    icon: Package,
    items: [
      { title: "Cách cấu hình", href: "/huong-dan/tab-hanh-trang/cach-cau-hinh" },
    ],
  },
  {
    title: "Tab Đối thủ",
    icon: Shield,
    items: [
      { title: "Cách cấu hình", href: "/huong-dan/tab-doi-thu/cach-cau-hinh" },
    ],
  },
  {
    title: "Tab Chiến đấu",
    icon: Sword,
    items: [
      { title: "Cách cấu hình", href: "/huong-dan/tab-chien-dau/cach-cau-hinh" },
    ],
  },
  {
    title: "Tab Tự vệ/PK",
    icon: ShieldAlert,
    items: [
      { title: "Cách cấu hình", href: "/huong-dan/tab-tu-ve-pk/cach-cau-hinh" },
    ],
  },
  {
    title: "Tab Tiện ích",
    icon: Wrench,
    items: [
      { title: "Cách cấu hình", href: "/huong-dan/tab-tien-ich/cach-cau-hinh" },
    ],
  },
  {
    title: "Tab Đăng nhập",
    icon: LogIn,
    items: [
      { title: "Cách cấu hình", href: "/huong-dan/tab-dang-nhap/cach-cau-hinh" },
    ],
  },
  {
    title: "Sandboxie & Proxy",
    icon: Network,
    items: [
      { title: "Cách cấu hình", href: "/huong-dan/sandboxie-proxy/cach-cau-hinh" },
    ],
  },
  {
    title: "Khắc phục sự cố",
    icon: FileText,
    items: [
      { title: "Lỗi thường gặp", href: "/huong-dan/loi-thuong-gap" },
      { title: "Câu hỏi thường gặp", href: "/huong-dan/faq" },
      { title: "Báo lỗi", href: "/huong-dan/bao-loi" },
    ],
  },
]

export default function HuongDanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Tìm mục chứa trang hiện tại để tự động expand
  const getActiveSection = () => {
    for (const section of menuItems) {
      if (section.items.some((item) => item.href === pathname)) {
        return section.title
      }
    }
    return "Bắt đầu" // Default
  }

  const [expandedSection, setExpandedSection] = useState<string | null>(getActiveSection())
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSection = (title: string) => {
    setExpandedSection((prev) => (prev === title ? null : title))
  }

  // Tự động expand mục chứa trang hiện tại khi pathname thay đổi
  useEffect(() => {
    const activeSection = getActiveSection()
    setExpandedSection(activeSection)
  }, [pathname])

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar Toggle Button */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Sidebar - GitBook style */}
      <aside
        className={cn(
          "fixed top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r bg-background transition-transform md:sticky md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="h-full overflow-y-auto p-4">
          <nav className="space-y-2">
            {menuItems.map((section) => {
              const Icon = section.icon
              const isExpanded = expandedSection === section.title
              return (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span>{section.title}</span>
                    </div>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isExpanded && "rotate-90"
                      )}
                    />
                  </button>
                  {isExpanded && (
                    <div className="ml-6 mt-1 space-y-1 border-l pl-4">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setSidebarOpen(false)}
                          className={cn(
                            "block rounded-md px-3 py-1.5 text-sm transition-colors",
                            pathname === item.href
                              ? "bg-accent text-foreground font-medium"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          )}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 w-full md:w-auto">{children}</main>
    </div>
  )
}

