import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { RaffleCard } from "@/components/RaffleCard";
import { raffles, type RaffleStatus } from "@/lib/raffles";

export const Route = createFileRoute("/rifas/")({
  head: () => ({
    meta: [
      { title: "Rifas Ativas — CSBR Skins" },
      { name: "description", content: "Veja todas as rifas de skins do CS2 disponíveis na CSBR Skins." },
    ],
  }),
  component: RifasPage,
});

const filters: { value: "todas" | RaffleStatus; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "ativa", label: "Ativas" },
  { value: "em-breve", label: "Em Breve" },
  { value: "encerrada", label: "Encerradas" },
];

function RifasPage() {
  const [filter, setFilter] = useState<"todas" | RaffleStatus>("todas");
  const list = filter === "todas" ? raffles : raffles.filter((r) => r.status === filter);

  return (
    <Layout>
      <h1 className="mb-1 font-display text-2xl font-bold uppercase">Rifas</h1>
      <p className="mb-4 text-sm text-muted-foreground">Escolha sua skin e participe agora.</p>

      <div className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

      <div className="grid grid-cols-1 gap-4">
        {list.map((r) => (
          <RaffleCard key={r.id} raffle={r} />
        ))}
      </div>
    </Layout>
  );
}
