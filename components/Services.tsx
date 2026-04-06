const services = [
  {
    num: "01",
    name: "Web Design",
    desc: "Sharp, intentional interfaces. No templates, no stock layouts. Every pixel with purpose.",
    tags: ["UI/UX", "Figma", "Prototyping"],
  },
  {
    num: "02",
    name: "Fullstack Development",
    desc: "React, Next.js, Node.js. From frontend polish to database architecture to deployment.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    num: "03",
    name: "SEO",
    desc: "Technical SEO, content architecture, and Core Web Vitals optimization that moves rankings.",
    tags: ["Technical SEO", "Schema", "Lighthouse"],
  },
  {
    num: "04",
    name: "AI Integration",
    desc: "LLMs, automation pipelines, and AI features built directly into your product.",
    tags: ["OpenAI", "Anthropic", "RAG"],
  },
  {
    num: "05",
    name: "Business Automation",
    desc: "Cut the manual work. We build workflows and integrations that run while you sleep.",
    tags: ["n8n", "Zapier", "Custom APIs"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-dark/10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-dark text-xs uppercase tracking-[0.3em] font-medium flex items-center gap-3">
          <span className="w-6 h-px bg-crimson inline-block" />
          Services
        </p>
        <h2 className="font-display font-black text-[clamp(2.5rem,5vw,5rem)] text-navy uppercase mt-3 leading-none">
          What we do
        </h2>

        <div className="mt-16 grid md:grid-cols-3 border-l border-t border-dark/10">
          {services.map((s) => (
            <div
              key={s.num}
              className="border-r border-b border-dark/10 p-8 hover:bg-navy/[0.03] transition-colors group"
            >
              <span className="font-display font-black text-dark text-sm">
                {s.num}
              </span>
              <h3 className="font-display font-bold text-xl text-navy mt-4 mb-3 group-hover:text-dark transition-colors leading-tight">
                {s.name}
              </h3>
              <p className="text-navy/50 text-sm leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-dark text-xs uppercase tracking-[0.1em] border border-dark/30 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
