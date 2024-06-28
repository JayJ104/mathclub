import styles from "../styles/components/footer.module.scss";
import Link from "next/link";
import Socials from "./socials";
import links from "../links.json";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer}>
        <div className={styles.footer_left}>
          <p className={styles.title}>Math Club at UC Davis</p>
          <Socials />
        </div>
        <div className={styles.footer_middle}>
          <p className={styles.title}>Join Us</p>
          <div className={styles.links}>
            <a
              className={styles.a_link}
              target="_blank"
              href={links["aggieLife"]}
            >
              Aggie Life
            </a>
            <a
              className={styles.a_link}
              target="_blank"
              href={links["feedbackForm"]}
            >
              Feedback Form
            </a>
          </div>
        </div>
        <div className={styles.footer_right}>
          <p className={styles.title}>Quick Links</p>
          <div className={styles.links}>
            <Link className={styles.a_link} href={links["guideDoc"]}>
              Undergraduate Guide
            </Link>
            <Link className={styles.a_link} href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
