export default function SkipToContent() {
  return (
    <a
      href="#content"
      className="absolute left-4 top-4 z-50 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-text-primary shadow-glow transition-transform duration-200 focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background focus:outline-none -translate-y-16 motion-reduce:transition-none"
    >
      Skip to content
    </a>
  );
}
