
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { openWhatsApp } from "../../Utils/Whatsapp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-purple/10 bg-cream/95 backdrop-blur-md">
      <div className="container flex h-[68px] items-center justify-between lg:h-[78px]">

        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5">
          {/* Mobile: hanya I */}
          <div
            className="
              grid size-[40px] place-items-center
              rounded-full border-[3px] border-purple
              font-baloo text-[24px] font-extrabold
              text-teal
              lg:hidden
            "
          >
            I
          </div>

          {/* Desktop: I + ILYON ACADEMY */}
          <div className="hidden items-center gap-2.5 lg:flex">
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
          </div>
        </a>

        {/* Desktop Navigation */}
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
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            grid size-10 place-items-center
            rounded-full
            text-purple
            transition-colors
            hover:bg-purple/10
            lg:hidden
          "
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} strokeWidth={2.5} />
          ) : (
            <Menu size={24} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="
            border-t border-purple/10
            bg-cream
            px-5 py-4
            lg:hidden
          "
        >
          <nav className="flex flex-col gap-1">
            <a
              href="/program"
              onClick={() => setIsOpen(false)}
              className="
                rounded-xl px-4 py-3
                text-sm font-semibold text-muted
                transition-colors
                hover:bg-purple/5 hover:text-purple
              "
            >
              Program
            </a>

            <a
              href="/schedule"
              onClick={() => setIsOpen(false)}
              className="
                rounded-xl px-4 py-3
                text-sm font-semibold text-muted
                transition-colors
                hover:bg-purple/5 hover:text-purple
              "
            >
              Jadwal
            </a>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openWhatsApp();
              }}
              className="
                mt-2 w-full
                rounded-xl bg-purple
                px-4 py-3
                text-sm font-bold text-white
                transition-colors
                hover:bg-purple-dark
              "
            >
              Daftar
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
