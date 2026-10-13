import styles from "./SectionHeading.module.css";

type Props = { id: string; kicker: string; title: string };

export function SectionHeading({ id, kicker, title }: Props) {
  return (
    <div className={styles.wrap}>
      <p className={styles.kicker}>{kicker}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
    </div>
  );
}
