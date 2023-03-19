import classes from "./ProjectCard.module.css";

const ProjectCard = ({ id, image, titre, desc, lien, tags }) => {
  return (
    <div key={id} className={classes.card}>
      <div className={classes.card__img}>
        <img src={image} alt={titre} />
      </div>
      <div className={classes.card__text}>
        <div className={classes.card__header}>
          <h3>{titre}</h3>
        </div>
        <p>{desc}</p>
        </div>

        <div className={classes.card__tags}>
          <p className={classes.card__tag}>
            Tags&nbsp;:&nbsp;
            {tags.length > 1 ? (
              tags.map((tag, idx) => {
                return (
                  <span  className={classes.card__tag} key={idx}>
                    #{tags[idx]}
                  </span>
                );
              })
            ) : (
              <span className={classes.card__tag}> #{tags}</span>
            )}
          </p>
        </div>
      
      <a href={lien} target="_blank" rel="noreferrer">
        <div className={classes.card__link}>Voir le projet</div>
      </a>
    </div>
  );
};

export default ProjectCard;
