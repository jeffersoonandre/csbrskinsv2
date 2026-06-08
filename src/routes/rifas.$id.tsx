import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { getRaffleById } from "@/lib/raffles";
import { Minus, Plus, ShieldCheck, Ticket, ArrowLeft, ChevronDown, Trophy } from "lucide-react";

export const Route = createFileRoute("/rifas/$id")({
  loader: ({ params }) => {
    const raffle = getRaffleById(params.id);
    if (!raffle) throw notFound();
    return { raffle };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.raffle.number} ${loaderData?.raffle.title} — CSBR Skins` },
      { name: "description", content: loaderData?.raffle.description },
      { property: "og:title", content: `${loaderData?.raffle.number} ${loaderData?.raffle.title}` },
      { property: "og:description", content: loaderData?.raffle.description },
      { property: "og:image", content: loaderData?.raffle.image },
    ],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="py-20 text-center">
        <h1 className="font-display text-3xl font-bold">Rifa não encontrada</h1>
        <Link to="/rifas" className="mt-4 inline-block text-primary">Ver todas as rifas</Link>
      </div>
    </Layout>
  ),
  component: RafflePage,
});

const quickPicks = [
  { qty: 1, label: "+1", popular: false },
  { qty: 3, label: "+3", popular: true },
  { qty: 5, label: "+5", popular: false },
  { qty: 10, label: "+10", popular: false },
  { qty: 15, label: "+15", popular: false },
  { qty: 20, label: "+20", popular: false },
];

function RafflePage() {
  const { raffle } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const [descOpen, setDescOpen] = useState(true);
  const pct = Math.round((raffle.soldNumbers / raffle.totalNumbers) * 100);
  const total = (qty * raffle.price).toFixed(2).replace(".", ",");

  return (
    <Layout>
      <Link to="/rifas" className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3.5 w-3.5" /> Voltar
      </Link>

      <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
        <img src={raffle.image} alt={raffle.title} className="h-full w-full object-cover" />
        <div className={`absolute left-3 top-3 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${raffle.status === "encerrada" ? "border-border bg-muted/60 text-muted-foreground" : "border-success/40 bg-success/20 text-success"}`}>
          {raffle.status === "encerrada" ? "Encerrada" : "Ativo"}
        </div>
      </div>

      <div className="mt-4">
        <div className="text-[10px] font-bold uppercase tracking-widest text-primary">{raffle.number}</div>
        <h1 className="mt-1 font-display text-2xl font-bold leading-tight">{raffle.title}</h1>
      </div>

      {raffle.status === "encerrada" ? (
        <div className="mt-4 rounded-2xl border border-primary/40 bg-card p-6 shadow-[var(--shadow-glow)]">
          <div className="flex flex-col items-center text-center">
            <Trophy className="h-10 w-10 text-yellow-500" />
            <div className="mt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Cota Vencedora</div>
            <div className="mt-1 font-display text-4xl font-bold text-primary tabular-nums">
              {raffle.winningNumber !== undefined ? String(raffle.winningNumber).padStart(2, "0") : "—"}
            </div>
            <div className="mt-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Vencedor</div>
            <div className="mt-1 font-display text-xl font-bold">{raffle.winner ?? "—"}</div>
          </div>
        </div>
      ) : (
        <RaffleActive raffle={raffle} qty={qty} setQty={setQty} descOpen={descOpen} setDescOpen={setDescOpen} pct={pct} total={total} />
      )}
    </Layout>
  );
}

function RaffleActive({ raffle, qty, setQty, descOpen, setDescOpen, pct, total }: any) {
  return (
    <>
      {/* Progress */}
      <div className="mt-4 rounded-2xl border border-border bg-card p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{raffle.soldNumbers} cotas já garantidas</span>
          <span className="font-display text-lg font-bold text-primary">{pct}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "var(--gradient-primary)" }} />
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xs text-muted-foreground">Por apenas</span>
          <span className="font-display text-2xl font-bold">R$ {raffle.price.toFixed(2).replace(".", ",")}</span>
          <span className="text-xs text-muted-foreground">/ cota</span>
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-4 rounded-2xl border border-border bg-card p-4">
        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Selecione a quantidade</div>
        <div className="mt-3 flex items-center justify-between">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary transition-colors hover:border-primary hover:text-primary"
          >
            <Minus className="h-4 w-4" />
          </button>
          <div className="font-display text-3xl font-bold tabular-nums">{qty}</div>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary transition-colors hover:border-primary hover:text-primary"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {quickPicks.map((p) => (
            <button
              key={p.qty}
              onClick={() => setQty((q) => q + p.qty)}
              className="relative rounded-xl border border-border bg-secondary p-2.5 text-center transition-all hover:border-primary hover:bg-primary/10"
            >
              {p.popular && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-primary-foreground">
                  Popular
                </span>
              )}
              <div className="font-display text-sm font-bold">{p.label}</div>
              <div className="text-[10px] text-muted-foreground">+R$ {(p.qty * raffle.price).toFixed(0)}</div>
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 rounded-2xl border border-primary/40 bg-card p-4 shadow-[var(--shadow-glow)]">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{qty} cota{qty > 1 ? "s" : ""} selecionada{qty > 1 ? "s" : ""}</div>
            <div className="font-display text-2xl font-bold">R$ {total}</div>
          </div>
          <Ticket className="h-8 w-8 text-primary" />
        </div>
        <button className="w-full rounded-xl bg-primary py-3.5 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform active:scale-95">
          Quero Participar
        </button>
      </div>

      {/* Description */}
      <div className="mt-4 rounded-2xl border border-border bg-card p-4">
        <button
          type="button"
          onClick={() => setDescOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <h3 className="font-display text-sm font-bold uppercase tracking-wider">Descrição / Regulamento</h3>
          </div>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${descOpen ? "rotate-180" : ""}`} />
        </button>
        {descOpen && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{raffle.description}</p>
        )}
      </div>
    </Layout>
  );
}
