export default function GiaoDienPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Giao diện chính</h1>
          <p className="mb-4 text-muted-foreground">
            Giao diện chính của <strong>jxtdAuto</strong> được thiết kế trực quan và
            dễ sử dụng, tương thích với game <strong>Võ Lâm Truyền Kỳ 2.0</strong>.
          </p>
          <h2 className="mb-4 text-2xl font-semibold">Các thành phần chính</h2>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>Thanh menu: Chứa các tùy chọn chính</li>
            <li>Khu vực hiển thị: Hiển thị trạng thái game Võ Lâm Truyền Kỳ 2.0</li>
            <li>Bảng điều khiển: Điều khiển các tính năng tự động</li>
            <li>Log: Hiển thị thông tin hoạt động</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

