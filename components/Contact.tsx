import { profile } from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import styles from "./Contact.module.css";

const links = [
  { href: `mailto:${profile.email}`, label: profile.email, name: "Email", Icon: MailIcon, external: false },
  { href: profile.links.linkedin.href, label: profile.links.linkedin.label, name: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: profile.links.github.href, label: profile.links.github.label, name: "GitHub", Icon: GitHubIcon, external: true },
];

export function Contact() {
  return (
    <section id="contact" className={`container ${styles.section}`} aria-labelledby="contact-title">
      <div className={styles.panel}>
        <div className={styles.text}>
          <p className={styles.kicker}>Let&apos;s work together</p>
          <h2 id="contact-title" className={styles.title}>
            {profile.availability}
          </h2>
          <p className={styles.sub}>{profile.workMode}</p>
        </div>
        <ul className={styles.links}>
          {links.map(({ href, label, name, Icon, external }) => (
            <li key={name}>
              <a href={href} className={styles.link} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                <span className={styles.linkIcon}>
                  <Icon size={18} />
                </span>
                <span className={styles.linkText}>
                  <span className={styles.linkName}>{name}</span>
                  <span className={styles.linkLabel}>{label}</span>
                </span>
                <ArrowUpRightIcon size={16} className={styles.arrow} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed and built with Next.js and TypeScript.
        </p>
        <div className={styles.footerIcons}>
          <a href={profile.links.github.href} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon size={18} />
          </a>
          <a href={profile.links.linkedin.href} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon size={18} />
          </a>
        </div>
      </footer>
    </section>
  );
}
