import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MessageCircle, Users, Bell, Gift } from "lucide-react";

export const Route = createFileRoute("/comunidade")({
  head: () => ({
    meta: [
      { title: "Comunidade WhatsApp — CSBR Skins" },
      { name: "description", content: "Entre na comunidade da CSBR Skins no WhatsApp e fique por dentro de todos os sorteios." },
    ],
  }),
  component: Comunidade,
});

const benefits = [
  { icon: Bell, title: "Avisos em primeira mão", desc: "Saiba antes de todos quando uma nova rifa abrir." },
  { icon: Gift, title: "Sorteios exclusivos", desc: "Brindes e promoções só para membros do grupo." },
  { icon: Users, title: "Comunidade ativa", desc: "Converse com outros jogadores apaixonados por CS2." },
];

function Comunidade() {
  return (
    <Layout>
      <div className="text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-success/15 text-success">
          <MessageCircle className="h-8 w-8" />
        </div>
        <h1 className="mt-4 font-display text-2xl font-bold uppercase">Comunidade WhatsApp</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Entre no grupo e concorra às melhores skins do CS2 com a galera.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
              <b.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-sm font-bold">{b.title}</div>
              <div className="text-xs text-muted-foreground">{b.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://chat.whatsapp.com/Ez7Mnzjh3GsHqJpU07nnDI"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full rounded-2xl bg-success py-4 text-center font-display text-sm font-bold uppercase tracking-widest text-success-foreground transition-transform active:scale-95"
      >
        Entrar no Grupo
      </a>
    </Layout>
  );
}
