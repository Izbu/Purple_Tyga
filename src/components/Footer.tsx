import { Youtube, Instagram, Twitch, Music2 } from "lucide-react";
import logo from "../assets/tyga logo.svg";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/20 bg-black py-12">
      {/* animated purple divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-glow to-transparent shadow-[0_0_20px_#a620d0]" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Purple Tyga"
              className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(166,32,208,0.7)]"
            />
            <span className="text-lg text-white" style={{ fontFamily: '"Road Rage", sans-serif', letterSpacing: '0.05em' }}>
              Purple Tyga
            </span>
          </div>

          <nav className="flex gap-6 font-display text-[10px] uppercase tracking-[0.3em] text-white/50">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#highlights" className="hover:text-white">Highlights</a>
            <a href="#socials" className="hover:text-white">Socials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="flex gap-3">
            {[
              { Icon: Youtube, url: "https://www.youtube.com/@PurpleTyga" },
              { Icon: Instagram, url: "https://www.instagram.com/cartelclicks/" },
              { Icon: Twitch, url: "https://www.twitch.tv/purpletygalive" },
              { Icon: Music2, url: "https://open.spotify.com/user/63dupxdjjke69qjlvm1ocyxfl?si=58817928af42432a" },
            ].map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 bg-card/40 text-white/70 transition-all hover:border-primary hover:text-white hover:shadow-[0_0_20px_rgba(166,32,208,0.5)]"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 font-display text-[10px] uppercase tracking-[0.3em] text-white/40 sm:flex-row">
          <div>© {new Date().getFullYear()} PurpleTyga. All Rights Reserved.</div>
          <div className="text-primary-glow">To God be the Glory</div>
        </div>
      </div>
    </footer>
  );
}
