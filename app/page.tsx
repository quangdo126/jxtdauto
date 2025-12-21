import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gamepad2, Shield, Zap, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="relative mb-8">
            <Image
              src="/vltt2pc.webp"
              alt="jxtdAuto"
              width={200}
              height={200}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            jxtdAuto
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Auto toàn diện cho game <strong>Võ Lâm Truyền Kỳ 2.0</strong>, giúp bạn chơi game hiệu quả hơn
            với các tính năng tự động thông minh và an toàn.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <Button size="lg" asChild>
              <Link href="/mua-license">
                Mua License
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/huong-dan">Hướng dẫn sử dụng</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Tính năng nổi bật
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-4 rounded-lg border p-6 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Tự động thông minh</h3>
            <p className="text-muted-foreground">
              Auto làm nhiệm vụ, auto luyện công, auto PK, tất cả trong một, thông minh và hiệu quả
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-lg border p-6 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">An toàn và bảo mật</h3>
            <p className="text-muted-foreground">
              Auto được thiết kế với các biện pháp bảo mật tốt, giúp tài khoản
              của bạn luôn an toàn
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-lg border p-6 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Gamepad2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Dễ sử dụng</h3>
            <p className="text-muted-foreground">
              Giao diện trực quan, dễ sử dụng, phù hợp cho cả người dùng mới bắt đầu lẫn lâu năm
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-lg border p-6 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Hỗ trợ 24/7</h3>
            <p className="text-muted-foreground">
              Chúng tôi và cộng đồng người dùng luôn sẵn sàng giúp đỡ bạn khi bạn cần vào mọi lúc
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Về auto</h2>
            <p className="mb-4 text-muted-foreground">
              <strong>jxtdAuto</strong> là auto được phát triển bởi đội ngũ có kinh nghiệm trong lĩnh vực auto game. Auto được thiết kế đặc biệt cho game <strong>Võ Lâm Truyền Kỳ 2.0</strong>.
            </p>
            <p className="mb-4 text-muted-foreground">
              Auto giúp bạn tối ưu hóa thời gian chơi game, tự động hóa các tác vụ lặp đi lặp lại,
              và nâng cao trải nghiệm chơi game một cách đáng kể.
            </p>
            <p className="text-muted-foreground">
              Với công nghệ hiện đại và cập nhật thường xuyên, chúng tôi luôn cố gắng mang đến
              cho bạn giải pháp tốt nhất.
            </p>
          </div>
          <div className="relative rounded-lg border overflow-hidden">
            <Image
              src="/auto-ui.png"
              alt="Giao diện jxtdAuto"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="rounded-lg border bg-muted/50 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Sẵn sàng trải nghiệm?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Tải auto ngay và khám phá các tính năng của jxtdAuto
          </p>
            <Button size="lg" asChild>
              <Link href="/mua-license">
                Xem gói license
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
        </div>
      </section>
    </div>
  )
}

