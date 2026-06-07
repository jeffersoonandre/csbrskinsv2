import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { BottomNav } from "./BottomNav";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid-bg flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-md flex-1 px-4 py-5">{children}</main>
      <BottomNav />
    </div>
  );
}
