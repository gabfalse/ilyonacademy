
import { openWhatsApp } from "../../Utils/Whatsapp";

function Footer() {
  return (
    <footer className="bg-[#29244a] py-[65px] pb-6 text-white">
      <div
        className="
          container
          grid
          gap-[35px]
          sm:grid-cols-2
          lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr]
          lg:gap-[60px]
        "
      >

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">

            <div
              className="
                grid size-[42px] place-items-center
                rounded-full border-[3px] border-white
                font-baloo text-[25px] font-extrabold
                text-teal
              "
            >
              I
            </div>

            <div className="flex flex-col leading-[0.9]">
              <strong
                className="
                  font-baloo text-[25px] font-extrabold
                  tracking-[2px] text-white
                "
              >
                ILYON
              </strong>

              <span
                className="
                  text-[8px] font-bold
                  tracking-[3px] text-[#bbb6d4]
                "
              >
                ACADEMY
              </span>
            </div>

          </div>

          <p
            className="
              mt-5 max-w-[350px]
              text-xs leading-[1.8]
              text-[#aaa6bd]
            "
          >
            Belajar seru, prestasi maju. Teman belajar anak untuk berkembang
            dan menjadi lebih percaya diri.
          </p>
        </div>


        {/* Program */}
        <div className="flex flex-col gap-[11px]">
          <h4 className="mb-2 font-baloo text-[19px]">
            Program
          </h4>

          <a
            href="#program"
            className="
              text-[11px] text-[#aaa6bd]
              transition-colors hover:text-white
            "
          >
            Matematika
          </a>

          <a
            href="#program"
            className="
              text-[11px] text-[#aaa6bd]
              transition-colors hover:text-white
            "
          >
            Calistung
          </a>

          <a
            href="#program"
            className="
              text-[11px] text-[#aaa6bd]
              transition-colors hover:text-white
            "
          >
            Bahasa Inggris
          </a>

          <a
            href="#program"
            className="
              text-[11px] text-[#aaa6bd]
              transition-colors hover:text-white
            "
          >
            Coding for Kids
          </a>
        </div>


        {/* Informasi */}
        <div className="flex flex-col gap-[11px]">
          <h4 className="mb-2 font-baloo text-[19px]">
            Informasi
          </h4>

          <a
            href="#harga"
            className="
              text-[11px] text-[#aaa6bd]
              transition-colors hover:text-white
            "
          >
            Harga
          </a>

          <a
            href="#jadwal"
            className="
              text-[11px] text-[#aaa6bd]
              transition-colors hover:text-white
            "
          >
            Jadwal
          </a>

          <a
            href="#keunggulan"
            className="
              text-[11px] text-[#aaa6bd]
              transition-colors hover:text-white
            "
          >
            Keunggulan
          </a>
        </div>


        {/* Kontak */}
        <div className="flex flex-col gap-[11px]">
          <h4 className="mb-2 font-baloo text-[19px]">
            Hubungi Kami
          </h4>

          <button
            type="button"
            onClick={() => openWhatsApp()}
            className="
              bg-transparent
              text-left text-[11px]
              text-[#aaa6bd]
              transition-colors
              hover:text-white
            "
          >
            WhatsApp
          </button>

          <a
            href="https://instagram.com/ilyon.academi"
            target="_blank"
            rel="noreferrer"
            className="
              text-[11px]
              text-[#aaa6bd]
              transition-colors
              hover:text-white
            "
          >
            @ilyon.academi
          </a>

          <span className="text-[11px] text-[#aaa6bd]">
            Renged Sukabumi & Kabandungan
          </span>
        </div>

      </div>


      {/* Copyright */}
      <div
        className="
          container
          mt-[50px]
          border-t border-white/10
          pt-5
          text-center
          text-[10px]
          text-[#77738d]
        "
      >
        © 2026 ILYON Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
