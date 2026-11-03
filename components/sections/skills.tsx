import { SectionHeading, Reveal } from "@/components/ui/section";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      className="border-y border-line/70 bg-surface/30 py-20 sm:py-24"
      aria-labelledby="expertise"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            label="Technical expertise"
            title={<span id="expertise">Capabilities</span>}
            intro="Grouped by where they sit in an assessment — no proficiency meters, just the work I actually do."
          />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 60}>
              <div className="h-full bg-base/80 p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[0.9375rem] font-semibold text-ink">{group.title}</h3>
                  <span className="font-mono text-[0.625rem] tracking-widest text-muted/60">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-1.5 text-[0.8125rem] text-muted">{group.note}</p>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.875rem] text-ink/90"
                    >
                      <span
                        className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-cyan/70"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
