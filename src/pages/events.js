import EventCard from "../components/eventcard";

import { RiInstagramFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";

import links from "../links.json";
import data from "../event-data.json";
import styles from "../styles/pages/events.module.scss";

// const data = require("../event-data.json");

export default function Events() {
  const curYear = data.CurrentYear;
  // const curYearEvents = data.curYear;
  const years = Object.keys(data).filter(
    (x) => x !== "CurrentYear" && x !== curYear
  );

  return (
    <div className={styles.page}>
      <div className={styles.details_section}>
        <div>
          <a
            className={styles.detail}
            target="_blank"
            href={links["instagram"]}
          >
            <RiInstagramFill />
            <p>Follow us to hear about upcoming events!</p>
          </a>
        </div>

        <div className={styles.divider} />

        <div>
          <a
            className={styles.detail}
            target="_blank"
            href="https://goo.gl/maps/y5TVTLNSFkETC6GP6"
          >
            <TiLocation />
            <p>Mathematical Sciences Building 1147 </p>
          </a>
        </div>
      </div>

      <div className={styles.year}>
        <h2>{curYear}</h2>
        <EventCard yearData={data[curYear]} />
      </div>
      <div className={styles.divider} />
      <div className={styles.year}>
        <h1>Past Events</h1>
        {years.map((year, index) => (
          <div className={styles.year} key={index}>
            <h2>{year}</h2>
            <EventCard yearData={data[year]} />
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className={styles.year} key={i}>
            {year}
            
          </div> */
}
