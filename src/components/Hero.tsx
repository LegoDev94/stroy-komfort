import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Phone,
  Clock,
  Gift,
} from "lucide-react";

const stats = [
  { value: "10 лет", label: "вместе работаем" },
  { value: "480+", label: "квартир и домов" },
  { value: "75", label: "регионов РФ" },
  { value: "5 лет", label: "гарантия на работы" },
];

const trust = [
  "Bosch",
  "Vaillant",
  "Knauf",
  "Ceresit",
  "Rehau",
  "Schneider Electric",
];

const quickServices = [
  "Сантехника",
  "Электрика",
  "Отопление",
  "Ремонт под ключ",
  "Кровля",
  "Другое",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Single transform on background image only — content stays static for smooth scroll
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const [picked, setPicked] = useState("Отопление");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setName("");
    setPhone("");
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden pt-36 sm:pt-44 lg:pt-52"
    >
      {/* Background photograph — single transform layer for GPU compositing */}
      <motion.div
        style={{ y: imgY, willChange: "transform" }}
        className="absolute inset-0 -z-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2200&q=80&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/85 to-ink-950" />
        <div className="absolute inset-0 bg-radial-spotlight" />
      </motion.div>

      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="noise pointer-events-none absolute inset-0 -z-10" />

      {/* Static decorative orbs — no animation, browser caches the blur layer */}
      <div className="pointer-events-none absolute right-[6%] top-[28%] -z-10 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-[12%] -z-10 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="chip"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              Квартиры · дома · офисы — бесплатный замер сегодня
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-display text-[44px] font-medium leading-[1.02] tracking-tightest text-cream-50 sm:text-6xl lg:text-[80px]"
            >
              Своя бригада —
              <br />
              <span className="relative">
                <span className="text-gold-grad italic">честно, в срок</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full text-gold-400/70"
                  viewBox="0 0 360 14"
                  fill="none"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, delay: 1, ease: "easeOut" }}
                    d="M2 9 C 90 2, 220 2, 358 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              и под ключ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-cream-50/72 sm:text-lg"
            >
              Ремонт и инженерия для квартир, домов и офисов: сантехника, электрика,
              отопление, кровля, фасады, мебель, клининг. Фиксированная смета и гарантия
              до 5 лет. Москва, МО и выезд по 75 регионам РФ — наша бригада приезжает
              в день обращения.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.85 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream-50/65"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold-300" />
                Договор · гарантия до 5 лет
              </div>
              <div className="hidden h-4 w-px bg-white/15 sm:block" />
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-300 text-gold-300" />
                  ))}
                </div>
                4.9 · 220 отзывов
              </div>
              <div className="hidden h-4 w-px bg-white/15 sm:block" />
              <a
                href="tel:+78001234567"
                className="flex items-center gap-2 font-semibold text-cream-50 transition-colors hover:text-gold-300"
              >
                <Phone className="h-4 w-4 text-gold-300" />
                8 800 123-45-67
              </a>
            </motion.div>
          </div>

          {/* RIGHT — quick lead form */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-md"
            >
              {/* Floating gift badge */}
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: -6 }}
                animate={{ opacity: 1, x: 0, rotate: -6 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="absolute -top-5 -right-3 z-10 flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-xs font-bold text-ink-950 shadow-glow"
              >
                <Gift className="h-3.5 w-3.5" />
                Замер бесплатно
              </motion.div>

              <form
                onSubmit={onSubmit}
                className="border-grad relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/85 p-6 shadow-card backdrop-blur-2xl sm:p-7"
              >
                <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-gold-500/20 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                    <Clock className="h-3.5 w-3.5" />
                    Звонок за 7 минут
                  </div>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-cream-50 sm:text-[28px]">
                    Оставить заявку
                  </h3>
                  <p className="mt-1.5 text-xs text-cream-50/55">
                    Подскажем по телефону и приедем на бесплатный замер
                  </p>

                  {/* Service chips */}
                  <div className="mt-5">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50/50">
                      Что нужно сделать?
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {quickServices.map((s) => {
                        const active = picked === s;
                        return (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setPicked(s)}
                            className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition-all ${
                              active
                                ? "border-gold-400 bg-gold-gradient text-ink-950 shadow-glow"
                                : "border-white/10 bg-white/5 text-cream-50/70 hover:border-gold-400/40 hover:text-gold-200"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="mt-5 space-y-2.5">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-cream-50 placeholder:text-cream-50/40 outline-none transition-all focus:border-gold-400/60 focus:bg-white/10"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-cream-50 placeholder:text-cream-50/40 outline-none transition-all focus:border-gold-400/60 focus:bg-white/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary group mt-4 w-full !py-4 text-sm"
                  >
                    {sent ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" /> Заявка принята · перезвоним
                      </>
                    ) : (
                      <>
                        Получить расчёт
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/5 pt-4 text-[10px] text-cream-50/45">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3 w-3 text-gold-300" />
                      Данные не передаём 3-м лицам
                    </div>
                    <div className="flex -space-x-1.5">
                      {[
                        "1494790108377-be9c29b29330",
                        "1500648767791-00dcc994a43e",
                        "1438761681033-6461ffad8d80",
                      ].map((id) => (
                        <img
                          key={id}
                          src={`https://images.unsplash.com/photo-${id}?w=40&h=40&fit=crop&q=80`}
                          alt=""
                          className="h-5 w-5 rounded-full border border-ink-900 object-cover"
                        />
                      ))}
                      <span className="ml-2 text-cream-50/55">
                        12 заявок на этой неделе
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="border-grad mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md sm:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="relative bg-ink-900/40 px-6 py-7 transition-colors hover:bg-ink-800/60"
            >
              <div className="font-display text-3xl text-gold-grad sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-cream-50/55">
                {s.label}
              </div>
              {i < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-white/10 sm:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trust marquee — flush at bottom of section */}
      <div className="relative mt-16 overflow-hidden border-t border-white/5 bg-ink-900/40 py-5 sm:mt-20">
        <div className="flex animate-marquee items-center gap-16 whitespace-nowrap will-change-transform">
          {[...trust, ...trust, ...trust].map((b, i) => (
            <span
              key={i}
              className="font-display text-xl tracking-tight text-cream-50/40 sm:text-2xl"
            >
              {b}
              <span className="ml-16 text-gold-400/40">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
