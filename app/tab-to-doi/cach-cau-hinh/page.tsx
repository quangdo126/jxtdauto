import Image from "next/image"

export default function TabToDoiCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Tab Tổ đội</h1>
          
          <div className="space-y-6">
            <div className="mb-6">
              <Image
                src="/to-doi/ui.png"
                alt="Giao diện Tab Tổ đội"
                width={800}
                height={600}
                quality={100}
                unoptimized
                className="rounded-lg"
              />
            </div>

            <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
              <li>
                Các bạn có thể lập tổ đội nhanh bằng cách chọn nhiều nhân vật (quét chọn hoặc giữ <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Ctrl</code> và click chọn nhiều nhân vật) rồi click chuột phải vào danh sách nhân vật và chọn <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Lập chiến đội</code>.
              </li>
              <li>
                Có thể chọn để theo sau một hoặc nhiều nhân vật cụ thể thay vì đội trưởng bằng cách thêm tên chúng vào mục <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Danh sách theo sau</code>.
              </li>
              <li>
                <strong className="text-foreground">Lên ngựa:</strong> dùng để tuỳ chỉnh việc tự động lên ngựa khi di chuyển khoảng cách lớn hơn khoảng cách được điền vào ô kế bên. Ví dụ bạn để <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">600</code> thì nhân vật sẽ tự lên ngựa khi toạ độ A cách toạ độ B 600 khoảng cách hoặc khi di chuyển theo đội trưởng khoảng cách 600 trở lên.
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
