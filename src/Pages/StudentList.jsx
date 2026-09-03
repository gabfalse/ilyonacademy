import { useEffect, useState } from "react";
import { Search, UserRound } from "lucide-react";
import { SHEET_CONFIG } from "../Config/SheetConfig";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStudents() {
      try {
        const { spreadsheetId, apiKey, sheets } = SHEET_CONFIG;

        const url =
          `https://sheets.googleapis.com/v4/spreadsheets/` +
          `${spreadsheetId}/values/${encodeURIComponent(sheets.students)}` +
          `?key=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Gagal mengambil data murid");
        }

        const data = await response.json();

        const rows = data.values || [];

        setStudents(
          rows.slice(1).map((row) => ({
            id: row[0] || "",
            name: row[1] || "",
            school: row[2] || "",
            className: row[3] || "",
            subject: row[4] || "",
            status: row[8] || "",
          }))
        );
      } catch (error) {
        console.error("Student List:", error);
      } finally {
        setLoading(false);
      }
    }

    getStudents();
  }, []);

  const filteredStudents = students.filter((student) =>
    `${student.id} ${student.name} ${student.school}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="bg-cream px-5 py-12 text-text">
      <div className="container">

        {/* Header */}
        <div className="mb-8 text-center">
          <span className="section-label">
            DATA MURID
          </span>

          <h1 className="mt-4 font-baloo text-4xl font-extrabold text-purple-dark">
            Daftar Murid
          </h1>
        </div>

        {/* Search */}
        <div className="mx-auto mb-8 max-w-xl">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="text"
              placeholder="Cari nama, ID, atau sekolah..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full rounded-2xl
                border border-purple/10
                bg-white
                py-3.5 pl-11 pr-4
                text-sm outline-none
                focus:border-purple
              "
            />
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <p className="py-10 text-center text-sm text-muted">
            Memuat data murid...
          </p>
        )}

        {/* Student List */}
        {!loading && (
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="
                  rounded-3xl
                  border border-purple/10
                  bg-white
                  p-5
                  shadow-[0_8px_25px_rgba(66,45,117,0.06)]
                "
              >
                <div className="flex gap-4">

                  {/* Icon */}
                  <div
                    className="
                      grid size-12 shrink-0
                      place-items-center
                      rounded-2xl
                      bg-purple-light
                      text-purple
                    "
                  >
                    <UserRound size={22} />
                  </div>

                  {/* Data */}
                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="font-baloo text-xl font-extrabold text-purple-dark">
                          {student.name}
                        </h2>

                        <p className="text-xs text-muted">
                          {student.id}
                        </p>
                      </div>

                      <span
                        className="
                          rounded-full
                          bg-teal-light
                          px-3 py-1
                          text-[10px]
                          font-bold
                          text-teal-dark
                        "
                      >
                        {student.status || "-"}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-sm">
                      <p>
                        <span className="text-muted">
                          Sekolah:
                        </span>{" "}
                        <strong>{student.school || "-"}</strong>
                      </p>

                      <p>
                        <span className="text-muted">
                          Kelas:
                        </span>{" "}
                        <strong>{student.className || "-"}</strong>
                      </p>

                      <p>
                        <span className="text-muted">
                          Pelajaran:
                        </span>{" "}
                        <strong>{student.subject || "-"}</strong>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && filteredStudents.length === 0 && (
          <p className="py-10 text-center text-sm text-muted">
            Data murid tidak ditemukan.
          </p>
        )}

      </div>
    </main>
  );
}

export default StudentList;