import { Button } from "@/components/ui/button"
import { Facebook, MessageCircle, Fan, Home } from "lucide-react"

export default function LienHePage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Liên hệ với chúng tôi</h1>
          <p className="text-lg text-muted-foreground">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ qua các kênh sau
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Trang chủ</h3>
            </div>
            <p className="mb-4 text-muted-foreground">
              Truy cập trang chủ chính thức của jxtdAuto
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://www.wjxtdauto.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Truy cập trang chủ
              </a>
            </Button>
          </div>

          <div className="rounded-lg border p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Nhóm Zalo</h3>
            </div>
            <p className="mb-4 text-muted-foreground">
              Tham gia nhóm Zalo để được hỗ trợ và trao đổi với cộng đồng
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://zalo.me/g/ohldlf051"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tham gia nhóm Zalo
              </a>
            </Button>
          </div>

          <div className="rounded-lg border p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Facebook className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Facebook</h3>
            </div>
            <p className="mb-4 text-muted-foreground">
              Theo dõi và tương tác với chúng tôi trên Facebook
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://www.facebook.com/kvtAuto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Truy cập Facebook
              </a>
            </Button>
          </div>

          <div className="rounded-lg border p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Fan className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">OnlyFans</h3>
            </div>
            <p className="mb-4 text-muted-foreground">
              Theo dõi và nhận các nội dung độc quyền trên OnlyFans của sếp Linh
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://www.youtube.com/watch?v=oHg5SJYRHA0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Truy cập OnlyFans
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 rounded-lg border bg-muted/50 p-8">
          <h2 className="mb-4 text-2xl font-bold">Thời gian hỗ trợ: 24/7</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Các thành viên trong nhóm Zalo sẽ giúp bạn giải quyết các thắc mắc
              khi sử dụng auto. Nếu các thành viên bí quá thì tag sếp Linh =))
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

