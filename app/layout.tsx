import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { WikiWrapper } from "@/components/wiki-wrapper"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "jxtdAuto Wiki",
    template: "%s | jxtdAuto Wiki",
  },
  description: "jxtdAuto Wiki - Hướng dẫn sử dụng auto cho game Võ Lâm Truyền Kỳ 2.0",
  keywords: [
    "jxtdAuto",
    "Võ Lâm Truyền Kỳ 2.0",
    "VLTK 2.0",
    "auto game",
    "game automation",
    "auto PK",
    "auto luyện công",
    "game bot",
  ],
  authors: [{ name: "jxtdAuto Team" }],
  creator: "jxtdAuto",
  publisher: "jxtdAuto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jxtdauto.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    title: "jxtdAuto Wiki",
    description: "jxtdAuto Wiki - Hướng dẫn sử dụng auto cho game Võ Lâm Truyền Kỳ 2.0",
    siteName: "jxtdAuto Wiki",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://jxtdauto.com"}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "jxtdAuto - Auto cho Võ Lâm Truyền Kỳ 2.0",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "jxtdAuto Wiki",
    description: "jxtdAuto Wiki - Hướng dẫn sử dụng auto cho game Võ Lâm Truyền Kỳ 2.0",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://jxtdauto.com"}/og-image.png`],
    creator: "@jxtdAuto", // Thay bằng Twitter handle thực tế nếu có
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/vltt2pc.webp", type: "image/webp" },
    ],
    apple: [
      { url: "/vltt2pc.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
  manifest: "/site.webmanifest", // Bạn có thể tạo file này sau
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/vltt2pc.webp" type="image/webp" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <WikiWrapper>
            <main className="min-h-screen">{children}</main>
          </WikiWrapper>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

