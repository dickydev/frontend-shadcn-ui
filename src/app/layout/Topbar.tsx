import { ThemeToggle } from "@/app/theme/ThemeToggle"
import { Separator } from "@/components/ui/separator"

export function Topbar() {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h1 className="truncate text-xl font-semibold">Shadcn Playground</h1>
          <p className="text-sm text-muted-foreground">
            Project belajar shadcn/ui + Tailwind v4 + Radix
          </p>
        </div>
        <ThemeToggle />
      </div>
      <Separator className="mt-4" />
    </div>
  )
}
