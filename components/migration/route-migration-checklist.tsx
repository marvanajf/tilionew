import { Container } from "@/components/ui/container";
import type { RouteContentPlan } from "@/lib/content-migration";

type RouteMigrationChecklistProps = {
  title: string;
  plan: RouteContentPlan;
};

export function RouteMigrationChecklist({ title, plan }: RouteMigrationChecklistProps) {
  return (
    <section className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-zinc-600">Structured migration checklist placeholder. Final page content comes after source collection.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 p-4">
            <h2 className="text-sm font-semibold">Local Source Status</h2>
            <p className="mt-2 text-sm text-zinc-700">{plan.localSourceStatus}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              {plan.localReferenceFiles.length > 0 ? (
                plan.localReferenceFiles.map((file) => <li key={file}>{file}</li>)
              ) : (
                <li>No local reference files found for this route.</li>
              )}
            </ul>
          </div>

          <div className="rounded-lg border border-zinc-200 p-4">
            <h2 className="text-sm font-semibold">Needs From You</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              {plan.needsFromStakeholder.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-zinc-200 p-4">
          <h2 className="text-sm font-semibold">Migration Notes</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
            {plan.migrationNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
