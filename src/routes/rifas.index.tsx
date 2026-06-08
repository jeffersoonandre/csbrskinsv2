import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { RaffleListItem } from "@/components/RaffleListItem";
import { raffles } from "@/lib/raffles";

export const Route = createFileRoute("/rifas/")({
  head: () => ({
    meta: [
      { title: "Rifas — CSBR Skins" },
      { name: "description", content: "Veja todas as rifas de skins do CS2 disponíveis na CSBR Skins, ativas e encerradas." },
    ],
  }),
  component: RifasPage,
});

function RifasPage() {
  return (
    <Layout>
      <h1 className="mb-1 font-display text-2xl font-bold uppercase">Rifas</h1>
      <p className="mb-5 text-sm text-muted-foreground">Todas as rifas, ativas e encerradas.</p>

      <div className="flex flex-col gap-2">
        {raffles.map((r) => (
          <RaffleListItem key={r.id} raffle={r} />
        ))}
      </div>
    </Layout>
  );
}
