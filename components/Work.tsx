import Tag from "@/components/Tag";
const projects = [
  {
    name: "MyRestiq",
    tagline: "Explore Every Menu",
    desc: "Restaurant discovery and menu exploration platform. Browse and compare dining options across local establishments — fast, searchable, mobile-first.",
    tags: ["Fullstack", "React", "Web Design", "SEO"],
    url: "https://myrestiq.com",
    accentBg: "bg-dark",
  },
  {
    name: "DnesníSong.cz",
    tagline: "Váš dnešní melodie",
    desc: "Czech daily music platform. Curated song recommendations delivered every day — focused and fast for discovering today's melody.",
    tags: ["Fullstack", "Next.js", "SEO", "Design"],
    url: "https://dnesnisong.cz",
    accentBg: "bg-dark",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-dark/10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-dark text-xs uppercase tracking-[0.3em] font-medium flex items-center gap-3">
          <span className="w-6 h-px bg-dark inline-block" />
          Selected Work
        </p>
        <h2 className="font-display font-black text-[clamp(2.5rem,5vw,5rem)] text-dark uppercase mt-3 leading-none">
          Projects
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden border border-dark/10 hover:border-dark/40 transition-all"
            >
              {/* Preview band */}
              <div className={`${p.accentBg} h-52 flex flex-col items-center justify-center text-light`}>
                <p className="font-display font-black text-3xl uppercase tracking-tight">
                  {p.name}
                </p>
                <p className="text-sm mt-2 italic text-light/60">
                  &ldquo;{p.tagline}&rdquo;
                </p>
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-dark text-xs uppercase tracking-[0.15em]">
                    {p.url.replace("https://", "")}
                  </span>
                </div>
                <p className="text-dark/60 text-sm leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tags.map((tag) => (
                    <Tag key={tag} label={tag} variant="navy" />
                  ))}
                </div>
                <div className="mt-6 text-xs text-dark group-hover:text-dark/60 transition-colors uppercase tracking-[0.15em]">
                  Visit project →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
