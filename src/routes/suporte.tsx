import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { HeadphonesIcon, MessageCircle, Mail, Instagram } from "lucide-react";

export const Route = createFileRoute("/suporte")({
  head: () => ({
    meta: [
      { title: "Suporte — CSBR Skins" },
      { name: "description", content: "Precisa de ajuda? Fale com o time CSBR Skins." },
    ],
  }),
  component: Suporte,
});

const channels = [
  { icon: MessageCircle, title: "WhatsApp", desc: "Resposta em até 1h", href: "https://chat.whatsapp.com/Ez7Mnzjh3GsHqJpU07nnDI" },
  { icon: Instagram, title: "Instagram", desc: "@csbrskins", href: "#" },
  { icon: Mail, title: "E-mail", desc: "suporte@csbrskins.com.br", href: "mailto:suporte@csbrskins.com.br" },
];

const faqs = [
  { q: "Como funciona a rifa?", a: "Você compra uma ou mais cotas. Quando todas as cotas forem vendidas, é feito um sorteio ao vivo e o ganhador recebe a skin direto na conta Steam." },
  { q: "É seguro?", a: "Sim. Todos os sorteios são públicos, transmitidos ao vivo e auditáveis. Já entregamos centenas de skins." },
  { q: "Como recebo minha skin?", a: "A entrega é feita via troca Steam, em até 24h após o sorteio." },
];

function Suporte() {
  return (
    <Layout>
      <div className="text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/15 text-primary">
          <HeadphonesIcon className="h-8 w-8" />
        </div>
        <h1 className="mt-4 font-display text-2xl font-bold uppercase">Suporte</h1>
        <p className="mt-2 text-sm text-muted-foreground">Fale com nosso time. Estamos online todos os dias.</p>
      </div>

      <div className="mt-6 space-y-3">
        {channels.map((c) => (
          <a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/50"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
              <c.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="font-display text-sm font-bold">{c.title}</div>
              <div className="text-xs text-muted-foreground">{c.desc}</div>
            </div>
          </a>
        ))}
      </div>

      <h2 className="mt-8 mb-3 font-display text-lg font-bold uppercase">Perguntas Frequentes</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/30">
            <summary className="cursor-pointer list-none font-display text-sm font-bold marker:hidden">
              {f.q}
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </Layout>
  );
}
