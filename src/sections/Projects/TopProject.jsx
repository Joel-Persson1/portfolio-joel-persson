import styles from "./ProjectsStyles.module.css";
import ProjectsCard from "../../common/ProjectCard";
import reactLogo from "../../assets/react-logo.png";

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
      </div>
    </section>
  );
}

export default TopProject;
