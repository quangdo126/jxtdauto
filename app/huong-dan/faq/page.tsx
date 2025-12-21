import { Accordion, AccordionItem } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "Phần mềm có an toàn không?",
      answer:
        "Có, auto được thiết kế với các biện pháp bảo mật cao và không lưu trữ thông tin tài khoản của bạn.",
    },
    {
      question: "Tôi có thể sử dụng trên nhiều tài khoản không?",
      answer:
        "Tùy thuộc vào gói license bạn mua. Gói Cơ bản cho phép theo HWID hoặc bang hội, gói Nâng cao và Máy cày có giới hạn cửa sổ game khác nhau.",
    },
    {
      question: "Auto có được cập nhật thường xuyên không?",
      answer:
        "Có, chúng tôi cập nhật auto thường xuyên để đảm bảo tương thích với các bản cập nhật mới của game.",
    },
    {
      question: "Tôi có thể hoàn tiền không?",
      answer:
        "Vui lòng liên hệ với chúng tôi qua Facebook hoặc Zalo để được hỗ trợ về vấn đề này.",
    },
  ]

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-8 text-2xl font-bold">
            Câu hỏi thường gặp
          </h1>
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question} index={index}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
