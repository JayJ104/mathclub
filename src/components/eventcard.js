import styles from './eventcard.module.scss';

export default function EventCard({event_list}) {
    if (event_list.length==0){
        return (
            <div className={styles.card}>
                <p className={styles.empty_message}>Still cooking up events for this quarter!</p>
            </div>
        )
    } else {
        return (
            <div className={styles.card}>
                {event_list.map((event, index)=>{
                    return (
                        <p className={styles.details} key={index}>Week {event.week}: {event.title}</p>
                    )
                })}
            </div>
        )
    }
}