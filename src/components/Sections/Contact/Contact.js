import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import Btn from "../../UI/Btn";
import SectionHeading from "../../SectionHeading";

import "./Contact.css";
import Form from "../../Form/Form";

import useUser from "../../../hook/useCtx";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#modal");

const Contact = () => {
  const ctx = useUser();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [index, setIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(ctx.commentaires[index]);

  const email = "anil.celik075@gmail.com";

  const { utilisateur, genre, pro, fonction, entreprise, message } =
    testimonials;

  useEffect(() => {
    setTestimonials(ctx.commentaires[index]);
  }, [index, ctx.commentaires]);

  // Affiche la modal
  function openModal() {
    setIsOpen(true);
  }

  // Ferme la modal
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    console.log(index);
  }, [index]);

  const sendMail = () => {
    window.location.href = `mailto:${email}`;
  };

  const nextComment = (e) => {
    if (index < ctx.commentaires.length - 1) {
      setIndex((index) => index + 1);
    } else {
      setIndex((index) => 0);
    }
  };

  const prevComment = (e) => {
    if (index > 0) {
      setIndex((index) => index - 1);
    } else {
      setIndex(ctx.commentaires.length - 1);
    }
  };

  return (
    <>
      <section id="contact">
        <SectionHeading>Contact</SectionHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nunc
          tempor neque semper vulputate. Vestibulum sed lorem viverra, viverra
          augue quis, porttitor magna.
        </p>
        <div className="contact-btn">
          <Btn
            classname={"mail"}
            title={"Envoyer un mail"}
            bgColor={"#ccc"}
            textColor={"white"}
            onClickHandler={sendMail}
          />
          <Btn
            classname={"commentaire"}
            title={"Laisser un commentaire"}
            bgColor={"#eee"}
            textColor={"black"}
            onClickHandler={openModal}
          />
        </div>

        <div id="commentaires">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <SectionHeading>Commentaire</SectionHeading>
            <Form />
          </Modal>
        </div>
      </section>

      {testimonials && (
        <section id="commentaires">
          <div className="container">
            <ImQuotesLeft className="quote left" />
            <ImQuotesRight className="quote right" />
            <p className="message">{message}</p>
            <div className="visiteur">
              {genre === "homme" ? (
                <img src="/images/man-icon.png" alt={`icon d'un ${genre}`} />
              ) : (
                <img
                  src="/images/female-icon.png"
                  alt={`icon d'une ${genre}`}
                />
              )}

              <div className="detail-visiteur">
                <h4>{utilisateur}</h4>
                {pro && (
                  <p>
                    <b>{fonction}</b> chez <b>{entreprise}</b>
                  </p>
                )}
              </div>
            </div>

            <FaChevronLeft className="chevron left" onClick={prevComment} />
            <FaChevronRight className="chevron right" onClick={nextComment} />
          </div>
        </section>
      )}
    </>
  );
};

export default Contact;
