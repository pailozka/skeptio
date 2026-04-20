import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const SelectedWork = dynamic(() => import("@/components/SelectedWork"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const CTA = dynamic(() => import("@/components/CTA"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Skeptio",
  description:
    "Web development studio specializing in fullstack development, web design, SEO, AI integration, and business automation.",
  url: "https://skeptio.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@skeptio.com",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
