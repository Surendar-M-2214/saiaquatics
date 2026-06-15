import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-NzfGashX.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sai Aquatics" },
      {
        name: "description",
        content: "Sai Aquatics specializes in custom aquarium setups, aquascaping, aquarium maintenance, tank cleaning, and aquatic supplies. We create stunning aquatic environme"
      },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Sai Aquatics" },
      {
        property: "og:description",
        content: "Sai Aquatics specializes in custom aquarium setups, aquascaping, aquarium maintenance, tank cleaning, and aquatic supplies. We create stunning aquatic environme"
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Sai Aquatics" },
      {
        name: "twitter:description",
        content: "Sai Aquatics specializes in custom aquarium setups, aquascaping, aquarium maintenance, tank cleaning, and aquatic supplies. We create stunning aquatic environme"
      },
      {
        property: "og:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/4c7d80d2-e19b-496c-b68c-ccb045c5db60"
      },
      {
        name: "twitter:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/4c7d80d2-e19b-496c-b68c-ccb045c5db60"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$1 = () => import("./configurator-CHuIp41E.mjs");
const Route$1 = createFileRoute("/configurator")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DzO3v8v-.mjs");
const SITE_URL = "https://saiaquatics.lovable.app";
const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/4c7d80d2-e19b-496c-b68c-ccb045c5db60";
const portfolioItems = [{
  title: "Curved Wall Aquarium",
  cat: "Home",
  size: "300 gal",
  loc: "Bandra Residence"
}, {
  title: "Reef Showpiece",
  cat: "Home",
  size: "180 gal",
  loc: "Juhu Villa"
}, {
  title: "Reception Centerpiece",
  cat: "Office",
  size: "500 gal",
  loc: "BKC HQ"
}, {
  title: "Iwagumi Nature Scape",
  cat: "Aquascaping",
  size: "60 gal",
  loc: "Studio Build"
}, {
  title: "Lobby Cylinder",
  cat: "Commercial",
  size: "2,000 gal",
  loc: "5★ Hotel"
}, {
  title: "Discus Dining Tank",
  cat: "Home",
  size: "120 gal",
  loc: "Powai Penthouse"
}];
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Sai Aquatics — Premium Aquarium Setup & Maintenance in Mumbai"
    }, {
      name: "description",
      content: "Bespoke aquarium installations, aquascaping and white-glove maintenance for homes, offices and commercial spaces in Mumbai. 12+ years, 500+ installs."
    }, {
      name: "keywords",
      content: "aquarium setup mumbai, custom aquarium, aquascaping, reef tank, aquarium maintenance, commercial aquarium, marine aquarium installation"
    }, {
      name: "robots",
      content: "index, follow"
    }, {
      name: "author",
      content: "Sai Aquatics"
    }, {
      property: "og:title",
      content: "Sai Aquatics — Premium Aquariums in Mumbai"
    }, {
      property: "og:description",
      content: "Custom aquarium installations, aquascaping and maintenance. Living art, engineered to last."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: SITE_URL
    }, {
      property: "og:site_name",
      content: "Sai Aquatics"
    }, {
      property: "og:image",
      content: OG_IMAGE
    }, {
      property: "og:image:width",
      content: "1200"
    }, {
      property: "og:image:height",
      content: "630"
    }, {
      property: "og:locale",
      content: "en_IN"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Sai Aquatics — Premium Aquariums"
    }, {
      name: "twitter:description",
      content: "Custom aquarium installations, aquascaping and maintenance in Mumbai."
    }, {
      name: "twitter:image",
      content: OG_IMAGE
    }],
    links: [{
      rel: "canonical",
      href: SITE_URL
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": SITE_URL,
        name: "Sai Aquatics",
        description: "Premium aquarium setup, aquascaping and maintenance for residential and commercial spaces in Mumbai.",
        url: SITE_URL,
        image: OG_IMAGE,
        priceRange: "₹₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "MH",
          addressCountry: "IN"
        },
        areaServed: "Mumbai",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "120"
        }
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: SITE_URL,
        name: "Sai Aquatics"
      })
    }, {
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
            creator: {
              "@type": "Organization",
              name: "Sai Aquatics"
            },
            locationCreated: p.loc
          }
        }))
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Aquarium Setup & Maintenance",
        provider: {
          "@type": "LocalBusiness",
          name: "Sai Aquatics"
        },
        areaServed: "Mumbai",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Aquarium Services",
          itemListElement: [{
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Aquarium Installation"
            }
          }, {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aquascaping"
            }
          }, {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aquarium Maintenance"
            }
          }, {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Marine & Reef Tanks"
            }
          }, {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Aquariums"
            }
          }]
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ConfiguratorRoute = Route$1.update({
  id: "/configurator",
  path: "/configurator",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  ConfiguratorRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
