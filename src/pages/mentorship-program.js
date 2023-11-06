import styles from '../styles/mentorship-program.module.scss';
import links from '../links.json';


export default function MentorP() {
    return(
        <div className={styles.page}>
            <h1 className={styles.title}>Peer Mentorship Program</h1>
            <p className={styles.description}>The Math Club at UC Davis brings you the peer mentorship program. Our team pioneered it in 2022. Some of the board members of the math club get together with students in groups and help them choose the suitable classes depending on their workload, guide them towards any decisions they’re making, and lead them to a better experience here at UC Davis. </p>
            <iframe src={links["menteeFormEmbed"]} className={styles.form}>Loading...</iframe>
        </div>
    );
}