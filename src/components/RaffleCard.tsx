import { Link } from "@tanstack/react-router";
import type { Raffle } from "@/lib/raffles";

const statusMap = {
  ativa: { label: "Ativa", className: "bg-success/15 text-success border-success/40" },
  "em-breve": { label: "Em Breve", className: "bg-primary/15 text-primary border-primary/40" },
  encerrada: { label: "Encerrada", className: "bg-muted text-muted-foreground border-border" },
} as const;

export function RaffleCard({ raffle }: { raffle: Raffle }) {
  const pct = Math.round((raffle.soldNumbers / raffle.totalNumbers) * 100);
  const status = statusMap[raffle.status];
  return (
    <Link
      to="/rifas/$id"
      params={{ id: raffle.id }}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={raffle.image}
          alt={raffle.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${status.className}`}>
          {status.label}
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">{raffle.number}</div>
          <h3 className="mt-1 font-display text-base font-bold leading-tight text-foreground">
            {raffle.title}
          </h3>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-medium">
            <span className="text-muted-foreground">{raffle.soldNumbers}/{raffle.totalNumbers} cotas</span>
            <span className="text-primary">{pct}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${pct}%`, background: "var(--gradient-primary)" }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border/60 pt-3">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Por apenas</div>
            <div className="font-display text-xl font-bold text-foreground">
              R$ {raffle.price.toFixed(2).replace(".", ",")}
            </div>
          </div>
          <div className="rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform group-hover:scale-105">
            Participar
          </div>
        </div>
      </div>
    </Link>
  );
}
