
import {
  MapPin,
  CalendarDays,
  GraduationCap,
  UserRound,
  Check,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { openWhatsApp } from "../Utils/Whatsapp";

const PROGRAMS = [
  {
    id: "harian",
    icon: MapPin,
    number: "01",
    title: "Harian",
    subtitle: "Coba & mulai belajar",
    description:
      "Pilihan fleksibel untuk anak yang ingin mengikuti kegiatan belajar tanpa harus berkomitmen dalam paket bulanan.",
    price: "Rp5.000",
    priceNote: "/ pertemuan",
    badge: "FLEKSIBEL",
    theme: "purple",

    features: [
         { text: "Belajar bersama pengajar", included: true },
      { text: "Materi sesuai level", included: true },
      { text: "Tes level awal", included: true },
      { text: "Sistem perkembangan level", included: false },
      { text: "Laporan perkembangan bulanan", included: false },
      { text: "Tes kenaikan level", included: false },
      { text: "Target & roadmap belajar", included: false },
      { text: "Evaluasi akhir semester", included: false },
      { text: "Sertifikat pencapaian", included: false },
    ],
  },

  {
    id: "bulanan",
    icon: CalendarDays,
    number: "02",
    title: "Bulanan",
    subtitle: "Belajar & berkembang",
    description:
      "Program belajar rutin dengan pemantauan perkembangan anak melalui evaluasi dan laporan setiap bulan.",
    price: "Rp200.000",
    priceNote: "/ bulan",
    badge: "PALING POPULER",
    theme: "teal",

    features: [
       { text: "Belajar bersama pengajar", included: true },
      { text: "Materi sesuai level", included: true },
      { text: "Tes level awal", included: true },
      { text: "Sistem perkembangan level", included: true },
      { text: "Laporan perkembangan bulanan", included: true },
      { text: "Tes kenaikan level", included: true },
      { text: "Target & roadmap belajar", included: false },
      { text: "Evaluasi akhir semester", included: false },
      { text: "Sertifikat pencapaian", included: false },
    ],
  },

  {
    id: "semester",
    icon: GraduationCap,
    number: "03",
    title: "Semester",
    subtitle: "Tumbuh dengan target",
    description:
      "Program jangka panjang dengan target belajar yang lebih terarah dan pemantauan perkembangan anak secara berkala.",
    price: "Rp1.000.000",
    priceNote: "/ semester",
    badge: "PROGRAM JANGKA PANJANG",
    theme: "yellow",

    features: [
      { text: "Belajar bersama pengajar", included: true },
      { text: "Materi sesuai level", included: true },
      { text: "Tes level awal", included: true },
      { text: "Sistem perkembangan level", included: true },
      { text: "Laporan perkembangan bulanan", included: true },
      { text: "Tes kenaikan level", included: true },
      { text: "Target & roadmap belajar", included: true },
      { text: "Evaluasi akhir semester", included: true },
      { text: "Sertifikat pencapaian", included: true },
    ],
  },

  {
    id: "private",
    icon: UserRound,
    number: "04",
    title: "Private",
    subtitle: "Fokus 1 murid 1 pengajar",
    description:
      "Pembelajaran secara personal dengan pengajar yang datang langsung ke rumah murid dan menyesuaikan materi dengan kebutuhan belajar.",
    price: "Rp100.000",
    priceNote: "/ 4x pertemuan",
    badge: "1 ON 1",
    theme: "coral",

    features: [
      { text: "1 murid dengan 1 pengajar", included: true },
      { text: "Pengajar datang ke rumah", included: true },
      { text: "Materi sesuai kebutuhan", included: true },
      { text: "Tes level awal", included: true },
      { text: "Sistem perkembangan level", included: true },
      { text: "Evaluasi perkembangan", included: true },
    ],
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
        group relative flex h-full flex-col overflow-hidden
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
            key={feature.text}
            className="
              flex items-start gap-2.5
              text-xs
            "
          >
            <span
              className={`
                mt-0.5
                grid size-5 shrink-0
                place-items-center
                rounded-full
                ${
                  feature.included
                    ? "bg-teal-light text-teal-dark"
                    : "bg-gray-100 text-gray-400"
                }
              `}
            >
              {feature.included ? (
                <Check size={12} strokeWidth={3} />
              ) : (
                <X size={11} strokeWidth={2.5} />
              )}
            </span>

            <span
              className={
                feature.included
                  ? "text-muted"
                  : "text-gray-400"
              }
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}

      <button
        type="button"
        onClick={() => openWhatsApp()}
        className="
          mt-auto
          pt-7
        "
      >
        <span
          className="
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
            group-hover:border-purple
            group-hover:bg-purple
            group-hover:text-white
          "
        >
          Tanya Program
          <ArrowRight size={16} />
        </span>
      </button>
    </div>
  );
}

function ProgramPage() {
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
            Pilih Program Belajar
            <br />

            <span className="text-teal">
              Sesuai Kebutuhan Anak
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-muted
              md:text-base
            "
          >
            ILYON Academy menyediakan program belajar yang
            fleksibel maupun berkelanjutan, dilengkapi dengan
            sistem level untuk membantu memantau perkembangan
            belajar anak.
          </p>
        </div>

        {/* =========================
            REGULER
        ========================= */}

        <div className="mb-6 mt-12">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-purple-light text-purple">
              <Sparkles size={19} />
            </div>

            <div>
              <h3 className="font-baloo text-2xl font-extrabold text-purple-dark">
                Program Reguler
              </h3>

              <p className="text-xs text-muted">
                Pilih berdasarkan kebutuhan dan lama belajar
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            grid
            gap-5
            md:grid-cols-3
          "
        >
          {PROGRAMS.slice(0, 3).map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
            />
          ))}
        </div>

        {/* =========================
            PRIVATE
        ========================= */}

        <div className="mb-6 mt-12">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-coral-light text-coral">
              <UserRound size={19} />
            </div>

            <div>
              <h3 className="font-baloo text-2xl font-extrabold text-purple-dark">
                Program Private
              </h3>

              <p className="text-xs text-muted">
                Pembelajaran lebih personal untuk kebutuhan khusus
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-md">
          <ProgramCard program={PROGRAMS[3]} />
        </div>

        {/* =========================
            BOTTOM NOTE
        ========================= */}

        <div
          className="
            mt-10
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

export default ProgramPage;
