import styles from "../styles/components/socials.module.scss";
import links from "../links.json";

import { RiInstagramFill } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";

const data = [
  { platform: "discord", icon: <BsDiscord /> },
  { platform: "instagram", icon: <RiInstagramFill /> },
  { platform: "facebook", icon: <BiLogoFacebookCircle /> },
  { platform: "email", icon: <TbMailFilled /> },
];

export default function Socials() {
  return (
    <div className={styles.socials}>
      {data.map((sm, index) => (
        <a target="_blank" href={links[sm.platform]} key={index}>
          {sm.icon}
        </a>
      ))}
    </div>
  );
}
