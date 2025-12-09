export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="border-t border-border" />
        <p className="py-8 text-center text-sm text-muted-foreground">
          © {currentYear} Arbie Tomas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
