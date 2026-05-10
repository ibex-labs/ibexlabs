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
    href: "https://renderfoundation.com/",
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
    technicalDetails: [
      "Implemented Render's burn-and-mint equilibrium model on Solana: scheduled RENDER emissions plus a separate process that listened for completed render jobs and bought/burned Solana RENDER as a function of ETH RNDR spent.",
      "Built token bridge flows so users could convert ETH RNDR into Solana RENDER through Wormhole, including incentive mechanics for early migration and support around large CEX migrations.",
      "Automated network payment channels: weekly node-operator rewards, monthly upgrade rewards for migration participants, and partner payouts for nodes also doing compute on networks like io.net.",
      "Wrote Solana programs in Rust for emissions, BME, bridge-side token movement, tokenized network entities such as render nodes, and releasing multiple reward channels.",
      "Built TypeScript servers and cranker jobs for serving/indexing data from Redis/Postgres and orchestrating protocol operations against Solana.",
      "Built the Solana-side bridge relayer for redeeming Wormhole VAAs into RENDER.",
      "Built Postgres-backed dashboards for node operators and holders to track payments and network stats, plus internal accounting dashboards for movement tracking and reporting.",
      "Ran the production stack on Kubernetes with Grafana, Prometheus, Alertmanager, Loki, Tempo, PagerDuty, Vault/bank-vaults secret injection, and Nginx ingress.",
    ],
  },
  {
    title: "CFi",
    href: "https://cfi.ag",
    logoSrc: "/logos/cfi.svg",
    logoAlt: "CFi logo",
    logoWidth: 160,
    logoHeight: 48,
    logoClassName: "h-12 w-auto max-w-[9.5rem] shrink-0 rounded-md object-contain shadow-sm",
    eyebrow: "Onchain lending infrastructure",
    description:
      "Building an end-to-end onchain system for agricultural lending: an Anchor protocol, Bridge on/off-ramp integration, worker jobs for ACH-driven state changes, and frontend workflows for dealers and farmers.",
    bullets: [
      "Role-based lending protocol for institutional and retail lenders subsidizing farmers",
      "Onchain loan origination, management, draw tranches, interest accrual, repayment settlement, and vault deposits/withdrawals",
      "Bridge (Stripe) on/off-ramp integration plus ECS workers for ACH movement and onchain state advancement",
      "Dealer and farmer frontend workflows for repayments and obligation monitoring",
    ],
    technicalDetails: [
      "Anchor protocol for institutional and retail lenders to subsidize farmer financing, with role-based ACLs across lender, dealer, farmer, and protocol operations.",
      "Onchain origination and management of loans, including creation of draw tranches as farmers spend against approved financing.",
      "Interest accrual on individual draw tranches, with settlement flows covering farmer repayments, lender vault accounting, and dealer-covered farmer interest.",
      "Onchain vault flows for lenders depositing into and withdrawing from lending pools.",
      "Bridge (Stripe) integration for seamless fiat on/off-ramp flows around protocol activity.",
      "ECS worker jobs that listen and poll for ACH fund movement, then advance onchain state and trigger accrual/settlement work.",
      "Frontend surfaces for dealers and farmers to execute repayments and monitor outstanding obligations.",
    ],
  },
  {
    title: "Nation",
    href: "https://nation.io",
    logoSrc: "/logos/nation.svg",
    logoAlt: "Nation logo",
    logoWidth: 150,
    logoHeight: 60,
    logoClassName:
      "h-12 w-auto max-w-[9.5rem] shrink-0 rounded-md bg-black object-contain p-2 shadow-sm ring-1 ring-border",
    eyebrow: "Solana products + low-latency backend",
    description:
      "Built across Nation's Solana ecosystem: the core DAO platform, Vellum for distributed document signing, and Caro, a real-time auction engine embedded into Shopify storefronts.",
    bullets: [
      "Core Solana DAO platform for organizations, funds, voting, and proposals",
      "Vellum: DocuSign-like document signing on Solana with GPT-assisted drafting and post-signature actions",
      "Caro: real-time auction engine served as an embeddable Shopify widget",
      "Full-stack product work across Solana programs, backend services, frontend, and infrastructure",
    ],
    technicalDetails: [
      "Nation core started as a DAO platform on Solana, letting users create organizations, collect funds for causes, vote on proposals, and manage organization workflows.",
      "Vellum was a Next.js/Vercel product backed by Supabase for Postgres, realtime sockets, and blob storage, with Solana Rust programs for writing documents onchain and executing post-signature actions.",
      "Vellum included GPT-4-assisted document drafting and post-execution actions such as transferring funds after a document was signed.",
      "Caro implemented several real-time auction formats as a Shopify widget that could be embedded into storefronts.",
      "Caro began as a Rust backend using Actix, with an HFT-like design where each auction was assigned to a node and loaded in memory for low-latency bids/checkouts.",
      "The Rust service was load-tested around 500 bid requests/sec on a single Docker instance, then later ported to Deno because the service was effectively I/O-bound and the development loop/tooling were much faster.",
      "Moved auction state from in-memory plus async Postgres persistence toward Redis and Lua scripts where atomicity was needed, while preserving similar performance characteristics.",
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
    title: "Production hardening",
    body: "Tests, edge cases, operational visibility, failure modes, and the unglamorous work that keeps shipped systems from surprising you.",
  },
  {
    icon: Code2,
    title: "Full-stack execution",
    body: "Enough frontend to ship workflows, enough infra to run them, and enough protocol context to keep the system coherent.",
  },
];

const engagementShapes = [
  "Solana programs and protocol integrations",
  "Rust/TypeScript backend services around onchain systems",
  "Frontend, dev ops, observability, alerting, and anything else needed",
  "Working products delivered end-to-end",
];

const credibility = [
  "Led Render ETH -> Solana migration work",
  "Building onchain lending infrastructure for CFi",
  "Backend and distributed systems background",
  "Solana-first, Sui-capable",
];

const howIWork = [
  "High-agency and comfortable with incomplete specs",
  "Async-friendly, but direct when a decision needs to be made",
  "Strongest where protocol, backend, product, and ops overlap",
  "Prefer small teams, real ownership, and work that ships",
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
          <a
            href="#top"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <Image
              src="/ibex192.png"
              alt=""
              width={40}
              height={40}
              className="size-10 shrink-0 object-contain"
            />
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Ibex Labs
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a className="transition hover:text-foreground" href="#work">
              Work
            </a>
            <a className="transition hover:text-foreground" href="#capabilities">
              Useful
            </a>
            <a className="transition hover:text-foreground" href="#about">
              About
            </a>
            <a className="transition hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <section id="top" className="grid gap-10 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-24">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              Solana / Rust / backend systems
            </Badge>
            <div className="space-y-6">
              <h1 className="font-heading max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Production engineering for onchain systems.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                I&apos;m Alex, a senior backend and Solana engineer. I build Solana programs, Rust/TypeScript
                backend services, and the operational glue around real onchain products.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {credibility.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-foreground/70" />
                  <span>{item}</span>
                </div>
              ))}
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
              <CardTitle className="font-heading">What I do</CardTitle>
              <CardDescription>
                The work I&apos;m strongest at lives between protocol code, backend systems, and product execution.
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
                    <CardTitle className="font-heading text-2xl">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 transition hover:underline"
                      >
                        {project.title}
                      </a>
                    </CardTitle>
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
                  <details className="group mt-6 rounded-2xl border bg-muted/20 p-4 text-sm">
                    <summary className="cursor-pointer list-none font-mono uppercase tracking-[0.18em] text-muted-foreground transition hover:text-foreground">
                      Technical details
                      <span className="ml-2 inline-block transition group-open:rotate-90">-&gt;</span>
                    </summary>
                    <ul className="mt-4 space-y-3 text-muted-foreground">
                      {project.technicalDetails.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>

          <details className="group rounded-3xl border bg-card p-5 sm:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  Resume
                </p>
                <h3 className="font-heading mt-2 text-2xl font-semibold tracking-tight">
                  Full resume
                </h3>
              </div>
              <span className="font-mono text-sm text-muted-foreground transition group-open:rotate-90">
                -&gt;
              </span>
            </summary>
            <div className="mt-5">
              <a
                href="/resume.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-3 text-sm font-medium transition hover:bg-muted"
              >
                Open / save resume
              </a>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border bg-white">
              <iframe
                src="/resume.html"
                title="Alex Milkov resume"
                className="h-[760px] w-full bg-white"
              />
            </div>
          </details>
        </section>

        <section id="capabilities" className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">Where I&apos;m useful</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              The technical surface I cover.
            </h2>
            <p className="text-muted-foreground">
              Best fit is Solana/Sui, RWA, credit, stablecoin, payments, migration, and protocol-adjacent
              teams where backend systems and onchain code have to work together cleanly.
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

        <section id="about" className="grid gap-5 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">About</p>
              <CardTitle className="font-heading text-2xl">Backend/distributed systems background, now mostly Solana.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                I started in backend and distributed systems, then moved into blockchain work over the last few
                years. My goal is to deliver exactly the product required in the simplest, most durable way possible.
              </p>
              <p>
                I fit best with small, serious teams building real products where correctness, reliability, and
                speed all matter.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">Working style</p>
              <CardTitle className="font-heading text-2xl">High-agency, technical, product-aware.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {howIWork.map((item) => (
                <div key={item} className="flex gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
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
              Building something where this background fits?
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Send a short note with what you are building and where Solana, backend systems, or onchain finance
              complexity enters the picture.
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
