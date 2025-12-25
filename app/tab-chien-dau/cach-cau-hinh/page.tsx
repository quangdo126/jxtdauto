import Image from "next/image"

export default function TabChienDauCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Tab Chiến đấu</h1>
          
          <div className="space-y-6">
            <div className="mb-6">
              <Image
                src="/chien-dau/ui.png"
                alt="Giao diện Tab Chiến đấu"
                width={800}
                height={600}
                quality={100}
                unoptimized
                className="rounded-lg"
              />
            </div>

            <p className="mb-4 text-muted-foreground">
              Khác với tab Phục hồi là tự động sử dụng các kỹ năng hỗ trợ (bị động), ở đây auto sẽ tự sử dụng những kỹ năng chủ động để chiến đấu.
            </p>

            <p className="mb-4 text-muted-foreground">
              Chọn kỹ năng cần sử dụng từ dropdown menu rồi click chọn dấu cộng màu xanh để thêm vào danh sách tự sử dụng.
            </p>

            <p className="mb-4 text-muted-foreground">
              Chuột phải vào kỹ năng để tuỳ chỉnh nâng cao, có rất nhiều cách để bạn có thể tạo ra combo khi chiến đấu, ví dụ sử dụng <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Đoạn Hồn Thích</code> trước khi sử dụng <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Truy Phong Quyết</code>, hoặc đánh chuyển đổi luân phiên để luyện 2 kỹ năng thấp và kỹ năng cao một lúc, hoặc cũng có thể sử dụng kỹ năng cụ thể chỉ để đánh boss còn với quái thường thì sử dụng kỹ năng khác. Các bạn có thể tự mày mò tìm hiểu trong quá trình sử dụng auto hoặc tag các thành viên trong{" "}
              <a
                href="https://zalo.me/g/ohldlf051"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                nhóm Zalo
              </a>{" "}
              để được hỗ trợ tận tình, đưa hình đưa thông số và bạn chỉ việc chỉnh theo là được.
            </p>

            <div className="mb-6">
              <Image
                src="/chien-dau/dht.png"
                alt="Ví dụ cấu hình kỹ năng chiến đấu"
                width={800}
                height={600}
                quality={100}
                unoptimized
                className="rounded-lg"
              />
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
