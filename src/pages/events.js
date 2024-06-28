import Data from "../event-data.json";
import styles from "../styles/pages/events.module.scss";
import EventCard from "../components/eventcard";

export default function Events() {
  const fall22 = Data["Fall22"];
  const winter23 = Data["Winter23"];
  const spring23 = Data["Spring23"];
  const fall23 = Data["Fall23"];
  const winter24 = Data["Winter24"];
  const spring24 = Data["Spring24"];

  return (
    <div className={styles.page}>
      <div className={styles.event_year}>
        <p className={styles.year}>2023-24</p>
        <p className={styles.quarter_time}>
          Fall quarter meetings: Friday 5-6pm at MSB 1147
        </p>
        <div className={styles.quarters}>
          <div className={styles.qtr_titles}>
            <p className={styles.quarter_title}>fall 2023</p>
            <p className={styles.quarter_title}>winter 2024</p>
            <p className={styles.quarter_title}>spring 2024</p>
          </div>
          <div className={styles.qtr}>
            <EventCard event_list={fall23} />
            <EventCard event_list={winter24} />
            <EventCard event_list={spring24} />
          </div>
        </div>
      </div>

      <div className={styles.event_year}>
        <p className={styles.year}>2022-23</p>
        <div className={styles.quarters}>
          <div className={styles.qtr_titles}>
            <p className={styles.quarter_title}>fall 2022</p>
            <p className={styles.quarter_title}>winter 2023</p>
            <p className={styles.quarter_title}>spring 2023</p>
          </div>
          <div className={styles.qtr}>
            <EventCard event_list={fall22} />
            <EventCard event_list={winter23} />
            <EventCard event_list={spring23} />
          </div>
        </div>
      </div>
    </div>
  );
}
