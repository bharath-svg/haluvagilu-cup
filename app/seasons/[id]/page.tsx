import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { seasons, type Team } from "@/data/seasons";


export const instant = false;


type Props = {
    params: Promise<{ id: string }>;
};

export function generateStaticParams() {
    return seasons.map((season) => ({
        id: String(season.number),
    }));
}

function TeamCard({
  title,
  team,
}: {
  title: string;
  team: Team | null;
}) {
  const isChampion = title === "CHAMPIONS";

  return (
    <article
      className={`
        group relative overflow-hidden rounded-2xl
        border bg-[#07131d]
        transition-all duration-500 hover:-translate-y-1
        ${
          isChampion
            ? "border-amber-400/40 hover:border-amber-300 hover:shadow-[0_15px_55px_rgba(245,158,11,0.20)]"
            : "border-slate-300/40 hover:border-slate-200 hover:shadow-[0_15px_55px_rgba(203,213,225,0.15)]"
        }
      `}
    >
      {/* Metallic top border */}
      <div
        className={`h-1 w-full ${
          isChampion
            ? "bg-gradient-to-r from-amber-800 via-yellow-300 to-amber-700"
            : "bg-gradient-to-r from-slate-600 via-white to-slate-500"
        }`}
      />

      {/* Team photograph */}
      <div className="relative h-56 overflow-hidden bg-[#0b2631] sm:h-72">
        {team?.image ? (
          <Image
            src={team.image}
            alt={team.name || title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            Team photo coming soon
          </div>
        )}

        {/* Photo gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07131d] via-transparent to-black/20" />

        {/* Award badge over image */}
        <div
          className={`
            absolute left-4 top-4 flex items-center
            gap-2 rounded-full border px-4 py-2
            text-[10px] font-black tracking-[0.15em]
            backdrop-blur-md sm:text-xs
            ${
              isChampion
                ? "border-amber-300/50 bg-amber-400/20 text-yellow-200"
                : "border-slate-200/50 bg-slate-300/20 text-slate-100"
            }
          `}
        >
          <span aria-hidden="true">
            {isChampion ? "★" : "◆"}
          </span>
          {isChampion ? "GOLD • 1ST PLACE" : "SILVER • 2ND PLACE"}
        </div>
      </div>

      {/* Team information */}
      <div className="relative p-6 sm:p-8">

        {/* Championship heading */}
        <div className="flex items-center gap-3">
          <div
            className={`
              flex h-12 w-12 shrink-0 items-center
              justify-center rounded-xl border text-2xl
              ${
                isChampion
                  ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                  : "border-slate-300/30 bg-slate-300/10 text-slate-200"
              }
            `}
          >
            {isChampion ? "★" : "◆"}
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400">
              HALUVAGILU CUP
            </p>

            <h2
              className={`
                mt-1 bg-clip-text text-xl font-black
                uppercase tracking-[0.12em]
                text-transparent sm:text-2xl
                ${
                  isChampion
                    ? "bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-500"
                    : "bg-gradient-to-r from-slate-400 via-white to-slate-400"
                }
              `}
            >
              {title}
            </h2>
          </div>
        </div>

        {/* Team name */}
        <h3 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
          {team?.name || "Team details coming soon"}
        </h3>

        {/* Captain */}
        {team?.captain && (
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-300">
              CAPTAIN
            </span>

            <span
              className={`
                rounded-lg border px-4 py-2
                text-sm font-black uppercase
                tracking-wide shadow-lg sm:text-base
                ${
                  isChampion
                    ? "border-amber-400/30 bg-amber-400/10 text-amber-300 shadow-amber-500/10"
                    : "border-slate-300/30 bg-slate-300/10 text-slate-200 shadow-slate-300/10"
                }
              `}
            >
              {team.captain}
            </span>
          </div>
        )}

        {/* Decorative bottom line */}
        <div
          className={`
            mt-7 h-px w-full bg-gradient-to-r
            ${
              isChampion
                ? "from-amber-400/60 to-transparent"
                : "from-slate-300/60 to-transparent"
            }
          `}
        />

        <p className="mt-4 text-[10px] font-bold tracking-[0.2em] text-slate-500">
          {isChampion
            ? "THE GLORY OF CHAMPIONS"
            : "THE PRIDE OF FINALISTS"}
        </p>
      </div>
    </article>
  );
}

export default async function SeasonPage({ params }: Props) {
    const { id } = await params;

    const season = seasons.find(
        (item) => String(item.number) === id
    );

    if (!season) {
        notFound();
    }

    const seasonLabel = String(season.number).padStart(2, "0");

    return (
        <main className="min-h-screen bg-[#02070d] text-white">
            {/* Back navigation */}
            <header className="mx-auto max-w-7xl px-5 py-7 sm:px-8">
                <Link
                    href="/#seasons"
                    className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-cyan-300 transition hover:text-white"
                >
                    <span aria-hidden="true">←</span>
                    BACK TO ALL SEASONS
                </Link>
            </header>

            {/* Season cover */}
            {/* RESPONSIVE CINEMATIC SEASON HERO */}
            <section
                className="
    relative isolate flex
    min-h-[360px]
    items-center overflow-hidden
    border-b border-cyan-400/20
    bg-[#02070d]
    sm:min-h-[480px]
    lg:min-h-[580px]
  "
            >
                {/* Background image */}
                {season.image && (
                    <Image
                        src={season.image}
                        alt={`Haluvagilu Cup Season ${season.number}`}
                        fill
                        priority
                        sizes="100vw"
                        className="-z-20 object-cover object-center"
                    />
                )}

                {/* Cinematic overlay */}
                <div
                    className="
      absolute inset-0 -z-10
      bg-gradient-to-t
      from-[#02070d]
      via-[#02070d]/85
      to-[#092936]/50
    "
                />

                {/* Cyan background glow */}
                <div
                    aria-hidden="true"
                    className="
      pointer-events-none absolute
      -right-16 top-1/4 -z-10
      h-48 w-48 rounded-full
      bg-cyan-400/10 blur-3xl
      sm:h-80 sm:w-80
    "
                />

                {/* Main content */}
                <div
                    className="
      relative mx-auto w-full
      max-w-7xl min-w-0
      px-5 py-14
      sm:px-8 sm:py-20
      lg:px-12 lg:py-24
    "
                >
                    {/* Small heading */}
                    <p
                        className="
        max-w-full text-[9px]
        font-bold uppercase
        leading-relaxed
        tracking-[0.14em]
        text-cyan-300
        sm:text-xs
        sm:tracking-[0.3em]
      "
                    >
                        HALUVAGILU CUP / THE LEGACY ARCHIVE
                    </p>

                    {/* Responsive season heading */}
                    <h1
                        className="
        mt-7 max-w-full
        font-black uppercase
        leading-[0.92]
        tracking-[-0.06em]
        sm:mt-9
      "
                    >
                        <span
                            className="
          block
          text-[clamp(2.5rem,12vw,8rem)]
        "
                        >
                            SEASON
                        </span>

                        <span
                            className="
          mt-2 block
          text-[clamp(5rem,22vw,11rem)]
          text-cyan-300
          drop-shadow-[0_0_25px_rgba(34,211,238,0.2)]
          sm:mt-3
        "
                        >
                            {seasonLabel}
                        </span>
                    </h1>

                    {/* Season status */}
                    <div
                        className="
        mt-7 flex flex-wrap
        items-center gap-3
        sm:mt-9 sm:gap-4
      "
                    >
                        <span
                            className="
          inline-flex min-h-10
          items-center rounded-full
          border border-cyan-400/40
          px-4 py-2
          text-[10px] font-bold
          tracking-wider
          text-cyan-300
          sm:text-xs
        "
                        >
                            {season.completed
                                ? "COMPLETED"
                                : "COMING SOON"}
                        </span>

                        {season.year && (
                            <span className="text-sm text-slate-300">
                                {season.year}
                            </span>
                        )}
                    </div>

                    {/* Season description */}
                    {season.description && (
                        <p
                            className="
          mt-6 max-w-2xl
          text-sm leading-7
          text-slate-300
          sm:text-base sm:leading-8
        "
                        >
                            {season.description}
                        </p>
                    )}
                </div>
            </section>

            {season.completed ? (
                <>
                    {/* Winners and runners-up */}
                    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
                        <p className="text-xs font-bold tracking-[0.3em] text-cyan-300">
                            THE FINALISTS
                        </p>

                        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                            THE TEAMS THAT
                            <span className="block text-cyan-300">
                                MADE HISTORY
                            </span>
                        </h2>

                        <div className="mt-10 grid gap-6 md:grid-cols-2">
                            <TeamCard title="CHAMPIONS" team={season.winner} />
                            <TeamCard title="RUNNERS-UP" team={season.runnerUp} />
                        </div>
                    </section>

                    {/* Player awards */}
                    {(season.bestBatsman || season.bestBowler) && (
                        <section className="border-y border-cyan-400/10 bg-[#06141d] py-16">
                            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                                <h2 className="text-3xl font-black sm:text-4xl">
                                    PLAYER <span className="text-cyan-300">AWARDS</span>
                                </h2>

                                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                                    {season.bestBatsman && (
                                        <div className="rounded-xl border border-cyan-400/20 p-7">
                                            <p className="text-xs tracking-widest text-cyan-300">
                                                BEST BATSMAN
                                            </p>
                                            <h3 className="mt-3 text-2xl font-bold">
                                                {season.bestBatsman}
                                            </h3>
                                        </div>
                                    )}

                                    {season.bestBowler && (
                                        <div className="rounded-xl border border-cyan-400/20 p-7">
                                            <p className="text-xs tracking-widest text-cyan-300">
                                                BEST BOWLER
                                            </p>
                                            <h3 className="mt-3 text-2xl font-bold">
                                                {season.bestBowler}
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Original tournament photographs */}
                    {season.gallery.length > 0 && (
                        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
                            <p className="text-xs font-bold tracking-widest text-cyan-300">
                                THE MEMORIES
                            </p>

                            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                                SEASON {seasonLabel} GALLERY
                            </h2>

                            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {season.gallery.map((photo, index) => (
                                    <div
                                        key={photo}
                                        className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-cyan-400/20 bg-[#071721]"
                                    >
                                        <Image
                                            src={photo}
                                            alt={`Season ${season.number} memory ${index + 1}`}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </>
            ) : (
                <section className="mx-auto max-w-4xl px-5 py-24 text-center">
                    <div className="mb-5 text-6xl">🏏</div>

                    <h2 className="text-4xl font-black text-cyan-300 sm:text-6xl">
                        THE NEXT CHAPTER AWAITS
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
                        Season {season.number} of Haluvagilu Cup is yet to take
                        place. A new chapter of cricket history is coming.
                    </p>
                </section>
            )}

            <footer className="border-t border-cyan-400/10 px-5 py-8 text-center text-xs tracking-widest text-slate-500">
                HALUVAGILU CUP — EVERY SEASON HAS A STORY
            </footer>
        </main>
    );
}