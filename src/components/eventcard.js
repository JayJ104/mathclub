import styles from "../styles/components/eventcard.module.scss";

export default function EventCard({ yearData }) {
  console.log(typeof yearData);
  return (
    <div className={styles.card}>
      {Object.keys(yearData).map((qtr, index) => {
        const events = yearData[qtr];
        return (
          <div className={styles.quarter} key={index}>
            <h3>{qtr}</h3>
            {events.length ? (
              events.map((event, key) => (
                <div className={styles.event} key={key}>
                  {event}
                </div>
              ))
            ) : (
              <p>Currently cooking up events...</p>
            )}
          </div>
        );
      })}
    </div>
  );
  // if (event_list.length === 0) {
  //   return (
  //     <div className={styles.card}>
  //       <p className={styles.empty_message}>
  //         Still cooking up events for this quarter!
  //       </p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className={styles.card}>
  //       {event_list.map((event, index) => {
  //         return (
  //           <p className={styles.details} key={index}>
  //             Week {event.week}: {event.title}
  //           </p>
  //         );
  //       })}
  //     </div>
  //   );
  // }
}
