import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const items = [
  {
    q: "Сколько стоит выезд инженера на замер?",
    a: "Выезд инженера на замер и составление предварительной сметы — бесплатно для всех клиентов в Москве, Санкт-Петербурге и Сочи. В соседние области выезд оплачивается отдельно по фиксированному тарифу.",
  },
  {
    q: "Какая гарантия на выполненные работы?",
    a: "На монтаж инженерных систем (отопление, сантехника, электрика) — 5 лет. На отделочные работы — 3 года. На клининг и сборку мебели — 1 год. Гарантия закреплена в договоре, мы устраняем любые замечания бесплатно.",
  },
  {
    q: "Можно ли заключить договор и зафиксировать цену?",
    a: "Да, мы работаем строго по договору с физическим или юридическим лицом. Цена в договоре — фиксированная и не пересматривается, даже если в процессе вырастают цены на материалы. За каждый день просрочки сдачи мы выплачиваем штраф клиенту.",
  },
  {
    q: "Кто будет выполнять работы?",
    a: "Работы выполняет наша собственная бригада — 6 мастеров, которые работают вместе с 2016 года. Не передаём объекты на субподряд и не нанимаем людей «с улицы». На объекте всегда присутствует прораб, который ведёт фото-отчёт каждый рабочий день.",
  },
  {
    q: "Работаете ли вы в выходные и по вечерам?",
    a: "Аварийная бригада сантехники и электрики работает 24/7, включая праздники. Плановые работы — с 8:00 до 21:00 по будням; в выходные — по согласованию с клиентом и соседями.",
  },
  {
    q: "Можно ли оплатить работу в рассрочку?",
    a: "Да, мы предлагаем беспроцентную рассрочку до 12 месяцев через банки-партнёры (Тинькофф, Альфа-Банк, Сбер). Также возможна поэтапная оплата по ходу выполнения работ.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 lg:py-40">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="section-eyebrow">
              <span className="h-px w-9 bg-gold-400/70" />
              08 · Вопросы
            </span>
            <h2 className="section-title mt-5">
              Часто <em className="text-gold-grad font-display not-italic">спрашивают</em>
            </h2>
            <p className="mt-5 text-base text-cream-50/65">
              Не нашли ответ на свой вопрос? Напишите в чат или позвоните — менеджер
              ответит за 7 минут.
            </p>
            <a href="#contact" className="btn-ghost mt-7 text-xs">
              Задать свой вопрос
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/5 bg-ink-900/40">
              {items.map((it, i) => {
                const isOpen = open === i;
                return (
                  <div key={it.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.03] sm:px-7 sm:py-6"
                    >
                      <span className="font-display text-lg text-cream-50 sm:text-xl">
                        {it.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                          isOpen
                            ? "border-gold-400/60 bg-gold-gradient text-ink-950"
                            : "border-white/10 bg-white/5 text-cream-50/70"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pr-20 text-sm leading-relaxed text-cream-50/65 sm:px-7">
                            {it.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
