import Image from "next/image"

export default function TabDangNhapCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Tab Đăng nhập</h1>
          
          <div className="space-y-6">
            <div className="mb-6">
              <Image
                src="/dang-nhap/ui.png"
                alt="Giao diện Tab Đăng nhập"
                width={800}
                height={600}
                quality={100}
                unoptimized
                className="rounded-lg"
              />
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Thông tin đăng nhập</h2>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Phân vùng:</strong> chọn cụm máy chủ.
                </li>
                <li>
                  <strong className="text-foreground">Máy chủ:</strong> chọn máy chủ.
                </li>
                <li>
                  <strong className="text-foreground">Tài khoản:</strong> nhập vào tài khoản cần đăng nhập.
                </li>
                <li>
                  <strong className="text-foreground">Mật khẩu:</strong> nhập vào mật khẩu của tài khoản cần đăng nhập.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Hệ thống</h2>
              <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Thời gian đăng nhập tối đa:</strong> thời gian để auto đợi đăng nhập sau khi nhập thông tin tài khoản thành công, nên cấu hình từ <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">60</code> đến <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">120</code> giây để tránh tình trạng kẹt tài khoản (tài khoản được sử dụng).
                </li>
                <li>
                  <strong className="text-foreground">Thời gian chờ đăng nhập lại:</strong> thời gian chờ giữa mỗi lần đăng nhập lại, có thể cấu hình <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">5 giây</code> cho mục này.
                </li>
                <li>
                  <strong className="text-foreground">Tự động đăng nhập:</strong> tick chọn để tự động đăng nhập tài khoản này khi mở auto.
                </li>
                <li>
                  <strong className="text-foreground">Tự ẩn game:</strong> tick chọn để tự động ẩn game khi đăng nhập tự động.
                </li>
                <li>
                  <strong className="text-foreground">Sử dụng Sandboxie:</strong> tick chọn nếu sử dụng Sandboxie để mở nhiều cửa sổ game hơn.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/20">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Lưu ý:</strong> Phải chọn đường dẫn đến file <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-mono dark:bg-blue-900/50">gamecl.exe</code> trong thư mục game để sử dụng tính năng đăng nhập tự động. Thông thường đường dẫn sẽ là: <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-mono dark:bg-blue-900/50">C:\Program Files\Level Up Games\Vo Lam Truyen Ky 2.0\gamecl.exe</code>
                  </p>
                </div>
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
