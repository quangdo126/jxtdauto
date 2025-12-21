export default function TuyChinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Tùy chỉnh nâng cao</h1>
          <p className="mb-4 text-muted-foreground">
            Phần tùy chỉnh nâng cao cho phép bạn điều chỉnh các thông số chi
            tiết của phần mềm.
          </p>
          <h2 className="mb-4 text-2xl font-semibold">Các tùy chọn</h2>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>Tùy chỉnh AI nhận diện</li>
            <li>Điều chỉnh tốc độ thực thi</li>
            <li>Cấu hình nâng cao cho từng tính năng</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

