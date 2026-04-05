import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
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
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
