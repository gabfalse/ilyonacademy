import { useEffect, useState } from "react";
import { SHEET_CONFIG } from "../../Config/SheetConfig";

function StudentCounter() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getStudentCount() {
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

        const names = rows
          .slice(1)
          .map((row) => row[1])
          .filter((name) => name?.trim());

        setTotal(names.length);
      } catch (error) {
        console.error("StudentCounter:", error);
        setTotal(0);
      }
    }

    getStudentCount();
  }, []);

  return (
    <div>
      <strong className="font-baloo text-lg font-extrabold text-purple">
        {total}+
      </strong>

      <p className="text-[10px] font-semibold leading-tight text-muted">
        Teman Belajar Kami
      </p>
    </div>
  );
}

export default StudentCounter;