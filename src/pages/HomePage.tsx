import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HomePage() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Tujuan Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            Ini adalah playground untuk belajar shadcn/ui: komponen di-copy ke
            codebase, bisa kamu edit bebas.
          </p>
          <p>
            Navigasi kiri berisi halaman demo sesuai sesi: Basics, Interactive,
            dan Forms & State.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
