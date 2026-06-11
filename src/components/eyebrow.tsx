import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-p-x-small text-muted-foreground font-medium uppercase tracking-wide",
        className,
      )}
    >
      {children}
    </p>
  );
}
