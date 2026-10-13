import { experience } from "@/data/portfolio";
import { BriefcaseIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className={`container ${styles.section}`} aria-labelledby="experience-title">
      <SectionHeading id="experience-title" kicker="Experience" title="Where I've worked" />
      <ol className={styles.list}>
        {experience.map((role) => (
          <li key={`${role.company}-${role.period}`} className={styles.row}>
            <span className={styles.dot} aria-hidden="true">
              <BriefcaseIcon size={15} />
            </span>
            <p className={styles.period}>{role.period}</p>
            <div className={styles.detail}>
              <h3 className={styles.role}>
                {role.title} · {role.company}
              </h3>
              <p className={styles.summary}>{role.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
