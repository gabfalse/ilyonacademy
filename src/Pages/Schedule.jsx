import { useEffect, useState } from "react";
import {
  Clock3,
  MapPin,
  Users,
  UserRound,
  Monitor,
  BookOpen,
  Sparkles,
} from "lucide-react";

import { SHEET_CONFIG } from "../Config/SheetConfig";

const PROGRAM_STYLE = {
  regular: {
    icon: MapPin,
    iconClass: "bg-purple-light text-purple",
    badgeClass: "bg-purple-light text-purple",
  },

  private: {
    icon: UserRound,
    iconClass: "bg-yellow-light text-[#8c6800]",
    badgeClass: "bg-yellow-light text-[#8c6800]",
  },

  group: {
    icon: Users,
    iconClass: "bg-teal-light text-teal-dark",
    badgeClass: "bg-teal-light text-teal-dark",
  },

  online: {
    icon: Monitor,
    iconClass: "bg-coral-light text-coral",
    badgeClass: "bg-coral-light text-coral",
  },
};

function getScheduleType(program) {
  const value = program?.toLowerCase();

  if (value?.includes("private")) {
    return "private";
  }

  if (value?.includes("online")) {
    return "online";
  }

  if (value?.includes("group")) {
    return "group";
  }

  return "regular";
}

function ScheduleCard({ item }) {
  const style = PROGRAM_STYLE[item.type] || PROGRAM_STYLE.regular;
  const Icon = style.icon;

  return (
    <div
      className="
        rounded-[24px]
        border border-[#eee9f7]
        bg-white
        p-5
        shadow-[0_10px_30px_rgba(66,45,117,0.06)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(66,45,117,0.1)]
      "
    >
      <div className="flex gap-4">

        {/* Waktu */}

        <div className="w-[68px] shrink-0">

          <div className="flex items-center gap-1.5 text-purple">
            <Clock3 size={14} />

            <span className="font-baloo text-xl font-extrabold">
              {item.time}
            </span>
          </div>

          <p className="mt-1 text-[10px] font-semibold text-muted">
            {item.session}
          </p>

        </div>

        {/* Divider */}

        <div className="w-px bg-[#eee9f7]" />

        {/* Content */}

        <div className="min-w-0 flex-1">

          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">

              <h3
                className="
                  font-baloo
                  text-xl
                  font-extrabold
                  leading-tight
                  text-purple-dark
                "
              >
                {item.subject}
              </h3>

              <p className="mt-1 text-xs text-muted">
                Pengajar:{" "}
                <span className="font-bold text-purple-dark">
                  {item.teacher}
                </span>
              </p>

            </div>

            <div
              className={`
                flex size-11 shrink-0
                items-center justify-center
                rounded-2xl
                ${style.iconClass}
              `}
            >
              <Icon size={20} />
            </div>

          </div>

          {/* Program + Keterangan */}

          <div className="mt-4 flex flex-wrap items-center gap-2">

            <span
              className={`
                rounded-full
                px-3 py-1.5
                text-[10px]
                font-extrabold
                ${style.badgeClass}
              `}
            >
              {item.program}
            </span>

            {item.note && (
              <span
                className="
                  rounded-full
                  bg-cream
                  px-3 py-1.5
                  text-[10px]
                  font-bold
                  text-muted
                "
              >
                {item.note}
              </span>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

function DaySchedule({ day, schedule }) {
  return (
    <div>

      {/* Day Header */}

      <div className="mb-5 flex items-center gap-4">

        <div
          className="
            flex size-12
            items-center justify-center
            rounded-2xl
            bg-purple
            text-white
            shadow-[0_8px_20px_rgba(98,71,168,0.2)]
          "
        >
          <BookOpen size={21} />
        </div>

        <div>

          <h2
            className="
              font-baloo
              text-3xl
              font-extrabold
              text-purple-dark
            "
          >
            {day}
          </h2>

          <p className="text-xs text-muted">
            {schedule.length} sesi pembelajaran
          </p>

        </div>

      </div>

      {/* Schedule */}

      <div className="space-y-4">

        {schedule.map((item, index) => (
          <ScheduleCard
            key={`${day}-${index}`}
            item={item}
          />
        ))}

      </div>

    </div>
  );
}

function SchedulePage() {

  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getSchedule() {
      try {
        const {
          spreadsheetId,
          apiKey,
          sheets,
        } = SHEET_CONFIG;

        const url =
          `https://sheets.googleapis.com/v4/spreadsheets/` +
          `${spreadsheetId}/values/${encodeURIComponent(
            sheets.schedule
          )}?key=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Gagal mengambil data jadwal");
        }

        const data = await response.json();
        const rows = data.values || [];

        /*
          Struktur Sheet:

          A = Hari
          B = Jam
          C = Sesi
          D = Program
          E = Mata Pelajaran
          F = Pengajar
          G = Keterangan
        */

        const formattedSchedule = {};

        rows.slice(1).forEach((row) => {

          const [
            day,
            time,
            session,
            program,
            subject,
            teacher,
            note,
          ] = row;

          // Abaikan baris kosong
          if (!day || !time || !subject) {
            return;
          }

          const item = {
            time: time.trim(),
            session: session?.trim() || "",
            program: program?.trim() || "",
            subject: subject?.trim() || "",
            teacher: teacher?.trim() || "",
            note: note?.trim() || "",
            type: getScheduleType(program),
          };

          if (!formattedSchedule[day]) {
            formattedSchedule[day] = [];
          }

          formattedSchedule[day].push(item);
        });

        setSchedule(formattedSchedule);

      } catch (err) {
        console.error("SchedulePage:", err);
        setError("Jadwal belum dapat dimuat.");
      } finally {
        setLoading(false);
      }
    }

    getSchedule();
  }, []);

  return (
    <main className="min-h-screen bg-cream text-text">

      {/* =========================
          HERO
      ========================= */}

      <section
        className="
          relative
          overflow-hidden
          px-5
          py-20
          md:px-0
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
            top-[280px]
            size-[100px]
            rounded-full
            border-[18px]
            border-yellow-light
          "
        />

        <div className="container relative">

          <div className="mx-auto max-w-3xl text-center">

            <span className="section-label">
              JADWAL BELAJAR
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
              Yuk, Lihat Jadwal
              <br />

              <span className="text-teal">
                Belajar Mingguan!
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
              Temukan jadwal pembelajaran ILYON Academy
              berdasarkan hari, waktu, program, dan mata
              pelajaran yang tersedia.
            </p>

          </div>

        </div>
      </section>

      {/* =========================
          SCHEDULE
      ========================= */}

      <section
        id="jadwal"
        className="
          bg-white
          px-5
          py-20
          md:px-0
          md:py-24
        "
      >

        <div className="container">

          {/* Intro */}

          <div
            className="
              mx-auto
              mb-12
              flex
              max-w-5xl
              flex-col
              items-center
              justify-between
              gap-5
              rounded-[28px]
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

                <p
                  className="
                    text-sm
                    font-bold
                    text-purple-dark
                  "
                >
                  Jadwal pembelajaran ILYON
                </p>

                <p className="mt-0.5 text-xs text-muted">
                  Jadwal dapat berubah menyesuaikan kebutuhan kelas.
                </p>

              </div>

            </div>

            <div
              className="
                rounded-full
                bg-white
                px-4
                py-2
                text-xs
                font-bold
                text-purple
                shadow-sm
              "
            >
              Senin – Sabtu
            </div>

          </div>

          {/* Loading */}

          {loading && (
            <div className="py-16 text-center">

              <div
                className="
                  mx-auto
                  size-8
                  animate-spin
                  rounded-full
                  border-4
                  border-purple-light
                  border-t-purple
                "
              />

              <p className="mt-4 text-sm text-muted">
                Memuat jadwal...
              </p>

            </div>
          )}

          {/* Error */}

          {!loading && error && (
            <div
              className="
                mx-auto
                max-w-xl
                rounded-[24px]
                bg-coral-light
                px-6
                py-5
                text-center
                text-sm
                font-semibold
                text-coral
              "
            >
              {error}
            </div>
          )}

          {/* Days */}

          {!loading && !error && (
            <div className="mx-auto max-w-5xl space-y-14">

              {Object.entries(schedule).map(
                ([day, items]) => (
                  <DaySchedule
                    key={day}
                    day={day}
                    schedule={items}
                  />
                )
              )}

            </div>
          )}

          {/* Empty */}

          {!loading &&
            !error &&
            Object.keys(schedule).length === 0 && (
              <div className="py-16 text-center">

                <p className="font-baloo text-2xl font-bold text-purple-dark">
                  Belum ada jadwal
                </p>

                <p className="mt-2 text-sm text-muted">
                  Data jadwal belum tersedia.
                </p>

              </div>
            )}

        </div>
      </section>

      {/* =========================
          BOTTOM CTA
      ========================= */}

      <section className="bg-cream px-5 py-20 md:px-0">

        <div className="container">

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              bg-purple
              px-7
              py-14
              text-center
              md:px-12
              md:py-16
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                -left-16
                -top-16
                size-40
                rounded-full
                bg-white/5
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -right-10
                size-56
                rounded-full
                bg-teal/20
              "
            />

            <div className="relative">

              <div
                className="
                  mx-auto
                  mb-5
                  flex size-14
                  items-center justify-center
                  rounded-2xl
                  bg-white/10
                  text-yellow
                "
              >
                <Sparkles size={26} />
              </div>

              <h2
                className="
                  font-baloo
                  text-4xl
                  font-extrabold
                  text-white
                  md:text-5xl
                "
              >
                Ingin Menyesuaikan Jadwal?
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/75
                  md:text-base
                "
              >
                Konsultasikan waktu belajar yang paling nyaman
                untuk anak bersama tim ILYON Academy.
              </p>

              <button
                 onClick={() => openWhatsApp()}
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
                  transition-all
                  hover:-translate-y-0.5
                "
              >
                Tanya Jadwal
                <span>→</span>
              </button>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default SchedulePage;