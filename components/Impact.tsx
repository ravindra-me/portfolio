import { metrics } from "@/data/portfolio";
import styles from "./Impact.module.css";

export function Impact() {
  return (
    <section className={styles.band} aria-label="Impact">
      <dl className={`container ${styles.grid}`}>
        {metrics.map((m) => (
          <div key={m.value} className={styles.item}>
            <dt className={styles.label}>{m.label}</dt>
            <dd className={styles.value}>{m.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
