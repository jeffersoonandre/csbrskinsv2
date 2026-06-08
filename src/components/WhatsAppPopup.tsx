import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("wa-popup-dismissed");
    if (!dismissed) {
      const t = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("wa-popup-dismissed", "1");
  };

  if (!open) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-20 z-50 flex justify-center px-4">
      <div className="pointer-events-auto relative w-full max-w-md rounded-2xl border border-success/50 bg-card/95 p-4 pr-10 shadow-[var(--shadow-glow)] backdrop-blur-md">
        <button
          onClick={close}
          aria-label="Fechar"
          className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <a
          href="https://chat.whatsapp.com/Ez7Mnzjh3GsHqJpU07nnDI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-success/20 text-success">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-bold uppercase tracking-widest text-success">
              Comunidade
            </div>
            <div className="font-display text-sm font-bold leading-tight">
              Entre no nosso grupo do WhatsApp
            </div>
            <div className="text-[11px] text-muted-foreground">
              Avisos de sorteios em primeira mão · Grátis
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
