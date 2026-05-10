import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Network,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const proofPoints = [
  {
    title: "Render Network",
    logoSrc: "/logos/render.svg",
    logoAlt: "Render Network logo",
    logoWidth: 56,
    logoHeight: 56,
    logoClassName:
      "h-14 w-14 shrink-0 rounded-full object-contain bg-background p-1 ring-1 ring-border",
    eyebrow: "ETH -> Solana migration",
    description:
      "Led core Solana protocol and backend work for Render's migration from Ethereum to Solana, including emissions, bridging, rewards, accounting, dashboards, and production operations.",
    bullets: [
      "Burn-and-mint equilibrium implementation",
      "Wormhole bridge relayer and adhoc exchange migration support",
      "Reward automation for node operators, migration incentives, and partners",
      "Solo through initial protocol, backend, ops, and frontend work end-to-end; hired engineers afterward and helped hand off",
    ],
  },
  {
    title: "CFi",
    logoSrc: "/logos/cfi.svg",
    logoAlt: "CFi logo",
    logoWidth: 160,
    logoHeight: 48,
    logoClassName: "h-12 w-auto max-w-[9.5rem] shrink-0 rounded-md object-contain shadow-sm",
    eyebrow: "Onchain lending infrastructure",
    description:
      "Building an end-to-end onchain system for agricultural lending: Solana programs, backend integration, AWS ops; durable, secure, and consistent onchain flows across the entire loan lifecycle",
    bullets: [
      "Onchain loans, lending vaults, loan transactions, repayments, interest accruals, settlement, and lifecycle mechanics",
      "Backend integration layer for protocol operations",
      "Financial workflow mapping from real business processes to Solana",
      "Designed for a fintech-style business with retailers, manufacturers, and growers",
    ],
  },
];

const capabilities = [
  {
    icon: Network,
    title: "Solana protocol work",
    body: "Anchor programs, account models, token flows, migrations, reward systems, and production-grade transaction paths.",
  },
  {
    icon: Database,
    title: "Backend integration",
    body: "TypeScript services, indexers, cranks, Postgres, Redis, observability, idempotency, retries, and operational dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Launch and audit readiness",
    body: "Pre-audit cleanup, remediation, risk review, invariants, test strategy, and launch support for teams close to mainnet.",
  },
  {
    icon: Code2,
    title: "Full-stack execution",
    body: "Enough frontend to ship workflows, enough infra to run them, and enough protocol context to keep the system coherent.",
  },
];

const engagementShapes = [
  "Scoped protocol/backend sprint",
  "Part-time embedded senior operator",
  "Audit remediation or launch-readiness review",
  "Architecture diagnostic for onchain finance systems",
];

const stack = [
  "Solana",
  "Anchor",
  "Rust",
  "TypeScript",
  "Sui/Move",
  "Postgres",
  "Redis",
  "Kubernetes",
  "Grafana",
  "Prometheus",
  "Vercel",
  "Supabase",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between">
          <a href="#top" className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Ibex Labs
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a className="transition hover:text-foreground" href="#work">
              Work
            </a>
            <a className="transition hover:text-foreground" href="#capabilities">
              Capabilities
            </a>
            <a className="transition hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <section id="top" className="grid gap-10 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-24">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              Senior Solana + backend engineering
            </Badge>
            <div className="space-y-6">
              <h1 className="font-heading max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Scoped execution for production onchain finance systems.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                I help funded teams ship, migrate, and stabilize Solana systems when protocol correctness,
                backend reliability, and delivery speed all matter.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                href="https://t.me/amilkov3"
                target="_blank"
                rel="noreferrer"
              >
                Message on Telegram
              </a>
              <a
                className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background px-5 text-sm font-medium transition hover:bg-muted"
                href="mailto:alex@ibex.trade"
              >
                Email Alex
              </a>
            </div>
          </div>

          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle className="font-heading">Good fit</CardTitle>
              <CardDescription>
                Teams that need senior execution without a long hiring loop.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {engagementShapes.map((shape) => (
                <div key={shape} className="flex gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <span>{shape}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="work" className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">Proof</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Work that maps real businesses onto Solana.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {proofPoints.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <Badge variant="outline" className="w-fit">
                      {project.eyebrow}
                    </Badge>
                    <Image
                      src={project.logoSrc}
                      alt={project.logoAlt}
                      width={project.logoWidth}
                      height={project.logoHeight}
                      unoptimized
                      className={project.logoClassName}
                    />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-2xl">{project.title}</CardTitle>
                    <CardDescription className="mt-3 text-base leading-7">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-5" />
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="capabilities" className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">Capabilities</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Protocol, backend, and ops in one loop.
            </h2>
            <p className="text-muted-foreground">
              Useful for RWA, credit, stablecoin, payments, migration, and protocol teams that need a senior
              operator to own an ambiguous workstream.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <Card key={capability.title}>
                  <CardHeader>
                    <Icon className="size-5 text-muted-foreground" />
                    <CardTitle className="font-heading text-lg">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-6 text-muted-foreground">
                    {capability.body}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border bg-card p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">Stack</p>
              <h2 className="font-heading mt-3 text-2xl font-semibold tracking-tight">
                Built around production systems.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-8 pb-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a scoped Solana or onchain finance workstream?
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Send a short note with what you are building, where the technical risk is, and what needs to
              be true in the next 4-8 weeks.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              href="https://t.me/amilkov3"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
              <ArrowUpRight className="size-4" />
            </a>
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 text-sm font-medium transition hover:bg-muted"
              href="mailto:alex@ibex.trade"
            >
              alex@ibex.trade
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
