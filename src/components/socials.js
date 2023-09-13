import styles from './socials.module.scss';
import links from '../links.json';

import { RxDiscordLogo, RxInstagramLogo } from 'react-icons/rx';
import {LiaFacebook} from 'react-icons/lia';
import {MdOutlineEmail} from 'react-icons/md';

export default function Socials() {
    return (
        <div className={styles.socials}>
                        <a className={styles.a_link} target='_blank' href={links["discord"]}><RxDiscordLogo className={styles.logo}/></a>
                        <a className={styles.a_link} target='_blank' href={links["instagram"]}><RxInstagramLogo className={styles.logo}/></a>
                        <a className={styles.a_link} target='_blank' href={links["facebook"]}><LiaFacebook className={styles.logo}/></a>
                        <a className={styles.a_link} target='_blank' href={links["email"]}><MdOutlineEmail className={styles.logo}/></a>
                    </div> 
    );
}