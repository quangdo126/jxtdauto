import Image from "next/image"

export default function TabPhucHoiCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Tab Phục hồi - Cách cấu hình</h1>
          
          <div className="space-y-6">
            <div className="mb-6">
              <Image
                src="/phuc-hoi/ui.png"
                alt="Giao diện Tab Phục hồi"
                width={800}
                height={600}
                quality={100}
                unoptimized
                className="rounded-lg"
              />
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Phục hồi & TĐP:</h2>
              <p className="mb-4 text-muted-foreground">
                Bạn có thể điều chỉnh logic bơm máu, mana tự động. Có thể tuỳ chỉnh theo từng mức để bơm dồn khi máu, mana xuống dưới mức quy định.
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">HP:</strong> bơm máu khi máu tuột xuống mức máu cụ thể, ví dụ <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">1000</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">2000</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">3000</code>.
                </li>
                <li>
                  <strong className="text-foreground">HP%:</strong> bơm máu khi máu tuột xuống theo %.
                </li>
                <li>
                  <strong className="text-foreground">MP%:</strong> bơm mana khi mana tuột xuống theo %.
                </li>
                <li>
                  <strong className="text-foreground">HP PK:</strong> bơm máu tự động trong chế độ PK.
                </li>
                <li>
                  <strong className="text-foreground">TĐP:</strong> cấu hình để tự động sử dụng <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Thổ Địa Phù</code> khi máu hoặc mana tuột xuống dưới mức quy định.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Kỹ năng hỗ trợ:</h2>
              <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
                <li>
                  Sử dụng kỹ năng hỗ trợ của từng môn phái, chọn kỹ năng trong dropdown menu rồi click vào dấu cộng màu xanh để thêm vào danh sách sử dụng tự động.
                </li>
                <li>
                  Bạn có thể click chuột phải vào mỗi kỹ năng hỗ trợ để tuỳ chỉnh nâng cao. Có 3 loại điều kiện để cài đặt:
                  <ul className="ml-6 mt-2 list-disc space-y-2">
                    <li>
                      <strong className="text-foreground">Luôn sử dụng:</strong> tự động sử dụng kỹ năng khi hết trạng thái, bạn có thể điều chỉnh thời gian để sử dụng trước khi hết trạng thái ở ô nhập số kế bên, ví dụ <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">3000</code> auto sẽ sử dụng kỹ năng trước khi hết trạng thái 3 giây (<code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">3000ms</code>).
                    </li>
                    <li>
                      <strong className="text-foreground">Giãn cách:</strong> sử dụng kỹ năng liên tục và cách nhau khoảng thời gian được cấu hình trong ô nhập số kế bên (tính theo ms).
                    </li>
                    <li>
                      <strong className="text-foreground">Sinh lực (%) &lt;:</strong> sử dụng kỹ năng khi máu tuột xuống dưới % được quy định (thường được áp dụng cho kỹ năng Từ Hằng Phổ Độ).
                    </li>
                  </ul>
                </li>
                <li>
                  Sau đây là một số ví dụ về cách cấu hình cho các skill thường sử dụng:
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <Image
                  src="/phuc-hoi/md.png"
                  alt="Ví dụ cấu hình kỹ năng hỗ trợ MD"
                  width={800}
                  height={600}
                  quality={100}
                  unoptimized
                  className="rounded-lg"
                />
              </div>
              <div>
                <Image
                  src="/phuc-hoi/lt.png"
                  alt="Ví dụ cấu hình kỹ năng hỗ trợ LT"
                  width={800}
                  height={600}
                  quality={100}
                  unoptimized
                  className="rounded-lg"
                />
              </div>
              <div>
                <Image
                  src="/phuc-hoi/thpd.png"
                  alt="Ví dụ cấu hình kỹ năng hỗ trợ THPD"
                  width={800}
                  height={600}
                  quality={100}
                  unoptimized
                  className="rounded-lg"
                />
              </div>
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
