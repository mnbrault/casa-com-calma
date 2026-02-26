export default function Addresses({ t }) {
  return (
    <section id="addresses" className="py-24 bg-[#f6f4d2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#a08060] text-xs tracking-[0.3em] uppercase mb-4">
            {t.addresses.sectionLabel}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-[#5a2d28] font-light leading-tight">
            {t.addresses.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Restaurants */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#5a2d28] mb-8 pb-4 border-b border-[#c8d888]">
              Restaurants
            </h3>
            <div className="space-y-0">
              {t.addresses.restaurants.map((r) => (
                <div
                  key={r.name}
                  className="py-5 border-b border-[#c8d888] group flex items-start justify-between gap-4"
                >
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] text-xl text-[#5a2d28] group-hover:text-[#a44a3f] transition-colors">
                      {r.name}
                    </h4>
                    <p className="text-[#a08060] text-sm font-light mt-1">{r.desc}</p>
                  </div>
                  <span className="text-xs text-[#a08060] bg-[#d4e09b] px-2 py-1 rounded shrink-0 mt-1">
                    {r.location}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Markets */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#5a2d28] mb-8 pb-4 border-b border-[#c8d888]">
              {t.addresses.marketsTitle}
            </h3>
            <div className="space-y-6">
              {t.addresses.markets.map((m) => (
                <div
                  key={m.name}
                  className="p-6 bg-[#d4e09b] hover:bg-[#c8d888] transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-[family-name:var(--font-display)] text-xl text-[#5a2d28]">
                      {m.name}
                    </h4>
                    <span className="text-xs text-[#a44a3f] font-medium shrink-0">{m.detail}</span>
                  </div>
                  <p className="text-[#a08060] text-sm font-light">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo strip */}
        <div className="mt-16 grid grid-cols-3 md:grid-cols-5 gap-2">
          {['/IMG_1358.jpeg', '/IMG_1359.jpeg', '/IMG_1365.jpeg', '/IMG_1367.jpeg', '/IMG_1372.jpeg'].map((src) => (
            <div key={src} className="aspect-square overflow-hidden">
              <img
                src={src}
                alt="Algarve"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
