import React from "react";
import Modal from "react-modal";

const ModalWin = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleModal}
    contentLabel="Text"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleModal}>Done</button>
  </Modal>
);

export default ModalWin;
