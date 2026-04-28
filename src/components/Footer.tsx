import { MapPin, Phone, Mail, Send, MessageCircle, AtSign } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Услуги",
    items: [
      "Отопление",
      "Сантехника",
      "Электрика",
      "Кровля",
      "Фасадные работы",
      "Полы и стяжка",
    ],
  },
  {
    title: "Компания",
    items: ["О нас", "Команда", "Сертификаты", "Гарантии", "Партнёрам", "Карьера"],
  },
  {
    title: "Поддержка",
    items: [
      "Бесплатный замер",
      "Калькулятор",
      "Договор-оферта",
      "Политика обработки данных",
      "FAQ",
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-950">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="absolute -top-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-50/65">
              Строй-Комфорт — своя бригада из 6 мастеров. Делаем ремонт и инженерные
              работы в квартирах, домах и офисах с 2016 года. Москва, МО и выезд
              по 75 регионам РФ. Гарантия — до 5 лет.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:+78001234567" className="flex items-center gap-3 text-cream-50/85 hover:text-gold-300">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <Phone className="h-4 w-4 text-gold-300" />
                </span>
                8 800 123-45-67
              </a>
              <a href="mailto:hello@stroy-komfort.ru" className="flex items-center gap-3 text-cream-50/85 hover:text-gold-300">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <Mail className="h-4 w-4 text-gold-300" />
                </span>
                hello@stroy-komfort.ru
              </a>
              <div className="flex items-center gap-3 text-cream-50/85">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <MapPin className="h-4 w-4 text-gold-300" />
                </span>
                Москва · МО · 75 регионов РФ
              </div>
            </div>

            <div className="mt-7 flex gap-2.5">
              {[AtSign, Send, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-cream-50/80 transition-all hover:border-gold-400/50 hover:text-gold-300"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300/90">
                  {c.title}
                </div>
                <ul className="mt-5 space-y-3 text-sm">
                  {c.items.map((it) => (
                    <li key={it}>
                      <a href="#" className="text-cream-50/65 transition-colors hover:text-cream-50">
                        {it}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-cream-50/45 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Строй-Комфорт. Все права защищены.</div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-cream-50/80">Политика конфиденциальности</a>
            <a href="#" className="hover:text-cream-50/80">Условия использования</a>
            <span className="font-mono">v 1.0 · made with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
