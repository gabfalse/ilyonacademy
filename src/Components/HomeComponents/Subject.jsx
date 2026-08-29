import {
  BookOpen,
  Calculator,
  Code2,
  Languages,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { openWhatsApp } from "../../Utils/Whatsapp";

const SUBJECTS = [
  {
    id: "english",
    title: "Bahasa Inggris",
    subtitle: "Program Unggulan",
    description:
      "Membantu anak membangun kemampuan Bahasa Inggris secara bertahap melalui kegiatan belajar yang menyenangkan dan sesuai dengan levelnya.",
    icon: Languages,
    featured: true,

    points: [
      "Vocabulary & percakapan sehari-hari",
      "Grammar dasar hingga lanjutan",
      "Speaking & pronunciation",
      "Reading & comprehension",
    ],
  },

  {
    id: "math",
    title: "Matematika",
    subtitle: "Logika & Numerasi",
    description:
      "Membantu anak memahami konsep matematika dengan cara yang lebih sederhana, bertahap, dan mudah dipahami.",
    icon: Calculator,
    color: "teal",

    points: [
      "Berhitung & operasi dasar",
      "Pemahaman konsep",
      "Pemecahan masalah",
    ],
  },

  {
    id: "calistung",
    title: "Calistung",
    subtitle: "Dasar Belajar Anak",
    description:
      "Mendampingi anak mengenal membaca, menulis, dan berhitung melalui aktivitas belajar yang menyenangkan.",
    icon: BookOpen,
    color: "yellow",

    points: [
      "Mengenal huruf & angka",
      "Membaca bertahap",
      "Menulis & berhitung dasar",
    ],
  },

  {
    id: "coding",
    title: "Coding for Kids",
    subtitle: "Kreativitas & Teknologi",
    description:
      "Mengenalkan dunia coding kepada anak melalui aktivitas yang interaktif dan sesuai dengan usia serta kemampuan mereka.",
    icon: Code2,
    color: "coral",

    points: [
      "Logika & computational thinking",
      "Dasar pemrograman",
      "Membuat project sederhana",
    ],
  },
];

const COLOR_MAP = {
  teal: {
    icon: "bg-teal-light text-teal-dark",
    badge: "bg-teal-light text-teal-dark",
    number: "text-teal-light",
  },

  yellow: {
    icon: "bg-yellow-light text-[#8c6800]",
    badge: "bg-yellow-light text-[#8c6800]",
    number: "text-yellow-light",
  },

  coral: {
    icon: "bg-coral-light text-coral",
    badge: "bg-coral-light text-coral",
    number: "text-coral-light",
  },
};

function SubjectCard({ subject, index }) {
  const Icon = subject.icon;
  const colors = COLOR_MAP[subject.color];

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border border-[#eee9f7]
        bg-white
        p-7
        shadow-[0_10px_30px_rgba(66,45,117,0.06)]
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_18px_40px_rgba(66,45,117,0.1)]
      "
    >

      {/* Number */}

      <span
        className={`
          pointer-events-none
          absolute
          right-5
          top-3
          font-baloo
          text-[70px]
          font-extrabold
          leading-none
          opacity-40
          ${colors.number}
        `}
      >
        0{index + 2}
      </span>

      {/* Icon */}

      <div
        className={`
          relative
          mb-6
          flex
          size-14
          items-center
          justify-center
          rounded-2xl
          ${colors.icon}
        `}
      >
        <Icon size={26} />
      </div>

      {/* Badge */}

      <span
        className={`
          inline-flex
          rounded-full
          px-3
          py-1.5
          text-[10px]
          font-extrabold
          ${colors.badge}
        `}
      >
        {subject.subtitle}
      </span>

      {/* Title */}

      <h3
        className="
          mt-4
          font-baloo
          text-2xl
          font-extrabold
          text-purple-dark
        "
      >
        {subject.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-3
          text-sm
          leading-7
          text-muted
        "
      >
        {subject.description}
      </p>

      {/* Points */}

      <div className="mt-5 space-y-2.5">

        {subject.points.map((point) => (
          <div
            key={point}
            className="
              flex
              items-start
              gap-2
              text-xs
              text-muted
            "
          >
            <CheckCircle2
              size={15}
              className="mt-0.5 shrink-0 text-teal"
            />

            <span>{point}</span>
          </div>
        ))}

      </div>

      {/* Bottom */}

      <div
        className="
          mt-6
          h-1
          w-10
          rounded-full
          bg-purple-light
          transition-all duration-300
          group-hover:w-16
        "
      />

    </div>
  );
}

function Subjects() {
  const english = SUBJECTS[0];

  return (
    <main className="min-h-screen bg-cream text-text">

      {/* =========================
          HERO
      ========================= */}

      <section
      id="subjects"
        className="
          relative
          overflow-hidden
          px-0
          py-20
          md:py-24
        "
      >

        {/* Decoration */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[80px]
            -top-[60px]
            size-[180px]
            rounded-full
            bg-purple-light

            sm:-right-[100px]
            sm:-top-[80px]
            sm:size-[240px]

            lg:-right-[150px]
            lg:-top-[100px]
            lg:size-[350px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-[40px]
            bottom-[100px]
            size-[100px]
            rounded-full
            border-[18px]
            border-yellow-light
          "
        />

        <div className="container relative">

          <div className="mx-auto max-w-3xl text-center">

            <span className="section-label">
              MATA PELAJARAN
            </span>

            <h1
              className="
                mt-5
                font-baloo
                text-[48px]
                font-extrabold
                leading-[0.95]
                tracking-[-1.5px]
                text-purple-dark

                sm:text-[60px]
                md:text-[72px]
              "
            >
              Belajar Banyak Hal,
              <br />

              <span className="text-teal">
                Tetap Menyenangkan!
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-muted
                md:text-base
              "
            >
              Pilihan mata pelajaran yang dirancang untuk membantu
              anak memahami pelajaran, membangun kemampuan dasar,
              dan mengembangkan potensi mereka.
            </p>

          </div>

        </div>
      </section>

      {/* =========================
          ENGLISH FEATURE
      ========================= */}

      <section
        className="
          bg-white
          px-0
          py-20
          md:py-24
        "
      >

        <div className="container">

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              bg-purple
              px-7
              py-10
              md:px-12
              md:py-12
            "
          >

            {/* Decorations */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                size-48
                rounded-full
                bg-white/5
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                left-1/3
                size-56
                rounded-full
                bg-teal/15
              "
            />

            <div
              className="
                relative
                grid
                items-center
                gap-10
                lg:grid-cols-[1.1fr_0.9fr]
              "
            >

              {/* Content */}

              <div>

                <div
                  className="
                    mb-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-yellow
                    px-4
                    py-2
                    text-[10px]
                    font-extrabold
                    tracking-wide
                    text-[#6d5200]
                  "
                >
                  <Sparkles size={14} />

                  SUBJECT UNGGULAN
                </div>

                <h2
                  className="
                    font-baloo
                    text-4xl
                    font-extrabold
                    leading-tight
                    text-white
                    md:text-5xl
                  "
                >
                  Bahasa Inggris
                  <br />

                  <span className="text-yellow">
                    untuk Anak
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/75
                    md:text-base
                  "
                >
                  {english.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                  {english.points.map((point) => (
                    <div
                      key={point}
                      className="
                        flex
                        items-center
                        gap-2.5
                        text-xs
                        font-semibold
                        text-white/90
                      "
                    >
                      <span
                        className="
                          grid
                          size-6
                          shrink-0
                          place-items-center
                          rounded-full
                          bg-white/10
                          text-yellow
                        "
                      >
                        ✓
                      </span>

                      {point}
                    </div>
                  ))}

                </div>

                <button
                  onClick={openWhatsApp}
                  className="
                    mt-8
                    inline-flex
                    min-h-[48px]
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-white
                    px-6
                    text-sm
                    font-bold
                    text-purple
                    shadow-[0_10px_25px_rgba(0,0,0,0.1)]
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  Konsultasi Bahasa Inggris
                  <ArrowRight size={17} />
                </button>

              </div>

              {/* Visual */}

              <div
                className="
                  relative
                  flex
                  min-h-[280px]
                  items-center
                  justify-center
                "
              >

                {/* Main Circle */}

                <div
                  className="
                    flex
                    size-[230px]
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    md:size-[270px]
                  "
                >

                  <div
                    className="
                      flex
                      size-[180px]
                      flex-col
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-center
                      shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                      md:size-[210px]
                    "
                  >

                    <Languages
                      size={48}
                      className="text-purple"
                    />

                    <span
                      className="
                        mt-3
                        font-baloo
                        text-2xl
                        font-extrabold
                        text-purple-dark
                      "
                    >
                      English
                    </span>

                    <span
                      className="
                        mt-1
                        text-[10px]
                        font-semibold
                        text-muted
                      "
                    >
                      Learn • Practice • Grow
                    </span>

                  </div>

                </div>

                {/* Floating Badge */}

                <div
                  className="
                    absolute
                    right-0
                    top-5
                    rounded-[18px]
                    bg-yellow-light
                    px-4
                    py-3
                    shadow-lg
                  "
                >

                  <p className="text-[10px] font-bold text-[#8c6800]">
                    Ages
                  </p>

                  <p className="font-baloo text-xl font-extrabold text-purple-dark">
                    4–15
                  </p>

                </div>

                <div
                  className="
                    absolute
                    bottom-4
                    left-0
                    rounded-[18px]
                    bg-white
                    px-4
                    py-3
                    shadow-lg
                  "
                >

                  <p className="text-[10px] font-bold text-muted">
                    Fokus
                  </p>

                  <p className="text-xs font-extrabold text-purple">
                    Communication
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          OTHER SUBJECTS
      ========================= */}

      <section
        className="
          bg-cream
          px-0
          py-20
          md:py-24
        "
      >

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              PILIHAN LAINNYA
            </span>

            <h2
              className="
                font-baloo
                text-4xl
                font-extrabold
                text-purple-dark
                md:text-5xl
              "
            >
              Temukan Pelajaran
              <br />

              <span className="text-teal">
                yang Sesuai
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
              Selain Bahasa Inggris, ILYON juga menyediakan
              beberapa pilihan pembelajaran untuk membantu
              anak berkembang di berbagai bidang.
            </p>

          </div>

          <div
            className="
              grid
              gap-5
              md:grid-cols-3
            "
          >

            {SUBJECTS.slice(1).map((subject, index) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                index={index}
              />
            ))}

          </div>

        </div>
      </section>

      {/* =========================
          LEARNING APPROACH
      ========================= */}

      <section
        className="
          bg-white
          px-0
          py-20
          md:py-24
        "
      >

        <div className="container">

          <div className="mx-auto max-w-5xl">

            <div
              className="
                grid
                overflow-hidden
                rounded-[32px]
                border border-[#eee9f7]
                bg-cream
                md:grid-cols-2
              "
            >

              <div className="bg-purple p-8 text-white md:p-10">

                <div
                  className="
                    mb-6
                    flex
                    size-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/10
                    text-yellow
                  "
                >
                  <Sparkles size={25} />
                </div>

                <h2
                  className="
                    font-baloo
                    text-3xl
                    font-extrabold
                  "
                >
                  Tidak Harus
                  <br />
                  Sama untuk Semua
                </h2>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-white/75
                  "
                >
                  Setiap anak memiliki kemampuan dan kecepatan
                  belajar yang berbeda. Karena itu, pembelajaran
                  dapat disesuaikan dengan level dan kebutuhan anak.
                </p>

              </div>

              <div className="p-8 md:p-10">

                <div className="space-y-5">

                  <div className="flex gap-4">

                    <div
                      className="
                        grid
                        size-11
                        shrink-0
                        place-items-center
                        rounded-2xl
                        bg-purple-light
                        text-purple
                      "
                    >
                      01
                    </div>

                    <div>
                      <h3 className="font-baloo text-xl font-bold text-purple-dark">
                        Kenali Level Anak
                      </h3>

                      <p className="mt-1 text-xs leading-6 text-muted">
                        Pembelajaran dimulai dari kemampuan yang
                        sudah dimiliki anak.
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-4">

                    <div
                      className="
                        grid
                        size-11
                        shrink-0
                        place-items-center
                        rounded-2xl
                        bg-teal-light
                        text-teal-dark
                      "
                    >
                      02
                    </div>

                    <div>
                      <h3 className="font-baloo text-xl font-bold text-purple-dark">
                        Materi Bertahap
                      </h3>

                      <p className="mt-1 text-xs leading-6 text-muted">
                        Materi diberikan secara bertahap agar anak
                        dapat memahami konsep dengan lebih baik.
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-4">

                    <div
                      className="
                        grid
                        size-11
                        shrink-0
                        place-items-center
                        rounded-2xl
                        bg-yellow-light
                        text-[#8c6800]
                      "
                    >
                      03
                    </div>

                    <div>
                      <h3 className="font-baloo text-xl font-bold text-purple-dark">
                        Tumbuh dengan Percaya Diri
                      </h3>

                      <p className="mt-1 text-xs leading-6 text-muted">
                        Anak mendapatkan kesempatan untuk berkembang
                        sesuai potensi dan kemampuannya.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


    </main>
  );
}

export default Subjects;