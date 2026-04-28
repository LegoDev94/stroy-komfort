import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Анна Кравцова",
    role: "Дизайнер интерьера",
    text: "Заказывала комплексный ремонт ванной — Строй-Комфорт сдали за 16 дней при обещанных 21. Бригада чистая, аккуратная, инженер каждый день присылал отчёт. Отдельный респект менеджеру Алёне за внимание к деталям.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
    project: "Ванная под ключ · 9 м²",
  },
  {
    name: "Дмитрий Северов",
    role: "Владелец загородного дома",
    text: "Делали отопление и котельную — работа уровня инженерного бюро. Документы, гарантия, схемы, паспорта на оборудование — всё на руках. Зимой -28, в доме +24, котёл вышел на 38% мощности. Рекомендую.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
    project: "Отопление дома · 320 м²",
  },
  {
    name: "Ирина Лебедева",
    role: "Юрист",
    text: "Сменили подрядчика на Строй-Комфорт после неудачного опыта. Разница — небо и земля. Чёткая смета без сюрпризов, честные сроки, аккуратные мастера. Через год ничего не отвалилось — и это уже показатель.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",
    project: "Электрика квартиры · 120 м²",
  },
  {
    name: "Михаил Орлов",
    role: "Ресторатор",
    text: "Делали фасад и кровлю на загородном кафе. Объём большой — справились за 28 дней. Промальп, керамогранит, дренажи — всё профессионально. Кафе открылось вовремя, и я не седой. Огромное спасибо.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
    project: "Фасад · 560 м²",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section id="testimonials" className="relative overflow-hidden py-28 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-9 bg-gold-400/70" />
            03 · Отзывы
            <span className="h-px w-9 bg-gold-400/70" />
          </span>
          <h2 className="section-title mt-5">
            <em className="text-gold-grad font-display not-italic">220</em> довольных клиентов
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <Quote className="absolute -left-4 -top-8 h-32 w-32 text-gold-500/15" strokeWidth={1} />

          <div className="border-grad relative overflow-hidden rounded-3xl border border-white/5 bg-ink-800/60 p-8 shadow-card sm:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, n) => (
                    <Star key={n} className="h-4 w-4 fill-gold-300 text-gold-300" />
                  ))}
                </div>
                <p className="mt-6 font-display text-2xl leading-relaxed text-cream-50 sm:text-3xl">
                  «{r.text}»
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="h-14 w-14 rounded-full border-2 border-gold-400/30 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-cream-50">{r.name}</div>
                    <div className="text-xs text-cream-50/55">{r.role}</div>
                  </div>
                  <div className="ml-auto hidden text-right sm:block">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-cream-50/45">
                      Проект
                    </div>
                    <div className="text-sm font-semibold text-gold-200">{r.project}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((_, n) => (
                <button
                  key={n}
                  onClick={() => setI(n)}
                  className={`h-1.5 rounded-full transition-all ${
                    n === i ? "w-10 bg-gold-gradient" : "w-5 bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Go to review ${n + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-cream-50 transition-colors hover:border-gold-400/40 hover:text-gold-300"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="grid h-11 w-11 place-items-center rounded-full bg-gold-gradient text-ink-950 shadow-glow"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
