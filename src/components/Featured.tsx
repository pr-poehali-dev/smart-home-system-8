export default function Featured() {
  const features = [
    {
      icon: "☢️",
      title: "Выживание",
      desc: "Контролируй радиацию, голод и усталость. Каждое решение стоит жизни.",
    },
    {
      icon: "🔮",
      title: "Аномалии",
      desc: "Динамические гравитационные, термические и электрические аномалии. Брось болт — узнай правду.",
    },
    {
      icon: "⚔️",
      title: "Фракции",
      desc: "«Долг», «Свобода», Бандиты, Учёные. Твой выбор определяет судьбу Зоны.",
    },
  ];

  return (
    <div id="mechanics" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-neutral-950">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/7e42f8e5-0107-4292-86fa-a79ea714fb97/files/42c4eb59-8ce7-458e-95e8-df7d36b347a5.jpg"
          alt="Лаборатория Зоны"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-xs tracking-[0.3em]" style={{ color: "#7fff00" }}>
          Ключевые механики
        </h3>
        <p className="text-2xl lg:text-4xl mb-10 text-white leading-tight font-bold">
          Выживание — это не просто полоска здоровья.<br />
          Это система, где каждая секунда имеет цену.
        </p>
        <div className="flex flex-col gap-6 mb-10">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 items-start">
              <span className="text-2xl mt-0.5">{f.icon}</span>
              <div>
                <p className="text-white font-bold uppercase tracking-wide text-sm mb-1">{f.title}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="px-6 py-3 font-bold uppercase tracking-widest text-sm text-black transition-all duration-300 hover:opacity-80 w-fit"
          style={{ backgroundColor: "#7fff00" }}
        >
          Узнать больше
        </button>
      </div>
    </div>
  );
}
