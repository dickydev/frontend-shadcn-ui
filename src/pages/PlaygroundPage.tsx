import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/extensions/loading-button";
import { ConfirmAction } from "@/components/patterns/confirm-action";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const PlaygroundPage = () => {
  const [text, setText] = useState("");

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Playground</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            Halaman ini adalah <strong> area latihan</strong>
          </p>
          <p>Silahkan ubah, hapus, atau tambahkan komponen Shadcn UI disini</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>BAB 1 - Mental Model ("You Own The Code")</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Semua button di bawah berasal dari file yang sama: <br />
            <code className="rounded bg-muted px-1">
              src/components/ui/button.tsx
            </code>
          </p>

          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant={"secondary"}>Default</Button>
            <Button variant={"outline"}>Default</Button>
            <Button variant={"destructive"}>Default</Button>
            <Button variant={"primary"}>Default</Button>
            <Button>
              <a href="https://youtube.com">Hello gais</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>BAB 2 - Anatomy of a Component</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Button size={"sm"}>Small</Button>
            <Button size={"default"}>Default</Button>
            <Button size={"lg"}>Large</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>BAB 3 - State & Controlled Component</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 max-w-sm">
          <div className="grid gap-2">
            <Label htmlFor="controlled-input">Controlled Input</Label>
            <Input
              id="controlled-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ketik sesuatu..."
            />
          </div>

          <Button onClick={() => alert(text || "Kosong")}>Submit</Button>

          <p className="text-sm text-muted-foreground">
            Value di input ini dikontrol React state.
            <br />
            Ini contoh <strong>controlled component</strong>.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>BAB 5 — Dark Mode Architecture</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            Dark mode di ShadCN UI <strong>bukan conditional TSX</strong>.
          </p>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => document.documentElement.classList.toggle("dark")}
            >
              Toggle Dark Mode
            </Button>
          </div>

          <div className="rounded-md border border-dashed p-3">
            <p className="font-medium">Diskusi</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Tidak ada <code>isDark</code> di JSX
              </li>
              <li>Komponen tidak tahu soal dark mode</li>
              <li>Yang berubah hanya CSS variables</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>BAB 6 — Composability & Extension</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 max-w-sm">
          {/* Pattern 1 */}
          <LoadingButton loading={true} className="w-full">
            Simpan Data
          </LoadingButton>

          {/* Pattern 2 */}
          <Button variant={"premium"}>Premium</Button>

          {/* Pattern 3 */}
          <Button asChild>
            <a href="">Link a Button</a>
          </Button>

          {/* Pattern 4 */}
          <ConfirmAction
            trigger={
              <Button variant="destructive" className="w-full">
                Hapus Data
              </Button>
            }
            onConfirm={() => alert("Data dihapus")}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>BAB 7 — Forms & State Management</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 max-w-sm">
          {/* Uncontrolled Form */}
          <div className="space-y-2 rounded-md border p-3">
            <p className="font-medium text-sm">Uncontrolled Input</p>

            <Input
              id="uncontrolled-email"
              type="email"
              placeholder="email@uncontrolled.com"
            />

            <Button
              type="button"
              onClick={() => {
                const input = document.getElementById(
                  "uncontrolled-email",
                ) as HTMLInputElement;

                alert(input.value || "Kosong");
              }}
            >
              Submit (Uncontrolled)
            </Button>

            <p className="text-xs text-muted-foreground">
              Value disimpan di DOM, bukan di React state.
            </p>
          </div>

          {/* Controlled Form */}
          <div className="space-y-2 rounded-md border p-3">
            <p className="font-medium text-sm">Controlled Input</p>

            <Input
              type="email"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="email@controlled.com"
            />

            <Button type="button" onClick={() => alert(text || "Kosong")}>
              Submit (Controlled)
            </Button>

            <p className="text-xs text-muted-foreground">
              Value dikontrol penuh oleh React state.
            </p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>

          <Button type="button">Submit</Button>

          <p className="text-sm text-muted-foreground">
            Ini <strong>belum</strong> form production-ready.
            <br />
            BAB ini fokus ke:
          </p>

          <ul className="list-disc pl-5 text-sm text-muted-foreground">
            <li>Label & accessibility</li>
            <li>Error handling</li>
            <li>Integrasi form library</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>BAB 8 — Building Custom Component</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 max-w-md">
          <Alert>
            <AlertTitle>Informasi</AlertTitle>
            <AlertDescription>
              Ini alert default menggunakan design token.
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <AlertTitle>Berhasil</AlertTitle>
            <AlertDescription>Data berhasil disimpan.</AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTitle>Gagal</AlertTitle>
            <AlertDescription>
              Terjadi kesalahan saat menyimpan data.
            </AlertDescription>
          </Alert>

          <Alert variant={"default"}>
            <AlertTitle>HELLO</AlertTitle>
            <AlertDescription>Lorem ipsum dolor sit amet.</AlertDescription>
          </Alert>

          <div className="rounded-md border border-dashed p-3 text-sm text-muted-foreground">
            <p className="font-medium">Diskusi</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Alert ini tidak ada di shadcn default</li>
              <li>API-nya konsisten dengan shadcn</li>
              <li>Variant berbasis token</li>
              <li>Accessible by default</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
