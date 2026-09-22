import { motion } from "framer-motion";
import { Code2, Link2, Mail } from "lucide-react";
import { profile } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <motion.p
          className="mono section__eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Contact
        </motion.p>
        <motion.h2
          className="section__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ delay: 0.05 }}
        >
          Let's talk
        </motion.h2>
        <motion.p
          className="contact__text"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          Open to data engineering and backend roles. Reach out directly or find me on GitHub / LinkedIn.
        </motion.p>
        <motion.div
          className="hero__actions"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
        >
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <Mail size={15} /> {profile.email}
          </a>
        </motion.div>
        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Code2 size={16} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Link2 size={16} /> LinkedIn
          </a>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React + Vite.</p>
        </div>
      </footer>
    </section>
  );
}
