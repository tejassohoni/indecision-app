import React from "react";
import Modal from "react-modal";
import "./modal.styles.scss";

const ModalWin = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleModal}
    contentLabel="Text"
    closeTimeoutMS={200}
    ariaHideApp={false}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button onClick={props.handleModal} className="modal__button">
      Done
    </button>
  </Modal>
);

export default ModalWin;
