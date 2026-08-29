import {
  Clock3,
  MapPin,
  Users,
  UserRound,
  Monitor,
  BookOpen,
  Sparkles,
} from "lucide-react";

const SCHEDULE = {
  Senin: [
    {
      time: "10:00",
      session: "Sesi 1",
      subject: "Bahasa Inggris",
      program: "Les Harian",
      teacher: "Kak Adit",
      type: "location",
    },
    {
      time: "11:00",
      session: "Sesi 2",
      subject: "Matematika",
      program: "Les Harian",
      teacher: "Kak Adit",
      type: "location",
    },
    {
      time: "13:00",
      session: "Sesi 3",
      subject: "Bahasa Inggris",
      program: "Small Group",
      teacher: "Kak Rina",
      type: "group",
      note: "Kelompok A",
    },
  ],

  Selasa: [
    {
      time: "10:00",
      session: "Sesi 1",
      subject: "Matematika",
      program: "Les Harian",
      teacher: "Kak Budi",
      type: "location",
    },
    {
      time: "11:00",
      session: "Sesi 2",
      subject: "Bahasa Indonesia",
      program: "Les Harian",
      teacher: "Kak Budi",
      type: "location",
    },
    {
      time: "14:00",
      session: "Sesi 3",
      subject: "Matematika",
      program: "Private",
      teacher: "Kak Rina",
      type: "private",
      note: "1-on-1",
    },
  ],

  Rabu: [
    {
      time: "10:00",
      session: "Sesi 1",
      subject: "Bahasa Inggris",
      program: "Les Harian",
      teacher: "Kak Adit",
      type: "location",
    },
    {
      time: "11:00",
      session: "Sesi 2",
      subject: "IPA",
      program: "Les Harian",
      teacher: "Kak Adit",
      type: "location",
    },
  ],

  Kamis: [
    {
      time: "10:00",
      session: "Sesi 1",
      subject: "Matematika",
      program: "Small Group",
      teacher: "Kak Budi",
      type: "group",
      note: "Kelompok B",
    },
    {
      time: "11:00",
      session: "Sesi 2",
      subject: "Bahasa Inggris",
      program: "Small Group",
      teacher: "Kak Budi",
      type: "group",
      note: "Kelompok B",
    },
  ],

  Jumat: [
    {
      time: "10:00",
      session: "Sesi 1",
      subject: "Matematika",
      program: "Les Harian",
      teacher: "Kak Rina",
      type: "location",
    },
    {
      time: "11:00",
      session: "Sesi 2",
      subject: "Bahasa Inggris",
      program: "Online Class",
      teacher: "Kak Adit",
      type: "online",
      note: "Online",
    },
  ],

  Sabtu: [
    {
      time: "09:00",
      session: "Sesi 1",
      subject: "Bahasa Indonesia",
      program: "Les Harian",
      teacher: "Kak Budi",
      type: "location",
    },
    {
      time: "10:00",
      session: "Sesi 2",
      subject: "Bahasa Inggris",
      program: "Private",
      teacher: "Kak Rina",
      type: "private",
      note: "1-on-1",
    },
  ],
};

const PROGRAM_STYLE = {
  location: {
    icon: MapPin,
    iconClass: "bg-purple-light text-purple",
    badgeClass: "bg-purple-light text-purple",
  },

  group: {
    icon: Users,
    iconClass: "bg-teal-light text-teal-dark",
    badgeClass: "bg-teal-light text-teal-dark",
  },

  private: {
    icon: UserRound,
    iconClass: "bg-yellow-light text-[#8c6800]",
    badgeClass: "bg-yellow-light text-[#8c6800]",
  },

  online: {
    icon: Monitor,
    iconClass: "bg-coral-light text-coral",
    badgeClass: "bg-coral-light text-coral",
  },
};

function ScheduleCard({ item }) {
  const style = PROGRAM_STYLE[item.type];
  const Icon = style.icon;

  return (
    <div
      className="
        group
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

        {/* Time */}

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

          {/* Program */}

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

function Schedule() {
  return (
    <main
      className="
        min-h-screen
        bg-cream
        text-text
      "
    >

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
          px-0
          py-20
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

          {/* Days */}

          <div className="mx-auto max-w-5xl space-y-14">

            {Object.entries(SCHEDULE).map(
              ([day, schedule]) => (
                <DaySchedule
                  key={day}
                  day={day}
                  schedule={schedule}
                />
              )
            )}

          </div>

        </div>
      </section>

      {/* =========================
          BOTTOM CTA
      ========================= */}

      <section className="bg-cream px-0 py-20">

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

              <a
                href="#"
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
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Schedule;

