import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";

type Project = {
  id: string;
  title: string;
  cat: string;
  city: string;
  meta: string;
  image: string;
  size?: "sm" | "md" | "lg";
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Котельная для загородного дома",
    cat: "Отопление",
    city: "Подмосковье",
    meta: "320 м² · 18 дней",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1400&q=85&auto=format&fit=crop",
    size: "lg",
  },
  {
    id: "p2",
    title: "Ванная под ключ",
    cat: "Сантехника",
    city: "Москва, ЖК Jazz",
    meta: "9 м² · 21 день",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "p3",
    title: "Электрика квартиры",
    cat: "Электрика",
    city: "СПб, ЖК One Trinity",
    meta: "120 м² · 14 дней",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "p4",
    title: "Фасад с керамогранитом",
    cat: "Фасад",
    city: "Сочи",
    meta: "560 м² · 28 дней",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=85&auto=format&fit=crop",
    size: "lg",
  },
  {
    id: "p5",
    title: "Кровля частного дома",
    cat: "Кровля",
    city: "Истра",
    meta: "240 м² · 12 дней",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "p6",
    title: "Кухня и гостиная",
    cat: "Мебель",
    city: "Москва",
    meta: "Сборка под ключ",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "p7",
    title: "Тёплый пол и стяжка",
    cat: "Полы",
    city: "ЖК Sky View",
    meta: "180 м² · 10 дней",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "p8",
    title: "Клининг после ремонта",
    cat: "Клининг",
    city: "Москва-Сити",
    meta: "240 м² · за 1 день",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900&q=85&auto=format&fit=crop",
  },
];

const cats = ["Все", "Отопление", "Сантехника", "Электрика", "Фасад", "Кровля", "Мебель", "Полы", "Клининг"];

export function Portfolio() {
  const [filter, setFilter] = useState("Все");
  const list = useMemo(
    () => (filter === "Все" ? projects : projects.filter((p) => p.cat === filter)),
    [filter]
  );

  return (
    <section id="portfolio" className="relative py-28 lg:py-40">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              <span className="h-px w-9 bg-gold-400/70" />
              02 · Реализованные проекты
            </span>
            <h2 className="section-title mt-5">
              Работы, которыми<br />
              мы <em className="text-gold-grad font-display not-italic">гордимся</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                  filter === c
                    ? "border-gold-400 bg-gold-gradient text-ink-950 shadow-glow"
                    : "border-white/10 bg-white/5 text-cream-50/65 hover:border-gold-400/40 hover:text-gold-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-12 grid auto-rows-[260px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.a
                href="#"
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`group relative col-span-2 overflow-hidden rounded-2xl border border-white/5 bg-ink-800 ${
                  p.size === "lg" ? "sm:col-span-2 sm:row-span-2" : "sm:col-span-1"
                }`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-transparent to-gold-500/0 opacity-0 transition-opacity duration-500 group-hover:from-gold-500/20 group-hover:opacity-100" />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cream-50 backdrop-blur-md">
                    {p.cat}
                  </span>
                </div>

                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ink-950/70 text-cream-50 opacity-0 backdrop-blur-md transition-all group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-1.5 text-[11px] text-cream-50/65">
                    <MapPin className="h-3 w-3" /> {p.city}
                  </div>
                  <div className="mt-1.5 font-display text-lg leading-tight text-cream-50 sm:text-xl">
                    {p.title}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-gold-300">{p.meta}</div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
