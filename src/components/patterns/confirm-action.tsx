import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ConfirmAction({
  trigger,
  onConfirm,
}: {
  trigger: React.ReactNode;
  onConfirm: () => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Konfirmasi</DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground">
          Aksi ini tidak bisa dibatalkan.
        </p>

        <DialogFooter>
          <Button variant="ghost">Batal</Button>
          <Button variant="destructive" onClick={onConfirm}>
            Lanjutkan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
