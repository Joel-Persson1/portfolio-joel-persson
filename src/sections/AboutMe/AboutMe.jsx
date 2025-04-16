import styles from "./AboutMeStyles.module.css";

function AboutMe() {
  return (
    <section id="AboutMe" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>

      <div className={styles.textContainer}>
        <p>
          Hi! I’m a frontend developer with a strong interest in building
          functional and interactive web applications. I’m currently studying at
          JENSEN Yrkeshögskola in Malmö, where I focus on React, JavaScript, and
          modern web technologies.
        </p>
        <p>
          Over the past months, I’ve worked on several projects that have helped
          me develop my skills in both frontend and backend development. I enjoy
          solving complex problems and finding efficient solutions, whether it’s
          through writing clean code or structuring an entire app from scratch.
          I'm especially drawn to the logic and architecture behind
          applications.
        </p>
        <p>
          Right now, I’m looking for an <strong>internship</strong> where I can
          grow as a developer, contribute to real projects, and continue to
          challenge myself. I'm eager to join a team where learning and
          collaboration are key, and where I can put my passion for coding into
          action.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
