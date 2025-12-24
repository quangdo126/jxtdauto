import Image from "next/image"

export default function TabTuVePkCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Tab Tự vệ/PK - Cách cấu hình</h1>
          
          <div className="space-y-6">
            <div className="mb-6">
              <Image
                src="/tu-ve/ui.png"
                alt="Giao diện Tab Tự vệ/PK"
                width={800}
                height={600}
                quality={100}
                unoptimized
                className="rounded-lg"
              />
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Tự vệ: có 4 phương án tự vệ</h2>
              <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Thổ địa phù:</strong> tự động sử dụng <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Thổ Địa Phù</code> khi máu xuống ngưỡng nhất định, được cấu hình trong tab Phục hồi.
                </li>
                <li>
                  <strong className="text-foreground">Chuyển phe:</strong> tự động đổi màu của tổ đội giống với màu của tổ đội kẻ địch.
                </li>
                <li>
                  <strong className="text-foreground">Đánh trả:</strong> tự động đánh trả khi kẻ địch cừu sát hay đồ sát bạn.
                </li>
                <li>
                  <strong className="text-foreground">Bỏ chạy:</strong> tự động bỏ chạy khi phát hiện có kẻ địch cừu sát hay đồ sát bạn.
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Bạn có thể tuỳ chỉnh để nhân vật nghỉ ở thành sau khi về thành liên tục hoặc nhân vật bị chết liên tục.
              </p>
            </div>

            <div>
              <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Tự cừu sát:</strong> tự cừu sát khi gặp phải người chơi được quy định trong danh sách. Chọn người chơi từ dropdown menu rồi click chọn dấu cộng màu xanh để thêm vào danh sách tự động cừu sát.
                </li>
                <li>
                  <strong className="text-foreground">Bảo vệ cừu sát:</strong> các nhân vật trong tổ đội sẽ luân phiên cừu sát lẫn nhau khiến cho kẻ địch không thể cừu sát được bạn.
                </li>
                <li>
                  <strong className="text-foreground">TĐP khi cừu sát:</strong> tự động sử dụng <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Thổ Địa Phù</code> ngay khi có người cừu sát bạn, có thể điều chỉnh chỉ phù khi mức PK của bạn đạt mức nhất định bằng cách điền số bạn muốn vào ô kế bên.
                </li>
                <li>
                  <strong className="text-foreground">Báo cừu sát:</strong> auto sẽ thông báo khi có người muốn cừu sát bạn.
                </li>
                <li>
                  <strong className="text-foreground">Tự đồ sát:</strong> tự mở đồ sát khi gặp phải người chơi được quy định trong danh sách. Chọn người chơi từ dropdown menu rồi click chọn dấu cộng màu xanh để thêm vào danh sách tự động đồ sát.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">PK</h2>
              <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Mua thuốc:</strong> cấu hình mua thuốc tự động trong Tống Kim.
                </li>
                <li>
                  <strong className="text-foreground">Nhận thuốc miễn phí:</strong> nhận thuốc miễn phí từ Tống Kim.
                </li>
                <li>
                  <strong className="text-foreground">Sửa trang bị:</strong> tự động sửa trang bị trong chế độ PK.
                </li>
                <li>
                  <strong className="text-foreground">Tự trở lại địa điểm cũ:</strong> tự động quay lại địa điểm cũ trong chế độ PK.
                </li>
                <li>
                  <strong className="text-foreground">PK theo đội trưởng:</strong> tự động chuyển đổi chế độ chiến đấu theo đội trưởng, ví dụ khi đội trưởng chuyển đổi chế độ đồ sát, toàn bộ thành viên trong tổ đội đang mở tính năng này sẽ tự động chuyển sang đồ sát theo đội trưởng.
                </li>
              </ul>
            </div>

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
