import { Outlet } from "react-router-dom"
import { Sidebar } from "@/app/layout/Sidebar"
import { Topbar } from "@/app/layout/Topbar"

export function AppShell() {
  return (
    <div className="min-h-svh bg-background text-foreground transition-colors">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[240px_1fr]">
        <aside className="md:sticky md:top-6 md:h-[calc(100svh-48px)]">
          <Sidebar />
        </aside>

        <main className="min-w-0">
          <Topbar />
          <div className="mt-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
