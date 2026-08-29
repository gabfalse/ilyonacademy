import {
  MapPin,
  Users,
  UserRound,
  Monitor,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { openWhatsApp } from "../../Utils/Whatsapp";

const PROGRAMS = [
  {
    id: "harian",
    icon: MapPin,
    number: "01",
    title: "Les Harian",
    subtitle: "Belajar langsung di lokasi",
    description:
      "Kegiatan belajar bersama pengajar di lokasi ILYON Academy dengan suasana belajar yang nyaman dan menyenangkan.",
    price: "Rp5.000",
    priceNote: "/ sekali pertemuan",
    features: [
      "Belajar bersama pengajar",
      "Suasana belajar menyenangkan",
      "Cocok untuk belajar rutin",
    ],
    theme: "purple",
  },

  {
    id: "small-group",
    icon: Users,
    number: "02",
    title: "Small Group",
    subtitle: "Belajar bersama teman",
    description:
      "Pengajar datang ke rumah salah satu murid dalam kelompok. Program ini cocok untuk belajar bersama teman dengan jumlah minimal 4 murid.",
    price: "Rp10.000",
    priceNote: "/ pertemuan",
    features: [
      "Minimal 4 murid",
      "Pengajar datang ke rumah",
      "Belajar bersama teman",
    ],
    theme: "teal",
    badge: "MIN. 4 MURID",
  },

  {
    id: "private",
    icon: UserRound,
    number: "03",
    title: "Private",
    subtitle: "Fokus belajar 1 murid",
    description:
      "Pengajar datang langsung ke rumah murid dan memberikan kegiatan belajar mengajar secara khusus agar materi dapat disampaikan sesuai kebutuhan murid.",
    price: "Rp100.000",
    priceNote: "/ 4x pertemuan",
    features: [
      "1 murid dengan 1 pengajar",
      "Pengajar datang ke rumah",
      "Materi lebih fokus dan personal",
    ],
    theme: "yellow",
    badge: "1 ON 1",
  },

  {
    id: "online",
    icon: Monitor,
    number: "04",
    title: "Online Class",
    subtitle: "Belajar dari mana saja",
    description:
      "Kegiatan belajar mengajar dilakukan secara online sehingga murid dapat mengikuti pembelajaran tanpa perlu datang ke lokasi.",
    price: "Rp5.000",
    priceNote: "/ Pertemuan",
    features: [
      "Belajar secara online",
      "Fleksibel dari rumah",
      "Tetap didampingi pengajar",
    ],
    theme: "coral",
  },
];

const THEME = {
  purple: {
    icon: "bg-purple-light text-purple",
    number: "text-purple-light",
    accent: "bg-purple",
    badge: "bg-purple-light text-purple",
  },
  teal: {
    icon: "bg-teal-light text-teal-dark",
    number: "text-teal-light",
    accent: "bg-teal",
    badge: "bg-teal-light text-teal-dark",
  },
  yellow: {
    icon: "bg-yellow-light text-yellow",
    number: "text-yellow-light",
    accent: "bg-yellow",
    badge: "bg-yellow-light text-[#8c6800]",
  },
  coral: {
    icon: "bg-coral-light text-coral",
    number: "text-coral-light",
    accent: "bg-coral",
    badge: "bg-coral-light text-coral",
  },
};

function ProgramCard({ program }) {
  const Icon = program.icon;
  const theme = THEME[program.theme];

  return (
    <div
      className="
        group relative overflow-hidden
        rounded-[30px]
        border border-[#eee9f7]
        bg-white
        p-6
        shadow-[0_12px_40px_rgba(66,45,117,0.07)]
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(66,45,117,0.12)]
        md:p-7
      "
    >
      {/* Top Accent */}

      <div
        className={`
          absolute left-0 right-0 top-0
          h-1.5
          ${theme.accent}
        `}
      />

      {/* Header */}

      <div className="flex items-start justify-between gap-4">

        <div
          className={`
            flex size-14 shrink-0
            items-center justify-center
            rounded-2xl
            ${theme.icon}
          `}
        >
          <Icon size={26} />
        </div>

        <span
          className={`
            font-baloo
            text-5xl
            font-extrabold
            leading-none
            ${theme.number}
          `}
        >
          {program.number}
        </span>

      </div>

      {/* Badge */}

      {program.badge && (
        <div className="mt-5">
          <span
            className={`
              inline-flex
              rounded-full
              px-3 py-1.5
              text-[10px]
              font-extrabold
              tracking-wide
              ${theme.badge}
            `}
          >
            {program.badge}
          </span>
        </div>
      )}

      {/* Title */}

      <h3
        className="
          mt-5
          font-baloo
          text-3xl
          font-extrabold
          text-purple-dark
        "
      >
        {program.title}
      </h3>

      <p
        className="
          mt-1
          text-sm
          font-bold
          text-purple
        "
      >
        {program.subtitle}
      </p>

      {/* Description */}

      <p
        className="
          mt-4
          min-h-[100px]
          text-sm
          leading-7
          text-muted
        "
      >
        {program.description}
      </p>

      {/* Price */}

      <div
        className="
          mt-5
          rounded-2xl
          bg-cream
          p-4
        "
      >
        <p className="text-[10px] font-bold uppercase tracking-wide text-muted">
          Mulai dari
        </p>

        <div className="mt-1 flex flex-wrap items-baseline gap-2">
          <span
            className="
              font-baloo
              text-3xl
              font-extrabold
              text-purple-dark
            "
          >
            {program.price}
          </span>

          <span className="text-xs text-muted">
            {program.priceNote}
          </span>
        </div>
      </div>

      {/* Features */}

      <div className="mt-5 space-y-3">

        {program.features.map((feature) => (
          <div
            key={feature}
            className="
              flex items-start gap-2.5
              text-xs
              text-muted
            "
          >
            <span
              className="
                mt-0.5
                grid size-5 shrink-0
                place-items-center
                rounded-full
                bg-teal-light
                text-teal-dark
              "
            >
              <Check size={12} strokeWidth={3} />
            </span>

            <span>{feature}</span>
          </div>
        ))}

      </div>

      {/* CTA */}

      <button
        onClick={openWhatsApp}
        className="
          mt-7
          inline-flex
          w-full
          min-h-[48px]
          items-center
          justify-center
          gap-2
          rounded-full
          border-2
          border-[#ded8ed]
          bg-white
          px-5
          text-sm
          font-bold
          text-purple
          transition-all
          duration-300
          hover:border-purple
          hover:bg-purple
          hover:text-white
        "
      >
        Tanya Program
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

function Program() {
  return (
    <section
      id="program"
      className="
        relative
        overflow-hidden
        bg-white
        px-0
        py-20
        md:py-24
      "
    >

      {/* =========================
          DECORATION
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[100px]
          top-[180px]
          size-[220px]
          rounded-full
          bg-purple-light/50
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[40px]
          bottom-[120px]
          size-[120px]
          rounded-full
          border-[18px]
          border-yellow-light
        "
      />

      <div className="container relative">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="section-heading">

          <span className="section-label">
            PROGRAM BELAJAR
          </span>

          <h2
            className="
              font-baloo
              text-4xl
              font-extrabold
              leading-tight
              text-purple-dark
              md:text-5xl
            "
          >
            Pilih Cara Belajar
            <br />

            <span className="text-teal">
              yang Paling Cocok
            </span>
          </h2>

          <p
            className="
              text-muted
              mt-4
              max-w-2xl
              text-sm
              leading-7
              md:text-base
            "
          >
            Setiap anak memiliki kebutuhan belajar yang berbeda.
            Karena itu, ILYON Academy menyediakan beberapa pilihan
            program yang dapat disesuaikan dengan kebutuhan dan
            kenyamanan belajar anak.
          </p>

        </div>

        {/* =========================
            PROGRAM GRID
        ========================= */}

        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {PROGRAMS.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
            />
          ))}

        </div>

        {/* =========================
            BOTTOM NOTE
        ========================= */}

        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-between
            gap-4
            rounded-[24px]
            bg-purple-light/60
            px-6
            py-5
            text-center
            sm:flex-row
            sm:text-left
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                grid size-11 shrink-0
                place-items-center
                rounded-2xl
                bg-white
                text-purple
                shadow-sm
              "
            >
              <Sparkles size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-purple-dark">
                Bingung memilih program?
              </p>

              <p className="mt-0.5 text-xs text-muted">
                Konsultasikan kebutuhan belajar anak bersama kami.
              </p>
            </div>

          </div>

         {/* Tombol Daftar Sekarang */}
<button
          type="button"
          onClick={() => openWhatsApp()}
          className="
    inline-flex
    min-h-[44px]
    items-center
    justify-center
    gap-2
    rounded-full
    bg-purple
    px-5
    text-xs
    font-bold
    text-white
    transition-all
    hover:-translate-y-0.5
    hover:bg-purple-dark
  "
>
  Daftar Sekarang
  <ArrowRight size={15} />
</button>

        </div>

      </div>
    </section>
  );
}

export default Program;