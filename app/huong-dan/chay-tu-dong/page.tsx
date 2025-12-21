export default function ChayTuDongPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Chạy tự động lần đầu</h1>
          <p className="mb-4 text-muted-foreground">
            Hướng dẫn chạy auto lần đầu tiên.
          </p>
          <h2 className="mb-4 text-2xl font-semibold">Các bước thực hiện</h2>
          <ol className="ml-6 list-decimal space-y-2 text-muted-foreground">
            <li>Đảm bảo game đã được mở và đăng nhập</li>
            <li>Chọn tính năng tự động muốn sử dụng</li>
            <li>Nhấn nút "Bắt đầu"</li>
            <li>Theo dõi log để kiểm tra hoạt động</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

