import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sai Aquatics — Premium Aquarium Setup & Maintenance" },
      {
        name: "description",
        content:
          "Bespoke aquarium installations, aquascaping and white-glove maintenance for homes, offices and commercial spaces.",
      },
      { property: "og:title", content: "Sai Aquatics — Premium Aquariums" },
      {
        property: "og:description",
        content:
          "Custom aquarium installations, aquascaping and maintenance. Living art, engineered to last.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="ocean-bg relative min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
