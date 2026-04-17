export default function HowToPlay() {
  const steps = [
    {
      num: "01",
      title: "Очнись в Зоне",
      desc: "Ты приходишь в себя без снаряжения и памяти на окраине Зоны. Найди первое укрытие, обыщи окрестности — каждый предмет на счету.",
    },
    {
      num: "02",
      title: "Следи за состоянием",
      desc: "Контролируй радиацию, голод, усталость и травмы. Найди еду, воду и медикаменты — без этого далеко не уйдёшь.",
    },
    {
      num: "03",
      title: "Исследуй и собирай",
      desc: "Бросай болты, чтобы обнаруживать аномалии. Собирай артефакты — они дают уникальные способности, но излучают радиацию.",
    },
    {
      num: "04",
      title: "Выбери фракцию",
      desc: "«Долг», «Свобода» или одиночество — твой выбор меняет мир вокруг. Торгуй, выполняй задания, зарабатывай доверие.",
    },
    {
      num: "05",
      title: "Иди к Сердцу Зоны",
      desc: "Раскрой тайну своего прошлого. Пройди через Кордон, Тёмную долину, Янтарь и Припять — финал зависит от тебя.",
    },
  ];

  return (
    <div className="bg-neutral-950 px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#7fff00" }}>
          Обучение
        </p>
        <h2 className="text-3xl lg:text-5xl font-black text-white mb-16">
          Как выжить в Зоне
        </h2>
        <div className="flex flex-col gap-0">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-8 border-b border-neutral-800 group hover:border-[#7fff00] transition-colors duration-300"
            >
              <span
                className="text-5xl lg:text-7xl font-black leading-none shrink-0 w-24 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: i === 0 ? "#7fff00" : "#2a2a2a" }}
              >
                {s.num}
              </span>
              <div className="flex-1">
                <p className="text-white font-black text-xl lg:text-2xl mb-2">{s.title}</p>
                <p className="text-neutral-400 text-sm lg:text-base leading-relaxed max-w-2xl">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
