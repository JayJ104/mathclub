import styles from "../styles/components/footer.module.scss";
import Socials from "./socials";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <Socials />
      <p className={styles.credit}>Designed and developed by Anjali Jain</p>
    </div>
  );
}
