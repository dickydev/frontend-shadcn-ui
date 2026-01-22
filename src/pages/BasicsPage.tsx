import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function BasicsPage() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Button (variant & size)</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button onClick={() => alert("Primary clicked!")}>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Separator className="my-2 w-full" />
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Label + Input (A11y: htmlFor)</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="nama@domain.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Nama</Label>
            <Input id="name" placeholder="Dicky Fernando" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
