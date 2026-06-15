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

const SITE_URL = "https://saiaquatics.lovable.app";
const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/4c7d80d2-e19b-496c-b68c-ccb045c5db60";

const portfolioItems = [
  { title: "Curved Wall Aquarium", cat: "Home", size: "300 gal", loc: "Bandra Residence" },
  { title: "Reef Showpiece", cat: "Home", size: "180 gal", loc: "Juhu Villa" },
  { title: "Reception Centerpiece", cat: "Office", size: "500 gal", loc: "BKC HQ" },
  { title: "Iwagumi Nature Scape", cat: "Aquascaping", size: "60 gal", loc: "Studio Build" },
  { title: "Lobby Cylinder", cat: "Commercial", size: "2,000 gal", loc: "5★ Hotel" },
  { title: "Discus Dining Tank", cat: "Home", size: "120 gal", loc: "Powai Penthouse" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sai Aquatics — Premium Aquarium Setup & Maintenance in Mumbai" },
      {
        name: "description",
        content:
          "Bespoke aquarium installations, aquascaping and white-glove maintenance for homes, offices and commercial spaces in Mumbai. 12+ years, 500+ installs.",
      },
      { name: "keywords", content: "aquarium setup mumbai, custom aquarium, aquascaping, reef tank, aquarium maintenance, commercial aquarium, marine aquarium installation" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Sai Aquatics" },
      { property: "og:title", content: "Sai Aquatics — Premium Aquariums in Mumbai" },
      {
        property: "og:description",
        content:
          "Custom aquarium installations, aquascaping and maintenance. Living art, engineered to last.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Sai Aquatics" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sai Aquatics — Premium Aquariums" },
      { name: "twitter:description", content: "Custom aquarium installations, aquascaping and maintenance in Mumbai." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": SITE_URL,
          name: "Sai Aquatics",
          description:
            "Premium aquarium setup, aquascaping and maintenance for residential and commercial spaces in Mumbai.",
          url: SITE_URL,
          image: OG_IMAGE,
          priceRange: "₹₹₹",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mumbai",
            addressRegion: "MH",
            addressCountry: "IN",
          },
          areaServed: "Mumbai",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "120",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: SITE_URL,
          name: "Sai Aquatics",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Aquarium Portfolio",
          itemListElement: portfolioItems.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "CreativeWork",
              name: p.title,
              about: `${p.cat} aquarium installation`,
              description: `${p.size} custom ${p.cat.toLowerCase()} aquarium at ${p.loc}.`,
              creator: { "@type": "Organization", name: "Sai Aquatics" },
              locationCreated: p.loc,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Aquarium Setup & Maintenance",
          provider: { "@type": "LocalBusiness", name: "Sai Aquatics" },
          areaServed: "Mumbai",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Aquarium Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Aquarium Installation" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aquascaping" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aquarium Maintenance" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marine & Reef Tanks" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Aquariums" } },
            ],
          },
        }),
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
