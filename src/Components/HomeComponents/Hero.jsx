
import { openWhatsApp } from "../../Utils/Whatsapp";

function Hero() {
  return (
    <div className="min-h-screen bg-cream text-text">

      {/* =========================
          HERO
      ========================= */}

      <main>
        <section
          id="home"
          className="
            relative overflow-hidden
            px-0 py-20 md:py-24
          "
        >

          {/* Decoration */}
          <div
  className="
    pointer-events-none absolute
    -right-[80px] -top-[60px]
    size-[180px]
    rounded-full
    bg-purple-light

    sm:-right-[100px] sm:-top-[80px]
    sm:size-[240px]

    lg:-right-[150px] lg:-top-[100px]
    lg:size-[350px]
  "
/>

          <div
            className="
              pointer-events-none absolute
              -left-[40px] bottom-[100px]
              size-[100px]
              rounded-full
              border-[18px] border-yellow-light
            "
          />

          <div
            className="
              container
              grid items-center
              gap-12
              lg:grid-cols-[1fr_0.9fr]
              lg:gap-[70px]
            "
          >

            {/* Hero Content */}

            <div className="text-center lg:text-left">

              {/* Eyebrow */}

              <div
                className="
                  mx-auto flex w-fit
                  items-center gap-2
                  rounded-full
                  bg-yellow-light
                  px-3.5 py-2
                  text-[11px] font-bold
                  tracking-wide text-[#8c6800]
                  lg:mx-0
                "
              >
                <span>✨</span>
                LES UNTUK ANAK USIA 4–15 TAHUN
              </div>

              {/* Heading */}

              <h1
                className="
                  mt-5
                  font-baloo
                  text-[60px]
                  font-extrabold
                  leading-[0.9]
                  tracking-[-2px]
                  text-purple-dark
                  sm:text-[72px]
                  lg:text-[92px]
                "
              >
                Belajar Seru,
                <br />

                <span className="text-teal">
                  Prestasi Maju!
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mx-auto mt-6
                  max-w-[590px]
                  text-sm leading-[1.8]
                  text-muted
                  sm:text-base
                  lg:mx-0 lg:text-[17px]
                "
              >
                Teman belajar anak untuk berkembang lebih percaya diri,
                memahami pelajaran, dan meraih prestasi dengan cara yang
                menyenangkan.
              </p>

              {/* Actions */}

              <div
                className="
                  mt-8 flex
                  flex-col gap-3
                  sm:flex-row sm:justify-center
                  lg:justify-start
                "
              >

                <button
                  onClick={openWhatsApp}
                  className="
                    inline-flex min-h-[52px]
                    items-center justify-center
                    gap-3
                    rounded-full
                    bg-purple
                    px-6
                    font-bold text-white
                    shadow-[0_10px_25px_rgba(98,71,168,0.25)]
                    transition-all
                    hover:-translate-y-1
                    hover:bg-purple-dark
                  "
                >
                  Daftar Sekarang
                  <span>→</span>
                </button>

                <a
                  href="/profile"
                  className="
                    inline-flex min-h-[52px]
                    items-center justify-center
                    gap-3
                    rounded-full
                    border-2 border-[#ded8ed]
                    bg-white
                    px-6
                    font-bold text-purple
                    transition-all
                    hover:border-purple
                  "
                >
                  Kenali Kami
                </a>

              </div>

              {/* Features */}

              <div
                className="
                  mt-7
                  flex flex-col
                  items-center gap-4
                  lg:flex-row
                  lg:flex-wrap
                "
              >

                <div
                  className="
                    flex items-center gap-2
                    text-xs text-muted
                  "
                >
                  <span
                    className="
                      grid size-5 place-items-center
                      rounded-full bg-teal
                      text-[11px] text-white
                    "
                  >
                    ✓
                  </span>

                  Private & kelompok kecil
                </div>

                <div
                  className="
                    flex items-center gap-2
                    text-xs text-muted
                  "
                >
                  <span
                    className="
                      grid size-5 place-items-center
                      rounded-full bg-teal
                      text-[11px] text-white
                    "
                  >
                    ✓
                  </span>

                  Pengajar berpengalaman
                </div>

                <div
                  className="
                    flex items-center gap-2
                    text-xs text-muted
                  "
                >
                  <span
                    className="
                      grid size-5 place-items-center
                      rounded-full bg-teal
                      text-[11px] text-white
                    "
                  >
                    ✓
                  </span>

                  Pembelajaran menyenangkan
                </div>

              </div>

            </div>

            {/* =========================
                HERO VISUAL
            ========================= */}

            <div
              className="
                relative
                flex min-h-[400px]
                items-center justify-center
                lg:min-h-[500px]
              "
            >

              {/* Main Card */}

              <div
                className="
                  w-full max-w-[430px]
                  rotate-2
                  rounded-[40px]
                  border-[8px] border-purple-light
                  bg-white
                  p-6
                  shadow-ilyon
                "
              >

                {/* Card Top */}

                <div className="flex items-center justify-between">

                  <span
                    className="
                      text-[11px] font-extrabold
                      tracking-[1px] text-purple
                    "
                  >
                    ILYON ACADEMY
                  </span>

                  <span className="text-2xl text-yellow">
                    ★
                  </span>

                </div>

                {/* Illustration */}

                <div
                  className="
                    relative mt-2
                    h-[300px]
                    overflow-hidden
                    rounded-[28px]
                    bg-gradient-to-br
                    from-[#f4edff]
                    to-[#e5f8f4]
                  "
                >

                  {/* Student Left */}

                  <div
                    className="
                      absolute bottom-[65px] left-[45px]
                    "
                  >

                    <div
                      className="
                        relative z-10 mx-auto
                        size-[65px]
                        rounded-full
                        bg-[#f3b98f]
                      "
                    />

                    <div
                      className="
                        -mt-1
                        h-[115px]
                        w-[100px]
                        rounded-[35px_35px_10px_10px]
                        bg-purple
                      "
                    />

                  </div>

                  {/* Student Right */}

                  <div
                    className="
                      absolute bottom-[65px] right-[45px]
                    "
                  >

                    <div
                      className="
                        relative z-10 mx-auto
                        size-[65px]
                        rounded-full
                        bg-[#f3b98f]
                      "
                    />

                    <div
                      className="
                        -mt-1
                        h-[115px]
                        w-[100px]
                        rounded-[35px_35px_10px_10px]
                        bg-teal
                      "
                    />

                  </div>

                  {/* Desk */}

                  <div
                    className="
                      absolute
                      bottom-[25px]
                      left-[35px]
                      right-[35px]
                      h-[55px]
                      rounded-[20px]
                      bg-[#d78b45]
                      shadow-[0_8px_0_#ad672f]
                    "
                  >

                    {/* Book 1 */}

                    <div
                      className="
                        absolute left-1/2 top-[10px]
                        h-[15px] w-[75px]
                        -translate-x-1/2
                        rounded-[5px]
                        bg-yellow
                      "
                    />

                    {/* Book 2 */}

                    <div
                      className="
                        absolute left-1/2 top-[25px]
                        h-[15px] w-[60px]
                        -translate-x-1/2
                        rounded-[5px]
                        bg-purple
                      "
                    />

                    {/* Pencil */}

                    <div
                      className="
                        absolute right-[50px] top-[13px]
                        h-2 w-[65px]
                        rotate-[-15deg]
                        rounded-full
                        bg-coral
                      "
                    />

                  </div>

                </div>

                {/* Card Bottom */}

                <div
                  className="
                    mt-5
                    flex justify-around
                    text-center
                  "
                >

                  <div className="flex flex-col">
                    <strong
                      className="
                        font-baloo
                        text-[27px]
                        font-extrabold
                        leading-none
                        text-purple
                      "
                    >
                      4–15
                    </strong>

                    <span className="mt-1 text-[10px] text-muted">
                      Tahun
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <strong
                      className="
                        font-baloo
                        text-[27px]
                        font-extrabold
                        leading-none
                        text-purple
                      "
                    >
                      4+
                    </strong>

                    <span className="mt-1 text-[10px] text-muted">
                      Program
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <strong
                      className="
                        font-baloo
                        text-[27px]
                        font-extrabold
                        leading-none
                        text-purple
                      "
                    >
                      1:1
                    </strong>

                    <span className="mt-1 text-[10px] text-muted">
                      Private
                    </span>
                  </div>

                </div>

              </div>

              {/* Floating Card 1 */}

              <div
                className="
                  absolute left-[-20px] top-[50px]
                  flex items-center gap-2.5
                  rounded-[18px]
                  bg-white
                  px-4 py-3
                  shadow-[0_12px_35px_rgba(66,45,117,0.13)]
                  sm:left-[-5px]
                "
              >

                <span className="text-2xl">
                  📚
                </span>

                <div className="flex flex-col">
                  <strong className="text-xs">
                    Belajar
                  </strong>

                  <small className="text-[9px] text-muted">
                    lebih menyenangkan
                  </small>
                </div>

              </div>

              {/* Floating Card 2 */}

              <div
                className="
                  absolute
                  bottom-[45px] right-[-20px]
                  flex items-center gap-2.5
                  rounded-[18px]
                  bg-white
                  px-4 py-3
                  shadow-[0_12px_35px_rgba(66,45,117,0.13)]
                  sm:right-[-5px]
                "
              >

                <span className="text-2xl">
                  ⭐
                </span>

                <div className="flex flex-col">
                  <strong className="text-xs">
                    Lebih percaya diri
                  </strong>

                  <small className="text-[9px] text-muted">
                    dalam belajar
                  </small>
                </div>

              </div>

            </div>

          </div>

        </section>
      </main>
    </div>
  );
}

export default Hero;
