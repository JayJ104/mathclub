import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import links from '../links.json';

import Community from '../images/community-cropped.jpeg';
import Learn1 from '../images/learn1.jpg';
import Learn2 from '../images/learn2.jpg';
import Enjoy1 from '../images/enjoy1.jpg';
import Enjoy2 from '../images/enjoy2.jpg';
import Advance1 from '../images/advance1.jpg';
import Advance2 from '../images/advance2.jpg';

export default function Home() {
  return(
    <div className={styles.page}>
      <div className={styles.welcome_box}>
        <Image src={Community} className={styles.big_pic} priority={true} as="image"></Image>
        <p className={styles.welcome_text}>a space for all things mathematics🤍</p>
      </div>
      <div className={styles.yellow_box}>
        <div className={styles.textbox}>
          <p className={styles.title}>learn.</p>
          <p className={styles.description}>from peers, professors and professionals.</p>
        </div>
        <div className={styles.image_box}>
          <Image src={Learn1} className={styles.first_pic}></Image>
          <Image src={Learn2} className={styles.second_pic}></Image>
        </div>
      </div>
      <div className={styles.white_box}>
        <div className={styles.textbox}>
          <p className={styles.title}>advance.</p>
          <p className={styles.description}>through technical workshops and networking events.</p>
        </div>
        <div className={styles.image_box}>
          <Image src={Advance1} className={styles.first_pic}></Image>
          <Image src={Advance2} className={styles.second_pic}></Image>
        </div>
      </div>
      <div className={styles.yellow_box}>
      <div className={styles.textbox}>
          <p className={styles.title}>enjoy.</p>
          <p className={styles.description}>participating in a supportive community.</p>
        </div>
        <div className={styles.image_box}>
          <Image src={Enjoy1} className={styles.first_pic}></Image>
          <Image src={Enjoy2} className={styles.second_pic}></Image>
        </div>
      </div>
      <div className={styles.math_box}>
      <div className={styles.textbox}>
          <p className={styles.title}>math.</p>
          <p className={styles.description}>open to all backgrounds and majors.</p>
        </div>
        <div className={styles.buttons}>
            <a href={links["aggieLife"]} target='_blank'><button>Join Us</button></a>
            <a href={links["menteeForm"]} target='_blank'><button>Peer Mentorship Program</button></a>
            <a href={links["guideDoc"]} target='_blank'><button>Undergraduate Guide</button></a>
            <a href={links["merchOrderForm"]} target='_blank'><button>Order Merch</button></a>
        </div>
      </div>
    </div>
  );
}