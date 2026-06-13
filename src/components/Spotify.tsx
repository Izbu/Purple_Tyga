import { motion } from "framer-motion";
import tigerAsset from "../assets/tyga spotify bkg.svg";
import logo from "../assets/tyga logo.svg";

export function Spotify() {
  return (
    <section className="relative bg-black">
      {/* Image in natural flow — drives section height */}
      <img
        src={tigerAsset}
        alt="Tiger"
        className="w-full opacity-70"
      />

      {/* fades */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent" />


      {/* Player — centered over the image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6"
      >
        <div className="flex items-center justify-center gap-2 font-display text-[10px] uppercase tracking-[0.4em] text-primary-glow">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
          </span>
          Now Playing on Spotify
        </div>

        <div className="flex items-center gap-6">
          <div className="relative h-16 w-16 shrink-0">
            <div className="absolute inset-0 rounded-sm bg-gradient-purple blur-xl opacity-80" />
            <div className="relative flex h-full w-full items-center justify-center rounded-sm border border-primary/40 bg-gradient-to-br from-primary/60 via-purple-900 to-black">
              <img src={logo} alt="Purple Tyga" className="h-10 w-10 object-contain" />
            </div>
          </div>

          <div>
            <h3 className="font-display text-4xl font-black uppercase tracking-tight text-white text-glow drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Ride the Lightning
            </h3>
            <p className="mt-1 text-sm text-white/60">Warren Zeiders</p>
          </div>

          <div className="ml-6 flex h-10 items-end gap-1">
            {[0.2, 0.5, 0.3, 0.8, 0.6, 0.4, 0.7].map((d, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-primary to-primary-glow animate-equalizer"
                style={{ animationDelay: `${d}s`, height: `${20 + d * 60}%` }}
              />
            ))}
          </div>
        </div>

        <div className="w-72">
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-2/3 bg-gradient-purple shadow-[0_0_10px_#a620d0]" />
          </div>
          <div className="mt-2 flex justify-between font-display text-[10px] tracking-widest text-white/40">
            <span>01:24</span>
            <span>03:06</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
