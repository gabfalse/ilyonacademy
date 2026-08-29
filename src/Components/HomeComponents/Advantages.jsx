import {
  
  UserRound,
  Users,
  Heart,
  
  Target,
  Home,
} from "lucide-react";

const ADVANTAGES = [
  {
    number: "01",
    icon: UserRound,
    title: "Belajar Lebih Fokus",
    description:
      "Program private memberikan perhatian penuh kepada satu anak sehingga pengajar dapat menyesuaikan materi dengan kebutuhan belajarnya.",
    color: "purple",
    iconClass: "bg-purple-light text-purple",
    numberClass: "text-purple-light",
  },

  {
    number: "02",
    icon: Users,
    title: "Small Group yang Nyaman",
    description:
      "Belajar bersama kelompok kecil membuat anak tetap mendapatkan perhatian pengajar sekaligus memiliki teman untuk belajar bersama.",
    color: "teal",
    iconClass: "bg-teal-light text-teal-dark",
    numberClass: "text-teal-light",
  },

  {
    number: "03",
    icon: Home,
    title: "Pengajar Datang ke Rumah",
    description:
      "Tidak perlu repot mengantar anak. Untuk program tertentu, pengajar dapat datang langsung ke lokasi belajar yang telah disepakati.",
    color: "yellow",
    iconClass: "bg-yellow-light text-[#8c6800]",
    numberClass: "text-yellow-light",
  },

  {
    number: "04",
    icon: MonitorIcon,
    title: "Belajar Bisa Online",
    description:
      "Anak tetap dapat mengikuti kegiatan belajar mengajar dari rumah melalui program Online Class yang lebih fleksibel.",
    color: "coral",
    iconClass: "bg-coral-light text-coral",
    numberClass: "text-coral-light",
  },

  {
    number: "05",
    icon: Target,
    title: "Sesuai Kebutuhan Anak",
    description:
      "Materi dan pendekatan belajar dapat disesuaikan dengan kemampuan, kebutuhan, dan karakter belajar masing-masing anak.",
    color: "purple",
    iconClass: "bg-purple-light text-purple",
    numberClass: "text-purple-light",
  },

  {
    number: "06",
    icon: Heart,
    title: "Belajar dengan Nyaman",
    description:
      "Kami ingin menciptakan suasana belajar yang menyenangkan agar anak merasa nyaman, percaya diri, dan tidak takut untuk belajar.",
    color: "teal",
    iconClass: "bg-teal-light text-teal-dark",
    numberClass: "text-teal-light",
  },
];

// Supaya tidak perlu import Monitor secara terpisah di atas
function MonitorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

function AdvantageCard({ item }) {
  const Icon = item.icon;

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

      {/* Decorative number */}

      <span
        className={`
          pointer-events-none
          absolute
          right-5
          top-3
          font-baloo
          text-[72px]
          font-extrabold
          leading-none
          opacity-40
          ${item.numberClass}
        `}
      >
        {item.number}
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
          ${item.iconClass}
        `}
      >
        <Icon size={25} />
      </div>

      {/* Content */}

      <h3
        className="
          relative
          font-baloo
          text-2xl
          font-extrabold
          text-purple-dark
        "
      >
        {item.title}
      </h3>

      <p
        className="
          relative
          mt-3
          text-sm
          leading-7
          text-muted
        "
      >
        {item.description}
      </p>

      {/* Bottom decoration */}

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

function Advantages() {
  return (
    <main className="min-h-screen bg-cream text-text">

      {/* =========================
          HERO
      ========================= */}

      <section
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
              KEUNGGULAN ILYON
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
              Bukan Sekadar
              <br />

              <span className="text-teal">
                Tempat Les
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
              ILYON Academy hadir untuk membuat kegiatan belajar
              menjadi lebih nyaman, menyenangkan, dan sesuai dengan
              kebutuhan setiap anak.
            </p>

          </div>

        </div>
      </section>

      {/* =========================
          ADVANTAGES
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

          {/* Section heading */}

          <div className="section-heading">

            <span className="section-label">
              KENAPA ILYON?
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
              Belajar Sesuai
              <span className="text-teal">
                {" "}Kebutuhan Anak
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
              Setiap anak memiliki cara belajar yang berbeda.
              Karena itu, kami menyediakan beberapa pilihan
              pembelajaran yang dapat disesuaikan dengan kebutuhan.
            </p>

          </div>

          {/* Cards */}

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {ADVANTAGES.map((item) => (
              <AdvantageCard
                key={item.number}
                item={item}
              />
            ))}

          </div>

        </div>
      </section>

      {/* =========================
          HIGHLIGHT
      ========================= */}

      

    </main>
  );
}

export default Advantages;