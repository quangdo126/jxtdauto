"use client"

import { usePathname } from "next/navigation"
import { WikiLayout } from "./wiki-layout"

const wikiPaths = [
  "/",
  "/cai-dat",
  "/cap-nhat",
  "/kich-hoat",
  "/phim-tat",
  "/loi-thuong-gap",
  "/faq",
  "/bao-loi",
  "/tab-co-ban",
  "/tab-to-doi",
  "/tab-luyen-cong",
  "/tab-phuc-hoi",
  "/tab-hanh-trang",
  "/tab-doi-thu",
  "/tab-chien-dau",
  "/tab-tu-ve-pk",
  "/tab-tien-ich",
  "/tab-dang-nhap",
  "/sandboxie-proxy",
]

export function WikiWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isWikiPage = wikiPaths.some(path => pathname === path || pathname.startsWith(path + "/"))

  if (isWikiPage) {
    return <WikiLayout>{children}</WikiLayout>
  }

  return <>{children}</>
}

