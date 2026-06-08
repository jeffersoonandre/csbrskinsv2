import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { RaffleCard } from "@/components/RaffleCard";
import { RaffleListItem } from "@/components/RaffleListItem";
import { WhatsAppPopup } from "@/components/WhatsAppPopup";
import { raffles } from "@/lib/raffles";
import { ArrowRight } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.svg.asset.json";

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

          <a
            href="https://chat.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-3 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/15 p-3 transition-all hover:bg-[#25D366]/25 hover:border-[#25D366]/60"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366]/30">
              <img
                src={whatsappIcon.url}
                alt="WhatsApp"
                className="h-5 w-5"
                style={{ filter: "invert(58%) sepia(86%) saturate(401%) hue-rotate(86deg) brightness(95%) contrast(89%)" }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#25D366]">
                Grupo
              </div>
              <div className="font-display text-sm font-bold leading-tight">
                Entre no grupo do WhatsApp
              </div>
              <div className="text-[11px] text-muted-foreground">
                Avisos de sorteios em primeira mão
              </div>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </a>
        </section>
      )}

      <WhatsAppPopup />
    </Layout>
  );
}
