import { Link } from "@tanstack/react-router";
import type { Raffle } from "@/lib/raffles";
import { Check, Trophy } from "lucide-react";

export function RaffleListItem({ raffle }: { raffle: Raffle }) {
  return (
    <Link
      to="/rifas/$id"
      params={{ id: raffle.id }}
      className="flex items-center gap-3 rounded-xl border border-border bg-card p-2.5 transition-all hover:border-primary/50"
    >
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-secondary">
        <img src={raffle.image} alt={raffle.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
            {raffle.number}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/40 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
            <Check className="h-2.5 w-2.5" /> Encerrada
          </span>
        </div>
        <div className="truncate font-display text-sm font-bold leading-tight">{raffle.title}</div>
        {raffle.winner && (
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Trophy className="h-3 w-3 text-yellow-500" />
            Vencedor: <span className="text-foreground">{raffle.winner}</span>
          </div>
        )}
      </div>
      <div className="text-right">
        <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Cotas</div>
        <div className="font-display text-xs font-bold">
          {raffle.soldNumbers}/{raffle.totalNumbers}
        </div>
      </div>
    </Link>
  );
}
