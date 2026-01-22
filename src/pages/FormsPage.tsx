import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FormsPage() {
  // controlled
  const [email, setEmail] = React.useState("")

  // uncontrolled
  const nameRef = React.useRef<HTMLInputElement | null>(null)

  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Controlled Input</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="controlled-email">Email</Label>
            <Input
              id="controlled-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="controlled@domain.com"
            />
          </div>

          <div className="text-sm text-muted-foreground">
            Value sekarang: <span className="font-medium">{email || "-"}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Uncontrolled Input</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="uncontrolled-name">Nama</Label>
            <Input
              id="uncontrolled-name"
              ref={nameRef}
              placeholder="uncontrolled (dibaca saat submit)"
            />
          </div>

          <Button
            type="button"
            onClick={() => alert(`Nama: ${nameRef.current?.value || "-"}`)}
          >
            Baca Value (Submit)
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
