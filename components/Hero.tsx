"use client";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-light flex flex-col items-start justify-center px-8 py-32">
      <div className="max-w-6xl">
        <h1 className="font-display font-black text-dark uppercase leading-[0.85] mb-8">
          <span className="block text-[clamp(6rem, 18vw, 15rem)]">
            We build websites and AI tools for businesses that want to grow.
          </span>
        </h1>
      </div>
    </section>
  );
}
