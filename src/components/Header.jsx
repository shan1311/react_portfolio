import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "../data/content";

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          shan<span className="dot">.</span>dev
        </a>
        <nav className="header__nav">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noopener noreferrer" download>
          <Download size={15} /> Resume
        </a>
      </div>
    </motion.header>
  );
}
