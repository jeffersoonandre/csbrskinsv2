import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("wa-popup-dismissed");
    if (!dismissed) {
      const t = setTimeout(() => {
        setOpen(true);
        requestAnimationFrame(() => setShow(true));
      }, 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setShow(false);
    sessionStorage.setItem("wa-popup-dismissed", "1");
    setTimeout(() => setOpen(false), 250);
  };

  if (!open) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-20 z-50 flex justify-center px-4">
      <div
        className={`pointer-events-auto relative w-full max-w-md overflow-hidden rounded-2xl border border-[#25D366]/40 bg-[#0a0f0c]/95 shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] backdrop-blur-md transition-all duration-300 ease-out ${
          show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <button
          onClick={close}
          aria-label="Fechar"
          className="absolute right-2 top-2 z-10 grid h-7 w-7 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3 p-4 pr-10">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366]/20 text-[#25D366]">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="font-display text-sm font-bold leading-tight text-foreground">
              Entre na nossa comunidade
            </div>
            <div className="text-[12px] text-muted-foreground">
              Receba avisos de novas rifas em primeira mão.
            </div>
          </div>
        </div>

        <a
          href="https://chat.whatsapp.com/Ez7Mnzjh3GsHqJpU07nnDI"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="block bg-[#25D366] py-3 text-center font-display text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-[#1ebe5a]"
        >
          Entrar no grupo
        </a>
      </div>
    </div>
  );
}
