import { profile } from "@/data/portfolio";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MapPinIcon } from "./Icons";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.wrap} aria-labelledby="hero-title">
      <div className={`container ${styles.hero}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <span className={styles.status} aria-hidden="true" />
            {profile.role}
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
            <span className={styles.loc}>
              <MapPinIcon size={15} />
              {profile.location}
            </span>
          </p>
          <h1 id="hero-title" className={styles.title}>
            I build <span className={styles.highlight}>fast, accessible</span> web apps — and the design systems behind
            them.
          </h1>
          <p className={styles.intro}>{profile.intro}</p>
          <div className={styles.actions}>
            <a href={`mailto:${profile.email}`} className={styles.primary}>
              Email me
              <ArrowRightIcon size={16} />
            </a>
            <a href={profile.links.linkedin.href} className={styles.secondary} target="_blank" rel="noreferrer">
              <LinkedInIcon size={17} />
              LinkedIn
            </a>
            <a href={profile.links.github.href} className={styles.secondary} target="_blank" rel="noreferrer">
              <GitHubIcon size={17} />
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.window}>
            <div className={styles.bar}>
              <span />
              <span />
              <span />
              <p>ravindra.ts</p>
            </div>
            <pre className={styles.code}>
              <code>
                <span className={styles.k}>const</span> <span className={styles.v}>engineer</span> = {"{"}
                {"\n"}  name: <span className={styles.s}>&quot;{profile.name}&quot;</span>,
                {"\n"}  stack: [<span className={styles.s}>&quot;React&quot;</span>, <span className={styles.s}>&quot;Next.js&quot;</span>, <span className={styles.s}>&quot;TS&quot;</span>],
                {"\n"}  ships: <span className={styles.s}>&quot;design systems&quot;</span>,
                {"\n"}  lcp: <span className={styles.n}>-0.40</span>,
                {"\n"}  a11y: <span className={styles.n}>95</span>,
                {"\n"}  clients: <span className={styles.n}>500</span>,
                {"\n"}{"}"};
                {"\n"}
                {"\n"}<span className={styles.c}>{"// open to the next challenge"}</span>
                {"\n"}engineer.<span className={styles.f}>hire</span>();<span className={styles.cursor} />
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
