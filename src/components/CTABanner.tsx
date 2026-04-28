import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-7 py-12 shadow-card sm:px-12 sm:py-16 lg:px-16"
        >
          {/* Decorative orb */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold-500/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-32 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

          {/* Floating icon */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-12 top-12 hidden lg:block"
          >
            <div className="grid h-20 w-20 place-items-center rounded-3xl bg-gold-gradient shadow-glow">
              <Phone className="h-9 w-9 text-ink-950" />
            </div>
          </motion.div>

          <div className="relative max-w-3xl">
            <span className="chip">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold-300" />
              Сегодня · акция месяца
            </span>
            <h2 className="mt-5 font-display text-3xl leading-tight tracking-tight text-cream-50 sm:text-5xl lg:text-[56px]">
              Бесплатный <span className="text-gold-grad italic">выезд мастера</span><br />
              и расчёт сметы за 1 день
            </h2>
            <p className="mt-5 max-w-xl text-base text-cream-50/70">
              Оставьте заявку — прораб приедет в удобное время, замерит объект
              и подготовит точную смету бесплатно. Никаких скрытых доплат: цена в договоре —
              окончательная.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary group">
                Получить расчёт
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="tel:+78001234567" className="btn-ghost">
                <Phone className="h-4 w-4 text-gold-300" />
                8 800 123-45-67
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
