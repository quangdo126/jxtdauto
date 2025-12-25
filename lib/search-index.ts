export interface SearchItem {
  title: string
  href: string
  description: string
  keywords: string[]
  category: string
}

export const searchIndex: SearchItem[] = [
  // Bắt đầu
  {
    title: "Giới thiệu",
    href: "/",
    description: "Chào mừng đến với tài liệu hướng dẫn sử dụng jxtdAuto - auto cho game Võ Lâm Truyền Kỳ 2.0",
    keywords: ["giới thiệu", "hướng dẫn", "bắt đầu", "tài liệu", "jxtdAuto", "võ lâm truyền kỳ"],
    category: "Bắt đầu",
  },
  {
    title: "Cài đặt",
    href: "/cai-dat",
    description: "Hướng dẫn tải và cài đặt auto, giải nén file và chạy auto",
    keywords: ["cài đặt", "tải", "download", "giải nén", "winrar", "7zip", "jxtdAuto.exe"],
    category: "Bắt đầu",
  },
  {
    title: "Cập nhật",
    href: "/cap-nhat",
    description: "Hướng dẫn cập nhật auto, giữ lại thư mục config và userdata",
    keywords: ["cập nhật", "update", "config", "userdata", "thư mục", "giữ lại"],
    category: "Bắt đầu",
  },
  {
    title: "Kích hoạt License",
    href: "/kich-hoat",
    description: "Hướng dẫn kích hoạt license key cho auto",
    keywords: ["kích hoạt", "license", "key", "miễn phí", "thử nghiệm"],
    category: "Bắt đầu",
  },
  {
    title: "Phím tắt",
    href: "/phim-tat",
    description: "Danh sách các phím tắt trong auto như Shift+F1, Ctrl+A, Ctrl+D, Ctrl+E, Ctrl+F",
    keywords: ["phím tắt", "shortcut", "keyboard", "Ctrl+A", "Ctrl+D", "Ctrl+E", "Ctrl+F", "Ctrl+P", "Ctrl+Z"],
    category: "Bắt đầu",
  },
  // Tab Cơ bản
  {
    title: "Tab Cơ bản - Cách cấu hình",
    href: "/tab-co-ban/cach-cau-hinh",
    description: "Cấu hình auto PK, tự đánh, nhặt vật phẩm, lọc đồ, các tác vụ chính",
    keywords: [
      "tab cơ bản",
      "auto PK",
      "tự đánh",
      "nhặt vật phẩm",
      "lọc đồ",
      "tác vụ",
      "năng động",
      "nhiệm vụ",
      "lọc kết hợp",
      "vật phẩm đen",
      "lọc trang bị",
      "lọc túi hành trang",
    ],
    category: "Tab Cơ bản",
  },
  // Tab Tổ đội
  {
    title: "Tab Tổ đội - Cách cấu hình",
    href: "/tab-to-doi/cach-cau-hinh",
    description: "Cấu hình tổ đội, lập chiến đội, theo sau, lên ngựa",
    keywords: ["tab tổ đội", "tổ đội", "lập đội", "chiến đội", "theo sau", "đội trưởng", "lên ngựa"],
    category: "Tab Tổ đội",
  },
  // Tab Luyện công
  {
    title: "Tab Luyện công - Cách cấu hình",
    href: "/tab-luyen-cong/cach-cau-hinh",
    description: "Cấu hình luyện công, toạ độ, tự đánh, đánh lẻ, quây quái, bán kính, về thành",
    keywords: [
      "tab luyện công",
      "luyện công",
      "toạ độ",
      "tự đánh",
      "đánh lẻ",
      "quây quái",
      "bán kính",
      "về thành",
      "ngân lượng",
      "sửa chữa",
    ],
    category: "Tab Luyện công",
  },
  // Tab Phục hồi
  {
    title: "Tab Phục hồi - Cách cấu hình",
    href: "/tab-phuc-hoi/cach-cau-hinh",
    description: "Cấu hình phục hồi HP/MP, TĐP, kỹ năng hỗ trợ, từ hằng phổ độ",
    keywords: [
      "tab phục hồi",
      "phục hồi",
      "HP",
      "MP",
      "TĐP",
      "thổ địa phù",
      "kỹ năng hỗ trợ",
      "từ hằng phổ độ",
      "bơm máu",
      "bơm mana",
    ],
    category: "Tab Phục hồi",
  },
  // Tab Hành trang
  {
    title: "Tab Hành trang - Cách cấu hình",
    href: "/tab-hanh-trang/cach-cau-hinh",
    description: "Cấu hình mua thuốc, mua tạp hoá, tự sử dụng, mở rương, rút tiền, sửa trang bị, cất vật phẩm, rèn",
    keywords: [
      "tab hành trang",
      "hành trang",
      "mua thuốc",
      "mua tạp hoá",
      "tự sử dụng",
      "mở rương",
      "rút tiền",
      "sửa trang bị",
      "sửa trên bãi",
      "khoá trang bị",
      "sắp xếp",
      "cất vật phẩm",
      "rèn",
      "ghép sổ tay",
      "ghép quà",
      "ghép huyền tinh",
      "gửi tiền",
      "bản đồ mua thuốc",
    ],
    category: "Tab Hành trang",
  },
  // Tab Đối thủ
  {
    title: "Tab Đối thủ - Cách cấu hình",
    href: "/tab-doi-thu/cach-cau-hinh",
    description: "Cấu hình ưu tiên mục tiêu, môn phái, danh sách đen, bỏ qua bùa chú, bỏ qua bang hội",
    keywords: [
      "tab đối thủ",
      "đối thủ",
      "ưu tiên",
      "mục tiêu",
      "môn phái",
      "danh sách đen",
      "blacklist",
      "bỏ qua bùa chú",
      "bỏ qua bang hội",
      "bỏ quái phản đòn",
      "bỏ quái lag",
      "đánh đến chết",
      "theo đội trưởng",
      "bỏ qua boss",
      "bỏ quái khuất",
      "giữ khoảng cách",
    ],
    category: "Tab Đối thủ",
  },
  // Tab Chiến đấu
  {
    title: "Tab Chiến đấu - Cách cấu hình",
    href: "/tab-chien-dau/cach-cau-hinh",
    description: "Cấu hình kỹ năng chiến đấu, combo, đoạn hồn thích, truy phong quyết",
    keywords: [
      "tab chiến đấu",
      "chiến đấu",
      "kỹ năng",
      "combo",
      "đoạn hồn thích",
      "truy phong quyết",
      "đánh boss",
      "luyện kỹ năng",
    ],
    category: "Tab Chiến đấu",
  },
  // Tab Tự vệ/PK
  {
    title: "Tab Tự vệ/PK - Cách cấu hình",
    href: "/tab-tu-ve-pk/cach-cau-hinh",
    description: "Cấu hình tự vệ, PK, thổ địa phù, chuyển phe, đánh trả, bỏ chạy, tự cừu sát, tự đồ sát",
    keywords: [
      "tab tự vệ",
      "tab PK",
      "tự vệ",
      "PK",
      "thổ địa phù",
      "TĐP",
      "chuyển phe",
      "đánh trả",
      "bỏ chạy",
      "tự cừu sát",
      "bảo vệ cừu sát",
      "TĐP khi cừu sát",
      "báo cừu sát",
      "tự đồ sát",
      "PK mua thuốc",
      "nhận thuốc miễn phí",
      "PK theo đội trưởng",
      "tống kim",
    ],
    category: "Tab Tự vệ/PK",
  },
  // Tab Tiện ích
  {
    title: "Tab Tiện ích - Cách cấu hình",
    href: "/tab-tien-ich/cach-cau-hinh",
    description: "Cấu hình thẻ tháng, năng động, điểm danh, hẹn giờ, chia sẻ vật phẩm, mở túi thuốc, quyên góp bang hội",
    keywords: [
      "tab tiện ích",
      "tiện ích",
      "thẻ tháng",
      "năng động",
      "điểm danh",
      "hẹn giờ",
      "chia sẻ vật phẩm",
      "chia sẻ nhiệm vụ",
      "mở túi thuốc",
      "quyên góp bang hội",
    ],
    category: "Tab Tiện ích",
  },
  // Tab Đăng nhập
  {
    title: "Tab Đăng nhập - Cách cấu hình",
    href: "/tab-dang-nhap/cach-cau-hinh",
    description: "Cấu hình đăng nhập tự động, phân vùng, máy chủ, tài khoản, mật khẩu, Sandboxie",
    keywords: [
      "tab đăng nhập",
      "đăng nhập",
      "tự động đăng nhập",
      "phân vùng",
      "máy chủ",
      "tài khoản",
      "mật khẩu",
      "thời gian đăng nhập",
      "tự ẩn game",
      "Sandboxie",
      "gamecl.exe",
    ],
    category: "Tab Đăng nhập",
  },
  // Sandboxie & Proxy
  {
    title: "Sandboxie & Proxy - Cách cấu hình",
    href: "/sandboxie-proxy/cach-cau-hinh",
    description: "Cấu hình Sandboxie và Proxy để bypass giới hạn 8 cửa sổ game, chạy nhiều hơn 8 cửa sổ mỗi máy tính",
    keywords: [
      "sandboxie",
      "proxy",
      "nhiều cửa sổ",
      "chạy nhiều game",
      "sandbox",
      "bypass",
      "giới hạn",
      "8 cửa sổ",
      "hwid",
      "ip",
      "socks5",
      "datacenter",
      "proxy private",
      "advanced",
      "proxifier",
      "PID",
      "start.exe",
      "network options",
      "access isolation",
    ],
    category: "Sandboxie & Proxy",
  },
  // Khắc phục sự cố
  {
    title: "Lỗi thường gặp",
    href: "/loi-thuong-gap",
    description: "Danh sách các lỗi thường gặp và cách khắc phục",
    keywords: ["lỗi", "lỗi thường gặp", "khắc phục", "sửa lỗi", "troubleshooting"],
    category: "Khắc phục sự cố",
  },
  {
    title: "Câu hỏi thường gặp",
    href: "/faq",
    description: "Các câu hỏi thường gặp về auto",
    keywords: ["FAQ", "câu hỏi", "thường gặp", "hỏi đáp"],
    category: "Khắc phục sự cố",
  },
  {
    title: "Báo lỗi",
    href: "/bao-loi",
    description: "Hướng dẫn báo lỗi cho đội ngũ phát triển",
    keywords: ["báo lỗi", "report", "bug", "lỗi"],
    category: "Khắc phục sự cố",
  },
]

export function searchWiki(query: string): SearchItem[] {
  if (!query || query.trim().length === 0) {
    return []
  }

  const normalizedQuery = query.toLowerCase().trim()
  const queryWords = normalizedQuery.split(/\s+/)

  const results = searchIndex
    .map((item) => {
      let score = 0

      // Kiểm tra title
      const titleLower = item.title.toLowerCase()
      if (titleLower.includes(normalizedQuery)) {
        score += 100
      }
      queryWords.forEach((word) => {
        if (titleLower.includes(word)) {
          score += 50
        }
      })

      // Kiểm tra description
      const descLower = item.description.toLowerCase()
      if (descLower.includes(normalizedQuery)) {
        score += 30
      }
      queryWords.forEach((word) => {
        if (descLower.includes(word)) {
          score += 15
        }
      })

      // Kiểm tra keywords
      item.keywords.forEach((keyword) => {
        const keywordLower = keyword.toLowerCase()
        if (keywordLower === normalizedQuery) {
          score += 40
        } else if (keywordLower.includes(normalizedQuery)) {
          score += 20
        }
        queryWords.forEach((word) => {
          if (keywordLower.includes(word)) {
            score += 10
          }
        })
      })

      return { item, score }
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((result) => result.item)

  return results
}

