import ComModal from "../../ComModal";
import "./Commentaire.css";

import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import TitreH2 from "../../TitreH2";
import useCtx from "../../../hook/useCtx";

const Commentaire = () => {
  const context = useCtx();

  return (
    <>
      <TitreH2>Commentaires</TitreH2>
      <p>
        Dans un soucis d'amelioration constante, les feedbacks sont récuperer
        dans le but qui me permettront d'ameliorer mon site. Je vous serais tres
        reconnaissant de m'indiquer tout problème que vous pourriez rencontrer.
      </p>
      <ComModal />
      <section className="commentaires">
        {context.commentaires.map((commentaire) => {
          const { id, utilisateur, pro, fonction, entreprise, message } =
            commentaire;

          return (
            <div key={id} className="commentaire" style={{ marginTop: "1vw" }}>
              <div className="commentaire-header">
                <div>
                  <h3>{utilisateur}</h3>
                  {pro ? (
                    <p className="fonction">
                      <b>{fonction}</b> chez <b>{entreprise}</b>
                    </p>
                  ) : (
                    <p className="fonction">visiteur</p>
                  )}
                </div>
                <div className="note">
                  <div className="like">
                    <AiOutlineLike />
                    <p>2</p>
                  </div>
                  <div className="dislike">
                    <AiOutlineDislike />
                    <p>0</p>
                  </div>
                </div>
              </div>
              <div className="message">
                <p>{message}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Commentaire;
