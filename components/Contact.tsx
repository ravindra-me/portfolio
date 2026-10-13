import { profile } from "@/data/portfolio";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={`container ${styles.section}`} aria-labelledby="contact-title">
      <div className={styles.panel}>
        <div className={styles.text}>
          <h2 id="contact-title" className={styles.title}>
            {profile.availability}
          </h2>
          <p className={styles.sub}>{profile.workMode}</p>
        </div>
        <ul className={styles.links}>
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <a href={profile.links.linkedin.href} target="_blank" rel="noreferrer">
              {profile.links.linkedin.label}
            </a>
          </li>
          <li>
            <a href={profile.links.github.href} target="_blank" rel="noreferrer">
              {profile.links.github.label}
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.footer}>
        © {new Date().getFullYear()} {profile.name}. Built with Next.js and TypeScript.
      </p>
    </section>
  );
}
