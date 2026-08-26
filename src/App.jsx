

const WHATSAPP_NUMBER = "6285759722004";

const openWhatsApp = () => {
  const message = encodeURIComponent(
    "Halo ILYON Academy 👋\n\nSaya ingin mendapatkan informasi tentang les di ILYON Academy."
  );

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
};

const programs = [
  {
    icon: "＋",
    title: "Matematika",
    description:
      "Membantu anak memahami konsep matematika dan lebih percaya diri mengerjakan soal.",
    color: "purple",
  },
  {
    icon: "ABC",
    title: "Calistung",
    description:
      "Belajar membaca, menulis, dan berhitung dengan metode yang menyenangkan.",
    color: "yellow",
  },
  {
    icon: "EN",
    title: "Bahasa Inggris",
    description:
      "Mengembangkan kemampuan speaking, listening, reading, dan writing.",
    color: "teal",
  },
  {
    icon: "</>",
    title: "Coding for Kids",
    description:
      "Mengenalkan dunia coding kepada anak melalui pembelajaran yang mudah dan menyenangkan.",
    color: "coral",
  },
];

const packages = [
  {
    type: "Academy",
    title: "Datang ke ILYON Academy",
    price: "5.000",
    suffix: "/ pertemuan",
    description: "Belajar langsung di tempat ILYON Academy.",
    featured: false,
  },
  {
    type: "Small Group",
    title: "Kelompok Kecil",
    price: "10.000",
    suffix: "/ pertemuan",
    description: "Belajar bersama 4–5 siswa dalam suasana yang interaktif.",
    featured: true,
  },
  {
    type: "Private",
    title: "Private",
    price: "100.000",
    suffix: "/ 4 pertemuan",
    description: "1 guru untuk 1 siswa. Bisa datang ke rumah.",
    featured: false,
  },
];

const advantages = [
  "Pengajar berpengalaman & ramah",
  "Pendekatan belajar menyenangkan",
  "Fleksibel menyesuaikan kebutuhan anak",
  "Membantu tugas akademik sekolah",
];

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#home" className="brand">
            <div className="brand-logo">I</div>

            <div className="brand-text">
              <strong>ILYON</strong>
              <span>ACADEMY</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#program">Program</a>
            <a href="#harga">Harga</a>
            <a href="#keunggulan">Keunggulan</a>
            <a href="#jadwal">Jadwal</a>
          </nav>

          <button className="nav-button" onClick={openWhatsApp}>
            Daftar Sekarang
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-decoration decoration-one" />
          <div className="hero-decoration decoration-two" />

          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span>✨</span>
                LES UNTUK ANAK USIA 4–15 TAHUN
              </div>

              <h1>
                Belajar Seru,
                <br />
                <span>Prestasi Maju!</span>
              </h1>

              <p className="hero-description">
                Teman belajar anak untuk berkembang lebih percaya diri,
                memahami pelajaran, dan meraih prestasi dengan cara yang
                menyenangkan.
              </p>

              <div className="hero-actions">
                <button className="primary-button" onClick={openWhatsApp}>
                  Daftar Sekarang
                  <span>→</span>
                </button>

                <a href="#program" className="secondary-button">
                  Lihat Program
                </a>
              </div>

              <div className="hero-features">
                <div>
                  <span>✓</span>
                  Private & kelompok kecil
                </div>

                <div>
                  <span>✓</span>
                  Pengajar berpengalaman
                </div>

                <div>
                  <span>✓</span>
                  Pembelajaran menyenangkan
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <div className="visual-top">
                  <span className="mini-label">ILYON ACADEMY</span>
                  <span className="star">★</span>
                </div>

                <div className="illustration">
                  <div className="student student-left">
                    <div className="head" />
                    <div className="body" />
                  </div>

                  <div className="student student-right">
                    <div className="head" />
                    <div className="body" />
                  </div>

                  <div className="desk">
                    <div className="book book-one" />
                    <div className="book book-two" />
                    <div className="pencil" />
                  </div>
                </div>

                <div className="visual-bottom">
                  <div>
                    <strong>4–15</strong>
                    <span>Tahun</span>
                  </div>

                  <div>
                    <strong>4+</strong>
                    <span>Program</span>
                  </div>

                  <div>
                    <strong>1:1</strong>
                    <span>Private</span>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card-one">
                <span>📚</span>
                <div>
                  <strong>Belajar</strong>
                  <small>lebih menyenangkan</small>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <span>⭐</span>
                <div>
                  <strong>Lebih percaya diri</strong>
                  <small>dalam belajar</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="trust-bar">
          <div className="container trust-inner">
            <div>
              <span>🎯</span>
              <strong>Usia 4–15 Tahun</strong>
            </div>

            <div>
              <span>👩‍🏫</span>
              <strong>Pengajar Berpengalaman</strong>
            </div>

            <div>
              <span>💡</span>
              <strong>Metode Menyenangkan</strong>
            </div>

            <div>
              <span>🏠</span>
              <strong>Tersedia Private</strong>
            </div>
          </div>
        </section>

        {/* PROGRAM */}
        <section id="program" className="section program-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">PROGRAM BELAJAR</span>

              <h2>
                Pilih pelajaran yang
                <br />
                <span>dibutuhkan anak</span>
              </h2>

              <p>
                Materi disesuaikan dengan usia dan kebutuhan belajar anak.
              </p>
            </div>

            <div className="program-grid">
              {programs.map((program) => (
                <article
                  className={`program-card ${program.color}`}
                  key={program.title}
                >
                  <div className="program-icon">{program.icon}</div>

                  <h3>{program.title}</h3>

                  <p>{program.description}</p>

                  <a href="#harga">
                    Lihat paket <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ENGLISH HIGHLIGHT */}
        <section className="english-section">
          <div className="container english-grid">
            <div className="english-content">
              <span className="section-label">PROGRAM UNGGULAN</span>

              <h2>
                English yang
                <br />
                <span>seru & menyenangkan!</span>
              </h2>

              <p>
                Membantu anak mengembangkan kemampuan Bahasa Inggris secara
                bertahap melalui pembelajaran yang interaktif.
              </p>

              <div className="english-skills">
                <div>
                  <span>01</span>
                  <strong>Speaking</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Listening</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Reading</strong>
                </div>

                <div>
                  <span>04</span>
                  <strong>Writing</strong>
                </div>
              </div>

              <button className="light-button" onClick={openWhatsApp}>
                Tanya Program English →
              </button>
            </div>

            <div className="english-visual">
              <div className="speech-bubble bubble-one">Hello!</div>
              <div className="speech-bubble bubble-two">ABC</div>

              <div className="english-book">
                <div className="book-page">
                  <span>A</span>
                  <span>B</span>
                  <span>C</span>
                </div>

                <div className="book-title">ENGLISH</div>
              </div>
            </div>
          </div>
        </section>

        {/* HARGA */}
        <section id="harga" className="section price-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">PILIHAN BELAJAR</span>

              <h2>
                Belajar sesuai
                <br />
                <span>kebutuhan anak</span>
              </h2>

              <p>
                Pilih kelas yang paling sesuai dengan kebutuhan dan kenyamanan
                anak.
              </p>
            </div>

            <div className="price-grid">
              {packages.map((item) => (
                <article
                  className={`price-card ${item.featured ? "featured" : ""}`}
                  key={item.type}
                >
                  {item.featured && (
                    <div className="popular-badge">PALING POPULER</div>
                  )}

                  <span className="price-type">{item.type}</span>

                  <h3>{item.title}</h3>

                  <div className="price">
                    <span>Rp</span>
                    {item.price}
                  </div>

                  <div className="price-suffix">{item.suffix}</div>

                  <p>{item.description}</p>

                  <ul>
                    <li>✓ Pembelajaran interaktif</li>
                    <li>✓ Materi sesuai level</li>
                    <li>✓ Pengajar berpengalaman</li>
                  </ul>

                  <button onClick={openWhatsApp}>Pilih Program →</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section id="keunggulan" className="section advantage-section">
          <div className="container advantage-grid">
            <div className="advantage-visual">
              <div className="circle circle-main">
                <span>ILYON</span>
                <small>ACADEMY</small>
              </div>

              <div className="circle-badge badge-one">📚</div>
              <div className="circle-badge badge-two">⭐</div>
              <div className="circle-badge badge-three">💡</div>
            </div>

            <div className="advantage-content">
              <span className="section-label">KENAPA ILYON?</span>

              <h2>
                Bukan hanya
                <br />
                <span>belajar pelajaran.</span>
              </h2>

              <p>
                Kami ingin membantu anak menikmati proses belajar, menjadi
                lebih percaya diri, dan berkembang sesuai potensinya.
              </p>

              <div className="advantage-list">
                {advantages.map((item, index) => (
                  <div className="advantage-item" key={item}>
                    <div className="check">
                      {index + 1}
                    </div>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* JADWAL */}
        <section id="jadwal" className="schedule-section">
          <div className="container">
            <div className="schedule-card">
              <div className="schedule-heading">
                <span className="section-label">JADWAL BELAJAR</span>

                <h2>
                  Tentukan waktu belajar
                  <br />
                  <span>yang nyaman</span>
                </h2>
              </div>

              <div className="schedule-grid">
                <div className="schedule-item">
                  <div className="schedule-icon">📅</div>

                  <div>
                    <span>ILYON ACADEMY</span>
                    <strong>Senin – Kamis</strong>
                    <p>09.00 – 16.00</p>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="schedule-icon">👥</div>

                  <div>
                    <span>SMALL GROUP</span>
                    <strong>Senin – Kamis</strong>
                    <p>12.00 – 16.00</p>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="schedule-icon">🏠</div>

                  <div>
                    <span>PRIVATE</span>
                    <strong>Hari Sabtu</strong>
                    <p>Bisa datang ke rumah</p>
                  </div>
                </div>
              </div>

              <button className="primary-button" onClick={openWhatsApp}>
                Konsultasikan Jadwal →
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <div className="cta-decoration">✦</div>

              <span className="section-label">SIAP MULAI BELAJAR?</span>

              <h2>
                Yuk, belajar bareng
                <br />
                <span>di ILYON Academy!</span>
              </h2>

              <p>
                Raih prestasi dan wujudkan masa depan cerah bersama ILYON
                Academy.
              </p>

              <button className="cta-button" onClick={openWhatsApp}>
                Daftar Sekarang via WhatsApp
                <span>→</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <div className="brand-logo">I</div>

              <div className="brand-text">
                <strong>ILYON</strong>
                <span>ACADEMY</span>
              </div>
            </div>

            <p>
              Belajar seru, prestasi maju. Teman belajar anak untuk berkembang
              dan menjadi lebih percaya diri.
            </p>
          </div>

          <div className="footer-column">
            <h4>Program</h4>
            <a href="#program">Matematika</a>
            <a href="#program">Calistung</a>
            <a href="#program">Bahasa Inggris</a>
            <a href="#program">Coding for Kids</a>
          </div>

          <div className="footer-column">
            <h4>Informasi</h4>
            <a href="#harga">Harga</a>
            <a href="#jadwal">Jadwal</a>
            <a href="#keunggulan">Keunggulan</a>
          </div>

          <div className="footer-column">
            <h4>Hubungi Kami</h4>

            <button onClick={openWhatsApp}>
              WhatsApp
            </button>

            <a
              href="https://instagram.com/ilyon.academi"
              target="_blank"
              rel="noreferrer"
            >
              @ilyon.academi
            </a>

            <span>Renged Sukabumi & Kabandungan</span>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 ILYON Academy. All rights reserved.
        </div>
      </footer>

      {/* MOBILE CTA */}
      <button className="mobile-floating-button" onClick={openWhatsApp}>
        <span>💬</span>
        Daftar Sekarang
      </button>
    </div>
  );
}

export default App;