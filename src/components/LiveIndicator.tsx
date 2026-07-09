import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import { useEffect, useState } from "react";

export function LiveIndicator() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/live");
        const data = await res.json();
        setIsLive(data.isLive);
      } catch {
        setIsLive(false);
      }
    }

    check();
    const interval = setInterval(check, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.a
      href="https://www.youtube.com/@PurpleTyga/live"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-primary/40 bg-black/70 px-4 py-2.5 backdrop-blur-xl shadow-[0_0_30px_rgba(166,32,208,0.4)] transition-all hover:scale-105 hover:border-primary"
    >
      <span className="relative flex h-2.5 w-2.5">
        {isLive && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            isLive ? "bg-red-500 shadow-[0_0_10px_red]" : "bg-primary-glow shadow-[0_0_10px_#a620d0]"
          }`}
        />
      </span>
      <Radio size={14} className="text-white/80" />
      <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-white">
        {isLive ? "Live Now — Watch" : "Offline — New Content Soon"}
      </span>
    </motion.a>
  );
}
