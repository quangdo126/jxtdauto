export default function CauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Cấu hình cơ bản</h1>
          <p className="mb-4 text-muted-foreground">
            Cấu hình cơ bản giúp bạn thiết lập các thông số ban đầu cho phần
            mềm.
          </p>
          <h2 className="mb-4 text-2xl font-semibold">Các bước cấu hình</h2>
          <ol className="ml-6 list-decimal space-y-2 text-muted-foreground">
            <li>Mở phần mềm và đăng nhập</li>
            <li>Vào mục Settings</li>
            <li>Thiết lập các thông số cơ bản</li>
            <li>Lưu cấu hình</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

