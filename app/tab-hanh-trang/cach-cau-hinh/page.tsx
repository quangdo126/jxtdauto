import Image from "next/image"

export default function TabHanhTrangCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Tab Hành trang</h1>
          
          <div className="space-y-6">
            <div className="mb-6">
              <Image
                src="/hanh-trang/ui.png"
                alt="Giao diện Tab Hành trang"
                width={800}
                height={600}
                quality={100}
                unoptimized
                className="rounded-lg"
              />
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Vật phẩm:</h2>
              <ul className="ml-6 list-disc space-y-4 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Mua thuốc:</strong> cấu hình để mua thuốc tự động khi nhân vật về thành. Chọn vật phẩm cần mua trong dropdown menu rồi click chọn dấu cộng màu xanh để thêm vào danh sách mua tự động.
                  <div className="mt-2">
                    <Image
                      src="/hanh-trang/mua-thuoc.png"
                      alt="Ví dụ cấu hình mua thuốc"
                      width={800}
                      height={600}
                      quality={100}
                      unoptimized
                      className="rounded-lg"
                    />
                  </div>
                </li>
                <li>
                  <strong className="text-foreground">Mua tạp hoá:</strong> cấu hình để mua <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Thổ Địa Phù</code> tự động khi nhân vật về thành. Chọn <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Thổ Địa Phù</code> trong dropdown menu rồi click chọn dấu cộng màu xanh để thêm vào danh sách mua tự động.
                  <div className="mt-2">
                    <Image
                      src="/hanh-trang/mua-tdp.png"
                      alt="Ví dụ cấu hình mua Thổ Địa Phù"
                      width={800}
                      height={600}
                      quality={100}
                      unoptimized
                      className="rounded-lg"
                    />
                  </div>
                </li>
                <li>
                  <strong className="text-foreground">Tự sử dụng:</strong> cấu hình để nhân vật tự sử dụng vật phẩm theo các điều kiện được quy định. Ví dụ: chỉ sử dụng Tiên Thảo Lộ khi đang luyện công hoặc chỉ sử dụng Ngọc Lộ Hoàn khi đi làm nhiệm vụ. Chọn vật phẩm cần sử dụng tự động trong dropdown menu rồi click chọn dấu cộng màu xanh để thêm vào danh sách sử dụng tự động.
                  <div className="mt-2">
                    <Image
                      src="/hanh-trang/tu-su-dung.png"
                      alt="Ví dụ cấu hình tự sử dụng vật phẩm"
                      width={800}
                      height={600}
                      quality={100}
                      unoptimized
                      className="rounded-lg"
                    />
                  </div>
                </li>
                <li>
                  <strong className="text-foreground">Bán trang bị:</strong> chức năng đang được phát triển.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Hành trang:</h2>
              <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Mở rương:</strong> tự động mở khoá rương nếu bạn có đặt mật khẩu rương, điền mật khẩu vào ô nhập số bên cạnh.
                </li>
                <li>
                  <strong className="text-foreground">Rút tiền:</strong> số tiền mà nhân vật sẽ rút để phục vụ cho các tác vụ mua thuốc, mua Thổ Địa Phù, sửa chữa trang bị. Lưu ý phải cấu hình số tiền cao một chút nếu không đủ tiền để thực hiện tác vụ nhân vật sẽ đứng luôn tại chỗ NPC.
                </li>
                <li>
                  <strong className="text-foreground">Sửa trang bị:</strong> tự động sửa chữa trang bị khi về thành.
                </li>
                <li>
                  <strong className="text-foreground">Sửa trên bãi:</strong> tự động sửa chữa trang bị khi độ bền còn lại bằng với mức bạn quy định trong ô nhập số bên cạnh (đây là sửa trang bị từ xa khi không ở thành, có thể sử dụng phím tắt <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Shift + Z</code> để sửa từ xa khi bạn muốn).
                </li>
                <li>
                  <strong className="text-foreground">Sửa trang bị Hoàng Kim:</strong> tự động sửa chữa trang bị Hoàng Kim nếu đủ nguyên liệu.
                </li>
                <li>
                  <strong className="text-foreground">Khoá trang bị:</strong>
                </li>
                <li>
                  <strong className="text-foreground">Sắp xếp hành trang:</strong> tự động sắp xếp hành trang theo thứ tự từ trái qua phải, từ trên xuống dưới.
                </li>
                <li>
                  <strong className="text-foreground">Cất vật phẩm:</strong> tự động cất những vật phẩm được quy định vào rương chứa đồ.
                  <div className="mt-2">
                    <Image
                      src="/hanh-trang/cat-vat-pham.png"
                      alt="Ví dụ cấu hình cất vật phẩm"
                      width={800}
                      height={600}
                      quality={100}
                      unoptimized
                      className="rounded-lg"
                    />
                  </div>
                </li>
                <li>
                  <strong className="text-foreground">Rèn:</strong> tự động rèn trang bị (có thể rèn từ xa khi không ở thành).
                </li>
                <li>
                  <strong className="text-foreground">Rèn trang bị khoá:</strong> tuỳ chỉnh trang bị được rèn ra là khoá hay không khoá.
                </li>
                <li>
                  <strong className="text-foreground">Ghép sổ tay rèn:</strong> tự động ghép sổ tay rèn khi đủ mảnh trang bị.
                </li>
                <li>
                  <strong className="text-foreground">Ghép quà thần bí:</strong> tự động ghép quà thần bí đến cấp bạn quy định trong ô nhập số bên cạnh. Ví dụ bạn điền <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">3</code> vào ô này thì auto sẽ tự động ghép quà thần bí lên cấp 3.
                </li>
                <li>
                  <strong className="text-foreground">Ghép huyền tinh:</strong> tự động ghép huyền tinh đến cấp bạn quy định trong ô nhập số bên cạnh. Ví dụ bạn điền <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">3</code> vào ô này thì auto sẽ tự động ghép huyền tinh lên cấp 3.
                </li>
                <li>
                  <strong className="text-foreground">Gửi tiền:</strong> số tiền mà nhân vật sẽ đem theo khi lên bãi luyện công.
                </li>
                <li>
                  <strong className="text-foreground">Bản đồ mua thuốc (bản đồ lưu rương):</strong> chọn nơi để lưu rương, hiện tại bạn có thể lưu rương tại các thành thị, thôn trang và 7 đảo tẩy tuỷ.
                </li>
              </ul>
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
