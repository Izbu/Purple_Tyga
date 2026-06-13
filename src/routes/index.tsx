import { createFileRoute } from "@tanstack/react-router";
import logo from "../assets/tyga logo.svg";
import { IntroLoader } from "@/components/IntroLoader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Socials } from "@/components/Socials";
import { Spotify } from "@/components/Spotify";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LiveIndicator } from "@/components/LiveIndicator";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "icon", href: logo }],
    meta: [
      { title: "Purple Tyga" },
      { name: "description", content: "Cinematic streaming universe of PurpleTyga. GTA RP, stream highlights, and the official creator brand." },
      { property: "og:title", content: "PURPLETYGA — Enter The City" },
      { property: "og:description", content: "Cinematic streaming universe of PurpleTyga. GTA RP, stream highlights, and the official creator brand." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      <IntroLoader />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Spotify />
        <Socials />
        <Contact />
      </main>
      <Footer />
      <LiveIndicator />
    </div>
  );
}
