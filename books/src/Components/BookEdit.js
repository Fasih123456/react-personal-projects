import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

/**
 * Displays the Edit model which the user can use to edit the title of the book
 * @param  {boolean} show If show is false the model is not displayed other the model is displayed
 * @param  {string} title The title of the book being edited
 * @param {function}  onSubmit   Handles submiting the newly edited book title
 * @return {HTML} returns nothing if the show2 variable is false, otherwise returns the Modal
 */
function BookEdit({ show, title, onSubmit, id }) {
  const [newTitle, setNewTitle] = useState(title);
  const [show2, setShow2] = useState(show);

  /**
   * Updates the newTitle state with anything the user writes into the input field with an Id of new title
   */
  const handleChange = () => {
    setNewTitle(document.getElementById("new-title").value);
  };

  /**
   * Sets the show2 variable to false which makes the model go away from the screen
   */
  const handleClose = () => {
    setShow2(false);
  };

  /**
   * Handles submiting the newly edited book title
   */
  const saveChanges = () => {
    onSubmit(id, newTitle);
  };

  return (
    <Modal show={show2}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Currently Editing Book {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Enter new title</p>
        <input id="new-title" value={newTitle} onChange={handleChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookEdit;
