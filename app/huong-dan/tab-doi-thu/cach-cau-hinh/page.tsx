import Image from "next/image"

export default function TabDoiThuCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Tab Đối thủ - Cách cấu hình</h1>
          
          <div className="space-y-6">
            <div className="mb-6">
              <Image
                src="/doi-thu/ui.png"
                alt="Giao diện Tab Đối thủ"
                width={800}
                height={600}
                quality={100}
                unoptimized
                className="rounded-lg"
              />
            </div>

            <ul className="ml-6 list-disc space-y-4 text-muted-foreground">
              <li>
                <strong className="text-foreground">Ưu tiên theo:</strong> cấu hình để auto tự lựa chọn mục tiêu để đánh trước, bên trên sẽ có ưu tiên cao hơn bên dưới. Nên đưa Người chơi lên vị trí cao nhất để tiện cho việc PK.
              </li>
              <li>
                <strong className="text-foreground">Môn phái:</strong> cấu hình để auto tự lựa chọn mục tiêu để đánh trước theo môn phái, bên trên sẽ có ưu tiên cao hơn bên dưới.
              </li>
              <li>
                <strong className="text-foreground">Danh sách đen:</strong> thêm người chơi hoặc quái vào danh sách bỏ qua, auto sẽ không chọn những mục tiêu này để đánh. Chọn mục tiêu cần thêm từ dropdown menu rồi click chọn dấu cộng màu xanh để thêm vào danh sách bỏ qua.
                <div className="mt-2">
                  <Image
                    src="/doi-thu/blacklist.png"
                    alt="Ví dụ cấu hình danh sách đen"
                    width={800}
                    height={600}
                    quality={100}
                    unoptimized
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li>
                <strong className="text-foreground">Bỏ qua bùa chú:</strong> cấu hình để auto bỏ qua những mục tiêu đang bị dính những bùa chú được quy định, mục đích để sử dụng bùa lên toàn bộ những mục tiêu trong phạm vị tìm đánh thay vì sử dụng liên tục bùa lên một mục tiêu duy nhất.
                <div className="mt-2">
                  <Image
                    src="/doi-thu/bua.png"
                    alt="Ví dụ cấu hình bỏ qua bùa chú"
                    width={800}
                    height={600}
                    quality={100}
                    unoptimized
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li>
                <strong className="text-foreground">Bỏ qua bang hội:</strong> cấu hình để auto bỏ qua toàn bộ thành viên trong bang hội được quy định.
              </li>
              <li>
                <strong className="text-foreground">Bỏ quái phản đòn:</strong> cấu hình để auto bỏ qua quái phản đòn.
              </li>
              <li>
                <strong className="text-foreground">Bỏ quái lag:</strong> cấu hình để auto tự bỏ qua mục tiêu bị lag, nhập số giây vào ô nhập số bên cạnh để tự bỏ qua mục tiêu sau thời gian đó. Ví dụ chúng ta chỉnh thời gian là <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">3 giây</code>, Thiên Vương Chuỳ lướt vào mục tiêu đang đứng sát tường sẽ đánh hụt, auto sẽ tự nhận diện mục tiêu đang được chọn không mất máu sau 3 giây thì bỏ qua mục tiêu này và tấn công mục tiêu tiếp theo.
              </li>
              <li>
                <strong className="text-foreground">Đánh đến chết:</strong>
              </li>
              <li>
                <strong className="text-foreground">Theo đội trưởng:</strong> cấu hình để nhân vật chọn và tấn công mục tiêu theo đội trưởng, nghĩa là cả 2 sẽ cùng tấn công chung 1 mục tiêu, phù hợp cho việc auto PK cả tổ đội.
              </li>
              <li>
                <strong className="text-foreground">Bỏ qua Boss:</strong> cấu hình để auto bỏ qua những mục tiêu là boss.
              </li>
              <li>
                <strong className="text-foreground">Bỏ quái khuất:</strong>
              </li>
              <li>
                <strong className="text-foreground">Giữ khoảng cách:</strong> cấu hình để auto tự động giữ khoảng cách giữa nhân vật và mục tiêu được quy định với khoảng cách nhỏ nhất và lớn nhất được nhập vào 2 ô nhập số bên cạnh, rất phù hợp cho những phái tay dài PK thả diều cấu rỉa (hit & run).
              </li>
            </ul>

            <div className="mt-6 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950/20">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800 dark:text-yellow-300">
                    <strong>Lưu ý:</strong> Luôn luôn click chọn <code className="rounded bg-yellow-100 px-1.5 py-0.5 text-sm font-mono dark:bg-yellow-900/50">Áp dụng</code> sau khi thay đổi bất cứ mục nào để auto nhận diện được thay đổi mới, nếu không bạn sẽ phải thay đổi lại mục đó từ đầu!
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
