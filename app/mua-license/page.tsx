import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

const plans = [
  {
    name: "Cơ bản",
    hwid3m: "xxx,000",
    hwid6m: "xxx,000",
    banghoi3m: "x.xxx.000",
    banghoi6m: "x.xxx.000",
    features: [
      "Đầy đủ mọi chức năng",
      "24 cửa sổ game",
    ],
    popular: false,
  },
  {
    name: "Nâng cao",
    hwid3m: "xxx,000",
    hwid6m: "xxx,000",
    banghoi3m: "x.xxx.000",
    banghoi6m: "x.xxx.000",
    features: [
      "Đầy đủ mọi chức năng",
      "48 cửa sổ game",
    ],
    popular: true,
  },
  {
    name: "Máy cày",
    hwid3m: "xxx,000",
    hwid6m: "xxx,000",
    banghoi3m: "x.xxx.000",
    banghoi6m: "x.xxx.000",
    features: [
      "Đầy đủ mọi chức năng",
      "Không giới hạn cửa sổ game",
    ],
    popular: false,
  },
]

const addonPrice = "xx,000"

export default function MuaLicensePage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Chọn gói license cho jxtdAuto</h1>
          <p className="text-lg text-muted-foreground">
            Các gói license được thiết kế để đáp ứng mọi nhu cầu của người chơi <strong>Võ Lâm Truyền Kỳ 2.0</strong>
          </p>
        </div>

        <div className="mb-8 rounded-lg border-2 border-primary bg-blue-50 dark:bg-primary/10 p-6 text-center">
          <p className="text-lg font-semibold text-blue-900 dark:text-foreground">
            Auto đang trong giai đoạn thử nghiệm, phát triển tính năng, bạn có thể sử dụng miễn phí auto cho đến khi có thông báo mới nhất về việc thu phí 😊
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 opacity-50 pointer-events-none">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border p-8 ${
                plan.popular
                  ? "border-primary shadow-lg ring-2 ring-primary"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    Phổ biến nhất
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="mb-1 font-semibold text-muted-foreground">
                      Giá theo HWID:
                    </p>
                    <p className="text-foreground">
                      {plan.hwid3m} / 3 tháng
                    </p>
                    <p className="text-foreground">
                      {plan.hwid6m} / 6 tháng
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-muted-foreground">
                      Giá theo bang hội:
                    </p>
                    <p className="text-foreground">
                      {plan.banghoi3m} / 3 tháng
                    </p>
                    <p className="text-foreground">
                      {plan.banghoi6m} / 6 tháng
                    </p>
                  </div>
                </div>
              </div>
              <ul className="mb-4 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-4 rounded-md border border-dashed p-3">
                <p className="mb-1 text-xs font-semibold text-muted-foreground">
                  Add-on:
                </p>
                <p className="text-sm">
                  Bảo vệ cừu sát:
                </p>
                <p className="text-sm">
                  <strong>{addonPrice} / tháng</strong>
                </p>
              </div>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                Mua ngay
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-muted/50 p-8">
          <h2 className="mb-6 text-2xl font-bold">Đăng ký trực tiếp</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                1. Lấy thông tin đăng ký
              </h3>
              <p className="text-muted-foreground">
                Hướng dẫn lấy thông tin đăng ký - Sẽ cập nhật sau khi bắt đầu thu phí auto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                2. Chuyển tiền vào tài khoản sau:
              </h3>
              <div className="rounded-md bg-background p-4">
                <p className="mb-2 font-medium">Ngân hàng Vietcombank (CN Đồng Nai)</p>
                <p className="mb-1 text-muted-foreground">
                  Chủ TK: <strong>Hoàng Linh</strong>
                </p>
                <p className="mb-4 text-muted-foreground">
                  Số TK: <strong>0481 000 653 312</strong>
                </p>
                <div className="flex">
                  <Image
                    src="/qr-code.png"
                    alt="QR Code chuyển khoản"
                    width={200}
                    height={200}
                    className="rounded-lg border"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                3. Gửi email về địa chỉ{" "}
                <a
                  href="mailto:wjxtdauto@gmail.com"
                  className="text-primary hover:underline"
                >
                  wjxtdauto@gmail.com
                </a>
                , đính kèm theo file reginfo.txt với nội dung như sau:
              </h3>
              <div className="rounded-md bg-background p-4 font-mono text-sm">
                <p>Loại auto: jxtdAuto</p>
                <p>Loại license: (Nhân vật, ổ cứng, tộc, bang hội)</p>
                <p>Thời hạn muốn mua: (6 tháng, 12 tháng)</p>
                <p>
                  Số tài khoản người chuyển: (nếu chuyển trực tiếp thì thay bằng
                  họ tên người chuyển tiền, nếu chuyển online thì thay bằng số
                  lệnh giao dịch, số bút toán...)
                </p>
                <p>Số tài khoản người nhận:</p>
                <p>Số tiền:</p>
                <p>Ngày giờ chuyển tiền:</p>
                <p>Ngân hàng - Chi nhánh - P. Giao dịch:</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                4. Nhận và kích hoạt license
              </h3>
              <p className="text-muted-foreground">
                Sau khi mọi thủ tục hoàn tất, bạn sẽ nhận được email đính kèm
                theo file license, ứng với mã đăng ký của bạn, tại địa chỉ email
                bạn đã dùng để gửi thông tin đăng ký.
              </p>
              <p className="mt-2 text-muted-foreground">
                Tải file license đính kèm theo email, copy vào folder{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
                  licenses
                </code>{""}
                , thoát auto (nếu đang chạy) và chạy lại.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

