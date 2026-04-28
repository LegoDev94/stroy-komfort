import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { services, type Service } from "../data/services";

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-28 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              <span className="h-px w-9 bg-gold-400/70" />
              04 · Услуги
            </span>
            <h2 className="section-title mt-5">
              Что делает<br />
              <em className="text-gold-grad not-italic font-display">наша бригада</em>
            </h2>
            <p className="mt-5 max-w-lg text-base text-cream-50/65">
              Закрываем все ключевые направления одной сложившейся бригадой —
              без подряда и аутсорса. От первого замера до сдачи объекта вас ведёт
              один прораб с ежедневным фото-отчётом.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-ghost text-xs">
              Все цены и условия
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.button
                key={s.id}
                onClick={() => setActive(s)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-ink-800/50 p-6 text-left shadow-soft transition-all hover:border-gold-400/30 hover:shadow-glow"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gold-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-gold-300 transition-all group-hover:scale-110 group-hover:border-gold-400/40 group-hover:bg-gold-400/15">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-cream-50/30 transition-all group-hover:rotate-12 group-hover:text-gold-300" />
                </div>

                <div className="relative mt-7">
                  <div className="font-display text-xl text-cream-50">{s.title}</div>
                  <p className="mt-2 line-clamp-2 text-sm text-cream-50/60">
                    {s.short}
                  </p>
                </div>

                <div className="relative mt-6 flex items-end justify-between border-t border-white/5 pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-cream-50/45">
                      от
                    </div>
                    <div className="font-mono text-base text-cream-50/95">
                      {s.priceFrom.toLocaleString("ru-RU")} ₽<span className="text-cream-50/40">/{s.unit}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-gold-300/80 opacity-0 transition-opacity group-hover:opacity-100">
                    подробнее →
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ServiceModal
            key={active.id}
            service={active}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  // ESC to close + body scroll lock
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] overflow-y-auto overscroll-contain bg-ink-950/85 backdrop-blur-md"
      aria-modal="true"
      role="dialog"
    >
      {/* Sticky close button — always visible while scrolling */}
      <button
        onClick={onClose}
        className="fixed right-4 z-[80] grid h-11 w-11 place-items-center rounded-full bg-ink-950/95 text-cream-50 shadow-card backdrop-blur-md transition-all hover:text-gold-300 active:scale-95"
        style={{ top: "max(1rem, env(safe-area-inset-top))" }}
        aria-label="Закрыть"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Layout container: bottom-sheet on mobile, centered on sm+ */}
      <div className="flex min-h-full items-end justify-center sm:items-center sm:p-5">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-t-3xl border-t border-white/10 bg-ink-900 shadow-card sm:rounded-3xl sm:border md:grid-cols-2"
        >
          {/* Mobile sheet drag handle */}
          <div className="flex shrink-0 justify-center pt-2.5 sm:hidden">
            <div className="h-1 w-10 rounded-full bg-white/20" />
          </div>

          {/* Image — wide on mobile (less tall), tall on md+ */}
          <div className="relative aspect-[16/10] sm:aspect-[4/5] md:aspect-auto">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent md:bg-gradient-to-r md:via-ink-900/20" />
            <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-gradient text-ink-950 shadow-glow sm:h-12 sm:w-12">
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 pb-7 sm:p-7 md:p-9">
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold-300">
              Услуга
            </div>
            <h3 className="mt-2 font-display text-2xl text-cream-50 sm:text-3xl">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-50/70">
              {service.description}
            </p>
            <ul className="mt-5 space-y-2">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-cream-50/85"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col items-stretch gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-cream-50/45">
                  Стоимость от
                </div>
                <div className="font-display text-2xl text-gold-grad">
                  {service.priceFrom.toLocaleString("ru-RU")} ₽
                  <span className="text-base text-cream-50/50">
                    /{service.unit}
                  </span>
                </div>
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="btn-primary !px-5 !py-3 justify-center text-xs"
              >
                Заказать
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
