import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import BookEdit from "./BookEdit";
import Modal from "react-bootstrap/Modal";

/**
 * Each book which is show in the BookList will have the structure define here
 * @param  {Object} book An object which contains the Id and Book title of the current book
 * @param  {function} onDelete Will perform the onDelete action stated in App.js
 * @param {function}  onEdit    Will perform the onEdit action stated in App.js
 * @return {HTML} Returns the BookShow component if showEdit is false, other wise returns the BookEdit model.
 */

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  /**
   * Sends the Id of the book which should be deleted to the onDelete function which is located in App.js
   */

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  /**
   * Flips the state of the showEdit state
   */

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  /**
   * Sets the showEdit state to false and  updates the newTitle of the book with the Id given.
   * @param  {number} id The id of the book which should be edited
   * @param  {string} newTitle The new title of the book which will replace the old title
   */

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`https://picsum.photos/seed/${book.id}/300/200`} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>

          <Button variant="primary" onClick={handleDeleteClick} style={{ marginRight: "10px" }}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleEditClick}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );

  if (showEdit) {
    content = <BookEdit show={showEdit} onSubmit={handleSubmit} id={book.id} title={book.title} />;
  }

  return <div>{content}</div>;
}

export default BookShow;
