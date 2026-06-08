import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { RaffleCard } from "@/components/RaffleCard";
import { RaffleListItem } from "@/components/RaffleListItem";
import { WhatsAppPopup } from "@/components/WhatsAppPopup";
import { raffles } from "@/lib/raffles";
import { MessageCircle } from "lucide-react";

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

function Index() {
  const ativas = raffles.filter((r) => r.status === "ativa");
  const encerradas = raffles.filter((r) => r.status === "encerrada").slice(0, 3);

  return (
    <Layout>
      <section className="mb-6">
        <h2 className="mb-3 font-display text-lg font-bold uppercase tracking-wide">Rifa Ativa</h2>
        <div className="grid grid-cols-1 gap-4">
          {ativas.map((r) => (
            <RaffleCard key={r.id} raffle={r} />
          ))}
        </div>
      </section>

      {encerradas.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-3 font-display text-lg font-bold uppercase tracking-wide">
            Rifas Encerradas
          </h2>
          <div className="flex flex-col gap-2">
            {encerradas.map((r) => (
              <RaffleListItem key={r.id} raffle={r} />
            ))}
          </div>

          <Link
            to="/comunidade"
            className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Entrar na Comunidade
          </Link>
        </section>
      )}

      <WhatsAppPopup />
    </Layout>
  );
}
