import styles from "./ProjectsStyles.module.css";
import ProjectsCard from "../../common/ProjectCard";
import reactLogo from "../../assets/react-logo.png";
import oasisLogo from "../../assets/the-wild-oasis-logo.png";
import oasisWebisteLogo from "../../assets/the-wild-oasis-webiste-logo.png";

function TopProject() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Top live Project</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard
          src={reactLogo}
          link="https://joel-persson1.github.io/fast-react-pizza/"
          h3="Fast-React-Pizza"
          p="Pizza ordering system"
        />
        <ProjectsCard
          src={oasisLogo}
          link="https://the-wild-oasis-bqn2.vercel.app/"
          h3="The Wild Oasis"
          p="Hotel management application"
        />
        <ProjectsCard
          src={oasisWebisteLogo}
          link="https://the-wild-oasis-website-demo-green.vercel.app/"
          h3="The Wild Oasis Website"
          p="Hotel Webiste"
        />
      </div>
    </section>
  );
}

export default TopProject;
