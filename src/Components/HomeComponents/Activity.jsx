import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { SHEET_CONFIG } from "../../Config/SheetConfig";

/* =========================================================
   GOOGLE SHEETS
========================================================= */

async function getActivityData() {
  const { spreadsheetId, apiKey, sheets } = SHEET_CONFIG;

  if (!spreadsheetId) {
    throw new Error("VITE_GOOGLE_SHEET_ID tidak ditemukan.");
  }

  if (!apiKey) {
    throw new Error("VITE_GOOGLE_SHEET_API_KEY tidak ditemukan.");
  }

  if (!sheets.activity) {
    throw new Error("Sheet ACTIVITY belum dikonfigurasi.");
  }

  const range = encodeURIComponent(`${sheets.activity}!A:C`);

  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/` +
    `${spreadsheetId}/values/${range}?key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.error?.message ||
        "Gagal mengambil data kegiatan dari Google Sheets."
    );
  }

  return data.values || [];
}

/* =========================================================
   GOOGLE DRIVE IMAGE
========================================================= */

function convertDriveUrl(url) {
  if (!url) return "";

  const cleanUrl = url.trim();

  // Jika sudah berupa URL gambar biasa
  if (!cleanUrl.includes("drive.google.com")) {
    return cleanUrl;
  }

  // Format:
  // https://drive.google.com/file/d/FILE_ID/view
  const match = cleanUrl.match(/\/d\/([^/]+)/);

  if (!match) {
    return cleanUrl;
  }

  const fileId = match[1];

  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;
}

/* =========================================================
   PARSE ACTIVITY
========================================================= */

function parseActivity(rows) {
  if (!rows || rows.length <= 1) {
    return [];
  }

  return rows
    .slice(1)
    .map((row) => {
      /*
        Struktur Sheet:

        A = Foto URL
        B = Judul
        C = Deskripsi
      */

      const image = row?.[0]?.trim() || "";
      const title = row?.[1]?.trim() || "";
      const description = row?.[2]?.trim() || "";

      return {
        image: convertDriveUrl(image),
        title,
        description,
      };
    })
    .filter((item) => item.image || item.title);
}

/* =========================================================
   ACTIVITY
========================================================= */

function Activity() {
  const [activities, setActivities] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadActivity() {
      try {
        setLoading(true);

        const rows = await getActivityData();
        const data = parseActivity(rows);

        console.log("ACTIVITY DATA:", data);

        setActivities(data);
      } catch (error) {
        console.error("ACTIVITY ERROR:", error);
        setActivities([]);
      } finally {
        setLoading(false);
      }
    }

    loadActivity();
  }, []);

  /* =======================================================
     AUTO CAROUSEL
  ======================================================= */

  useEffect(() => {
    if (activities.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % activities.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [activities.length]);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  function nextSlide() {
    setActiveIndex((current) => {
      return (current + 1) % activities.length;
    });
  }

  function prevSlide() {
    setActiveIndex((current) => {
      return (
        (current - 1 + activities.length) %
        activities.length
      );
    });
  }

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <section className="bg-white px-5 py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl animate-pulse">

            <div className="mx-auto h-5 w-32 rounded-full bg-purple-light" />

            <div className="mx-auto mt-5 h-12 max-w-xl rounded-xl bg-purple-light" />

            <div className="mx-auto mt-4 h-5 max-w-2xl rounded-lg bg-purple-light" />

            <div className="mt-10 h-[420px] rounded-[32px] bg-purple-light" />

          </div>
        </div>
      </section>
    );
  }

  /* =======================================================
     EMPTY
  ======================================================= */

  if (!activities.length) {
    return null;
  }

  const activeActivity = activities[activeIndex];

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 md:py-24">

      {/* Decoration */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          size-64
          rounded-full
          bg-purple-light/50
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          bottom-10
          size-40
          rounded-full
          bg-teal-light/50
        "
      />

      <div className="container relative">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="section-label">
            KEGIATAN ILYON
          </span>

          <h2
            className="
              mt-5
              font-baloo
              text-4xl
              font-extrabold
              leading-tight
              text-purple-dark
              sm:text-5xl
              md:text-6xl
            "
          >
            Belajar Tidak Hanya
            <br />

            <span className="text-teal">
              Tentang Pelajaran
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-muted
              md:text-base
            "
          >
            Ini adalah sebagian dari kegiatan yang ada di
            ILYON Academy. Setiap kegiatan dirancang agar
            anak dapat belajar dengan nyaman, aktif, dan
            menyenangkan.
          </p>

        </div>

        {/* Carousel */}

        <div className="mx-auto mt-12 max-w-5xl">

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border-8
              border-white
              bg-purple-light
              shadow-[0_20px_60px_rgba(66,45,117,0.12)]
            "
          >

            {/* Image */}

            <div className="relative h-[360px] sm:h-[440px] md:h-[520px]">

              {activeActivity.image ? (
                <img
                  key={activeActivity.image}
                  src={activeActivity.image}
                  alt={
                    activeActivity.description ||
                    activeActivity.title ||
                    "Kegiatan ILYON Academy"
                  }
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-all
                    duration-700
                  "
                />
              ) : (
                <div
                  className="
                    flex
                    h-full
                    items-center
                    justify-center
                    bg-purple-light
                    text-purple
                  "
                >
                  <Sparkles size={40} />
                </div>
              )}

              {/* Gradient */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-1/2
                  bg-gradient-to-t
                  from-purple-dark/90
                  via-purple-dark/30
                  to-transparent
                "
              />

              {/* Content */}

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">

                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-white/15
                    px-3
                    py-1.5
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-wide
                    text-white
                    backdrop-blur-sm
                  "
                >
                  Kegiatan ILYON
                </span>

                <h3
                  className="
                    mt-3
                    font-baloo
                    text-3xl
                    font-extrabold
                    text-white
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  {activeActivity.title}
                </h3>

                {activeActivity.description && (
                  <p
                    className="
                      mt-2
                      max-w-2xl
                      text-sm
                      leading-6
                      text-white/80
                      sm:text-base
                    "
                  >
                    {activeActivity.description}
                  </p>
                )}

              </div>

              {/* Previous */}

              {activities.length > 1 && (
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Kegiatan sebelumnya"
                  className="
                    absolute
                    left-4
                    top-1/2
                    flex
                    size-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-purple
                    shadow-lg
                    backdrop-blur-sm
                    transition
                    hover:-translate-y-1/2
                    hover:bg-white
                    md:left-6
                  "
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              {/* Next */}

              {activities.length > 1 && (
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Kegiatan berikutnya"
                  className="
                    absolute
                    right-4
                    top-1/2
                    flex
                    size-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-purple
                    shadow-lg
                    backdrop-blur-sm
                    transition
                    hover:-translate-y-1/2
                    hover:bg-white
                    md:right-6
                  "
                >
                  <ChevronRight size={22} />
                </button>
              )}

            </div>

          </div>

          {/* Dots */}

          {activities.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">

              {activities.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Lihat kegiatan ${index + 1}`}
                  className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === activeIndex
                        ? "w-8 bg-purple"
                        : "w-2.5 bg-purple-light hover:bg-purple/40"
                    }
                  `}
                />
              ))}

            </div>
          )}

        </div>

        {/* Small preview */}

        {activities.length > 1 && (
          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-5xl
              grid-cols-2
              gap-3
              sm:grid-cols-4
            "
          >

            {activities.map((activity, index) => (
              <button
                key={`${activity.title}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border-2
                  bg-white
                  transition-all
                  ${
                    index === activeIndex
                      ? "border-purple shadow-md"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }
                `}
              >

                <div className="h-20 sm:h-24">

                  {activity.image && (
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-300
                        group-hover:scale-105
                      "
                    />
                  )}

                </div>

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    bg-gradient-to-t
                    from-black/70
                    to-transparent
                    px-2
                    pb-2
                    pt-6
                    text-left
                  "
                >
                  <p className="truncate text-[10px] font-bold text-white">
                    {activity.title}
                  </p>
                </div>

              </button>
            ))}

          </div>
        )}

      </div>

    </section>
  );
}

export default Activity;