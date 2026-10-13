import { skills } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills" className={`container ${styles.section}`} aria-labelledby="skills-title">
      <SectionHeading id="skills-title" kicker="Skills" title="Toolkit" />
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.name} className={styles.group}>
            <h3 className={styles.name}>{group.name}</h3>
            <p className={styles.items}>{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
