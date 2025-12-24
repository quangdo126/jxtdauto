import Image from "next/image"
import Link from "next/link"

export default function TabCoBanCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Tab Cơ bản - Cách cấu hình</h1>
          
          <div className="space-y-6">
            <div>
              <p className="mb-4 text-muted-foreground">
                Đây là nơi hiển thị tiến trình thực hiện các nhiệm vụ của bạn.
              </p>
              <Image
                src="/co-ban/thong-tin.png"
                alt="Giao diện Tab Cơ bản"
                width={800}
                height={600}
                quality={100}
                unoptimized
                className="rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-xl font-semibold">Cột bên trái: Auto PK</h2>
                <div className="mb-6">
                  <Image
                    src="/co-ban/tinh-nang.png"
                    alt="Tính năng Tab Cơ bản"
                    width={800}
                    height={600}
                    quality={100}
                    unoptimized
                    className="rounded-lg"
                  />
                </div>
                <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Auto PK:</strong> dùng để kích hoạt chức năng auto PK, chức năng auto PK sẽ có ưu tiên cao hơn chức năng luyện công, nghĩa là nếu cả 2 chức năng cùng được kích hoạt, auto sẽ thực hiện chức năng auto PK thay vì luyện công.
                  </li>
                  <li>
                    <strong className="text-foreground">Tự đánh:</strong> dùng để kích hoạt tính năng tự đánh trong auto PK, ô kế bên dùng để nhập vào bán kính quét mục tiêu xung quanh nhân vật.
                  </li>
                  <li>
                    <strong className="text-foreground">Không đuổi theo:</strong> trong trường hợp bạn không muốn auto đuổi theo đối thủ để đánh thì có thể kích hoạt chức năng này để tự di chuyển nhân vật theo ý muốn của bản thân, auto sẽ tự đánh khi đối thủ vào trong tầm đánh.
                  </li>
                  <li>
                    <strong className="text-foreground">Bỏ quái thường:</strong> dùng để bỏ qua quái trong khi PK, tránh đánh nhầm mục tiêu và tập trung vào người chơi khác.
                  </li>
                  <li>
                    <strong className="text-foreground">Tự động tổ đội:</strong> dùng để tự lập đội với các tài khoản khác trong chế độ auto PK. Cấu hình tổ đội sẽ được điều chỉnh trong{" "}
                    <Link href="/tab-to-doi/cach-cau-hinh" className="text-primary hover:underline">
                      tab Tổ đội
                    </Link>.
                  </li>
                  <li>
                    <strong className="text-foreground">Nhặt vật phẩm:</strong> dùng để kích hoạt chức năng nhặt vật phẩm tự động, bạn có thể click vào icon tờ giấy kế bên để tuỳ chỉnh nâng cao cho việc nhặt tự động như tự động lọc vật phẩm, tự động rã vật phẩm, tự động giữ lại vật phẩm có option tốt.
                  </li>
                  <li>
                    <strong className="text-foreground">Tự theo sau:</strong> dùng để kéo xe. Lưu ý khi đi Tống Kim hoặc các hoạt động PK khác bằng acc chính thì bỏ chọn chức năng này để tránh trường hợp nhân vật tự theo sau đội trưởng sẽ quay về lại bãi luyện công.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-xl font-semibold">Cột bên phải: các tác vụ chính của auto</h2>
                <p className="mb-4 text-muted-foreground">
                  Đây là nơi bạn có thể tick chọn để kích hoạt tác vụ tương ứng. Các tác vụ có thể di chuyển lên xuống để thay đổi thứ tự ưu tiên (nên di chuyển Luyện công xuống dưới cùng, ví dụ các bạn có thể luôn kích hoạt Luyện công, sau đó kích hoạt NV Môn phái thì sau khi hoàn thành đủ 10 nhiệm vụ môn phái, auto sẽ tự động quay trở lại bãi luyện công).
                </p>
                <p className="mb-4 text-muted-foreground">
                  Tác vụ <strong className="text-foreground">Năng Động:</strong> auto sẽ làm 1 nhiệm vụ môn phái, nhiệm vụ hàng ngày và 1 nhiệm vụ Mặc Thạch để lấy đủ 25 điểm năng động.
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/20">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-400">
                      Lưu ý
                    </h3>
                    <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                      Các bạn có thể click chuột phải vào các tác vụ <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-mono dark:bg-blue-900/50">NV Hàng ngày</code>, <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-mono dark:bg-blue-900/50">NV Mặc Thạch</code> để tuỳ chỉnh nâng cao cho việc tự động mua vật phẩm nhiệm vụ.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-xl font-semibold">Tính năng lọc đồ</h2>
                <div className="mb-6">
                  <Image
                    src="/co-ban/loc-do.png"
                    alt="Tính năng lọc đồ"
                    width={800}
                    height={600}
                    quality={100}
                    unoptimized
                    className="rounded-lg"
                  />
                </div>
                <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Ưu tiên nhặt:</strong> tick chọn để ưu tiên nhặt.
                  </li>
                  <li>
                    <strong className="text-foreground">Phạm vi:</strong> điều chỉnh phạm vị tự nhặt.
                  </li>
                  <li>
                    <strong className="text-foreground">Tuỳ chọn vật phẩm nhặt:</strong> có thể nhặt tất cả, chỉ nhặt ngân lượng, chỉ nhặt đạo cụ hoặc vũ khí cụ thể...
                  </li>
                  <li>
                    <strong className="text-foreground">Lọc kết hợp:</strong> dùng để lọc nâng cao để giữ lại những vật phẩm CÓ ĐẦY ĐỦ những thuộc tính được chọn, ví dụ Vũ khí <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Chuỳ</code> số dòng và Hút sinh lực (+%) sẽ chỉ giữ lại chuỳ hút sinh lực, các vũ khí khác có dòng hút sinh lực cũng sẽ bị lọc nếu bạn không chọn thuộc tính hút sinh lực ở bảng bên phải. Lưu ý điều này nếu bạn không muốn auto lọc mất những vật phẩm bạn mong muốn, hoặc đơn giản hơn có thể bỏ qua mục Lọc kết hợp này, chỉ cần sử dụng bảng thuộc tính bên phải là được nếu bạn không chắc chắn rằng mình đang làm gì.
                  </li>
                  <li>
                    <strong className="text-foreground">Vật phẩm đen:</strong> dùng để bỏ qua những vật phẩm được chọn, ví dụ không nhặt Khoáng thạch huyền tinh. Lưu ý để lấy được ID của vật phẩm đen, các bạn cần vất vật phẩm xuống đất trước thì auto mới lấy được ID.
                  </li>
                  <li>
                    <strong className="text-foreground">Lọc trang bị:</strong> dùng để lọc vật phẩm trong rương đạo cụ (<code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">F4</code>).
                  </li>
                  <li>
                    <strong className="text-foreground">Lọc túi hành trang:</strong> dùng để lọc vật phẩm trong túi hành trang (<code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Ctrl + V</code>).
                  </li>
                  <li>
                    <strong className="text-foreground">Không nhặt đồ người khác:</strong> bỏ qua vật phẩm thuộc về người chơi khác, auto sẽ thử nhặt 1 lần trước để kiểm tra, sau đó sẽ bỏ qua vật phẩm này trong những lần sau đi ngang qua.
                  </li>
                  <li>
                    <strong className="text-foreground">Xử lý trang bị không đạt điều kiện:</strong> dùng để tuỳ chỉnh hành động đối với các vật phẩm không đạt điều kiện, bạn có thể chọn Giữ lại, Vứt bỏ hoặc Rã những vật phẩm này.
                  </li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Các bạn có thể save và load file lọc đồ bằng các nút ngoài cùng bên phải. Sau khi cấu hình xong click <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">OK</code> rồi click <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Áp dụng</code>.
                </p>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950/20">
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
