const details = [
  { label: "Response time", value: "< 24 hours" },
  { label: "Project kickoff", value: "Within 1 week" },
  { label: "Stack", value: "Next.js · TypeScript · PostgreSQL" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-dark/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left */}
          <div className="md:col-span-7 border-l-4 border-dark pl-8">
            <p className="text-dark text-xs uppercase tracking-[0.3em] font-medium mb-8">
              Next step
            </p>
            <h2 className="font-display font-black leading-none uppercase">
              <span className="block text-dark text-[clamp(3rem,6vw,6rem)]">
                Got a
              </span>
              <span className="block text-dark text-[clamp(3rem,6vw,6rem)]">
                project?
              </span>
            </h2>
            <p className="text-dark/50 text-lg mt-8 max-w-md leading-relaxed">
              Tell us what you&rsquo;re building. We&rsquo;ll tell you how we
              can help — and how fast we can ship.
            </p>
            <a
              href="mailto:hello@skeptio.com"
              className="inline-block mt-12 px-8 py-4 bg-dark text-light text-xs font-semibold uppercase tracking-[0.15em] hover:bg-dark/90 transition-colors"
            >
              hello@skeptio.com
            </a>
          </div>

          {/* Right: details */}
          <div className="md:col-span-5 md:pt-20">
            <div className="border border-dark/10 p-8 space-y-6">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between border-b border-dark/10 pb-6 last:border-0 last:pb-0"
                >
                  <span className="text-dark text-xs uppercase tracking-[0.15em]">
                    {item.label}
                  </span>
                  <span className="text-dark text-sm font-medium text-right max-w-[55%]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
