import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

/**
 * Display the form where the user can create a new book
 * @param  {function} onSubmit handles submitting the form after the event handler has been triggered
 * @return {HTML} returns the form where the user can enter a new title to add it to the BookList component
 */
function BookCreate({ onSubmit }) {
  const [title, setTitle] = useState("");

  /**
   * Submits the new created book along with the title, also sets the title of the form to empty so the user can enter new titles
   * @param  {event} e Used to prevent the form from reloding
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  /**
   * Updates the title state everytime the user enters any new information in the title input
   *
   */
  const handleChange = () => {
    setTitle(document.getElementById("title").value);
  };

  return (
    <div>
      {" "}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => handleChange(e)}
            id="title"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BookCreate;
