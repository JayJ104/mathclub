import Image from "next/image";
import TeamData from "../team.json";
import styles from "../styles/pages/team.module.scss";

export default function Team() {
  const officerList = TeamData["Current_Officers"];

  return (
    <div className={styles.page}>
      <h1>Meet Our Team</h1>
      <div className={styles.content}>
        {officerList.map((officer, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.photo}>
                <Image
                  src={`/images/officers/${officer.photo_filename}`}
                  alt="picture of an officer"
                  fill={true}
                />
              </div>
              <h2>{officer.name}</h2>
              <p>
                <b>
                  <em>{officer.position}</em>
                </b>
              </p>
              <p>{officer.discord}</p>
              <p>{officer.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
