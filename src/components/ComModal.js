import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Form from "./Form/Form";

import "./ComModal.css";





const ComModal = () => {
 

  return (
    <div>
      <button className="btn" onClick={openModal}>
        Je laisse un avis.
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Je laisse mon avis</h2>
        <small style={{ display: "block" }}>
          Veuillez noter que ce site n'utilise actuellement pas de server
          externe et que les données collecter se font dans un fichier au sein
          de l'application.
        </small>

        <Form closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default ComModal;
