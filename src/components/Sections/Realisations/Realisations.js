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
          {/* <label htmlFor="filter">Flitrer par compétences&nbsp;:&nbsp;</label> */}
          <div className="filter-btn">
          {/* <select style={{display:'hidden'}}> */}
            {competences.map((el) => {
              const { id, competence } = el;
              return (
                  <FilterButton key={id} id="filter" competence={competence} />
              );
            })}
          </div>
          <div className="custom-select">
          {/* <label htmlFor="filter">Flitre&nbsp;:&nbsp;</label> */}
          <select>
            {competences.map((el) => {
              const { id, competence } = el;
              return ( <option key={id} id="filter" value={competence}>{competence}</option>
              );
            })}
            </select>
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
