import Link from "next/link";
import Image from "next/image";
import links from "../links.json";

import styles from "../styles/components/navbar.module.scss";

const navlinks = [
  { name: "Home", url: "" },
  { name: "Events", url: "events" },
  { name: "About", url: "team" },
];

export default function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="logo" fill={true}></Image>
      </div>
      <div className={styles.content}>
        <Link href="/" className={styles.clubname}>
          Math Club <span>@UCD</span>
        </Link>
        <div className={styles.links}>
          {navlinks.map((navlink, index) => {
            return (
              <Link
                href={`/${navlink.url}`}
                className={styles.link}
                key={index}
              >
                {navlink.name}
              </Link>
            );
          })}
          <a
            target="_blank"
            href={links["aggieLife"]}
            className={styles.join_button}
          >
            <button>Join Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}
