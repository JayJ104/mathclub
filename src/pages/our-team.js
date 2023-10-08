import { ST } from 'next/dist/shared/lib/utils';
import TeamData from '../team.json';
import styles from './our-team.module.scss';
import Image from 'next/image';

export default function Team() {
    const officerList = TeamData['2023-24'];
    return(
        <div className={styles.page}>
            <p className={styles.title}>Meet Our Team</p>
            <div className={styles.officer_cards}>
                {officerList.map( (officer, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <div className={styles.photos}>  
                                <Image src={officer.photo_src} alt='officer' width={100} height={100} layout="responsive"/>
                            </div>            
                            <p className={styles.names}>{officer.name}</p>
                            <p className={styles.positions}>{officer.position}</p>
                            <p className={styles.intro}>{officer.intro}</p>
                        </div>
                    )
                })}
            </div>
        </div> 
    );
}
