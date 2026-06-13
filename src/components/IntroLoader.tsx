import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import introVideo from "../assets/tyga intro vid.mp4";
import logo from "../assets/tyga logo.svg";

export function IntroLoader() {
  const [show, setShow] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function skip() {
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] overflow-hidden bg-black"
        >
          <video
            ref={videoRef}
            src={introVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={skip}
            className="h-full w-full object-cover"
          />

          {/* Skip button */}
          <motion.button
            onClick={skip}
            className="absolute bottom-1 right-20 flex h-20 w-20 items-center justify-center rounded-full bg-black shadow-[0_0_20px_rgba(166,32,208,0.3)] hover:shadow-[0_0_30px_rgba(166,32,208,0.7)] transition-all duration-300"
            aria-label="Skip intro"
          >
            <img src={logo} alt="Skip" className="h-14 w-14 object-contain" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
