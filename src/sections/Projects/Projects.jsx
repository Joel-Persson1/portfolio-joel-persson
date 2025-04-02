import styles from "./ProjectsStyles.module.css";
import ProjectsCard from "../../common/ProjectCard";
import questionAndAnswer from "../../assets/question-and-answer.png";
import worldwise from "../../assets/worldwise.png";
import reactLogo from "../../assets/react-logo.png";
import popcorn from "../../assets/popcorn.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard
          src={questionAndAnswer}
          link="https://github.com/Joel-Persson1/Forum_Fullstack"
          h3="ThinkThank"
          p="Forum App"
        />
        <ProjectsCard
          src={worldwise}
          link="https://github.com/Joel-Persson1/worldwise"
          h3="Worldwise"
          p="Explore the World"
        />
        <ProjectsCard
          src={reactLogo}
          link="https://github.com/Joel-Persson1/fast-react-pizza"
          h3="Fast-React-Pizza"
          p="Pizza ordering system"
        />
        <ProjectsCard
          src={popcorn}
          link="https://github.com/Joel-Persson1/usePopcorn"
          h3="usePopcorn"
          p="Movie Review App"
        />
      </div>
    </section>
  );
}

export default Projects;
