import { motion } from "framer-motion";
import { Code2, ExternalLink, ImageOff } from "lucide-react";
import { projects } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.p
          className="mono section__eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Projects
        </motion.p>
        <motion.h2
          className="section__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ delay: 0.05 }}
        >
          Things I've built
        </motion.h2>
        <div className="grid">
          {projects.map((p, i) => (
            <motion.article
              className="card"
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="card__thumb">
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                <div className="card__thumb-fallback">
                  <ImageOff size={22} />
                  <span>Add {p.image.split("/").pop()}</span>
                </div>
              </div>
              <div className="card__content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="chip chip--muted">{p.tech}</span>
                <div className="card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Code2 size={15} /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={15} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
