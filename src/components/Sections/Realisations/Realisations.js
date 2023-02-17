import SectionHeading from "../../SectionHeading";
import FilterButton from "../../UI/FilterButton";

import { competences, projets } from "../../../data";

import "./Realisations.css";
import ProjectCard from "../../UI/ProjectCard";
import useCtx from "../../../Ctx";
import { useEffect, useState } from "react";

const Realisations = () => {
  // const context = useCtx();
  const [filteredProject, setFilteredProject] = useState(projets);
  const [selectedCompetence, setSelectedCompetence] = useState([])

  /**
   * Fonction qui filtre les projets suivant les compétence selectionnées
   * @param {*} e 
   */
  const filter = (e) => {
    // Récupere la valeur correspondante au boutton clické
    const selectedTag = e.target.value;

    // Verifier si la valeur clické et deja présente
    if(selectedCompetence.includes(selectedTag)){
    // Si oui, on la retire de la variable d'état
      setSelectedCompetence(prev=>prev.filter(el=>el !== selectedTag))
  }else{
    // Sinon, on rajoute la nouvelle valeur
    // Injecte la valeur du boutton selectionée dans une variable d'état
    setSelectedCompetence((prev)=>[...prev, selectedTag])
  }

  // Filtre les projets à affichés
  // Verifie la valeur du boutton clické
    if(selectedTag === 'Tous les projets' || selectedTag === []){
      // Si oui, inject tous les projets dans la variable d'état. État par défault.
      setFilteredProject(projets)
    }else{
      // Si différent de 'Tous les projets', filtre les projets ayant le tag associé à la valeur du boutton
    const projetFiltrer = projets.filter((el) => el.tags.join(" ").includes(selectedTag));
    setFilteredProject(projetFiltrer)}
  };

  useEffect(()=>{

  },[filteredProject,selectedCompetence])

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
                <FilterButton
                  key={id}
                  id="filter"
                  competence={competence}
                  filterOnClick={filter}
                  selected={selectedCompetence}
                />
              );
            })}
          </div>
          <div className="custom-select">
            {/* <label htmlFor="filter">Flitre&nbsp;:&nbsp;</label> */}
            <select>
              {competences.map((el) => {
                const { id, competence } = el;
                return (
                  <option key={id} id="filter" value={competence}>
                    {competence}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="projects">
          {filteredProject.map((projet) => {
            return <ProjectCard key={projet.id} {...projet} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Realisations;
