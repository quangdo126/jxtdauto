# jxtdAuto Wiki

Website hướng dẫn sử dụng cho **jxtdAuto** - auto cho game **Võ Lâm Truyền Kỳ 2.0**.

## Công nghệ sử dụng

- **Next.js 14** - Framework React với App Router
- **TypeScript** - Type safety
- **Tailwind CSS v3** - Styling
- **shadcn/ui** - UI Components (Button, Separator, Accordion)
- **next-themes** - Dark mode support
- **lucide-react** - Icons
- **Font Montserrat** - Font chính

## Tính năng

- ✅ Trang Hướng dẫn (trang chủ) với giao diện GitBook-style:
  - Sidebar navigation với accordion (chỉ 1 mục mở tại một thời điểm)
  - Mobile-responsive với burger menu
  - Hướng dẫn chi tiết cho các tab: Cơ bản, Tổ đội, Luyện công, Phục hồi, Hành trang, Đối thủ, Chiến đấu, Tự vệ/PK, Tiện ích, Đăng nhập
  - Hướng dẫn về Sandboxie & Proxy
  - Khắc phục sự cố (Lỗi thường gặp, FAQ, Báo lỗi)
- ✅ Trang Liên hệ với các kênh hỗ trợ (Facebook, Zalo, YouTube, OnlyFans)
- ✅ Chuyển đổi giao diện sáng/tối
- ✅ Responsive design (mobile-first)
- ✅ Navigation menu với active state
- ✅ Image optimization với Next.js Image component

## Cài đặt

1. Cài đặt dependencies:

```bash
npm install
```

2. Chạy development server:

```bash
npm run dev
```

3. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

## Cấu trúc dự án

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── changelog/               # Trang changelog
│   │   └── page.tsx
│   ├── lien-he/                 # Trang liên hệ
│   │   └── page.tsx
│   └── huong-dan/               # Trang hướng dẫn (GitBook style)
│       ├── layout.tsx           # Layout với sidebar
│       ├── page.tsx             # Trang giới thiệu
│       ├── cai-dat/             # Hướng dẫn cài đặt
│       ├── cap-nhat/            # Hướng dẫn cập nhật
│       ├── kich-hoat/           # Hướng dẫn kích hoạt license
│       ├── phim-tat/            # Phím tắt
│       ├── tab-co-ban/          # Tab Cơ bản
│       │   └── cach-cau-hinh/
│       ├── tab-to-doi/          # Tab Tổ đội
│       ├── tab-luyen-cong/      # Tab Luyện công
│       ├── tab-phuc-hoi/        # Tab Phục hồi
│       ├── tab-hanh-trang/      # Tab Hành trang
│       ├── tab-doi-thu/         # Tab Đối thủ
│       ├── tab-chien-dau/       # Tab Chiến đấu
│       ├── tab-tu-ve-pk/        # Tab Tự vệ/PK
│       ├── tab-tien-ich/        # Tab Tiện ích
│       ├── tab-dang-nhap/       # Tab Đăng nhập
│       ├── sandboxie-proxy/      # Sandboxie & Proxy
│       └── loi-thuong-gap/       # Lỗi thường gặp
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── separator.tsx
│   │   └── accordion.tsx
│   ├── navbar.tsx               # Navigation bar
│   └── theme-provider.tsx       # Theme provider
├── lib/                          # Utilities
│   └── utils.ts                  # Utility functions (cn helper)
├── public/                       # Static files
│   ├── favicon.ico
│   ├── logo.png
│   ├── vltt2pc.png
│   ├── auto-ui.png
│   ├── qr-code.png
│   └── [các thư mục hình ảnh hướng dẫn]/
└── ...
```

## Tính năng chi tiết

### Trang Hướng dẫn

- **Sidebar Navigation**: Menu bên trái với accordion behavior (chỉ 1 mục mở tại một thời điểm)
- **Mobile Menu**: Burger menu với overlay cho màn hình nhỏ
- **Auto-expand**: Tự động mở mục chứa trang hiện tại
- **Active State**: Highlight trang đang xem

### Trang Changelog

- Parse và format từ file `changelog.txt`
- Hiển thị các phiên bản từ 0.1.0 trở lên
- Sắp xếp theo thời gian mới nhất

## Build cho production

```bash
npm run build
npm start
```

## License

MIT
