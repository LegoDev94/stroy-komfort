import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "../lib/cn";

const nav = [
  { label: "Работы", href: "#portfolio" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Этапы", href: "#process" },
  { label: "Контакты", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string>("");

  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    nav.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-gold-gradient"
      />

      {/* Top fixed wrapper — pads for iPhone notch / dynamic island */}
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        {/* Announcement strip — collapses on scroll */}
        <div
          className={cn(
            "overflow-hidden border-b border-white/5 bg-ink-950/80 backdrop-blur-xl transition-all duration-500",
            scrolled ? "h-0 opacity-0" : "h-9 opacity-100"
          )}
        >
          <div className="container-x flex h-9 items-center justify-between text-[11px] text-cream-50/65">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="hidden items-center gap-1.5 sm:flex">
                <Sparkles className="h-3 w-3 text-gold-300" />
                Бесплатный замер сегодня
              </span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-gold-300" />
                Москва, МО · 75 регионов РФ
              </span>
            </div>
            <div className="hidden items-center gap-5 md:flex">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3 w-3 text-gold-300" />
                Пн–Вс с 8:00 до 22:00
              </span>
              <span className="h-3 w-px bg-white/15" />
              <a
                href="mailto:hello@stroy-komfort.ru"
                className="transition-colors hover:text-gold-300"
              >
                hello@stroy-komfort.ru
              </a>
            </div>
          </div>
        </div>

        {/* Main header */}
        <header className={cn("transition-all duration-500", scrolled ? "py-2" : "py-3")}>
          <div className="container-x">
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
              className={cn(
                "flex items-center gap-2 rounded-2xl px-2.5 py-2 transition-all duration-500 sm:gap-3 sm:px-3.5 sm:py-2.5",
                scrolled
                  ? "border-grad glass shadow-soft"
                  : "border border-white/5 bg-ink-950/40 backdrop-blur-md"
              )}
            >
              <Logo />

              {/* Desktop nav */}
              <nav
                onMouseLeave={() => setHovered(null)}
                className="relative ml-auto hidden items-center gap-0.5 xl:flex"
              >
                {nav.map((item) => {
                  const isActive = active === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onMouseEnter={() => setHovered(item.href)}
                      className={cn(
                        "relative whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300",
                        isActive
                          ? "text-cream-50"
                          : "text-cream-50/65 hover:text-cream-50"
                      )}
                    >
                      <AnimatePresence>
                        {hovered === item.href && (
                          <motion.span
                            layoutId="nav-hover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                            className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.07]"
                          />
                        )}
                      </AnimatePresence>
                      <span className="relative z-10">{item.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-dot"
                          className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold-400 shadow-[0_0_8px_rgba(220,190,107,0.9)]"
                        />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Right actions — pinned to far right */}
              <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
                {/* Phone pill with number — md+ only */}
                <a
                  href="tel:+78001234567"
                  className="hidden items-center gap-2.5 whitespace-nowrap rounded-full border border-white/5 bg-white/[0.04] px-3.5 py-2 text-[13px] font-semibold text-cream-50 transition-all hover:border-gold-400/40 hover:bg-white/[0.07] md:inline-flex"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-gradient text-ink-950 shadow-glow">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  8 800 123-45-67
                </a>

                {/* Phone gold icon — mobile only (replaces CTA on tiny screens) */}
                <a
                  href="tel:+78001234567"
                  aria-label="Позвонить"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-gradient text-ink-950 shadow-glow transition-all active:scale-95 sm:hidden"
                >
                  <Phone className="h-4 w-4" />
                </a>

                {/* CTA — sm+ */}
                <a
                  href="#contact"
                  className="group relative hidden shrink-0 items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-gold-gradient px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-ink-950 shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-glow-strong sm:inline-flex"
                >
                  <span className="relative z-10">Заказать звонок</span>
                  <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  {/* Shine sweep */}
                  <span className="pointer-events-none absolute inset-y-0 -inset-x-2 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </a>

                {/* Mobile menu — visible below xl */}
                <button
                  onClick={() => setOpen(true)}
                  aria-label="Открыть меню"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-cream-50 transition-colors hover:border-gold-400/40 hover:text-gold-300 active:scale-95 xl:hidden"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </header>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>{open && <MobileMenu onClose={() => setOpen(false)} active={active} />}</AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose, active }: { onClose: () => void; active: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[90] xl:hidden"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* Backdrop with subtle gradient */}
      <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-transparent" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />

      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -8, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-full flex-col overflow-y-auto"
      >
        {/* Header strip */}
        <div className="container-x flex h-20 shrink-0 items-center justify-between">
          <Logo />
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-cream-50 transition-colors hover:border-gold-400/40 hover:text-gold-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
          }}
          className="container-x mt-2 flex flex-col"
        >
          {nav.map((item, i) => (
            <motion.a
              key={item.href}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 },
              }}
              href={item.href}
              onClick={onClose}
              className="group relative flex items-center justify-between border-b border-white/5 py-5"
            >
              <span className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-gold-300/70">
                  0{i + 1}
                </span>
                <span
                  className={cn(
                    "font-display text-[28px] leading-none tracking-tight transition-colors sm:text-[32px]",
                    active === item.href
                      ? "text-gold-grad"
                      : "text-cream-50 group-hover:text-gold-200"
                  )}
                >
                  {item.label}
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-cream-50/40 transition-all group-hover:rotate-12 group-hover:text-gold-300" />
            </motion.a>
          ))}
        </motion.nav>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="container-x mt-auto pb-10 pt-10"
        >
          <a
            href="tel:+78001234567"
            className="flex items-center gap-3 text-cream-50 transition-colors hover:text-gold-300"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-gradient text-ink-950 shadow-glow">
              <Phone className="h-4 w-4" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-cream-50/55">
                звоните
              </div>
              <div className="text-base font-semibold">8 800 123-45-67</div>
            </div>
          </a>

          <a
            href="mailto:hello@stroy-komfort.ru"
            className="mt-3 flex items-center gap-3 text-cream-50/85 transition-colors hover:text-gold-300"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5">
              <Mail className="h-4 w-4 text-gold-300" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-cream-50/55">
                пишите
              </div>
              <div className="text-base">hello@stroy-komfort.ru</div>
            </div>
          </a>

          <div className="mt-5 flex items-center gap-2 text-[11px] text-cream-50/55">
            <MapPin className="h-3.5 w-3.5 text-gold-300" />
            Москва · Московская область · 75 регионов РФ
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary mt-7 w-full !py-4 text-sm"
          >
            Заказать звонок
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
