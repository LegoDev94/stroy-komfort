import { motion } from "framer-motion";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5 sm:gap-3.5">
      <motion.div
        whileHover={{ rotate: -4, scale: 1.06 }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
        className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-[12px] bg-gold-gradient text-ink-950 shadow-[0_10px_28px_-10px_rgba(212,175,107,0.6)] sm:h-12 sm:w-12 sm:rounded-[14px]"
        aria-label="Строй-Комфорт"
      >
        {/* Custom monogram К with foundation line */}
        <svg
          viewBox="0 0 32 32"
          className="h-[22px] w-[22px] sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* К — vertical stroke */}
          <path d="M11 6 V26" />
          {/* К — upper diagonal */}
          <path d="M11 16 L23 6" />
          {/* К — lower diagonal */}
          <path d="M11 16 L23 26" />
          {/* Convergence accent dot */}
          <circle cx="11" cy="16" r="1.6" fill="currentColor" stroke="none" />
          {/* Foundation line */}
          <path d="M5 29 H27" strokeWidth="1.4" opacity="0.55" />
        </svg>

        {/* Inset highlight */}
        <span className="pointer-events-none absolute inset-0 rounded-[14px] ring-1 ring-inset ring-white/30" />
        {/* Hover shine sweep */}
        <span className="pointer-events-none absolute -inset-2 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </motion.div>

      {!compact && (
        <div className="leading-tight">
          <div className="whitespace-nowrap font-display text-[15px] font-semibold tracking-tight text-cream-50 sm:text-[18px]">
            Строй
            <span className="mx-[2px] text-gold-300">·</span>
            Комфорт
          </div>
          <div className="mt-0.5 hidden whitespace-nowrap text-[8.5px] font-semibold uppercase tracking-[0.22em] text-cream-50/45 xs:block sm:text-[9.5px] sm:tracking-[0.3em]">
            квартиры · дома · офисы
          </div>
        </div>
      )}
    </a>
  );
}
