import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Services from "@/components/marketing/Services";
import SelectedWork from "@/components/marketing/SelectedWork";
import Contact from "@/components/marketing/Contact";
import CTA from "@/components/marketing/CTA";
import Footer from "@/components/marketing/Footer";

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
