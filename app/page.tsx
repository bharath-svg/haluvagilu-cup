import Link from "next/link";
import { seasons } from "@/data/seasons";
import MobileNav from "./components/MobileNav";
import Image from "next/image";



function TrophyIcon({ size = 130 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 180"
      fill="none"
      role="img"
      aria-label="Championship trophy"
    >
      <defs>
        <linearGradient id="cupGlow" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#B9FFFF" />
          <stop offset=".5" stopColor="#21E8F0" />
          <stop offset="1" stopColor="#007F99" />
        </linearGradient>
      </defs>
      <path
        d="M44 25H116V62C116 95 103 116 80 116S44 95 44 62V25Z"
        fill="url(#cupGlow)"
        stroke="#C8FFFF"
        strokeWidth="2"
      />
      <path
        d="M44 37H23V53C23 78 35 92 53 93M116 37H137V53C137 78 125 92 107 93"
        stroke="#28EAF4"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M80 116V144M57 158H103M67 145H93"
        stroke="#65F8FF"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path d="M80 43L87 58H104L91 70L96 88L80 78L64 88L69 70L56 58H73Z" fill="#E0FFFF" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="hvl-site">
      {/* NAVIGATION */}
      <header className="hvl-nav">
        <a href="#home" className="hvl-brand">
          <span className="hvl-brand-symbol">
            <Image
              src="/images/hero/BOSS.webp"
              alt="Haluvagilu Cup Logo"
              width={48}
              height={48}
              className="hvl-brand-logo"
              priority
            />
          </span>
          <span>
            HALUVAGILU
            <small>CUP LEGACY</small>
          </span>
        </a>

        <nav className="hvl-links" aria-label="Main navigation">
          <a href="#home">HOME</a>
          {/* <a href="#legacy">LEGACY</a> */}
          <a href="#seasons">SEASONS</a>
        </nav>
        <nav className="hvl-links" aria-label="Main navigation">
          <a href="#home">HOME</a>
          {/* <a href="#legacy">LEGACY</a> */}
          <a href="#seasons">SEASONS</a>
        </nav>

        <MobileNav />

        <a className="hvl-nav-button" href="#seasons">
          EXPLORE <span aria-hidden="true">↗</span>
        </a>
      </header>

      {/* CINEMATIC HERO */}
      <section id="home" className="hvl-hero-v2">
        <div className="hvl-stadium-bg" />

        <div className="hvl-grid-bg" />
        <div className="hvl-light hvl-light-one" />
        <div className="hvl-light hvl-light-two" />
        <div className="hvl-orb hvl-orb-one" />
        <div className="hvl-orb hvl-orb-two" />

        <div className="hvl-hero-content">
          <div className="hvl-eyebrow">
            <span className="hvl-live-dot" />
            THE OFFICIAL CRICKET LEGACY
            <span className="hvl-eyebrow-line" />
          </div>

          <div className="hvl-trophy-stage">
            <div className="hvl-ring hvl-ring-outer" />
            <div className="hvl-ring hvl-ring-inner" />
            <div className="hvl-stage-glow" />
            <div className="hvl-floating-cup">
              <TrophyIcon />
            </div>
          </div>

          <div className="hvl-hero-titles">
            <p className="hvl-pretitle">THE PRIDE. THE PASSION. THE GLORY.</p>

            <h1>
              HALUVAGILU
              <span className="hvl-title-cup">CUP<span className="hvl-title-dot">.</span></span>
            </h1>

            <div className="hvl-hero-divider">
              <span />
              <b>THE LEGACY OF CHAMPIONS</b>
              <span />
            </div>

            <p className="hvl-hero-description">
              Six unforgettable seasons. Countless cricket memories.
              One legendary tournament. And the next chapter is coming.
            </p>

            <div className="hvl-hero-actions">
              <a href="#seasons" className="hvl-primary-button">
                EXPLORE THE LEGACY
                <span aria-hidden="true">↗</span>
              </a>
              {/* <a href="#legacy" className="hvl-secondary-button">
                DISCOVER OUR STORY
              </a> */}
            </div>
          </div>


        </div>


      </section>

      {/* ANIMATED TICKER */}


      {/* LEGACY INTRODUCTION */}


      {/* ALL SEASONS */}
      <section id="seasons" className="hvl-seasons-section">
        <div className="hvl-seasons-heading">
          <div>
            <div className="hvl-section-tag">
              <span /> THE ARCHIVES / 002
            </div>
            <h2 className="hvl-section-title">
              SEVEN CHAPTERS.
              <span>ONE LEGACY.</span>
            </h2>
          </div>
          <p>
            Six chapters written in history.
            The seventh is yet to unfold.
          </p>
        </div>

        <div className="hvl-season-grid">
          {seasons.map((season) => (
            <Link
              key={season.number}
              href={`/seasons/${season.number}`}
              className="block"
            >
              <article
                className={`hvl-season-card-v2 h-full ${!season.completed ? "hvl-season-upcoming" : ""
                  }`}
                style={{
                  backgroundImage: season.image
                    ? `linear-gradient(180deg, rgba(2,8,14,.08), rgba(2,8,14,.94)), url("${season.image}")`
                    : undefined,
                }}
              >
                <div className="hvl-card-top">
                  <span className="hvl-card-code">
                    HVL / {String(season.number).padStart(2, "0")}
                  </span>
                  <span
                    className={`hvl-status ${season.completed ? "hvl-done" : "hvl-soon"
                      }`}
                  >
                    {season.completed ? "COMPLETED" : "COMING SOON"}
                  </span>
                </div>

                <span className="hvl-card-watermark">
                  {String(season.number).padStart(2, "0")}
                </span>

                <div className="hvl-card-bottom">
                  <p>THE HALUVAGILU CUP</p>
                  <h3>
                    SEASON
                    <span>{String(season.number).padStart(2, "0")}</span>
                  </h3>
                  <div className="hvl-card-footer">
                    <span>
                      {season.completed
                        ? "EXPLORE SEASON"
                        : "THE NEXT CHAPTER"}
                    </span>
                    <span className="hvl-card-arrow">↗</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* NEXT SEASON TEASER */}
      <section className="hvl-next-section">
        <div className="hvl-next-glow" />
        <span className="hvl-section-tag">THE FUTURE / 003</span>
        <p>THE STORY ISN'T OVER</p>
        <h2>
          SEASON <span>07</span>
        </h2>
        <strong>THE NEXT CHAPTER AWAITS</strong>
        <div className="hvl-next-line" />
        <span className="hvl-next-footnote">
          THE LEGACY CONTINUES
        </span>
      </section>

      {/* FOOTER */}
      <footer className="hvl-footer">
        <div className="hvl-footer-brand">
          HALUVAGILU <span>CUP.</span>
        </div>
        <p>BUILT FOR THE LOVE OF CRICKET.</p>
        <small>6 SEASONS COMPLETED • SEASON 7 AWAITS</small>
      </footer>
    </main>
  );
}