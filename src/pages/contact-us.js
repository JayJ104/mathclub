import styles from '../styles/contact-us.module.scss';
import Image from 'next/image';


import Socials from '../components/socials';

import Pic from '../images/math.jpg';
import Map from '../images/map.jpg';

export default function Contact() {
    return(
        <div className={styles.page}>
            <div className={styles.contact_box}>
                <Image src={Pic} className={styles.image} alt='members'></Image>             
                <div className={styles.contacts}>
                    <div className={styles.textbox}>
                        <p className={styles.large_text}>Questions? Reach out!</p>
                        <Socials className={styles.socials}/>
                    </div>   
                </div>
            </div>
            <div className={styles.location_box}>
                <div className={styles.non_map}>
                    <div className={styles.location}>
                        <p className={styles.blue_text}>Meeting Location</p>
                        <p className={styles.text}>Mathematical Sciences Building (MSB) 1147,<br/>339 Crocker Ln,<br/>Davis</p>
                    </div>
                    <div className={styles.deets}>
                        <p className={styles.blue_text}>Hours<br/>Phone</p>
                        <p className={styles.text}>Monday-Friday: 9am-12, 1-4pm<br/>(530) 752 0827</p>
                    </div>
                </div>
                <a target='_blank' href='https://goo.gl/maps/y5TVTLNSFkETC6GP6' className={styles.map}>
                    <Image className={styles.map_pic} src={Map} alt='map'/>
                </a>
            </div>
        </div>
    )
}