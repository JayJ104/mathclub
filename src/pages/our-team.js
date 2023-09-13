import TeamData from '../team.json';
import styles from './our-team.module.scss';
import Image from 'next/image';
import pic from '../images/person.jpeg';

export default function Team() {
    const officerList = TeamData['2023-24'];
    return(
            <div className={styles.page}>
            {officerList.map( (officer, index) => {
                return (
                    <div className={styles.card} key={index}>    
                        <Image src={pic} className={styles.photos}/>                    
                        <p className={styles.names}>{officer.name}</p>
                        <p className={styles.positions}>{officer.position}</p>
                    </div>
                )
            })}
        </div> 
    );
}
