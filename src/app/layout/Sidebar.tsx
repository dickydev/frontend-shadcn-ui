import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Home, Layers, Sparkles, SlidersHorizontal } from "lucide-react"
import { FlaskConical } from "lucide-react"

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/basics", label: "Basics", icon: Layers },
  { to: "/interactive", label: "Interactive", icon: Sparkles },
  { to: "/forms", label: "Forms & State", icon: SlidersHorizontal },
  { to: "/playground", label: "Playground", icon: FlaskConical },
]

export function Sidebar() {
  return (
    <Card className="p-3">
      <div className="px-2 pb-2 text-sm font-medium text-muted-foreground">
        Sesi Materi
      </div>

      <nav className="grid gap-1">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                isActive && "bg-accent text-accent-foreground",
              )
            }
            end={to === "/"}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </Card>
  )
}
