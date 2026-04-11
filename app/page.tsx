import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
