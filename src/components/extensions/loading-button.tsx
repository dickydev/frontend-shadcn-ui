import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type LoadingButtonProps = {
  loading?: boolean;
} & React.ComponentProps<typeof Button>;

export function LoadingButton({
  loading,
  children,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={loading} {...props}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
