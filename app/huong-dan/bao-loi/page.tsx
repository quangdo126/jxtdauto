export default function BaoLoiPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Báo lỗi</h1>
          <p className="mb-4 text-muted-foreground">
            Nếu bạn gặp lỗi khi sử dụng phần mềm, vui lòng báo lỗi cho chúng
            tôi qua các kênh sau:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>Nhóm Zalo: <a href="https://zalo.me/g/ohldlf051" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tham gia nhóm</a></li>
            <li>Facebook: <a href="https://www.facebook.com/kvtAuto" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Trang Facebook</a></li>
          </ul>
          <h2 className="mb-4 mt-8 text-2xl font-semibold">
            Thông tin cần cung cấp
          </h2>
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            <li>Mô tả chi tiết lỗi.</li>
            <li>Ảnh chụp hoặc video quay màn hình.</li>
            <li>File log (nếu có).</li>
            <li>Phiên bản phần mềm.</li>
            <li>Hệ điều hành.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

