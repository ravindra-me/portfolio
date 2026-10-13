import { profile } from "@/data/portfolio";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`container ${styles.hero}`} aria-labelledby="hero-title">
      <p className={styles.kicker}>
        {profile.role} · {profile.location}
      </p>
      <h1 id="hero-title" className={styles.title}>
        {profile.headline}
      </h1>
      <p className={styles.intro}>{profile.intro}</p>
      <div className={styles.actions}>
        <a href={`mailto:${profile.email}`} className={styles.primary}>
          Email me
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
        <a href={profile.links.linkedin.href} className={styles.secondary} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.links.github.href} className={styles.secondary} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}
