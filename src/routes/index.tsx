import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { RaffleCard } from "@/components/RaffleCard";
import { raffles, type RaffleStatus } from "@/lib/raffles";
import { Zap, Shield, Trophy, MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CSBR Skins — Rifas e Sorteios de Skins CS2" },
      { name: "description", content: "Plataforma de rifas e sorteios das melhores skins do Counter-Strike 2. Preços acessíveis, 100% seguro, sorteios diários." },
      { property: "og:title", content: "CSBR Skins — Rifas de Skins CS2" },
      { property: "og:description", content: "Concorra às melhores skins do CS2 com preços acessíveis." },
    ],
  }),
  component: Index,
});

const filters: { value: "todas" | RaffleStatus; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "ativa", label: "Ativas" },
  { value: "em-breve", label: "Em Breve" },
  { value: "encerrada", label: "Encerradas" },
];

function Index() {
  const [filter, setFilter] = useState<"todas" | RaffleStatus>("todas");
  const list = filter === "todas" ? raffles : raffles.filter((r) => r.status === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative mb-6 overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            <Zap className="h-3 w-3" /> v2.0
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold leading-tight">
            Concorra às melhores <span className="text-gradient-primary">skins do CS2</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Rifas justas, sorteios ao vivo e entrega imediata na sua Steam.
          </p>
          <Link
            to="/rifas"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
          >
            Ver Rifas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-6 grid grid-cols-3 gap-2">
        {[
          { icon: Trophy, label: "Preços", value: "Acessíveis" },
          { icon: Shield, label: "100%", value: "Seguro" },
          { icon: Zap, label: "Sorteios", value: "Diários" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-3 text-center">
            <s.icon className="mx-auto mb-1.5 h-4 w-4 text-primary" />
            <div className="font-display text-xs font-bold text-primary">{s.label}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.value}</div>
          </div>
        ))}
      </section>

      {/* Filters */}
      <section className="mb-4">
        <h2 className="mb-3 font-display text-lg font-bold uppercase tracking-wide">Rifas</h2>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === f.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* List */}
      <section className="grid grid-cols-1 gap-4">
        {list.map((r) => (
          <RaffleCard key={r.id} raffle={r} />
        ))}
        {list.length === 0 && (
          <div className="rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            Nenhuma rifa encontrada.
          </div>
        )}
      </section>

      {/* WhatsApp CTA */}
      <a
        href="https://chat.whatsapp.com/Ez7Mnzjh3GsHqJpU07nnDI"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-3 rounded-2xl border border-success/40 bg-success/10 p-4 transition-all hover:border-success/70"
      >
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-success/20 text-success">
          <MessageCircle className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-bold uppercase tracking-widest text-success">02 · Comunidade</div>
          <div className="font-display text-sm font-bold">Entre no grupo do WhatsApp</div>
          <div className="text-[11px] text-muted-foreground">Avisos de sorteios em primeira mão · Grátis</div>
        </div>
        <ArrowRight className="h-4 w-4 text-success" />
      </a>
    </Layout>
  );
}
