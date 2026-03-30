import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type SectionProps = {
  title: string;
  children?: ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-zinc-600">Placeholder content. Final page copy will be added in a later step.</p>
        {children ? <div className="mt-6">{children}</div> : null}
      </Container>
    </section>
  );
}
