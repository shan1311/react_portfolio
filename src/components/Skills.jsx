import { motion } from "framer-motion";
import { Code2, Database, Globe, Wrench } from "lucide-react";
import { skills } from "../data/content";

const icons = {
  "Data Engineering": Code2,
  "Data & Storage": Database,
  "Web": Globe,
  "Tools": Wrench,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.p
          className="mono section__eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Toolbox
        </motion.p>
        <motion.h2
          className="section__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ delay: 0.05 }}
        >
          Skills
        </motion.h2>
        <div className="skills">
          {Object.entries(skills).map(([group, items], i) => {
            const Icon = icons[group] || Code2;
            return (
              <motion.div
                className="skills__group"
                key={group}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <h4 className="mono">
                  <Icon size={15} /> {group}
                </h4>
                <div className="skills__chips">
                  {items.map((s, j) => (
                    <span className="chip" key={j}>
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
