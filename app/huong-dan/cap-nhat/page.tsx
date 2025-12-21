import Image from "next/image"

export default function CapNhatPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Cập nhật</h1>
          
          <div className="space-y-6">
            <div>
              <p className="mb-4 text-muted-foreground">
                Khi cập nhật các bạn cần lưu ý giữ lại 2 thư mục sau:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">config</code>: thư mục chứa profile của các tài khoản.
                </li>
                <li>
                  <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">userdata</code>: thư mục chứa những file tọa độ map, file lọc đồ
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4">
                <Image
                  src="/bat-dau/cap-nhat/cap-nhat.png"
                  alt="Hướng dẫn cập nhật"
                  width={800}
                  height={600}
                  quality={100}
                  unoptimized
                  className="rounded-lg"
                />
              </div>
              <p className="mb-4 text-muted-foreground">
                Sau khi đã lưu lại 2 thư mục này các bạn có thể giải nén file auto mới nhất, sau đó chép đè 2 thư mục đã lưu ở trên vào thư mục auto mới nhất vừa giải nén và chọn Overwrite.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950/20">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-semibold text-red-800 dark:text-red-400">
                    Lưu ý quan trọng nhắc lại 3 lần!
                  </h3>
                  <p className="mt-2 text-sm text-red-700 dark:text-red-300">
                    Không được chép đè thư mục <code className="rounded bg-red-100 px-1.5 py-0.5 text-sm font-mono dark:bg-red-900/50">data</code> lên nhau, từ mới sang cũ hoặc từ cũ sang mới đều gây lỗi cho auto.
                  </p>
                  <p className="mt-2 text-sm text-red-700 dark:text-red-300">
                    Không được chép đè thư mục <code className="rounded bg-red-100 px-1.5 py-0.5 text-sm font-mono dark:bg-red-900/50">data</code> lên nhau, từ mới sang cũ hoặc từ cũ sang mới đều gây lỗi cho auto.
                  </p>
                  <p className="mt-2 text-sm text-red-700 dark:text-red-300">
                    Không được chép đè thư mục <code className="rounded bg-red-100 px-1.5 py-0.5 text-sm font-mono dark:bg-red-900/50">data</code> lên nhau, từ mới sang cũ hoặc từ cũ sang mới đều gây lỗi cho auto.
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
