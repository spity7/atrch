import Header from "@/components/Header";
import Footer from "@/components/Footer";

// FONTS
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/unna/400.css";
import "@fontsource/unna/700.css";

// CSS Styles
import "@/styles/clear.css";
import "@/styles/sm-clean.css";
import "@/styles/comman.css";
import "@/styles/globals.css";
import "@/styles/our-styles.css";

// Types
import type { Metadata } from "next";

import { MenuProvider } from "@/context/MenuContext";

// --------------

// Metadata of the website (used to inprove SEO of the website)
export const metadata: Metadata = {
  title: "Atrch",
  description: "Template by CocoBasic",
  keywords: ["HTML", "CSS", "Javascript", "Typescript", "React", "nextjs"],
  authors: [
    {
      name: "Cocobasic",
      url: "https://www.cocobasic.com/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="page-background">
        <MenuProvider>
          <div className="site-wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </MenuProvider>
      </body>
    </html>
  );
}
