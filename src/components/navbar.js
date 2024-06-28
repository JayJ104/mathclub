import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo-modified.png";
import links from "../links.json";

import styles from "./navbar.module.scss";

const navlinks = [
  { name: "Home", url: "" },
  { name: "Events", url: "events" },
  { name: "Our Team", url: "our-team" },
  { name: "Contact Us", url: "contact-us" },
];

export default function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_left_container}>
        <Image src={Logo} href="" className={styles.logo} alt="logo"></Image>
        <Link href="" className={styles.navbar_logo}>
          Math Club at UC Davis
        </Link>
      </div>
      <div className={styles.navbar_right_container}>
        <div className={styles.navbar_links}>
          {navlinks.map((navlink, index) => {
            return (
              <Link
                href={`/${navlink.url}`}
                className={styles.nav_link}
                key={index}
              >
                {navlink.name}
              </Link>
            );
          })}
        </div>
        <a target="_blank" href={links["aggieLife"]}>
          <button className={styles.join_button}>Join Us</button>
        </a>
      </div>
    </div>
  );
}
