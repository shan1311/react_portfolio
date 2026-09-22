import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="work" className="section">
      <div className="container">
        <motion.p
          className="mono section__eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Experience
        </motion.p>
        <motion.h2
          className="section__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ delay: 0.05 }}
        >
          Where I've worked
        </motion.h2>

        <div className="timeline">
          {experience.map((job, i) => (
            <motion.article
              className="job"
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="job__icon">
                <Briefcase size={18} />
              </div>
              <div className="job__body">
                <div className="job__header">
                  <h3>{job.role}</h3>
                  <span className="job__company">{job.company}</span>
                </div>
                <div className="job__meta">
                  <span>
                    <Calendar size={14} /> {job.period}
                  </span>
                  <span>
                    <MapPin size={14} /> {job.location}
                  </span>
                </div>
                <ul className="job__bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="case__stack">
                  {job.stack.map((s, j) => (
                    <span className="chip" key={j}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
