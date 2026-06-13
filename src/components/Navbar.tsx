import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/tyga logo.svg";

const links = [
  { label: "Home", href: "#home" },
  { label: "Highlights", href: "#highlights" },
  { label: "Socials", href: "#socials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-primary/20 bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(166,32,208,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-full bg-gradient-purple opacity-60 blur-md transition-opacity group-hover:opacity-90" />
            <img
              src={logo}
              alt="PurpleTyga logo"
              className="relative h-10 w-10 object-contain transition-shadow drop-shadow-[0_0_8px_rgba(166,32,208,0.7)] group-hover:drop-shadow-[0_0_14px_rgba(166,32,208,1)]"
            />
          </div>
          <span className="text-xl text-white" style={{ fontFamily: '"Road Rage", sans-serif', letterSpacing: '0.05em' }}>
            Purple Tyga
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-purple transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#a620d0]" />
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-primary/20 bg-black/90 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-xs uppercase tracking-[0.3em] text-white/80"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}