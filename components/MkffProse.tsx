import Image from "next/image";

import type { MkffContentBlock, MkffContentSection } from "@/lib/mkff-about";

function ProseBlock({ block }: { block: MkffContentBlock }) {
  switch (block.kind) {
    case "p":
      return (
        <p className="max-w-3xl text-[15px] leading-7 text-[var(--mkff-charcoal)]">
          {block.text}
        </p>
      );
    case "quote":
      return (
        <blockquote className="max-w-3xl border-l-2 border-[var(--mkff-gold)] pl-5 font-display text-xl italic leading-8 text-[var(--mkff-oxblood)]">
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ol className="flex max-w-3xl flex-col gap-4">
          {block.items.map((item, index) => (
            <li key={item.slice(0, 40)} className="flex items-baseline gap-4">
              <span className="w-8 shrink-0 font-display text-sm font-semibold leading-5 text-[var(--mkff-gold)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-7 text-[var(--mkff-charcoal)]">
                {item}
              </span>
            </li>
          ))}
        </ol>
      );
    case "image":
      return (
        <Image
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          className="h-auto w-full max-w-md border border-[var(--mkff-border)]"
        />
      );
  }
}

/** Renders the client's verbatim write-ups: her headings, her words — only the styling is the site's. */
export function MkffProseSections({
  sections,
}: {
  sections: readonly MkffContentSection[];
}) {
  return (
    <div className="flex flex-col gap-14">
      {sections.map((section, sectionIndex) => (
        <section key={section.title ?? `passage-${sectionIndex}`}>
          {section.title ? (
            <h2 className="font-display text-3xl font-medium leading-9 text-[var(--mkff-oxblood)] md:text-4xl">
              {section.title}
            </h2>
          ) : null}
          <div
            className={`flex flex-col gap-5 ${section.title ? "mt-6" : ""}`}
          >
            {section.blocks.map((block, blockIndex) => (
              <ProseBlock key={blockIndex} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
