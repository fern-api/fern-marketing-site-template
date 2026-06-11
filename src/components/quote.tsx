import { cn } from "@/lib/utils";

export function Quote({
  children,
  author,
  role,
  className,
}: {
  children: React.ReactNode;
  author: string;
  role?: string;
  className?: string;
}) {
  return (
    <figure className={cn("border-brand my-12 border-l-2 pl-8", className)}>
      <blockquote className="text-p text-foreground">{children}</blockquote>
      <figcaption className="text-p-x-small text-muted-foreground mt-4">
        <span className="text-foreground font-medium">{author}</span>
        {role ? ` · ${role}` : null}
      </figcaption>
    </figure>
  );
}
