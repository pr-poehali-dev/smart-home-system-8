export default function Platforms() {
  const platforms = [
    { icon: "🖥️", name: "PC", sub: "Windows" },
    { icon: "🎮", name: "PS5", sub: "PlayStation 5" },
    { icon: "🟢", name: "Xbox", sub: "Series X/S" },
  ];

  const modes = [
    {
      tag: "Кооператив",
      title: "До 4 игроков",
      desc: "Проходите сюжетные миссии вместе. Разделите роли, прикройте спину друга — Зона не прощает одиночества.",
    },
    {
      tag: "PvP",
      title: "Охота за артефактами",
      desc: "Соревновательный режим: найди артефакты раньше противника. Аномалии не выбирают сторону.",
    },
    {
      tag: "PvP",
      title: "Выброс",
      desc: "Последний выживший в условиях энергетической волны. Укрытий меньше, времени нет.",
    },
  ];

  return (
    <div id="world" className="bg-neutral-900 px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">

        {/* Engine + Platforms */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10 mb-24 border-b border-neutral-700 pb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#7fff00" }}>
              Движок
            </p>
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              Unreal<br />Engine 5
            </h2>
            <p className="text-neutral-400 mt-4 max-w-sm text-sm leading-relaxed">
              Реалистичная графика, объёмное освещение и физически достоверные аномалии — всё на базе последнего поколения технологий.
            </p>
          </div>
          <div className="flex gap-6 lg:gap-10">
            {platforms.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-2 border border-neutral-700 px-6 py-5 hover:border-[#7fff00] transition-colors duration-300">
                <span className="text-3xl">{p.icon}</span>
                <p className="text-white font-black text-lg">{p.name}</p>
                <p className="text-neutral-500 text-xs uppercase tracking-wide">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Multiplayer */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#7fff00" }}>
            Мультиплеер
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-12">
            Зона для своих — и против чужих
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modes.map((m) => (
              <div key={m.title} className="border border-neutral-700 p-6 hover:border-[#7fff00] transition-colors duration-300">
                <p className="text-xs uppercase tracking-widest mb-3 font-bold" style={{ color: "#7fff00" }}>
                  {m.tag}
                </p>
                <p className="text-white font-black text-xl mb-3">{m.title}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
