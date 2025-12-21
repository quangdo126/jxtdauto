import Image from "next/image"

export default function TabLuyenCongCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Tab Luyện công - Cách cấu hình</h1>
          
          <div className="space-y-6">
            <div className="mb-6">
              <Image
                src="/luyen-cong/ui.png"
                alt="Giao diện Tab Luyện công"
                width={800}
                height={600}
                quality={100}
                unoptimized
                className="rounded-lg"
              />
            </div>

            <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
              <li>
                Lấy toạ độ luyện công bằng cách chạy đến điểm mong muốn rồi click vào dấu cộng màu xanh.
              </li>
              <li>
                Xoá toạ độ luyện công bằng cách chọn toạ độ cần xoá rồi click vào dấu trừ màu đỏ. Có thể click vào tờ giấy màu trắng để xoá toàn bộ toạ độ hiện tại.
              </li>
              <li>
                <strong className="text-foreground">Tự đánh:</strong> dùng để kích hoạt tính năng tự đánh khi luyện công.
              </li>
              <li>
                <strong className="text-foreground">Đánh lẻ:</strong> kích hoạt nếu bạn muốn nhân vật tự động đánh kể cả khi không có đội trưởng, lưu ý đội trưởng cần phải kích hoạt đánh lẻ nếu không cả tổ đội sẽ chạy quanh các toạ độ luyện công mà không làm gì cả.
              </li>
              <li>
                <strong className="text-foreground">Quây quái:</strong> số lượng quái để kích hoạt tính năng quây quái, nên để là <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">1</code> hoặc <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">2</code>.
              </li>
              <li>
                <strong className="text-foreground">Bán kính:</strong> bán kính nhân vật di chuyển hình tròn để quây quái, số càng nhỏ thì vòng tròn di chuyển càng nhỏ.
              </li>
              <li>
                Các bạn có thể tuỳ chọn các điều kiện để nhân vật tự động về thành như khi ngân lượng đạt đủ mức mong muốn, khi đồ bị hư cần được sửa chữa, hoặc khi hết bình máu, bình mana hay Ngọc Lộ Hoàn.
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
                    <strong>Lưu ý:</strong> Luôn luôn click chọn <code className="rounded bg-yellow-100 px-1.5 py-0.5 text-sm font-mono dark:bg-yellow-900/50">Áp dụng</code> sau khi thay đổi bất cứ mục nào để auto nhận diện được thay đổi mới, nếu không bạn sẽ phải thay đổi lại mục đó từ đầu!
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
