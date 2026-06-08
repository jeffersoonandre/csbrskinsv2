import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Search, Ticket } from "lucide-react";

export const Route = createFileRoute("/cotas")({
  head: () => ({
    meta: [
      { title: "Minhas Cotas — CSBR Skins" },
      { name: "description", content: "Consulte suas cotas compradas nas rifas da CSBR Skins." },
    ],
  }),
  component: CotasPage,
});

function CotasPage() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <Layout>
      <h1 className="mb-1 font-display text-2xl font-bold uppercase">Minhas Cotas</h1>
      <p className="mb-5 text-sm text-muted-foreground">
        Consulte as cotas compradas informando seu e-mail ou telefone.
      </p>

      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)]"
      >
        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          E-mail ou telefone
        </label>
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="seu@email.com"
            className="flex-1 rounded-xl border border-border bg-secondary px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform active:scale-95"
          >
            <Search className="h-4 w-4" /> Buscar
          </button>
        </div>
      </form>

      <div className="mt-6 rounded-2xl border border-dashed border-border bg-card/40 p-8 text-center">
        <Ticket className="mx-auto h-10 w-10 text-muted-foreground/60" />
        <p className="mt-3 text-sm font-medium">
          {searched
            ? "Nenhuma cota encontrada para esse contato."
            : "Informe seu e-mail ou telefone para consultar suas cotas."}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Em caso de dúvida, fale com o suporte pelo WhatsApp.
        </p>
      </div>
    </Layout>
  );
}
