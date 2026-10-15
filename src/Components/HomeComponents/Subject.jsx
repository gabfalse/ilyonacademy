import { useState } from "react";
import {
  BookOpen,
  Calculator,
  Puzzle,
  Languages,
  CheckCircle2,
} from "lucide-react";

const SUBJECTS = [
  {
    id: "english",
    title: "English",
    description:
      "Membantu anak membangun kemampuan Bahasa Inggris secara bertahap melalui kegiatan belajar yang menyenangkan dan sesuai dengan levelnya.",
    icon: Languages,
    points: [
      "Vocabulary & percakapan sehari-hari",
      "Grammar dasar hingga lanjutan",
      "Speaking & pronunciation",
      "Reading & comprehension",
    ],
  },
  {
    id: "calistung",
    title: "Calistung",
    description:
      "Mendampingi anak mengenal membaca, menulis, dan berhitung melalui aktivitas belajar yang menyenangkan.",
    icon: BookOpen,
    points: [
      "Mengenal huruf & angka",
      "Membaca secara bertahap",
      "Menulis dan berhitung dasar",
    ],
  },
  {
    id: "math",
    title: "Matematika",
    description:
      "Membantu anak memahami konsep matematika dengan cara yang sederhana, bertahap, dan mudah dipahami.",
    icon: Calculator,
    points: [
      "Berhitung & operasi dasar",
      "Pemahaman konsep matematika",
      "Pemecahan masalah",
    ],
  },
  {
    id: "sensory-motoric",
    title: "Sensory & Motoric",
    description:
      "Melatih kemampuan sensori dan motorik anak melalui aktivitas bermain yang kreatif dan sesuai tahap tumbuh kembangnya.",
    icon: Puzzle,
    points: [
      "Stimulasi sensori dan eksplorasi tekstur",
      "Motorik halus & koordinasi tangan-mata",
      "Motorik kasar & keseimbangan tubuh",
    ],
  },
];

function Subjects() {
  const [activeSubject, setActiveSubject] = useState(null);
  const selectedSubject = SUBJECTS.find(
    (subject) => subject.id === activeSubject
  );

  return (
    <main className="min-h-screen bg-cream px-4 py-12 text-text sm:px-6">
      <section id="subjects" className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-purple">
            ILYON ACADEMY
          </p>
          <h1 className="mt-2 font-baloo text-3xl font-extrabold text-purple-dark sm:text-4xl">
            Pilih Mata Pelajaran
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
            Pilih kategori untuk melihat informasi dan materi pembelajaran.
          </p>
        </header>

        <div
          className="flex flex-wrap justify-center gap-3"
          aria-label="Kategori mata pelajaran"
        >
          {SUBJECTS.map((subject) => {
            const Icon = subject.icon;
            const isActive = activeSubject === subject.id;

            return (
              <button
                key={subject.id}
                type="button"
                onClick={() =>
                  setActiveSubject(isActive ? null : subject.id)
                }
                aria-pressed={isActive}
                className={`inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-purple bg-purple text-white"
                    : "border-gray-200 bg-white text-purple-dark hover:border-purple"
                }`}
              >
                <Icon size={18} />
                {subject.title}
              </button>
            );
          })}
        </div>

        {selectedSubject && (
          <section
            key={selectedSubject.id}
            className="mx-auto mt-6 max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-purple-light text-purple">
                <selectedSubject.icon size={22} />
              </div>
              <div>
                <h2 className="font-baloo text-2xl font-bold text-purple-dark">
                  {selectedSubject.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {selectedSubject.description}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-bold text-purple-dark">
                Materi yang dipelajari
              </h3>
              <ul className="mt-3 space-y-3">
                {selectedSubject.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm leading-6 text-muted"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-teal"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

export default Subjects;
