import { skills } from "@/data/portfolio";
import { CodeIcon, DatabaseIcon, GaugeIcon, LayersIcon, SparkIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import styles from "./Skills.module.css";

const icons = [CodeIcon, DatabaseIcon, LayersIcon, GaugeIcon, SparkIcon];

export function Skills() {
  return (
    <section id="skills" className={`container ${styles.section}`} aria-labelledby="skills-title">
      <SectionHeading id="skills-title" kicker="Skills" title="Toolkit" />
      <div className={styles.grid}>
        {skills.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={group.name} className={styles.group}>
              <span className={styles.icon} aria-hidden="true">
                <Icon size={20} />
              </span>
              <h3 className={styles.name}>{group.name}</h3>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
