import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Camera,
  Map,
  Clock3,
  CheckCircle2,
  Target,
  Heart,
  BookOpen,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_SHEET_API_KEY;
const SHEET_NAME = import.meta.env.VITE_SHEET_PROFILE;

/* =========================================================
   GOOGLE SHEETS - READ ONLY
========================================================= */

async function getSheetData() {
  if (!SPREADSHEET_ID) {
    throw new Error("VITE_GOOGLE_SHEET_ID tidak ditemukan.");
  }

  if (!API_KEY) {
    throw new Error("VITE_GOOGLE_SHEET_API_KEY tidak ditemukan.");
  }

  if (!SHEET_NAME) {
    throw new Error("VITE_SHEET_PROFILE tidak ditemukan.");
  }

  const range = encodeURIComponent(`${SHEET_NAME}!A:C`);

  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/` +
    `${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.error?.message || "Gagal mengambil data Google Sheets."
    );
  }

  return data.values || [];
}

/* =========================================================
   PARSE PROFILE
========================================================= */

function parseProfile(rows) {
  const profile = {};

  // Baris pertama:
  // Field | Keterangan | ...
  //
  // Data sebenarnya berada di:
  // A = Field
  // B = Nilai

  rows.slice(1).forEach((row) => {
    const field = row?.[0]?.trim();
    const value = row?.[1]?.trim();

    if (field) {
      profile[field] = value || "";
    }
  });

  return profile;
}

/* =========================================================
   GOOGLE DRIVE IMAGE
========================================================= */

function convertDriveUrl(url) {
  if (!url) return "";

  const cleanUrl = url.trim();

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
   HELPERS
========================================================= */

function formatPhone(phone) {
  if (!phone) return "";

  return phone.toString().replace(/\D/g, "");
}

function getWhatsappUrl(phone) {
  const number = formatPhone(phone);

  if (!number) return "#";

  return `https://wa.me/${number}`;
}

/* =========================================================
   LOADING
========================================================= */

function LoadingPage() {
  return (
    <main className="min-h-screen bg-cream">
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-6xl">

            <div className="card animate-pulse overflow-hidden">
              <div className="h-2 bg-purple" />

              <div className="p-8 md:p-12">
                <div className="mx-auto h-24 w-24 rounded-3xl bg-purple-light" />

                <div className="mx-auto mt-6 h-10 max-w-sm rounded-xl bg-purple-light" />

                <div className="mx-auto mt-4 h-5 max-w-md rounded-lg bg-purple-light" />

                <div className="mx-auto mt-8 h-12 w-44 rounded-full bg-purple-light" />
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="card h-44 animate-pulse bg-white"
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   ERROR
========================================================= */

function ErrorPage({ message }) {
  return (
    <main className="min-h-screen bg-cream">
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-xl">

            <div className="card p-8 text-center md:p-10">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-coral-light text-coral">
                <span className="text-2xl font-bold">!</span>
              </div>

              <h1 className="font-display mt-5 text-3xl font-extrabold text-purple-dark">
                Data Belum Bisa Dimuat
              </h1>

              <p className="text-muted mt-3 text-sm leading-7">
                {message}
              </p>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  color = "purple",
}) {
  const colorClass = {
    purple: "bg-purple-light text-purple",
    teal: "bg-teal-light text-teal-dark",
    yellow: "bg-yellow-light text-yellow",
    coral: "bg-coral-light text-coral",
  };

  const content = (
    <>
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${colorClass[color]}`}
      >
        <Icon size={21} />
      </div>

      <div className="min-w-0">
        <p className="text-muted text-xs font-semibold">
          {title}
        </p>

        <p className="mt-1 break-words text-sm font-bold">
          {value || "-"}
        </p>
      </div>
    </>
  );

  if (href && href !== "#") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="card flex items-center gap-4 p-5 transition duration-300 hover:-translate-y-1"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="card flex items-center gap-4 p-5">
      {content}
    </div>
  );
}

/* =========================================================
   PROFILE PAGE
========================================================= */

function ProfilePage() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError("");

        const rows = await getSheetData();

        if (!rows.length) {
          throw new Error("Sheet PROFILE masih kosong.");
        }

        const data = parseProfile(rows);

        console.log("PROFILE DATA:", data);

        setProfile(data);

      } catch (err) {
        console.error("PROFILE ERROR:", err);

        setError(
          err.message ||
            "Terjadi kesalahan saat mengambil data."
        );
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  /* =======================================================
     LOADING / ERROR
  ======================================================= */

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage message={error} />;
  }

  /* =======================================================
     DATA DARI GOOGLE SHEETS
  ======================================================= */

  const academyName =
    profile["Nama Bimbel"] ||
    "Ilyon Academy";

  const tagline =
    profile["Tagline"] ||
    "Belajar - Berkembang - Berprestasi";

  const description =
    profile["Deskripsi"] ||
    "";

  const logoUrl =
    convertDriveUrl(
      profile["Logo URL"]
    );

  const mainPhotoUrl =
    convertDriveUrl(
      profile["Foto Utama URL"]
    );

  const address =
    profile["Alamat"] ||
    "";

  const whatsapp =
    profile["WhatsApp"] ||
    "";

  const email =
    profile["Email"] ||
    "";

  const instagram =
    profile["Instagram"] ||
    "";

  const googleMaps =
    profile["Google Maps"] ||
    "";

  const operationalHours =
    profile["Jam Operasional"] ||
    "";

  const registrationStatus =
    profile["Status Pendaftaran"] ||
    "";

  const heroTitle =
    profile["Judul Hero"] ||
    "Belajar Lebih Nyaman, Berkembang Lebih Percaya Diri";

  const heroSubtitle =
    profile["Subjudul Hero"] ||
    "";

  const vision =
    profile["Visi"] ||
    "";

  const mission =
    profile["Misi"] ||
    "";

  const advantage1 =
    profile["Keunggulan 1"] ||
    "";

  const advantage2 =
    profile["Keunggulan 2"] ||
    "";

  const advantage3 =
    profile["Keunggulan 3"] ||
    "";

  const ctaTitle =
    profile["CTA Utama"] ||
    "Konsultasi Gratis";

  const whatsappUrl =
    getWhatsappUrl(whatsapp);

  const isRegistrationOpen =
    registrationStatus
      .toLowerCase()
      .includes("buka");

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="min-h-screen bg-cream">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-light opacity-70" />

        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-teal-light opacity-70" />

        <div className="pointer-events-none absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-yellow-light opacity-80" />

        <div className="container relative">

          <div className="grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">

            {/* HERO TEXT */}

            <div>

              <div className="mb-6 flex flex-wrap items-center gap-3">

                <span className="section-label mb-0">
                  {academyName.toUpperCase()}
                </span>

                {registrationStatus && (
                  <span
                    className={`
                      inline-flex items-center gap-2
                      rounded-full px-3 py-1.5
                      text-xs font-bold
                      ${
                        isRegistrationOpen
                          ? "bg-teal-light text-teal-dark"
                          : "bg-coral-light text-coral"
                      }
                    `}
                  >
                    <span className="h-2 w-2 rounded-full bg-current" />

                    {registrationStatus}
                  </span>
                )}

              </div>

              <h1 className="font-display max-w-3xl text-5xl font-extrabold leading-[1.05] text-purple-dark md:text-6xl lg:text-7xl">
                {heroTitle}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
                {heroSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  {ctaTitle}
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#tentang"
                  className="btn-secondary"
                >
                  Kenali Kami
                </a>

              </div>

              {/* TAGLINE */}

              <div className="mt-10 flex items-center gap-3">

                <div className="h-px w-12 bg-purple" />

                <p className="font-display text-lg font-bold text-purple">
                  {tagline}
                </p>

              </div>

            </div>

            {/* HERO IMAGE */}

            <div className="relative">

              <div className="absolute -left-5 top-10 z-10 hidden rounded-3xl bg-white p-4 shadow-xl md:block">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-light text-yellow">
                    <Sparkles size={20} />
                  </div>

                  <div>
                    <p className="text-muted text-xs">
                      {academyName}
                    </p>

                    <p className="text-sm font-bold">
                      Belajar dengan nyaman
                    </p>
                  </div>

                </div>

              </div>

              <div className="relative overflow-hidden rounded-[36px] border-8 border-white shadow-2xl">

                {mainPhotoUrl ? (
                  <img
                    src={mainPhotoUrl}
                    alt={academyName}
                    className="h-[480px] w-full object-cover md:h-[560px]"
                  />
                ) : (
                  <div className="flex h-[480px] items-center justify-center bg-purple-light md:h-[560px]">

                    <div className="text-center">

                      {logoUrl && (
                        <img
                          src={logoUrl}
                          alt={academyName}
                          className="mx-auto mb-5 h-24 w-24 rounded-3xl object-contain"
                        />
                      )}

                      <p className="font-display text-2xl font-bold text-purple">
                        {academyName}
                      </p>

                    </div>

                  </div>
                )}

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-purple-dark/80 to-transparent p-6 pt-28">

                  <div className="flex items-center gap-4">

                    {logoUrl && (
                      <img
                        src={logoUrl}
                        alt={academyName}
                        className="h-14 w-14 rounded-2xl bg-white object-contain p-2"
                      />
                    )}

                    <div className="text-white">

                      <p className="font-display text-2xl font-bold">
                        {academyName}
                      </p>

                      <p className="text-sm text-white/80">
                        {tagline}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          ABOUT
      =================================================== */}

      <section
        id="tentang"
        className="section bg-white"
      >

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              TENTANG KAMI
            </span>

            <h2 className="font-display text-4xl font-extrabold text-purple-dark md:text-5xl">
              Tempat Belajar untuk Tumbuh Bersama
            </h2>

            <p className="text-muted mt-4 text-sm leading-7 md:text-base">
              {description}
            </p>

          </div>

          <div className="mx-auto max-w-5xl">

            <div className="card overflow-hidden">

              <div className="grid md:grid-cols-2">

                {/* VISI */}

                <div className="bg-purple p-8 text-white md:p-10">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                    <Target size={26} />
                  </div>

                  <h3 className="font-display text-3xl font-bold">
                    Visi
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-white/85">
                    {vision}
                  </p>

                </div>

                {/* MISI */}

                <div className="bg-purple-light p-8 md:p-10">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-purple shadow-sm">
                    <Heart size={26} />
                  </div>

                  <h3 className="font-display text-3xl font-bold text-purple-dark">
                    Misi
                  </h3>

                  <p className="mt-5 whitespace-pre-line text-sm leading-8 text-muted">
                    {mission}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          ADVANTAGES
      =================================================== */}

      <section className="section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              KEUNGGULAN
            </span>

            <h2 className="font-display text-4xl font-extrabold text-purple-dark md:text-5xl">
              Kenapa Belajar di {academyName}?
            </h2>

            <p className="text-muted mt-4 text-sm leading-7">
              Pendekatan belajar yang dirancang untuk membantu
              anak berkembang sesuai potensinya.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* 01 */}

            <div className="card p-7 transition duration-300 hover:-translate-y-2">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-light text-purple">
                <BookOpen size={26} />
              </div>

              <span className="font-display text-5xl font-extrabold text-purple-light">
                01
              </span>

              <h3 className="font-display mt-3 text-2xl font-bold text-purple-dark">
                {advantage1}
              </h3>

              <p className="text-muted mt-3 text-sm leading-7">
                Pembelajaran disesuaikan dengan kebutuhan
                dan karakter belajar setiap anak.
              </p>

            </div>

            {/* 02 */}

            <div className="card p-7 transition duration-300 hover:-translate-y-2">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-light text-teal-dark">
                <Target size={26} />
              </div>

              <span className="font-display text-5xl font-extrabold text-teal-light">
                02
              </span>

              <h3 className="font-display mt-3 text-2xl font-bold text-purple-dark">
                {advantage2}
              </h3>

              <p className="text-muted mt-3 text-sm leading-7">
                Materi diberikan sesuai kemampuan dan level
                belajar anak.
              </p>

            </div>

            {/* 03 */}

            <div className="card p-7 transition duration-300 hover:-translate-y-2">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-light text-yellow">
                <Sparkles size={26} />
              </div>

              <span className="font-display text-5xl font-extrabold text-yellow-light">
                03
              </span>

              <h3 className="font-display mt-3 text-2xl font-bold text-purple-dark">
                {advantage3}
              </h3>

              <p className="text-muted mt-3 text-sm leading-7">
                Anak mendapatkan ruang untuk mengenali dan
                mengembangkan potensi yang dimilikinya.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          CONTACT
      =================================================== */}

      <section className="section bg-white">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              INFORMASI
            </span>

            <h2 className="font-display text-4xl font-extrabold text-purple-dark md:text-5xl">
              Yuk, Kenali {academyName}
            </h2>

            <p className="text-muted mt-4 text-sm leading-7">
              Punya pertanyaan atau ingin mengetahui program
              belajar yang sesuai? Kami siap membantu.
            </p>

          </div>

          <div className="mx-auto max-w-5xl">

            <div className="grid gap-4 md:grid-cols-2">

              <ContactCard
                icon={MapPin}
                title="Alamat"
                value={address}
                color="purple"
              />

              <ContactCard
                icon={Phone}
                title="WhatsApp"
                value={whatsapp}
                href={whatsappUrl}
                color="teal"
              />

              <ContactCard
                icon={Mail}
                title="Email"
                value={email}
                href={email ? `mailto:${email}` : "#"}
                color="yellow"
              />

              <ContactCard
                icon={Camera}
                title="Instagram"
                value="@ilyonacademy"
                href={instagram}
                color="coral"
              />

              <ContactCard
                icon={Map}
                title="Google Maps"
                value="Lihat lokasi ILYON Academy"
                href={googleMaps}
                color="purple"
              />

              <ContactCard
                icon={Clock3}
                title="Jam Operasional"
                value={operationalHours}
                color="teal"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          CTA
      =================================================== */}

      <section className="section">

        <div className="container">

          <div className="relative overflow-hidden rounded-[32px] bg-purple px-7 py-14 text-center md:px-12 md:py-16">

            <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/5" />

            <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-teal/20" />

            <div className="relative">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-yellow">
                <Sparkles size={26} />
              </div>

              <h2 className="font-display text-4xl font-extrabold text-white md:text-5xl">
                {ctaTitle}
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75 md:text-base">
                Konsultasikan kebutuhan belajar anak dan
                temukan pendekatan yang sesuai bersama
                {` ${academyName}`}.
              </p>

              <div className="mt-8">

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-light"
                >
                  Konsultasi Gratis
                  <ArrowRight size={18} />
                </a>

              </div>

              {isRegistrationOpen && (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
                  <CheckCircle2 size={14} />
                  Pendaftaran sedang dibuka
                </div>
              )}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ProfilePage;