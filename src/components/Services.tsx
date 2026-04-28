import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
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

      <ServiceModal service={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ServiceModal({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  if (!service) return null;
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] grid place-items-center bg-ink-950/85 p-5 backdrop-blur-md"
    >
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-card md:grid-cols-2"
      >
        <div className="relative aspect-[4/5] md:aspect-auto">
          <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
          <div className="absolute left-5 top-5">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-ink-950 shadow-glow">
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="p-7 md:p-9">
          <div className="text-[10px] uppercase tracking-[0.22em] text-gold-300">Услуга</div>
          <h3 className="mt-2 font-display text-3xl text-cream-50">{service.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-cream-50/70">{service.description}</p>
          <ul className="mt-5 space-y-2">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-cream-50/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-cream-50/45">Стоимость от</div>
              <div className="font-display text-2xl text-gold-grad">
                {service.priceFrom.toLocaleString("ru-RU")} ₽<span className="text-base text-cream-50/50">/{service.unit}</span>
              </div>
            </div>
            <a href="#contact" onClick={onClose} className="btn-primary !px-5 !py-2.5 text-xs">
              Заказать
            </a>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink-950/80 text-cream-50/80 backdrop-blur-md transition-colors hover:text-gold-300"
          aria-label="Close"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}
