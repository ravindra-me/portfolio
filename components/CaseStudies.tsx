import { caseStudies, type CaseStudy } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import styles from "./CaseStudies.module.css";

function Card({ study, index }: { study: CaseStudy; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  return (
    <article className={styles.card} aria-labelledby={`cs-${study.id}`}>
      <div className={styles.side}>
        <p className={styles.meta}>
          {number} · {study.company} · {study.period}
        </p>
        <h3 id={`cs-${study.id}`} className={styles.title}>
          {study.title}
        </h3>
      </div>
      <div className={styles.body}>
        {study.problem && (
          <p>
            <strong>Problem.</strong> {study.problem}
          </p>
        )}
        <p>
          <strong>What I did.</strong> {study.action}
        </p>
        <p>
          <strong>Result.</strong> {study.result}
        </p>
        <ul className={styles.tags} aria-label="Technologies">
          {study.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className={`container ${styles.section}`} aria-labelledby="work-title">
      <SectionHeading id="work-title" kicker="Selected work" title="Case studies" />
      <div className={styles.list}>
        {caseStudies.map((study, i) => (
          <Card key={study.id} study={study} index={i} />
        ))}
      </div>
    </section>
  );
}
