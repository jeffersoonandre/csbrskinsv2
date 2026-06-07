import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Ticket, MessageCircle, HeadphonesIcon } from "lucide-react";

const items = [
  { to: "/", label: "Início", icon: Home },
  { to: "/rifas", label: "Rifas", icon: Ticket },
  { to: "/comunidade", label: "Grupo", icon: MessageCircle },
  { to: "/suporte", label: "Suporte", icon: HeadphonesIcon },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="sticky bottom-0 z-40 border-t border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid max-w-md grid-cols-4 px-2">
        {items.map((item) => {
          const active = pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-1 py-3 text-[10px] font-medium uppercase tracking-wider transition-colors ${
                active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
