import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/7e42f8e5-0107-4292-86fa-a79ea714fb97/files/c6e148cf-1432-43d1-bd8d-d0b8ea9c0969.jpg"
          alt="Зона отчуждения"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs uppercase tracking-[0.4em] mb-6 opacity-70" style={{ color: "#7fff00" }}>
          Шутер · Выживание · RPG
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight mb-6 leading-none">
          ЭХО ЗОНЫ
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed mb-10">
          Зона изменилась. Аномалии непредсказуемы. Мутанты охотятся.<br />
          Раскрой тайну своего прошлого — или останься здесь навсегда.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-3 font-bold uppercase tracking-widest text-sm text-black transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "#7fff00" }}
          >
            Добавить в Wishlist
          </button>
          <button className="px-8 py-3 font-bold uppercase tracking-widest text-sm text-white border border-white/50 transition-all duration-300 hover:bg-white/10">
            Смотреть трейлер
          </button>
        </div>
      </div>
    </div>
  );
}