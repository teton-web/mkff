import Image from "next/image";

const directors = [
  {
    name: "Sherry M. Knowles",
    role: "Founder & Executive Director",
    image: "/sherry-knowles.jpg",
    bio: "An intellectual property attorney and founder of Knowles Intellectual Property Strategies, Sherry created MKFF and The Kectil Program to build a global leadership platform for talented youth from developing and least-developed countries.",
  },
  {
    name: "Brooke M. Shafer",
    role: "Director",
    image: "/brooke-shafer.jpg",
    bio: "Brooke brings a background in marketing research, advertising insights, retail analytics, and women-in-STEM service to MKFF's governance and youth-development perspective.",
  },
  {
    name: "Dr. Christopher Zalesky",
    role: "Director",
    image: "/chris-zalesky.jpg",
    bio: "Chris brings medical, service, and international-volunteer experience to MKFF, helping connect the foundation's leadership mission with practical service to communities.",
  },
];

export function AboutMKFF() {
  return (
    <section
      id="about"
      className="section border-y border-[var(--mkff-border)] bg-white"
    >
      <div className="container">
        <div className="section-rule pb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--mkff-gold)]">
            § 01 — About MKFF
          </div>
          <div className="hidden text-xs uppercase tracking-[0.18em] text-[var(--mkff-gray)] sm:block">
            History, purpose, and directors
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-20">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-4xl leading-tight text-[var(--mkff-ink)] md:text-6xl md:leading-[1.06]">
              The family foundation behind Kectil.
            </h2>
            <p className="max-w-sm text-[15px] leading-7 text-[var(--mkff-muted)]">
              MKFF is the parent organization of The Kectil Program. Its story
              begins with family, education, travel, service, and the belief
              that gifted young people can lift their communities when they are
              connected to the right network.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-[var(--mkff-border)] border-y border-[var(--mkff-border)]">
            <details className="group py-7" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <span className="font-display text-2xl font-medium leading-8 text-[var(--mkff-oxblood)] md:text-3xl">
                  History of MKFF
                </span>
                <span className="font-display text-3xl leading-none text-[var(--mkff-gold)] group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-6 grid gap-6 text-[15px] leading-7 text-[var(--mkff-charcoal)] md:grid-cols-2">
                <p>
                  The archived MKFF story begins with a simple idea: everyone
                  has a story. Sherry Knowles joins the Malmar family line,
                  including Swedish immigration, entrepreneurship, travel, and
                  intellectual curiosity, with the Knowles family line, rooted
                  in rural Mississippi, discipline, education, and hard work.
                </p>
                <p>
                  That history shaped MKFF values. The foundation honors the
                  people and places that formed the family while turning that
                  inheritance outward through Kectil: a program built for youth
                  who may be ready to lead long before the world has noticed
                  them.
                </p>
              </div>
            </details>

            <details className="group py-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <span className="font-display text-2xl font-medium leading-8 text-[var(--mkff-oxblood)] md:text-3xl">
                  Why I Created Kectil
                </span>
                <span className="font-display text-3xl leading-none text-[var(--mkff-gold)] group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-6 grid gap-6 text-[15px] leading-7 text-[var(--mkff-charcoal)] md:grid-cols-2">
                <p>
                  Sherry describes Kectil as The Project and the Challenge.
                  The Project is the conviction that a short life should leave
                  the world more beautiful, and that each person should choose
                  work scaled to the gifts and abilities they have been given.
                </p>
                <p>
                  The Challenge was to attempt something that first looked
                  impossible: create a global, web-based leadership program,
                  recruit mentors and advisors, reach talented youth across
                  borders, and build a lasting network while continuing her
                  professional work. Kectil is that gift in motion.
                </p>
              </div>
            </details>

            <details className="group py-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <span className="font-display text-2xl font-medium leading-8 text-[var(--mkff-oxblood)] md:text-3xl">
                  Our Directors
                </span>
                <span className="font-display text-3xl leading-none text-[var(--mkff-gold)] group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-7 grid gap-6 md:grid-cols-3">
                {directors.map((director) => (
                  <article key={director.name} className="flex flex-col gap-4">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[var(--mkff-charcoal)]">
                      <Image
                        src={director.image}
                        alt={`${director.name}, ${director.role} of MKFF`}
                        fill
                        sizes="(max-width: 768px) 100vw, 260px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium leading-6 text-[var(--mkff-oxblood)]">
                        {director.name}
                      </h3>
                      <div className="mt-1 text-[13px] italic leading-5 text-[var(--mkff-gray)]">
                        {director.role}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-[var(--mkff-charcoal)]">
                        {director.bio}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
