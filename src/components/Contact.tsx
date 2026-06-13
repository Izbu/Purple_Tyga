import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(166,32,208,0.2),_transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-display text-[10px] uppercase tracking-[0.5em] text-primary-glow">
              / 03 — Get In Touch
            </div>
            <h2 className="mt-4 text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-tight text-white" style={{ fontFamily: '"Road Rage", sans-serif' }}>
              Let's Build{" "}
              <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent text-glow">
                Something
              </span>{" "}
              Legendary.
            </h2>

            <a
              href="https://discord.gg/vAfpggXVn"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-sm border border-primary/40 bg-primary/10 px-6 py-3 font-display text-xs uppercase tracking-[0.3em] text-white transition-all hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(166,32,208,0.5)]"
            >
              <MessageCircle size={14} /> Join Discord Instead
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              const mailto = `mailto:purpletyga97@gmail.com?subject=Message from ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`;
              const a = document.createElement("a");
              a.href = mailto;
              a.click();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="relative overflow-hidden rounded-sm border border-primary/30 bg-card/40 p-8 backdrop-blur-sm shadow-[0_0_40px_rgba(166,32,208,0.15)]"
          >
            <div className="space-y-5">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@domain.com" />
              <Field label="Message" name="message" textarea placeholder="Tell me about your project..." />

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-sm bg-gradient-purple px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-white shadow-[0_0_30px_rgba(166,32,208,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(166,32,208,0.8)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {sent ? "Message Sent" : "Send Message"} <Send size={14} />
                </span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-display text-[10px] uppercase tracking-[0.3em] text-primary-glow">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder}
          className="mt-2 w-full resize-none rounded-sm border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-primary focus:shadow-[0_0_20px_rgba(166,32,208,0.3)]"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="mt-2 w-full rounded-sm border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-primary focus:shadow-[0_0_20px_rgba(166,32,208,0.3)]"
        />
      )}
    </label>
  );
}