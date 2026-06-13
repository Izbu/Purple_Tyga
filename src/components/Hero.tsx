import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, MessageCircle } from "lucide-react";
import hero1 from "@/assets/tyga hero 1.svg";
import hero2 from "@/assets/tyga hero 2.svg";
import hero3 from "@/assets/tyga hero 3.svg";
import hero4 from "@/assets/tyga hero 4.svg";
import hero5 from "@/assets/tyga hero 5.svg";
import hero6 from "@/assets/tyga hero 6.svg";
import hero7 from "@/assets/tyga hero 7.svg";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    const el = ref.current;
    el?.addEventListener("mousemove", onMove);
    return () => el?.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative grain scanline flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* Slideshow background */}
      <AnimatePresence mode="crossfade">
        <motion.div
          key={slide}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[slide]}
            alt="Hero"
            className="h-full w-full object-cover object-top opacity-90"
          />
        </motion.div>
      </AnimatePresence>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_black_90%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(166,32,208,0.18), transparent 60%)`,
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <span
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-primary-glow/60 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/40 bg-black/40 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
          </span>
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.4em] text-white/80">
            Straight from the Urban Jungle
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 1, ease: "easeOut" }}
          className="text-[14vw] sm:text-[10vw] md:text-[9rem] lg:text-[12rem] leading-[0.85] text-white text-glow-strong"
          style={{ fontFamily: '"Road Rage", sans-serif' }}
        >
          PURPLE
          <span className="block bg-gradient-to-b from-primary-glow via-primary to-primary/30 bg-clip-text text-transparent">
            TYGA
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://www.youtube.com/@PurpleTyga"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-sm bg-gradient-purple px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-white shadow-[0_0_30px_rgba(166,32,208,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(166,32,208,0.8)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Play size={14} fill="white" /> Watch Streams
            </span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
          </a>
          <a
            href="https://discord.gg/vAfpggXVn"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-sm border border-primary/60 bg-black/40 px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-white backdrop-blur transition-all hover:scale-105 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_40px_rgba(166,32,208,0.5)]"
          >
            <span className="flex items-center gap-3">
              <MessageCircle size={14} /> Join Discord
            </span>
          </a>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === slide ? "w-6 bg-primary-glow" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
