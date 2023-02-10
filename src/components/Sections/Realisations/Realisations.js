import SectionHeading from "../../SectionHeading";
import FilterButton from "../../UI/FilterButton";

import { competences, projets } from "../../../data";

import "./Realisations.css";
import ProjectCard from "../../UI/ProjectCard";

const Realisations = () => {
  return (
    <section id="realisations">
      <SectionHeading>Réalisations</SectionHeading>
      <div className="projects-container">
        <div className="filter">
          <p>Flitrer par compétences : </p>
          <div className="filter-btn">
            {competences.map((el) => {
              const { id, competence } = el;
              return (
                  <FilterButton key={id} competence={competence} />
              );
            })}
          </div>
        </div>
        <div className="projects">
          {projets.map((projet) => {
            return <ProjectCard key={projet.id} {...projet} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Realisations;
