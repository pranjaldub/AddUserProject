import React, { useState } from "react";

import Modal from "react-modal";
import "./Modal.css";
export default function SimpleModal(props) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleModal() {
    if (props.show) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  const close = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
      >
        <div>{props.children}</div>
        <button onClick={close}>Close modal</button>
      </Modal>
    </div>
  );
}
