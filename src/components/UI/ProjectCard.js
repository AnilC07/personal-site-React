import "./ProjectCard.css";

const ProjectCard = ({ id, image, titre, desc, lien, tags }) => {
  return (
    <div key={id} className="card">
      <div className="img-container">
        <img src={image} alt={titre} />
      </div>
      <div className="card-text-content">
        <div className="card-header">
          <h3>{titre}</h3>
        </div>
        <p>{desc}</p>

        <div className="tags">
          <p>
            Tags&nbsp;:&nbsp;
            {tags.length > 1 ? (
              tags.map((tag, idx) => {
                return (
                  <span className="tag" key={idx}>
                    #{tags[idx]}
                  </span>
                );
              })
            ) : (
              <span className="tag"> #{tags}</span>
            )}
          </p>
        </div>
      </div>
      <a href={lien}>
        <div className="link">Voir le projet</div>
      </a>
    </div>
  );
};

export default ProjectCard;
