import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo.url} alt="CSBR Skins" className="h-7 w-auto" />
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-success">Rifa Ativa</span>
        </div>
      </div>
    </header>
  );
}
