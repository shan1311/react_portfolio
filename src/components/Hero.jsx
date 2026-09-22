import { motion } from "framer-motion";
import { ArrowRight, Mail, User } from "lucide-react";
import { profile } from "../data/content";
import RotatingText from "./RotatingText.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const rotatingWords = ["software developer", "Data engineer"];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p className="mono hero__eyebrow" variants={item}>
            
          </motion.p>
          <motion.h1 className="hero__title" variants={item}>
            Hi, I'm {profile.name.split(" ")[0]}.
            <br />
             <RotatingText words={rotatingWords} />
          </motion.h1>
          <motion.p className="hero__subtext" variants={item}>
            {profile.subtext}
          </motion.p>
          <motion.div className="hero__actions" variants={item}>
            <a className="btn btn--primary" href="#work">
              See my work <ArrowRight size={15} />
            </a>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
              <Mail size={15} /> Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__photo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="hero__photo-glow"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero__photo-frame"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={profile.photo}
              alt={profile.name}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="hero__photo-fallback">
              <User size={40} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}