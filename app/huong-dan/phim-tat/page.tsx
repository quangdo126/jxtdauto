export default function PhimTatPage() {
  const shortcuts = [
    { keys: "Shift + F1", description: "Hiện bảng phím tắt" },
    { keys: "Ctrl + A", description: "Bật/tắt nhặt vật phẩm" },
    { keys: "Ctrl + D", description: "Chuyển đổi nhanh chế độ đồ sát/chiến đấu" },
    { keys: "Ctrl + E", description: "Bật/tắt tự động theo sau" },
    { keys: "Ctrl + F", description: "Bật/tắt tự động đánh" },
    { keys: "Ctrl + N", description: "Bật/tắt bỏ quái thường" },
    { keys: "Ctrl + P", description: "Bật/tắt auto PK" },
    { keys: "Ctrl + R", description: "Lưu điểm hồi thành" },
    { keys: "Ctrl + S", description: "Chuyển phe (đổi màu) tổ đội" },
    { keys: "Ctrl + X", description: "Rút tiền nhanh trong thành (chỉ hoạt động trong thành)" },
    { keys: "Ctrl + Z", description: "Mở rương đồ (hoạt động ở mọi nơi)" },
    { keys: "Ctrl + Space/Pause", description: "Tạm dừng auto" },
  ]

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Phím tắt</h1>
          
          <div className="space-y-3">
            {shortcuts.map((shortcut, index) => (
              <div key={index} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <kbd className="inline-flex min-w-[140px] items-center justify-center rounded border bg-muted px-3 py-1.5 font-mono text-sm font-semibold text-foreground">
                  {shortcut.keys}
                </kbd>
                <span className="text-muted-foreground">{shortcut.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

