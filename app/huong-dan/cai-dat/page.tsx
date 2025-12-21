export default function CaiDatPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Cài đặt</h1>
          
          <div className="space-y-6">
            <ol className="ml-6 list-decimal space-y-4 text-muted-foreground">
                <li>
                  <p className="font-medium text-foreground">Tải WinRAR hoặc 7-Zip</p>
                  <p>Tải một trong hai phần mềm giải nén file để sử dụng giải nén file auto.</p>
                </li>
                <li>
                  <p className="font-medium text-foreground">Giải nén file auto</p>
                  <p>Chuột phải lên file auto và chọn "Extract here" để giải nén.</p>
                </li>
                <li>
                  <p className="font-medium text-foreground">Chạy auto</p>
                  <p>Double click lên file <code className="rounded bg-muted px-1.5 py-0.5 text-sm">jxtdAuto.exe</code> để chạy auto. Chọn "Yes" nếu được hỏi.</p>
                </li>
              </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
