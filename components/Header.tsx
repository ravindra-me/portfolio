import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import styles from "./Header.module.css";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#main" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            RS
          </span>
          {profile.name}
        </a>
        <nav aria-label="Sections" className={styles.navWrap}>
          <ul className={styles.nav}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.social}>
          <a href={profile.links.github.href} className={styles.icon} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.links.linkedin.href} className={styles.icon} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
