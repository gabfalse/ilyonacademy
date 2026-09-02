
import { openWhatsApp } from "../../Utils/Whatsapp";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-purple/10 bg-cream/95 backdrop-blur-md">
      <div className="container flex h-[78px] items-center justify-between">

        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5">
          <div
            className="
              grid size-[42px] place-items-center
              rounded-full border-[3px] border-purple
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
                tracking-[2px] text-purple
              "
            >
              ILYON
            </strong>

            <span
              className="
                text-[8px] font-bold
                tracking-[3px] text-purple-dark
              "
            >
              ACADEMY
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">



          <a
            href="/program"
            className="
              text-sm font-semibold text-muted
              transition-colors hover:text-purple
            "
          >
            Program
          </a>



          <a
            href="/schedule"
            className="
              text-sm font-semibold text-muted
              transition-colors hover:text-purple
            "
          >
            Jadwal
          </a>
        </nav>

        {/* CTA */}
        <button
          type="button"
          onClick={() => openWhatsApp()}
          className="
            rounded-full bg-purple
            px-5 py-3
            text-sm font-bold text-white
            shadow-[0_10px_25px_rgba(98,71,168,0.25)]
            transition-all
            hover:-translate-y-0.5
            hover:bg-purple-dark
          "
        >
          Daftar Sekarang
        </button>

      </div>
    </header>
  );
}

export default Navbar;
