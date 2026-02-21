import Image from "next/image";
import Link from "next/link";
import { Container, ButtonLink, Pill } from "@/components/ui";
import {
  ArrowLeftIcon,
  HammerIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
} from "@/components/icons";

const AREAS = ["Worthing", "Brighton", "Littlehampton", "Chichester", "Horsham", "Shoreham-by-Sea", "Lancing", "Arundel"];

const SERVICES = [
  {
    title: "Roof Repairs",
    desc: "Fast response for leaks, slipped tiles and storm damage. Photos provided before any work begins.",
  },
  {
    title: "New Roof Installation",
    desc: "Slate, tile and modern systems installed to manufacturer standards with clean, tidy finishes.",
  },
  {
    title: "Flat Roofs",
    desc: "High‑performance flat roofing for garages, extensions and dormers — built for UK weather.",
  },
  {
    title: "Chimney Repairs",
    desc: "Repointing, leadwork and flashings to stop water ingress and extend chimney life.",
  },
  {
    title: "Leadwork & Flashings",
    desc: "Precision leadwork around valleys, abutments and chimneys for long‑term watertightness.",
  },
  {
    title: "Gutters & Fascias",
    desc: "Repairs and replacements to protect your roofline and prevent damp and overflow issues.",
  },
] as const;

const REVIEWS = [
  {
    title: "Customer Review",
    body: "Arrived on time, explained the issue clearly and completed the repair quickly. Everything left spotless afterwards.",
  },
  {
    title: "Customer Review",
    body: "Professional from start to finish. Great communication, fair quote and the workmanship looks excellent.",
  },
  {
    title: "Customer Review",
    body: "Really impressed with the attention to detail. Photos before/after were helpful and the roof is now completely watertight.",
  },
] as const;

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-900 text-white shadow-soft">
        <span className="text-sm font-black tracking-tight">SR</span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-extrabold tracking-tight text-slate-950">
          Sussex Roofing Specialists
        </div>
        <div className="text-xs font-medium text-slate-600">
          Roof Repairs • New Roofs • Flat Roofs
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <MapPinIcon className="h-4 w-4 text-brand-800" />
            Covering West Sussex & surrounding areas
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4 text-brand-800" />
            <a className="font-semibold text-slate-900 hover:underline" href="tel:01234567890">
              01234 567 890
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <TopBar />
      <Container>
        <div className="flex items-center justify-between py-4">
          <LogoMark />
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a className="hover:text-slate-950" href="#services">
              Services
            </a>
            <a className="hover:text-slate-950" href="#work">
              Our Work
            </a>
            <a className="hover:text-slate-950" href="#reviews">
              Reviews
            </a>
            <a className="hover:text-slate-950" href="#areas">
              Areas
            </a>
            <ButtonLink href="#quote" variant="primary">
              Get a Quote
            </ButtonLink>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <ButtonLink href="#quote" variant="primary">
              Quote
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}

function TrustRow() {
  return (
    <div className="mt-7 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur md:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-amber-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4" />
            ))}
          </div>
          <div className="text-sm text-white/90">
            <span className="font-semibold text-white">4.9</span> average rating •{" "}
            <span className="font-semibold text-white">200+</span> local jobs
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/90">
          {[
            "Google",
            "Facebook",
            "Instagram",
            "Checkatrade",
            "Trustpilot",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Roofer carrying out chimney repair work"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-950/70 to-brand-950" />
      </div>

      <Container>
        <div className="relative py-14 md:py-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Fully insured</Pill>
              <Pill>Free site visits</Pill>
              <Pill>Photo updates</Pill>
              <Link
                href="https://guardxnetwork.com/examples"
                className="ml-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back to examples
              </Link>
            </div>

            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Trusted roof repairs & installations across West Sussex.
            </h1>
            <p className="max-w-2xl text-base text-white/85 md:text-lg">
              From emergency leak repairs to complete re-roofs — professional
              workmanship, clear communication, and tidy finishes. Get a fast
              quote with a free inspection.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-xl bg-accent-500 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:01234567890"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                <PhoneIcon className="h-5 w-5" />
                Call 01234 567 890
              </a>
            </div>

            <TrustRow />

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { title: "Same‑week slots", desc: "Priority availability for urgent leaks." },
                { title: "No surprise extras", desc: "Clear quote before work begins." },
                { title: "Tidy & respectful", desc: "We protect your property and clean up." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4"
                >
                  <div className="text-sm font-extrabold text-white">
                    {item.title}
                  </div>
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Accreditations() {
  const badges = [
    { title: "NFRC Member", desc: "Industry-recognised standards" },
    { title: "Competent Roofer", desc: "Certified installations" },
    { title: "CHAS", desc: "Safety verified" },
    { title: "Constructionline", desc: "Pre‑qualified contractor" },
  ];

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Roofing you can trust — built to last.
            </h2>
            <p className="mt-2 text-slate-600">
              We follow best‑practice installation standards and use proven
              materials. You’ll get clear updates, photo evidence and a tidy
              finish.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="h-5 w-5 text-brand-800" />
            <span className="text-sm font-semibold text-slate-800">
              Fully insured • Workmanship guarantee
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <div className="text-sm font-extrabold text-slate-950">
                {b.title}
              </div>
              <div className="mt-1 text-sm text-slate-600">{b.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-12 md:py-16">
      <Container>
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Roofing services for homes & small commercial.
            </h2>
            <p className="mt-2 text-slate-600">
              Honest advice, professional work, and strong attention to detail.
              We’re happy to inspect and quote before you commit.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-soft ring-1 ring-slate-200 md:flex">
            <HammerIcon className="h-5 w-5 text-accent-600" />
            Fast quotes • Tidy work
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="text-base font-extrabold text-slate-950">
                {s.title}
              </div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-800">
                <ShieldCheckIcon className="h-4 w-4" />
                Fully insured
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: "/images/gallery-1.jpg", alt: "Roof installation work in progress" },
    { src: "/images/gallery-2.jpg", alt: "Completed slate roof detail" },
    { src: "/images/gallery-3.jpg", alt: "Roofer on a residential property" },
  ];

  return (
    <section id="work" className="py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Recent work & craftsmanship.
          </h2>
          <p className="max-w-2xl text-slate-600">
            A quick look at the standard of finish we aim for on every job.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-soft"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/60 to-transparent p-4">
                <div className="text-sm font-bold text-white">Quality finish</div>
                <div className="text-xs text-white/80">Photos from recent jobs</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="bg-slate-50 py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Areas we cover.
          </h2>
          <p className="max-w-2xl text-slate-600">
            Based in West Sussex with quick call‑outs across surrounding towns
            and villages.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a) => (
            <div
              key={a}
              className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
            >
              <MapPinIcon className="h-4 w-4 text-accent-600" />
              <span className="text-sm font-semibold text-slate-900">{a}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-12 md:py-16">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              What customers say.
            </h2>
            <p className="mt-2 text-slate-600">
              We’re proud of our standards — clear communication, tidy work and
              quality finishes.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 md:flex">
            <div className="flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            4.9 average rating
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((r, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-extrabold text-slate-950">
                  {r.title}
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{r.body}</p>
              <div className="mt-5 text-xs font-semibold text-slate-500">
                Verified review
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function QuoteCta() {
  return (
    <section id="quote" className="bg-brand-950 py-12 md:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              Get a fast quote with a free inspection.
            </h2>
            <p className="mt-2 max-w-2xl text-white/80">
              Share a few details and we’ll advise the best next step. We can
              often visit within days for urgent repairs.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:01234567890"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent-600"
              >
                <PhoneIcon className="h-5 w-5" />
                Call 01234 567 890
              </a>
              <a
                href="mailto:quotes@sussexroofingspecialists.co.uk"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                Email for a quote
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-extrabold text-white">
              What happens next?
            </div>
            <div className="mt-4 space-y-3">
              {[
                "Quick call to understand the issue",
                "Free inspection & photo evidence",
                "Clear quote — no surprise extras",
                "Work booked in and completed neatly",
              ].map((s) => (
                <div key={s} className="flex items-start gap-3 text-white/85">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-accent-500" />
                  <span className="text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-6">
            <LogoMark />
          </div>

          <div className="flex flex-col gap-2 text-sm text-slate-600 md:text-right">
            <div className="font-semibold text-slate-900">Sussex Roofing Specialists</div>
            <div>West Sussex • UK</div>
            <div>
              <a className="hover:underline" href="tel:01234567890">01234 567 890</a>{" "}
              •{" "}
              <a className="hover:underline" href="mailto:quotes@sussexroofingspecialists.co.uk">
                quotes@sussexroofingspecialists.co.uk
              </a>
            </div>
          </div>
        </div>

        <div className="pb-10 text-xs text-slate-500">
          <p>
            This is a demonstration website homepage for showroom purposes.
            Branding and content are example-only.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Accreditations />
      <Services />
      <Gallery />
      <Areas />
      <Reviews />
      <QuoteCta />
      <Footer />
    </main>
  );
}
