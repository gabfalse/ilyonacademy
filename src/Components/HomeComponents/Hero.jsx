import { openWhatsApp } from "../../Utils/Whatsapp";
import banner from "../../assets/banner.png"
import StudentCounter from "../General/StudentCounter";

function Hero() {
  const features = [
    // {
    //   title: "Pengajar Berpengalaman",
    //   icon: "🎓",
    // },
    // {
    //   title: "Pembelajaran Menyenangkan",
    //   icon: "✨",
    // },
    // {
    //   title: "Pendampingan Akademik",
    //   icon: "📚",
    // },
  ];

  return (
    <main className="bg-cream text-text">
      <section className="relative overflow-hidden px-5 py-8 sm:px-6 sm:py-12 md:py-16">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-purple-light/40" />

        <div className="pointer-events-none absolute -left-24 top-[45%] size-52 rounded-full bg-teal-light/30" />

        <div className="container relative">

          {/* =========================
              BANNER
          ========================= */}
          {/* <div className="flex justify-center">
            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-[24px]
                sm:rounded-[32px]
                shadow-ilyon
              "
            >
              <img
                src={banner}
                alt="Ilyon Academy - Belajar Seru, Prestasi Maju"
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>
          </div> */}


          {/* =========================
              HERO CONTENT
          ========================= */}
          <div className="mx-auto mt-10 max-w-4xl text-center sm:mt-14">

            {/* Label */}
            <span
              className="
                inline-flex
                items-center
                rounded-full
                bg-yellow-light
                px-4
                py-2
                text-[10px]
                font-bold
                tracking-wide
                text-[#8c6800]
                sm:text-xs
              "
            >
              ✨ LES UNTUK ANAK USIA 4–15 TAHUN
            </span>


            {/* Heading */}
            <h1
              className="
                mt-5
                font-baloo
                text-[42px]
                font-extrabold
                leading-[0.95]
                tracking-[-1.5px]
                text-purple-dark
                sm:text-[58px]
                md:text-[70px]
                lg:text-[78px]
              "
            >
              Learn, Grow, 
              <br />
              <span className="text-teal">
                and Achieve!
              </span>
            </h1>


            {/* Description */}
            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-[1.8]
                text-muted
                sm:text-base
                md:text-[17px]
              "
            >
              Teman belajar anak untuk berkembang lebih percaya diri,
              memahami pelajaran, dan meraih prestasi dengan cara yang
              menyenangkan.
            </p>


            {/* =========================
                CTA
            ========================= */}
            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              <button
                onClick={openWhatsApp}
                className="
                  inline-flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-purple
                  px-7
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(98,71,168,0.2)]
                  transition
                  hover:-translate-y-0.5
                  hover:bg-purple-dark
                  sm:w-auto
                "
              >
                Daftar Sekarang
                <span className="ml-2 text-lg">→</span>
              </button>

              {/* <a
                href="/profile"
                className="
                  inline-flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#ded8ed]
                  bg-white
                  px-7
                  font-bold
                  text-purple
                  transition
                  hover:-translate-y-0.5
                  hover:border-purple
                  sm:w-auto
                "
              >
                Kenali Kami
              </a> */}
            </div>

          </div>


          {/* =========================
              FEATURES
          ========================= */}
          <div className="mx-auto mt-12 max-w-5xl sm:mt-14">

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="
                    group
                    flex
                    min-h-[120px]
                    items-center
                    gap-4
                    rounded-3xl
                    border
                    border-purple/10
                    bg-white
                    px-5
                    py-5
                    shadow-[0_6px_20px_rgba(66,45,117,0.05)]
                    transition
                    hover:-translate-y-1
                    hover:shadow-[0_12px_28px_rgba(66,45,117,0.1)]
                  "
                >

                  {/* Icon */}
                  <span
                    className="
                      grid
                      size-12
                      shrink-0
                      place-items-center
                      rounded-2xl
                      bg-teal-light
                      text-xl
                      transition
                      group-hover:scale-105
                    "
                  >
                    {feature.icon}
                  </span>

                  {/* Text */}
                  <div className="text-left">
                    <p
                      className="
                        text-xs
                        font-extrabold
                        leading-tight
                        text-purple-dark
                        sm:text-sm
                      "
                    >
                      {feature.title}
                    </p>

                    <span className="mt-1 block text-[10px] leading-relaxed text-muted sm:text-[11px]">
                      Membantu anak belajar dengan lebih nyaman dan efektif.
                    </span>
                  </div>

                </div>
              ))}

            </div>

          </div>


          {/* =========================
              STUDENT COUNTER
          ========================= */}
          {/* <div className="mt-5 flex justify-center">

            <div
              className="
                flex
                min-h-[68px]
                items-center
                gap-3
                rounded-3xl
                border
                border-purple/10
                bg-white
                px-6
                py-3
                shadow-[0_6px_20px_rgba(66,45,117,0.05)]
              "
            >

              <span
                className="
                  grid
                  size-10
                  shrink-0
                  place-items-center
                  rounded-2xl
                  bg-purple-light
                  text-base
                "
              >
                🎓
              </span>

              <div className="text-left">
                <p className="text-[10px] font-semibold text-muted">
                  Dipercaya oleh
                </p>

                <div className="text-sm font-extrabold text-purple sm:text-base">
                  <StudentCounter />
                </div>
              </div>

            </div>

          </div> */}

        </div>
      </section>
    </main>
  );
}

export default Hero;