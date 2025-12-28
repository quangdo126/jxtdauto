import { Separator } from "@/components/ui/separator"

const changelog = [
  {
    version: "0.1.7+",
    date: "2025-12-28",
    changes: [
      "Sửa lỗi đôi khi không mua thuốc, tạp hóa",
      "Đi thuyền giờ sẽ làm hậu cần (mua thuốc, sửa trang bị, cất tiền)",
    ],
  },
  {
    version: "0.1.7",
    date: "2025-12-27",
    changes: [
      "Vẽ lại đường di chuyển cho auto ở map Nam Nhạc Trấn, Đại Lý, Thiên Vương Bang, Nga My, Ngũ Độc",
      "Lưu rương sau khi đi TK, thuyền Phong Lăng Độ",
      "Vài thứ lặt vặt không nhớ 🙂",
    ],
  },
  {
    version: "0.1.6++",
    date: "2025-12-24",
    changes: [
      "Sửa lỗi chia sẻ vật phẩm",
      "Thêm tùy chọn 'Chỉ làm nhiệm vụ khi đủ vật phẩm'",
    ],
  },
  {
    version: "0.1.6+",
    date: "2025-12-24",
    changes: [
      "Fix lỗi báo danh TK",
      "Fix lỗi lưu rương sau khi đi TK & Phong Lăng Độ",
      "Năng động có thể chọn riêng từng hoạt động (click phải lên Năng động, tab Cơ bản)",
      "Thêm hẹn giờ Đào kho báu",
      "Có kèm theo gamecl phù hợp với auto",
    ],
  },
  {
    version: "0.1.6",
    date: "2025-12-23",
    changes: [
      "Cập nhật theo game 23/12/2025",
      "Sửa lỗi chia sẻ vật phẩm",
      "Sửa lỗi theo sau đội trưởng đội khác",
      "Thêm thuốc lak Đại Lực, Nội Công, ... vào danh sách sử dụng",
      "Thêm Báo danh Tống Kim, Đi thuyền Phong Lăng Độ, Bán hàng (bày bán)",
      "Giao diện thêm cột hiển thị ô trống hành trang/túi",
      "Thêm vài dòng thuộc tính lọc trang bị gộp, nhiệm vụ",
    ],
  },
  {
    version: "0.1.5++",
    date: "2025-12-21",
    changes: [
      "Sửa lỗi buff miệt mài",
      "Sửa một số lỗi chia sẻ vật phẩm",
      "Thêm tùy chọn chia sẽ vật phẩm nhiệm vụ (tab Tiện ích)",
      "Thêm Bỏ qua bang hội (tab Đối thủ)",
    ],
  },
  {
    version: "0.1.5+",
    date: "2025-12-20",
    changes: [
      "Sửa lỗi không mua vật phẩm từ NPC",
      "Hẹn giờ có thể bật/tắt riêng từng tác vụ",
      "Trả lại tính năng 'Bảo vệ cừu sát'",
      "Tính năng cho trang bị nhiệm vụ (hiện đang tự động, nếu không ổn sẽ đổi thành tùy chọn). Có sẵn thì cho ngay, không có nếu đi luyện công nhặt được thì đem về cho",
      "Tính năng chia sẻ vật phẩm (tab Tiện ích): Chỉ chia sẻ khi nhân vật chia sẻ đang hoạt động ở tác vụ Luyện công hoặc không làm gì (không hoạt động ở Auto PK)",
    ],
  },
  {
    version: "0.1.5",
    date: "2025-12-17",
    changes: [
      "Sửa lỗi giám định tàng bảo đồ",
      "Thêm tính năng hẹn giờ làm nhiệm vụ (tab Tiện ích)",
      "Tự vệ thêm tùy chọn chỉ đổi phe (màu) khi số đối tượng đồ sát >=, cấp >=, tránh trường hợp nhá màu",
      "Thêm điều kiện sử dụng vật phẩm 'Trị PK10', 'Đánh Boss'",
      "Ghép sách rèn (chỉ ghép nếu đủ 2000 mảnh trang bị trong hành trang)",
      "Nhiệm vụ Mặc Thạch sẽ làm hết nhiệm vụ nếu là ngày chủ nhật (bỏ qua thiết lập số nhiệm vụ để lại)",
      "Nhặt vật phẩm, thêm tùy chọn chi tiết hơn",
      "Ưu tiên quái, bỏ qua quái theo ngũ hành (tab Đối thủ)",
      "Thêm tùy chọn về thành khi hết Ngọc Lộ Hoàn (tab Luyện công)",
      "Thêm mở túi thuốc (tab Tiện ích)",
      "Sửa lỗi game đếm sai số client (tab)",
      "Sửa một số lỗi khác",
      "TẠM KHÓA TÍNH NĂNG 'BẢO VỆ CỪU SÁT'",
    ],
  },
  {
    version: "0.1.4+",
    date: "2025-12-10",
    changes: [
      "Sửa lỗi lag hành trang: Click chuột phải",
      "Sửa lỗi đối thoại NPC Lễ Quan",
      "Thay đổi tính năng tự sử dụng vật phẩm, thêm điều kiện sử dụng vật phẩm",
      "Sửa lỗi hiển thị Xu/Kim đỉnh",
      "Sửa lỗi các map không liên thông như Dược Vương Động, Lưỡng Thủy Động, Vũ Di Sơn, ...",
      "Không cần dùng gamecl để bỏ giới hạn client, giới hạn được nâng lên 24 cửa sổ game",
    ],
  },
  {
    version: "0.1.4+",
    date: "2025-12-09",
    changes: [
      "Nâng cấp thuật toán tìm đường, có thể xử lý các map phức tạp, không liên thông như Dược Vương Động, Lưỡng Thủy Động, Vũ Di Sơn",
      "Định giá hàng loạt vật phẩm cùng loại trong hành trang",
      "Hoa đăng sẽ phân chia tọa độ đèn, tránh tụ tập quá đông ở một đèn nào đó",
      "Sửa một số lỗi nhỏ",
    ],
  },
  {
    version: "0.1.4",
    date: "2025-12-06",
    changes: [
      "Sửa lỗi auto không hoạt động ở một số map",
      "Sửa lỗi mua trang bị môn phái",
      "Tính năng bảo vệ trang bị: Trang bị có thuộc tính hiếm sẽ không thể rã, không thể bán, không thể vứt bỏ, không thể giao nộp. Để tạm thời bỏ qua tính năng bảo vệ, nhấn và giữ phím Shift khi đang thực hiện thao tác",
      "Thêm tính năng rèn trang bị (tab Hành trang): Để mảnh trang bị trong túi và hành trang, bật tính năng ở khu vực phi chiến đấu",
    ],
  },
  {
    version: "0.1.3++",
    date: "2025-12-04",
    changes: [
      "Sửa lỗi tổ đội",
      "Sửa lỗi theo sau ở chế độ luyện công",
      "Thêm cột Hiển thị 'Năng động'",
      "Thêm hiển thị thông tin nhiệm vụ (tab Cơ bản)",
      "Nhiệm vụ Mặc Thạch & Ngày sẽ mua trang bị ở phái (phái nào mua phái đó)",
      "Mua thuốc + nhận thuốc miễn phí trong Tống Kim (tab Tự vệ/PK)",
      "Tính năng năng động sẽ luôn làm nhiệm vụ Mặc Thạch, bất kể thiết lập số nhiệm vụ để dành là bao nhiêu",
      "Nhân vật theo sau sẽ theo sau nhân vật chính vào Tống Kim (nhưng chưa thể di chuyển ra ngoài)",
      "Sửa một số lỗi nhỏ",
    ],
  },
  {
    version: "0.1.3+",
    date: "2025-12-02",
    changes: [
      "Nâng giới hạn số lượng nhân vật lên 24",
      "Tinh chỉnh tính năng tổ đội, sẽ tự rời nhóm để vào tổ đội ưu tiên hơn",
      "Sửa lỗi đôi khi không đổi màu khi bị đồ sát",
      "Thêm tính năng tự động tổ đội khi ở chế độ Auto PK (tab Cơ bản)",
      "Nhiệm vụ ngày <thu thập> sẽ thu thập nhiều vị trí thay vì 1 vị trí như trước đây",
      "Sửa lỗi không nhận thưởng nhiệm vụ Mặc Thạch cuối, không reset khi qua tuần",
      "Thêm tính năng ghi nhớ vật phẩm nhiệm vụ đã mua, tránh mua nhiều lần hay bị hệ thống lọc trang bị giữ lại",
      "Nhận thưởng thẻ tháng sẽ về thành lưu rương (nếu có) để nhận",
      "Thêm tính năng 'Lập chiến đội', khi bạn không biết thiết lập như thế nào thì chỉ việc chọn tất cả acc trong 1 xe, và chọn 'Lập chiến đội'",
      "Đè phím Shift khi rã trang bị để bỏ qua chế độ bảo vệ của auto",
      "Thêm thuộc tính lọc 'Thời gian phục hồi (điểm) ẩn', 'Thời gian phục hồi (điểm) hiện', và Giảm thời gian hiệu ứng (%) (Làm chậm, làm choáng, thời gian trúng độc)",
      "Hạn sử dụng 10 ngày, tính từ 15h 02/12/2025",
    ],
  },
  {
    version: "0.1.3+",
    date: "2025-11-29",
    changes: [
      "Để rã trang bị, đè phím Shift khi rã",
      "Thêm tính năng ghi nhớ vật phẩm nhiệm vụ đã mua, tránh mua lại nhiều lần",
      "Tính năng tổ đội khi làm nhiệm vụ Ngày, Mặc Thạch: Tự lập tổ đội sau 1 - 3 phút, tự giải tán tổ đội trong 3 - 5 phút (nếu không có thành viên)",
      "Tinh chỉnh tính năng tổ đội cho hợp lý hơn",
    ],
  },
  {
    version: "0.1.3",
    date: "2025-11-28",
    changes: [
      "Tách riêng TĐP theo máu (HP) hoặc mana (MP) (tab P. hồi)",
      "SỬA LỖI LAG HÀNH TRANG",
      "Sửa lỗi mua trang bị nhiệm vụ (Mặc Thạch & Ngày), có thể mua theo giá hợp lý hoặc rẻ nhất",
      "Nhiệm vụ Ngày & Mặc Thạch đánh quái sẽ tự lập tổ đội, vào tổ đội, tự dọn hành trang",
      "Thêm tác vụ Năng động (tab Cơ bản)",
      "Thêm tiện ích Điểm danh, nhận thưởng năng động, nhận thưởng thẻ tháng, điều chỉnh âm lương (tab T. ích)",
      "Hạn sử dụng: 10 ngày tính từ 16h 28/11/2025",
    ],
  },
  {
    version: "0.1.2+++",
    date: "2025-11-21",
    changes: [
      "Sửa lỗi đôi khi auto không hoạt động",
      "Không cho rã trang bị đã khóa bảo hiểm",
    ],
  },
  {
    version: "0.1.2++",
    date: "2025-11-21",
    changes: [
      "Thêm một số tiêu chí lọc trang bị (các bạn nhớ kiểm tra lại phần lọc trang bị)",
      "Gửi tiền lên bang hội (tab Hành trang)",
      "Nhân vật theo sau đã vào trong khoang thuyền Phong Lăng Độ",
      "Thêm vật phẩm Thiên Sơn Bảo Lộ (Sơ) không khóa vào danh sách sử dụng vật phẩm",
      "Thêm kỹ năng Sư Tử Hống của Thiếu Lâm",
    ],
  },
  {
    version: "0.1.2+",
    date: "2025-11-11",
    changes: [
      "Cập nhật theo phiên bản game mới nhất",
      "Sửa lỗi không mua vũ khí nhiệm vụ trong shop NPC",
      "Sửa lỗi mua trang bị nhiệm vụ từ người chơi khác",
      "gamecl.exe trong folder auto là gamecl.exe đã bỏ giới hạn 8 cửa sổ game/máy. Bạn nào cần thì update game lên rồi copy gamecl.exe qua nhé. Các bạn cập nhật game lên phiên bản mới nhất rồi dùng auto, không cần gamecl cũ",
    ],
  },
  {
    version: "0.1.2",
    date: "2025-11-07",
    changes: [
      "Tinh chỉnh tính năng nhặt vật phẩm: Thêm tùy chọn Nhặt tất cả, Chỉ nhặt tiền, Chỉ nhặt vật phẩm. Thêm danh sách vật phẩm đen (không nhặt)",
      "Thêm tính năng Đố đèn thú vị (Hoa Đăng)",
      "Tab Phục hồi: Thêm tùy chọn TĐP khi MP <. Thêm tùy chọn dùng bình máu khi PK",
      "Sửa lỗi sai vị trí NPC trong nhiệm vụ ngày, môn phái",
      "Thêm thuộc tính lọc đồ gộp Trang sức (nhẫn, dây chuyền, ngọc bội), Số ô (rộng x cao)",
      "Gia hạn sử dụng đến ngày 18/11/2025",
    ],
  },
  {
    version: "0.1.1++",
    date: "2025-11-02",
    changes: [
      "Thêm tính năng ghép huyền tinh siêu nhanh (tab Hành trang)",
      "Thêm tính năng ghép quà thần bí (tab Hành trang)",
      "Sửa lỗi nhiệm vụ Mặc Thạch, như mua đồ, tách vật phẩm",
      "Sửa một số lỗi khác",
      "Để kích hoạt tính năng ghép huyền tinh, quà thần bí, các bạn đứng trong thành, tick vào tính năng (tab Hành trang), tab Cơ bản bỏ tick Auto PK",
    ],
  },
  {
    version: "0.1.1+",
    date: "2025-10-28",
    changes: [
      "Vẫn dùng gamecl.exe cũ",
      "Gia hạn sử dụng đến ngày 07/11/2025",
      "Cập nhật vị trí NPC nhiệm vụ môn phái",
      "Nhiệm vụ ngày",
      "Nhiệm vụ Mặc Thạch",
      "Đào kho báu (Tự giám định, tự đào)",
      "Thêm phím đánh (tab Chiến đấu)",
      "Tự cừu sát, bảo vệ cừu sát (tab Tự vệ/PK)",
    ],
  },
  {
    version: "0.1.1",
    date: "2025-10-18",
    changes: [
      "Thêm tùy chọn giữ tiền khi lên bãi (tab Hành Trang -> Gửi tiền)",
      "Sửa lỗi đôi khi không quay lại điểm cũ",
      "Auto đã có thể dùng máu Tống Kim",
      "Bản đồ nào không phù được thì auto sẽ chạy bộ, tránh đứng tại chỗ dùng phù liên tục",
      "Sửa lỗi liên quan đến nghỉ trong thành",
      "Gia hạn sử dụng từ 16h 18/10/2025 đến 16h 28/10/2025",
    ],
  },
  {
    version: "0.1.0+",
    date: "2025-10-15",
    changes: [
      "Thêm Hiển thị 'Cấp/EXP'",
      "Tùy chọn sửa trang bị trên bãi",
      "Phần luyện công tìm quái hợp lý hơn, thêm tùy chọn Đánh lẻ, bỏ bán kính di chuyển",
      "2 kỹ năng điều kiện 'MP bản thân (%) >' và 'MP bản thân (%) <' sẽ hoán đổi cho nhau khi đạt điều kiện (chuyên dùng cho TN luyện 2 skill)",
      "Sửa lỗi giữ trang bị Mặc Thạch bị lệch ngũ hành",
      "Sửa lỗi không tìm thấy 1 số NPC trong nhiệm vụ môn phái",
      "Sửa lỗi lên tầng Thiết Tháp Biện Kinh",
    ],
  },
  {
    version: "0.1.0",
    date: "2025-10-11",
    changes: [
      "Thêm tính năng quây quái (tab Luyện công)",
      "Thêm bản đồ mua thuốc Đào Hoa Nguyên",
      "Sửa lỗi đối thoại tạp hóa Long Tuyền Thôn",
      "Sửa liên kết map Thiên Tầm Tháp & Động Đình Hồ",
      "Thêm tính năng làm nhiệm vụ môn phái, đào kho báu (chưa hoàn chỉnh)",
      "Sửa lỗi dùng tiên thảo lộ và ngọc lộ hoàn",
      "Sửa lỗi không dùng Hồi Thành Phù 20 và 50 lần",
      "Sửa một số lỗi",
      "Tiếp tục test miễn phí từ 17h 11/10/2025 -> 17h 18/10/2025",
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Changelog</h1>
        <p className="mb-12 text-muted-foreground">
          Theo dõi các cập nhật và thay đổi mới nhất của jxtdAuto
        </p>

        <div className="space-y-8">
          {changelog.map((release, index) => (
            <div key={`${release.version}-${release.date}-${index}`}>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">
                    Version {release.version}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {new Date(release.date).toLocaleDateString("vi-VN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <ul className="ml-6 list-disc space-y-2">
                {release.changes.map((change, changeIndex) => (
                  <li key={changeIndex} className="text-muted-foreground">
                    {change}
                  </li>
                ))}
              </ul>
              {index < changelog.length - 1 && (
                <Separator className="mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
