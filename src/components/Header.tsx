import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container-main py-4 flex items-center justify-end">
        <ThemeToggle />
      </div>
    </header>
  );
}
