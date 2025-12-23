import { Accordion, AccordionItem } from "@/components/ui/accordion"

export default function LoiThuongGapPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="mb-8 text-2xl font-bold">Lỗi thường gặp</h1>
          <Accordion>
            <AccordionItem title="Câu hỏi 1" index={0}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </AccordionItem>
            <AccordionItem title="Câu hỏi 2" index={1}>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionItem>
            <AccordionItem title="Câu hỏi 3" index={2}>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
