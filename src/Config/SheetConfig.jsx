export const SHEET_CONFIG = {
  spreadsheetId: import.meta.env.VITE_GOOGLE_SHEET_ID,

  apiKey: import.meta.env.VITE_GOOGLE_SHEET_API_KEY,

  sheets: {
    profile: import.meta.env.VITE_SHEET_PROFILE || "PROFILE",

    students:
      import.meta.env.VITE_SHEET_STUDENTS || "DATA MURID",

    schedule:
      import.meta.env.VITE_SHEET_SCHEDULE || "JADWAL",

    history:
      import.meta.env.VITE_SHEET_HISTORY || "RIWAYAT LES",

    payment:
      import.meta.env.VITE_SHEET_PAYMENT || "PEMBAYARAN",
  },
};