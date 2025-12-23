import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Hướng dẫn sử dụng</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Chào mừng đến với tài liệu hướng dẫn sử dụng <strong>jxtdAuto</strong> - auto cho game <strong>Võ Lâm Truyền Kỳ 2.0</strong>.
            Tài liệu này sẽ giúp bạn làm quen và sử dụng hiệu quả các tính năng
            của auto.
          </p>

          <div className="mb-8 flex">
            <Image
              src="/vltt2pc.webp"
              alt="Võ Lâm Truyền Kỳ 2.0"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Bắt đầu nhanh</h2>
              <p className="mb-4 text-muted-foreground">
                Để bắt đầu sử dụng jxtdAuto, bạn cần đọc kỹ và thực hiện các bước sau:
              </p>
              <ol className="ml-6 list-decimal space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/cai-dat"
                    className="text-primary hover:underline"
                  >
                    Tải và cài đặt auto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cap-nhat"
                    className="text-primary hover:underline"
                  >
                    Cập nhật auto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kich-hoat"
                    className="text-primary hover:underline"
                  >
                    Kích hoạt license key
                  </Link>
                </li>
                <li>
                  <Link
                    href="/phim-tat"
                    className="text-primary hover:underline"
                  >
                    Phím tắt
                  </Link>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                Các tính năng chính
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link
                      href="/tab-co-ban/cach-cau-hinh"
                      className="text-primary hover:underline"
                    >
                      Tab Cơ bản
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    Các thiết lập cơ bản và cấu hình chính của auto.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link
                      href="/tab-to-doi/cach-cau-hinh"
                      className="text-primary hover:underline"
                    >
                      Tab Tổ đội
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    Quản lý và cấu hình tổ đội trong game.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link
                      href="/tab-luyen-cong/cach-cau-hinh"
                      className="text-primary hover:underline"
                    >
                      Tab Luyện công
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    Tự động luyện công và nâng cấp nhân vật.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link
                      href="/tab-phuc-hoi/cach-cau-hinh"
                      className="text-primary hover:underline"
                    >
                      Tab Phục hồi
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    Tự động phục hồi HP/MP, sử dụng TĐP và kỹ năng hỗ trợ.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link
                      href="/tab-hanh-trang/cach-cau-hinh"
                      className="text-primary hover:underline"
                    >
                      Tab Hành trang
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    Quản lý hành trang, lưu rương, mua và sử dụng vật phẩm.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link
                      href="/tab-doi-thu/cach-cau-hinh"
                      className="text-primary hover:underline"
                    >
                      Tab Đối thủ
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    Cấu hình đối thủ, ưu tiên và bỏ qua mục tiêu.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link
                      href="/tab-chien-dau/cach-cau-hinh"
                      className="text-primary hover:underline"
                    >
                      Tab Chiến đấu
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    Cấu hình kỹ năng chiến đấu.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link
                      href="/tab-tu-ve-pk/cach-cau-hinh"
                      className="text-primary hover:underline"
                    >
                      Tab Tự vệ/PK
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    Tự động tự vệ và PK khi cần thiết.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link
                      href="/tab-tien-ich/cach-cau-hinh"
                      className="text-primary hover:underline"
                    >
                      Tab Tiện ích
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    Các tính năng tiện ích và công cụ hỗ trợ.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link
                      href="/tab-dang-nhap/cach-cau-hinh"
                      className="text-primary hover:underline"
                    >
                      Tab Đăng nhập
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    Tự động đăng nhập và quản lý tài khoản.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link
                      href="/sandboxie-proxy/cach-cau-hinh"
                      className="text-primary hover:underline"
                    >
                      Sandboxie & Proxy
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    Cấu hình Sandboxie và Proxy để chạy nhiều cửa sổ game.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                Cần hỗ trợ thêm?
              </h2>
              <p className="mb-4 text-muted-foreground">
                Nếu bạn gặp bất kỳ vấn đề nào hoặc cần hỗ trợ thêm, vui lòng:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  Xem phần{" "}
                  <Link
                    href="/loi-thuong-gap"
                    className="text-primary hover:underline"
                  >
                    Lỗi thường gặp
                  </Link>
                </li>
                <li>
                  Kiểm tra{" "}
                  <Link
                    href="/faq"
                    className="text-primary hover:underline"
                  >
                    Câu hỏi thường gặp
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lien-he"
                    className="text-primary hover:underline"
                  >
                    Liên hệ với chúng tôi
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
