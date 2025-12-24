import Image from "next/image"

export default function TabTienIchCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Tab Tiện ích - Cách cấu hình</h1>
          
          <div className="space-y-6">
            <div className="mb-6">
              <Image
                src="/tien-ich/ui.png"
                alt="Giao diện Tab Tiện ích"
                width={800}
                height={600}
                quality={100}
                unoptimized
                className="rounded-lg"
              />
            </div>

            <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Nhận thưởng thẻ tháng:</strong> tự động nhận thưởng thẻ tháng từ Lễ Quan.
              </li>
              <li>
                <strong className="text-foreground">Nhận thưởng năng động:</strong> tự động nhận thưởng khi bạn đạt các mốc điểm năng động <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">10</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">25</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">55</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">80</code>.
              </li>
              <li>
                <strong className="text-foreground">Điểm danh ngày:</strong> tự động điểm danh ngày khi đạt đủ <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">25</code> điểm năng động.
              </li>
              <li>
                <strong className="text-foreground">Hẹn giờ tác vụ:</strong> hẹn giờ thực hiện các tác vụ tự động, tránh tình trạng bị quá tải do quá nhiều người để auto làm tự động trong cùng 1 khung giờ.
                <div className="mt-2">
                  <Image
                    src="/tien-ich/hen-gio.png"
                    alt="Ví dụ cấu hình hẹn giờ tác vụ"
                    width={800}
                    height={600}
                    quality={100}
                    unoptimized
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li>
                <strong className="text-foreground">Chia sẻ vật phẩm:</strong> các nhân vật trong cùng một nhóm sẽ tự động giao dịch các loại phù được chọn, khi có một nhân vật đi làm nhiệm vụ mà không có phù trong người, nó sẽ xin các nhân vật khác (trong cùng một nhóm) theo thứ tự từ trên xuống và nếu có nhân vật nào khác có đủ các loại bùa được chọn, cả 2 sẽ về thành giao dịch tự động với nhau, trong trường hợp không có nhân vật nào có đủ các loại bùa được chọn thì nhân vật đang làm nhiệm vụ sẽ chạy bộ.
              </li>
              <li>
                <strong className="text-foreground">Chia sẻ vật phẩm nhiệm vụ:</strong> các nhân vật trong cùng một nhóm sẽ tự động giao dịch các vật phẩm nhiệm vụ (<code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Mặc Thạch</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Long Nhi</code>) với nhau, logic tương tự chức năng chia sẻ vật phẩm ở trên.
              </li>
              <li>
                <strong className="text-foreground">Mở túi thuốc:</strong> tự động mở túi thuốc như túi <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Xích Hà Đơn</code>.
              </li>
              <li>
                <strong className="text-foreground">Quyên góp bang hội:</strong> tự động quyên góp bang hội khi đạt đến ngưỡng ngân lượng được quy định, có thể tuỳ chọn để giữ lại một phần ngân lượng.
              </li>
            </ul>

            <div className="mt-6 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950/20">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800 dark:text-yellow-300">
                    <strong>Lưu ý:</strong> Luôn click chọn <code className="rounded bg-yellow-100 px-1.5 py-0.5 text-sm font-mono dark:bg-yellow-900/50">Áp dụng</code> sau khi thay đổi bất cứ mục nào để auto nhận diện được thay đổi mới, nếu không bạn sẽ phải thay đổi lại mục đó từ đầu!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
