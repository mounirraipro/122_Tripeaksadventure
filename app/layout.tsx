import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdSenseLoader from './components/AdSenseLoader';
import CookieConsentBanner from './components/CookieConsentBanner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tripeaks Adventure – Free Online Browser Game",
    template: "%s | Tripeaks Adventure",
  },
  description:
    "Play Tripeaks Adventure online free — Play Tripeaks Adventure free online — no download, no account needed. No download, no account needed.",
  keywords: [
    "Tripeaks Adventure",
    "Tripeaks Adventure online",
    "Tripeaks Adventure free",
    "free online game",
    "browser game",
    "casual game",
  ],
  authors: [{ name: "Tripeaks Adventure Team" }],
  creator: "Tripeaks Adventure",
  publisher: "Tripeaks Adventure",
  metadataBase: new URL("https://tripeaksadventure.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tripeaks Adventure",
    title: "Tripeaks Adventure – Free Online Browser Game",
    description:
      "Play Tripeaks Adventure free in your browser — Play Tripeaks Adventure free online — no download, no account needed.",
    url: "https://tripeaksadventure.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tripeaks Adventure – Free Online Browser Game",
    description:
      "Play Tripeaks Adventure free online — no download, no account needed. Play free online!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function getPublisherId() {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!raw) return '';
  return raw.startsWith('ca-pub-') ? raw : `ca-pub-${raw}`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = getPublisherId();

  return (
    <html lang="en">
        <head>
        <AdSenseLoader publisherId={publisherId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Tripeaks Adventure",
              url: "https://tripeaksadventure.com",
              description:
                "Play Tripeaks Adventure free online — no download, no account needed.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://tripeaksadventure.com/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tripeaks Adventure",
              url: "https://tripeaksadventure.com",
              logo: {
                "@type": "ImageObject",
                url: "https://tripeaksadventure.com/og-image.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://tripeaksadventure.com/contact",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
