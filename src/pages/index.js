import styles from "../styles/pages/index.module.scss";
import Image from "next/image";
import links from "../links.json";

const data = [
  {
    title: "learn.",
    desc: "from peers, professors and professionals.",
    img1: "/images/learn1.jpg",
    img2: "/images/learn2.jpg",
  },
  {
    title: "advance.",
    desc: "through workshops and networking events.",
    img1: "/images/advance1.jpg",
    img2: "/images/advance2.jpg",
  },
  {
    title: "enjoy.",
    desc: "participating in a supportive community.",
    img1: "/images/enjoy1.jpg",
    img2: "/images/enjoy2.jpg",
  },
];

export default function Home() {
  const buttons1 = (
    <div className={styles.third1}>
      <a href={links["aggieLife"]} target="_blank">
        <button>Join Us</button>
      </a>
      <a href={links["guideDoc"]} target="_blank">
        <button>Undergraduate Guide</button>
      </a>
    </div>
  );

  const middleText = (title, desc) => (
    <div className={styles.third2}>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
    </div>
  );

  const buttons2 = (
    <div className={styles.third3}>
      <a href={links["menteeForm"]} target="_blank">
        <button>Peer Mentor Program</button>
      </a>
      <a href={links["merchOrderForm"]} target="_blank">
        <button>Order Merch</button>
      </a>
    </div>
  );

  return (
    <div className={styles.page}>
      <div className={styles.welcome_img}>
        <Image src="/images/image.png" alt="members" fill={true}></Image>
        <p>a space for all things mathematics🤍</p>
      </div>
      {data.map((card, index) => (
        <div className={styles.box} key={index}>
          <div className={styles.image_container}>
            <Image src={card.img1} alt="meeting" fill={true}></Image>
          </div>
          {middleText(card.title, card.desc)}
          <div className={styles.image_container}>
            <Image src={card.img2} alt="lecture" fill={true}></Image>
          </div>
        </div>
      ))}
      <div className={styles.math_box}>
        {buttons1}
        {middleText("math.", "open to all backgrounds and majors.")}
        {buttons2}
      </div>
      <div className={styles.math_box_mobile}>
        {middleText("math.", "open to all backgrounds and majors.")}
        {buttons1}
        {buttons2}
      </div>
    </div>
  );
}
