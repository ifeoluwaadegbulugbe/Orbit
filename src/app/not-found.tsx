import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <p className="text-sm font-semibold text-brand mb-3">404</p>
      <h1 className="text-3xl font-semibold text-ink mb-4">That page doesn't exist</h1>
      <p className="text-ink-muted mb-8">
        The page you're looking for may have moved or never existed. Try the homepage, or head to pricing.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Button href="/">Go to homepage</Button>
        <Button href="/pricing" variant="secondary">
          See pricing
        </Button>
      </div>
    </div>
  );
}
