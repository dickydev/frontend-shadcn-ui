import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InteractivePage() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Dialog (Modal)</CardTitle>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Buka Dialog</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Apakah Anda yakin?</DialogTitle>
                <DialogDescription>
                  Ini contoh Dialog dari shadcn (Radix) — sudah handle fokus &
                  aksesibilitas.
                </DialogDescription>
              </DialogHeader>

              <div className="py-2 text-sm text-muted-foreground">
                Coba navigasi pakai keyboard: Tab, Shift+Tab, Esc.
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Batal
                  </Button>
                </DialogClose>
                <Button type="button">Lanjutkan</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accordion</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Apa itu shadcn/ui?</AccordionTrigger>
              <AccordionContent>
                Kumpulan komponen yang kamu “add” ke project (kodenya masuk ke
                repo kamu).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Kenapa Radix?</AccordionTrigger>
              <AccordionContent>
                Fokus pada logic + aksesibilitas, styling diserahkan ke kamu.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tabs + Popover</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Tabs defaultValue="a" className="w-full">
            <TabsList>
              <TabsTrigger value="a">Tab A</TabsTrigger>
              <TabsTrigger value="b">Tab B</TabsTrigger>
            </TabsList>
            <TabsContent value="a" className="text-sm text-muted-foreground">
              Konten A
            </TabsContent>
            <TabsContent value="b" className="text-sm text-muted-foreground">
              Konten B
            </TabsContent>
          </Tabs>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Buka Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="text-sm">
              Ini popover kecil untuk info/menu singkat.
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>
    </div>
  )
}
