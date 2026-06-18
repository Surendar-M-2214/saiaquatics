import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const SITE_URL = "https://saiaquatics.lovable.app";
const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/4c7d80d2-e19b-496c-b68c-ccb045c5db60";

const portfolioItems = [
  { title: "Residential Aquarium Setup", cat: "Home", size: "300 gal", loc: "Adyar, Chennai" },
  { title: "Home Aquarium Design", cat: "Home", size: "180 gal", loc: "ECR, Chennai" },
  { title: "Office Aquarium Project", cat: "Office", size: "500 gal", loc: "OMR, Chennai" },
  { title: "Custom Aquascape", cat: "Aquascaping", size: "60 gal", loc: "Nungambakkam, Chennai" },
  { title: "Commercial Aquarium Installation", cat: "Commercial", size: "2,000 gal", loc: "T. Nagar, Chennai" },
  { title: "Freshwater Aquarium Setup", cat: "Home", size: "120 gal", loc: "Anna Nagar, Chennai" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sai Aquatics | Aquarium Setup & Maintenance Services in Chennai" },
      {
        name: "description",
        content:
          "Sai Aquatics provides professional aquarium setup, aquascaping, tank cleaning, aquarium maintenance, fish supplies and custom aquatic solutions across Chennai.",
      },
      {
        name: "keywords",
        content:
          "aquarium setup chennai, aquarium maintenance chennai, aquascaping chennai, tank cleaning chennai, custom aquarium chennai, aquarium services chennai, fish tanks chennai, marine aquarium chennai, sai aquatics chennai",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Sai Aquatics" },
      { property: "og:title", content: "Sai Aquatics | Aquarium Setup & Maintenance Services in Chennai" },
      {
        property: "og:description",
        content:
          "Sai Aquatics provides professional aquarium setup, aquascaping, tank cleaning, aquarium maintenance, fish supplies and custom aquatic solutions across Chennai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Sai Aquatics" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sai Aquatics | Aquarium Setup & Maintenance Services in Chennai" },
      {
        name: "twitter:description",
        content: "Sai Aquatics provides professional aquarium setup, aquascaping, tank cleaning, aquarium maintenance, fish supplies and custom aquatic solutions across Chennai.",
      },
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
            "Sai Aquatics provides professional aquarium setup, aquascaping, tank cleaning, aquarium maintenance, fish supplies and custom aquatic solutions across Chennai.",
          url: SITE_URL,
          image: OG_IMAGE,
          priceRange: "₹₹₹",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "TN",
            addressCountry: "IN",
          },
          areaServed: "Chennai",
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
          areaServed: "Chennai",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Aquarium Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Aquarium Setup" },
              },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aquascaping" } },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Aquarium Maintenance" },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Tank Cleaning" },
              },
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
    <main className="relative min-h-screen text-[#0B1E36] overflow-x-hidden selection:bg-cyan-900 selection:text-cyan-50">
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
