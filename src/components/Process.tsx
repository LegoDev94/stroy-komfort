import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, ClipboardList, FileSignature, HardHat, Sparkles } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Заявка и звонок",
    text: "Вы оставляете заявку — менеджер связывается за 7 минут, уточняет задачу и подбирает специалиста.",
    time: "7 минут",
  },
  {
    n: "02",
    icon: CalendarCheck,
    title: "Выезд и замер",
    text: "Бесплатный выезд инженера в удобное время. На месте — диагностика, замеры и предварительная смета.",
    time: "1 день",
  },
  {
    n: "03",
    icon: FileSignature,
    title: "Договор и смета",
    text: "Фиксированная смета и юридический договор с гарантией. Прозрачно, без мелкого шрифта.",
    time: "1 час",
  },
  {
    n: "04",
    icon: HardHat,
    title: "Производство работ",
    text: "Бригада выходит в согласованную дату. Ежедневные фото-отчёты, контроль прораба, чистота на объекте.",
    time: "от 1 дня",
  },
  {
    n: "05",
    icon: Sparkles,
    title: "Сдача и гарантия",
    text: "Принимаем работу вместе с вами по чек-листу. Подписываем гарантийный талон на 5 лет.",
    time: "1 час",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineH = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 80,
    damping: 22,
  });

  return (
    <section id="process" className="relative overflow-hidden py-28 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-900 via-ink-950 to-ink-900" />
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-40" />

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-9 bg-gold-400/70" />
            06 · Процесс
            <span className="h-px w-9 bg-gold-400/70" />
          </span>
          <h2 className="section-title mt-5">
            5 шагов от заявки <br />
            до <em className="text-gold-grad font-display not-italic">приёмки</em>
          </h2>
          <p className="mt-5 text-base text-cream-50/65">
            Чёткий процесс — наш главный продукт. Вы знаете, что происходит на каждом этапе.
          </p>
        </div>

        <div ref={ref} className="relative mx-auto mt-20 max-w-4xl">
          {/* center line */}
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2">
            <motion.div
              style={{ height: lineH }}
              className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-gold-300 via-gold-400 to-gold-600"
            />
          </div>

          <div className="space-y-14 sm:space-y-20">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-1 items-center gap-8 sm:grid-cols-2"
                >
                  {/* Marker */}
                  <div className="absolute left-6 z-10 -translate-x-1/2 sm:left-1/2">
                    <motion.div
                      whileInView={{ scale: [0.6, 1.15, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-ink-950 shadow-glow ring-8 ring-ink-950"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </motion.div>
                  </div>

                  {left ? (
                    <>
                      <div className="pl-16 sm:pl-0 sm:pr-16 sm:text-right">
                        <StepCard s={s} align="right" />
                      </div>
                      <div className="hidden sm:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden sm:block" />
                      <div className="pl-16 sm:pl-16">
                        <StepCard s={s} align="left" />
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  s,
  align,
}: {
  s: { n: string; title: string; text: string; time: string };
  align: "left" | "right";
}) {
  return (
    <div className={`group relative inline-block rounded-2xl border border-white/5 bg-ink-800/60 p-6 shadow-soft transition-all hover:border-gold-400/30 hover:shadow-glow ${align === "right" ? "sm:text-right" : ""}`}>
      <div className={`flex items-center gap-3 ${align === "right" ? "sm:flex-row-reverse" : ""}`}>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-300">
          шаг {s.n}
        </span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="rounded-full border border-gold-400/30 bg-gold-400/10 px-2 py-0.5 text-[10px] font-medium text-gold-200">
          {s.time}
        </span>
      </div>
      <h3 className="mt-4 font-display text-2xl text-cream-50">{s.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-cream-50/65">{s.text}</p>
    </div>
  );
}
