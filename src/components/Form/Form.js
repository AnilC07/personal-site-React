import { useEffect, useState } from "react";

import BtnModal from "../UI/BtnModal";
import Input from "../UI/Input";
import Radio from "../UI/Radio";

import TextArea from "../UI/TextArea";
import UserIcon from "../UI/UserIcon";
// import SubmitBtn from "../UI/SubmitBtn";

import "./Form.css";
// import useCtx from "../../hook/useCtx";

const Form = ({ closeModal }) => {
  // const context = useCtx();
  const [isPro, setIsPro] = useState(false);
  const [gender, setGender] = useState("");

  const setCategoryOfVisitor = (value) => {
    if (value === "oui") {
      setIsPro(true);
    }

    if (value === "non") {
      setIsPro(false);
    }
  };

  const getGender = (value) => {
    setGender(value);
    if (value === "homme") {
      document
        .querySelector(".icon-utilisateur .manIcon")
        .classList.add("selected");
    }
    if (value === "femme") {
      document
        .querySelector(".icon-utilisateur .femaleIcon")
        .classList.add("selected");
    }
  };

  useEffect(() => {
    if (gender !== "homme") {
      document
        .querySelector(".icon-utilisateur .manIcon")
        .classList.remove("selected");

      // console.log(context.setFormulaire)
    }
    if (gender !== "femme") {
      document
        .querySelector(".icon-utilisateur .femaleIcon")
        .classList.remove("selected");
    }
  }, [gender]);

  const addComment = (e) => {
    e.preventDefault();
    // console.log(context.formulaire);
    // closeModal();
  };

  // const resetForm = () => {};

  return (
    <div id="form">
      <form>
        <div className="icon-utilisateur">
          <UserIcon
            id="manIcon"
            type="radio"
            label="/images/man-icon.png"
            value="homme"
            name="genre"
            getGender={getGender}
            classname="manIcon"
          />
          <UserIcon
            id="femaleIcon"
            type="radio"
            label="/images/female-icon.png"
            value="femme"
            name="genre"
            getGender={getGender}
            classname="femaleIcon"
          />
        </div>
        <Input
          id="user"
          label="Nom, Prenom"
          type="text"
          placeholder="Veuillez entrer votre nom et prenom"
          name="identite"
          //  onChangeHandler={context.setCommentaire}
        />
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="Veuillez entrer votre email"
          name="email"
        />
        <div className="recruteur">
          <label className="isPro">Recruteur ?</label>
          <div className="radio-groups">
            <Radio
              label="oui"
              value="oui"
              name="pro"
              setCategoryOfVisitor={setCategoryOfVisitor}
            />
            <Radio
              label="non"
              value="non"
              name="pro"
              setCategoryOfVisitor={setCategoryOfVisitor}
            />
          </div>
        </div>
        {isPro && (
          <>
            <Input
              id="fonction"
              label="Fonction"
              type="text"
              placeholder="Quel est votre fonction ?"
              name="fonction"
            />
            <Input
              id="entreprise"
              label="Entreprise"
              type="text"
              placeholder="Renseigner le nom votre entreprise"
              name="entreprise"
            />
          </>
        )}
        <TextArea
          id="message"
          label="Message"
          placeholder="Veuillez entrer votre message"
          name="message"
        />
        <div className="valid-form">
          <BtnModal
            bgColor="green"
            textColor="white"
            title="Envoyer"
            onClick={addComment}
          />
          <BtnModal
            bgColor="red"
            onClickHandler={closeModal}
            textColor="white"
            title="Annuler"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
