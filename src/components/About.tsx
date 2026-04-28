import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, BadgeCheck, Clock, ShieldCheck, Users, Wrench } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
}

const features = [
  {
    icon: ShieldCheck,
    title: "Гарантия до 5 лет",
    text: "Договор и письменная гарантия на каждый этап. Бесплатное устранение замечаний.",
  },
  {
    icon: Clock,
    title: "Сдача в срок",
    text: "Жёсткий контроль сроков. За каждый день просрочки — штраф в вашу пользу.",
  },
  {
    icon: BadgeCheck,
    title: "Фиксированная смета",
    text: "Стоимость не меняется после подписания. Никаких внезапных доплат.",
  },
  {
    icon: Wrench,
    title: "Свой инструмент",
    text: "Профессиональный инструмент Bosch, Hilti, Festool. Свой, без займов и аренды.",
  },
  {
    icon: Users,
    title: "Постоянная команда",
    text: "Одна сложившаяся бригада из 6 мастеров со стажем 8+ лет. Без подряда и аутсорса.",
  },
  {
    icon: Award,
    title: "Авторский надзор",
    text: "Личный прораб ведёт ваш объект и присылает фото-отчёт каждый день.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 lg:py-40">
      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left collage */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="border-grad relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=85&auto=format&fit=crop"
                  alt="Команда мастеров"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -right-4 -bottom-8 hidden w-60 rounded-2xl border border-white/10 bg-ink-900/95 p-5 shadow-card backdrop-blur-xl sm:block lg:-right-10"
              >
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gold-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-gold-300" />
                  Наша бригада
                </div>
                <div className="mt-2 font-display text-3xl text-cream-50">
                  <Counter to={6} /> мастеров
                </div>
                <div className="mt-1 text-xs text-cream-50/55">работают вместе с 2016 года</div>
                <div className="mt-3 flex -space-x-2">
                  {["1494790108377-be9c29b29330", "1500648767791-00dcc994a43e", "1438761681033-6461ffad8d80", "1472099645785-5658abf4ff4e", "1507003211169-0a1dd7228f2d"].map((id) => (
                    <img
                      key={id}
                      src={`https://images.unsplash.com/photo-${id}?w=80&h=80&fit=crop&q=80`}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-ink-900 object-cover"
                    />
                  ))}
                  <div className="grid h-8 w-8 place-items-center rounded-full border-2 border-ink-900 bg-gold-gradient text-[10px] font-bold text-ink-950">
                    +1
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -left-6 top-10 hidden rotate-[-4deg] rounded-2xl border border-white/10 bg-ink-900/95 p-4 shadow-card backdrop-blur-xl sm:block"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] text-cream-50/55">
                  ISO 9001:2015
                </div>
                <div className="mt-1 font-display text-xl text-gold-grad">Сертифицировано</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-7">
            <span className="section-eyebrow">
              <span className="h-px w-9 bg-gold-400/70" />
              05 · Почему мы
            </span>
            <h2 className="section-title mt-5">
              Не просто строим — <br />
              <em className="text-gold-grad font-display not-italic">даём комфорт</em>
            </h2>
            <p className="mt-5 max-w-xl text-base text-cream-50/65">
              Строй-Комфорт — небольшая, но опытная бригада. Мы инженеры и мастера,
              которые работают вместе с 2016 года. Делаем ремонт и инженерные работы
              в квартирах, частных домах и офисах. Москва, МО и выезд по 75 регионам РФ.
              За 10 лет — более 480 сданных объектов и ни одного судебного иска.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group flex gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-gold-400/30 hover:bg-white/[0.05]"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold-500/10 text-gold-300 transition-colors group-hover:bg-gold-400/20">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-cream-50">{f.title}</div>
                      <div className="mt-1 text-xs leading-relaxed text-cream-50/60">{f.text}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
