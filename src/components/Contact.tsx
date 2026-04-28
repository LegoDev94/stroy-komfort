import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, Phone, ShieldCheck } from "lucide-react";

const services = [
  "Отопление", "Сантехника", "Электрика", "Кровля",
  "Фасад", "Полы", "Мебель", "Клининг", "Котлы",
  "Бойлер", "Химчистка", "Ванная под ключ",
  "Помощь по хозяйству", "Утепление", "Малярные работы",
  "Доставка материалов",
];

export function Contact() {
  const [picked, setPicked] = useState<string[]>(["Отопление"]);
  const [form, setForm] = useState({ name: "", phone: "", note: "" });
  const [sent, setSent] = useState(false);

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
    setForm({ name: "", phone: "", note: "" });
    setPicked(["Отопление"]);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 lg:py-40">
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2200&q=85&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/95 to-ink-950" />
      </div>
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-50" />

      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="section-eyebrow">
              <span className="h-px w-9 bg-gold-400/70" />
              07 · Связаться
            </span>
            <h2 className="section-title mt-5">
              Бесплатный замер<br />
              и расчёт <em className="text-gold-grad font-display not-italic">за 1 день</em>
            </h2>
            <p className="mt-5 max-w-md text-base text-cream-50/65">
              Оставьте заявку — менеджер свяжется в течение 7 минут, согласует
              удобное время выезда инженера и подготовит предварительную смету бесплатно.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { Icon: ShieldCheck, t: "Договор и гарантия 5 лет", d: "Юридическая защита и страхование объекта" },
                { Icon: Phone, t: "Звонок за 7 минут", d: "Прораб лично уточнит все детали" },
                { Icon: MessageSquare, t: "Квартиры, дома, офисы", d: "Москва, МО и выезд по 75 регионам РФ" },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-500/15 text-gold-300">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cream-50">{t}</div>
                    <div className="text-xs text-cream-50/60">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.form
              onSubmit={submit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border-grad relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/80 p-7 shadow-card backdrop-blur-xl sm:p-9"
            >
              <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-gold-500/15 blur-3xl" />

              <div className="relative">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                  Что вас интересует?
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {services.map((s) => {
                    const active = picked.includes(s);
                    return (
                      <button
                        type="button"
                        key={s}
                        onClick={() => toggle(s)}
                        className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
                          active
                            ? "border-gold-400 bg-gold-gradient text-ink-950 shadow-glow"
                            : "border-white/10 bg-white/5 text-cream-50/70 hover:border-gold-400/40"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="relative mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  label="Имя"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  placeholder="Как к вам обращаться"
                />
                <Field
                  label="Телефон"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                  placeholder="+7 (999) 000-00-00"
                />
              </div>

              <div className="relative mt-4">
                <label className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-50/55">
                  Комментарий
                </label>
                <textarea
                  rows={3}
                  value={form.note}
                  onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                  placeholder="Опишите задачу, площадь, удобное время для звонка"
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-cream-50 placeholder:text-cream-50/40 outline-none transition-all focus:border-gold-400/60 focus:bg-white/10"
                />
              </div>

              <div className="relative mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="text-xs leading-relaxed text-cream-50/45">
                  Нажимая «Отправить», вы соглашаетесь с{" "}
                  <a href="#" className="text-gold-300 underline-offset-2 hover:underline">
                    политикой обработки данных
                  </a>
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Заявка отправлена
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-50/55">
        {label}
        {required && <span className="ml-1 text-gold-300">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-cream-50 placeholder:text-cream-50/40 outline-none transition-all focus:border-gold-400/60 focus:bg-white/10"
      />
    </div>
  );
}
