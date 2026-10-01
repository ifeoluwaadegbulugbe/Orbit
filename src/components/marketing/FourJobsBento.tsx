import { SectionHeader } from "./SectionHeader";
import { FeatureCard } from "./FeatureCard";
import { fourJobs } from "@/data/jobs";

export function FourJobsBento() {
  return (
    <section className="px-6 py-20 md:py-28 bg-white border-y border-border">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="The four jobs"
          title="Everything a service business has to do, in one workspace"
          description="Each one connects to the others automatically, so progress in one shows up everywhere else."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {fourJobs.map((job) => (
            <FeatureCard
              key={job.href}
              icon={job.icon}
              title={job.title}
              description={job.description}
              href={job.href}
              tint={job.tint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
