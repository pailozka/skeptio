"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Service = "WEB" | "AI" | "BOTH";

export default function Contact() {
  const [service, setService] = useState<Service | null>(null);
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!service || !email) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, email, url }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const services: { id: Service; label: string }[] = [
    { id: "WEB", label: "WEB DEVELOPMENT" },
    { id: "AI", label: "AI INTEGRATION" },
    { id: "BOTH", label: "BOTH" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-[clamp(3rem,8vw,7rem)] leading-none tracking-tight uppercase text-foreground">
            CONTACT
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          {status === "sent" ? (
            <div className="p-16 flex flex-col items-center text-center gap-6">
              <p className="font-sans font-bold text-[10px] tracking-[0.4em] text-foreground/40 uppercase">
                REQUEST RECEIVED
              </p>
              <p className="font-display font-bold text-3xl tracking-tight text-foreground uppercase">
                WE'LL BE IN TOUCH.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-10">
              {/* Service selector */}
              <fieldset>
                <legend className="font-sans font-bold text-[10px] tracking-[0.3em] text-foreground/40 uppercase mb-5">
                  SERVICE NEEDED
                </legend>
                <div className="grid grid-cols-3 gap-3">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setService(s.id)}
                      className={`py-4 px-3 font-sans font-bold text-[10px] tracking-[0.2em] uppercase transition-colors ${
                        service === s.id
                          ? "bg-foreground text-background"
                          : "text-foreground border border-foreground hover:bg-foreground hover:text-background"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Email */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="font-sans font-bold text-[10px] tracking-[0.3em] text-foreground/40 uppercase"
                >
                  YOUR EMAIL *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="bg-transparent border border-foreground/20 px-5 py-4 font-sans text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-foreground/60 transition-colors"
                />
              </div>

              {/* URL */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="url"
                  className="font-sans font-bold text-[10px] tracking-[0.3em] text-foreground/40 uppercase"
                >
                  YOUR WEBSITE{" "}
                  <span className="text-foreground/20 normal-case tracking-normal font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  id="url"
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://yoursite.com"
                  className="bg-transparent border border-foreground/20 px-5 py-4 font-sans text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-foreground/60 transition-colors"
                />
              </div>

              {/* Submit */}
              {status === "error" && (
                <p className="font-sans text-xs text-foreground/40">
                  Something went wrong — email us directly at hello@skeptio.com
                </p>
              )}

              <motion.button
                type="submit"
                disabled={!service || !email || status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-foreground text-background px-10 py-5 font-sans font-bold text-sm tracking-[0.2em] uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:bg-foreground transition-colors self-start"
              >
                {status === "sending" ? "SENDING..." : "SEND REQUEST"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
