import Image from "next/image"

export default function SandboxieProxyCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Sandboxie & Proxy - Cách cấu hình</h1>
          
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/20">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Sẽ có hướng dẫn trong thời gian sớm nhất.
                </p>
              </div>
            </div>
          </div>

          {/* Tạm thời ẩn nội dung cũ
          <div className="space-y-6">
            <p className="mb-4 text-muted-foreground">
              Cách cài đặt và cấu hình Sandboxie để chạy nhiều hơn 8 cửa sổ game trên cùng 1 máy tính.
            </p>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Bước 1: Tải Sandboxie</h2>
              <p className="mb-4 text-muted-foreground">
                Link tải:{" "}
                <a
                  href="https://sandboxie-plus.com/downloads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://sandboxie-plus.com/downloads/
                </a>
              </p>
              <p className="mb-4 text-muted-foreground">
                Chọn mục <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Sandboxie-Plus-x64-v1.16.8.exe (x64 Windows 7, 10, 11)</code>
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Bước 2: Cấu hình auto để sử dụng Sandboxie</h2>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Tick chọn mục <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Sử dụng Sandboxie</code>.</li>
                <li>Nếu bạn sử dụng 2 sandbox trở lên thì điền tên của sandbox muốn chạy cùng auto vào ô kế bên.</li>
                <li>Click vào icon bánh răng sau đó chọn đường dẫn đến file <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Start.exe</code> trong thư mục cài đặt của Sandboxie.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <Image
                  src="/sandboxie/1.png"
                  alt="Hướng dẫn Sandboxie 1"
                  width={800}
                  height={600}
                  quality={100}
                  unoptimized
                  className="rounded-lg"
                />
              </div>
              <div>
                <Image
                  src="/sandboxie/2.png"
                  alt="Hướng dẫn Sandboxie 2"
                  width={800}
                  height={600}
                  quality={100}
                  unoptimized
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}
