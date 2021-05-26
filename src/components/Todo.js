import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = ({ title }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const deleteHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalOpen && <Modal />}
      {modalOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default Todo;
