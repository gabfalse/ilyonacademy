import { openWhatsApp } from "../../Utils/Whatsapp";

function QuickLinks() {
  const links = [
    
    // {
    //   title: "Temukan Kami",
    //   description: "Akses media sosial dan berbagai informasi Ilyon.",
    //   icon: "🔗",
    //   href: "https://linktr.ee/ilyon",
    //   action: "link",
    //   color: "bg-teal-light",
    //   buttonText: "Buka Linktree",
    // },
    {
      title: "Buku Panduan Belajar",
      description: "Jelajahi worksheet dan produk belajar kami.",
      icon: "📚",
      href: "https://lynk.id/ilyon",
      action: "link",
      color: "bg-yellow-light",
      buttonText: "Kunjungi Lynk.id",
    },
    {
      title: "Gabung Menjadi Tutor",
      description: "Mulai perjalanan belajar bersama Ilyon Academy.",
      icon: "📝",
      href: null,
      action: "whatsapp",
      color: "bg-purple-light",
      buttonText: "Daftar",
    },
  ];

  return (
    <section
      id="quick-links"
      className="relative overflow-hidden bg-cream px-5 py-12 sm:px-6 sm:py-16"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-20 top-0 size-48 rounded-full bg-purple-light/30" />
      <div className="pointer-events-none absolute -left-20 bottom-0 size-40 rounded-full bg-teal-light/30" />

      <div className="container relative mx-auto">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-yellow-light px-4 py-2 text-[10px] font-bold tracking-wide text-[#8c6800] sm:text-xs">
            ✨ QUICK ACCESS
          </span>

          <h2 className="mt-4 font-baloo text-3xl font-extrabold tracking-tight text-purple-dark sm:text-4xl">
            Explore <span className="text-teal">Ilyon Academy!</span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            Semua akses penting Ilyon Academy, cukup dalam satu tempat.
          </p>
        </div>

        {/* Quick Link Cards */}
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
          {links.map((link) => (
            <div
              key={link.title}
              className="group flex flex-col rounded-3xl border border-purple/10 bg-white p-5 shadow-[0_6px_20px_rgba(66,45,117,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(66,45,117,0.1)] sm:p-6"
            >
              {/* Icon */}
              <div
                className={`grid size-12 place-items-center rounded-2xl ${link.color} text-2xl transition group-hover:scale-105`}
              >
                {link.icon}
              </div>

              {/* Text */}
              <h3 className="mt-5 text-base font-extrabold text-purple-dark sm:text-lg">
                {link.title}
              </h3>

              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted sm:text-sm">
                {link.description}
              </p>

              {/* Action */}
              {link.action === "whatsapp" ? (
                <button
                  onClick={openWhatsApp}
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-purple px-5 text-sm font-bold text-white transition hover:bg-purple-dark"
                >
                  {link.buttonText}
                  <span className="ml-2 text-lg">→</span>
                </button>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full border-2 border-purple/10 bg-white px-5 text-sm font-bold text-purple transition hover:border-purple hover:bg-purple-light/30"
                >
                  {link.buttonText}
                  <span className="ml-2 text-lg">↗</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickLinks;