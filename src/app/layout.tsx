import type { Metadata } from "next";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Marketing site example",
    template: "%s | Marketing site example",
  },
  description:
    "The seed structure behind the Fern marketing site: MDX content, design tokens, and a repo agents can operate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="border-b">
            <div className="mx-auto flex max-w-(--grid-max-w) items-center justify-between px-6 py-4">
              <Link href="/" className="text-p-small text-foreground font-medium">
                example
              </Link>
              <nav className="text-p-small text-muted-foreground">
                <Link href="/" className="hover:text-foreground">
                  Blog
                </Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t">
            <div className="text-p-x-small text-muted-foreground mx-auto max-w-(--grid-max-w) px-6 py-8">
              Seeded from the Fern marketing site.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
