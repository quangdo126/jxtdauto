import Image from "next/image"
import Link from "next/link"

export default function SandboxieProxyCachCauHinhPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-4 text-2xl font-bold">Sandboxie & Proxy</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Công dụng của Sandboxie và Proxy</h2>
              <p className="mb-4 text-muted-foreground">
                Mặc định game giới hạn 8 cửa sổ mỗi HWID/IP, sử dụng Sandboxie và Proxy bạn có thể bypass được giới hạn này để chạy nhiều hơn 8 cửa sổ mỗi máy tính. Nếu bạn cấu hình đúng thì sẽ không có vấn đề gì xảy ra khi sử dụng.
              </p>
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
                    <strong>Lưu ý:</strong> Đây chỉ là hướng dẫn sử dụng, mình sẽ không chịu bất kỳ trách nhiệm nào đối với tài khoản của các bạn trong trường hợp tài khoản bị khoá do sử dụng proxy kém chất lượng.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Những thứ cần chuẩn bị</h2>
              <ul className="ml-6 list-disc space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Cài đặt Sandboxie Plus:</strong>{" "}
                  <a
                    href="https://github.com/sandboxie-plus/Sandboxie/releases/download/v1.16.8/Sandboxie-Plus-x64-v1.16.8.exe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Link tải
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Proxy SOCKS5 Datacenter:</strong> Nên sử dụng proxy datacenter thay vì proxy dân cư để tránh tình trạng bị nhảy IP thường xuyên. Nếu có điều kiện hãy thuê proxy private hoặc share ít người sử dụng để đảm bảo không gặp lỗi trong quá trình đăng nhập.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Có 2 cách để bypass giới hạn cửa sổ với Sandboxie</h2>
              
              <div className="mt-6 space-y-8">
                {/* Cách 1 */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Cách 1: Tốn phí</h3>
                  <p className="mb-4 text-muted-foreground">
                    Với cách dùng này bạn sẽ đăng ký gói Advanced của Sandboxie với giá $7/tháng để mở khoá tính năng tích hợp proxy thẳng vào trong sandbox, rất tiện và ít lỗi vặt vì là tính năng chính chủ của Sandboxie.
                  </p>

                  <div className="mb-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/20">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Có mẹo để sử dụng key gói Advanced với thời hạn 3 tháng thay vì 1 tháng, nghĩa là bạn chỉ cần bỏ ra khoảng $2/tháng để sử dụng tính năng này thay vì $7. Tuy nhiên mình sẽ không chia sẻ công khai trên hướng dẫn để tránh việc bị patch. Các bạn có thể nhắn mình trong{" "}
                          <a
                            href="https://zalo.me/g/ohldlf051"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-blue-800 underline dark:text-blue-400"
                          >
                            group Zalo
                          </a>{" "}
                          của jxtdAuto để mình hướng dẫn thêm.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 text-base font-semibold">Bước 1: Tạo sandbox mới</h4>
                      <div className="mb-4">
                        <Image
                          src="/sandboxie/create-sandbox.png"
                          alt="Tạo sandbox mới"
                          width={800}
                          height={600}
                          quality={100}
                          unoptimized
                          className="rounded-lg"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        Mở Sandboxie lên và chọn như hình ở trên để tạo 1 sandbox mới, tiếp tục nhấn Next cho đến khi xong.
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-3 text-base font-semibold">Bước 2: Cấu hình cho sandbox</h4>
                      <div className="mb-4">
                        <Image
                          src="/sandboxie/config.png"
                          alt="Cấu hình sandbox"
                          width={800}
                          height={600}
                          quality={100}
                          unoptimized
                          className="rounded-lg"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        Double click vào sandbox bạn vừa tạo để mở cửa sổ cài đặt, sau đó đi đến <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Access Isolation</code> và tick chọn hết 4 mục như hình minh hoạ.
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-3 text-base font-semibold">Bước 3: Thêm proxy vào sandbox</h4>
                      <div className="mb-4">
                        <Image
                          src="/sandboxie/add-proxy.png"
                          alt="Thêm proxy vào sandbox"
                          width={800}
                          height={600}
                          quality={100}
                          unoptimized
                          className="rounded-lg"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        Tiếp tục tại cửa sổ cài đặt, chúng ta đi đến phần <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Network Options</code> để thêm proxy vào sandbox, thao tác như hình minh hoạ.
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-3 text-base font-semibold">Bước 4: Kiểm tra xem proxy có hoạt động hay không</h4>
                      <div className="mb-4">
                        <Image
                          src="/sandboxie/test.png"
                          alt="Kiểm tra proxy"
                          width={800}
                          height={600}
                          quality={100}
                          unoptimized
                          className="rounded-lg"
                        />
                      </div>
                      <p className="mb-4 text-muted-foreground">
                        Thao tác như hình để bắt đầu kiểm tra proxy, nếu kết quả hiển thị như hình bên dưới là đã thêm proxy thành công.
                      </p>
                      <div className="mb-4">
                        <Image
                          src="/sandboxie/success.png"
                          alt="Kết quả kiểm tra proxy thành công"
                          width={800}
                          height={600}
                          quality={100}
                          unoptimized
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 text-base font-semibold">Bước 5: Cấu hình jxtdAuto để mở cửa sổ game qua sandbox vừa tạo</h4>
                      <div className="mb-4">
                        <Image
                          src="/sandboxie/gear.png"
                          alt="Biểu tượng bánh răng"
                          width={800}
                          height={600}
                          quality={100}
                          unoptimized
                          className="rounded-lg"
                        />
                      </div>
                      <p className="mb-4 text-muted-foreground">
                        Click chọn biểu tượng bánh răng trên auto để thêm đường dẫn đến file <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Start.exe</code> trong thư mục mà bạn đã cài đặt Sandboxie.
                      </p>
                      <div className="mb-4">
                        <Image
                          src="/sandboxie/auto-config.png"
                          alt="Cấu hình auto"
                          width={800}
                          height={600}
                          quality={100}
                          unoptimized
                          className="rounded-lg"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        Ở tab <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Đăng nhập</code>, nhập tên của sandbox mà bạn đã tạo ở trên vào auto để auto biết được bạn muốn mở cửa sổ này trong sandbox nào trong trường hợp bạn có nhiều sandbox, nếu chỉ sử dụng 1 sandbox duy nhất thì có thể bỏ qua bước nhập tên này, sau đó click chọn <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Áp dụng</code> để auto lưu lại thay đổi.
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-muted-foreground">
                    Như vậy là đã hoàn thành việc cấu hình Sandboxie cho jxtdAuto theo cách 1. Từ giờ bạn có thể click chuột phải vào bảng nhân vật trong auto và chọn <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">Đăng nhập</code> để auto tự động mở cửa sổ game trong sandbox.
                  </p>
                </div>

                {/* Cách 2 */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Cách 2: Không tốn phí</h3>
                  <p className="mb-4 text-muted-foreground">
                    Với cách dùng này bạn có thể sử dụng các phần mềm quản lý việc gán proxy sẵn có được chia sẻ rộng rãi trên internet. Lưu ý các phần mềm này đều sử dụng phần mềm nền là Proxifier để gán proxy, tuy nhiên chúng sẽ giúp bạn gán proxy cho từng PID thay vì chỉ theo tên file exe. Nếu bạn thêm profile thủ công vào Proxifier thì đây gần như là bất khả thi vì cần kiểm tra PID của từng cửa sổ riêng biệt và mỗi lần mở lại cửa sổ mới lại phải lấy lại PID mới, rất mất thời gian.
                  </p>

                  <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/20">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Sẽ có hướng dẫn trong thời gian sớm nhất.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
