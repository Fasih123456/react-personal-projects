import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookShow from "./BookShow";

/**
 * Holds all the books which need to be displayed to the user
 * @param  {Object Array} books Holds an array of Books
 * @param  {function} onDelete Will perform the onDelete action stated in App.js
 * @param {function}  onEdit    Will perform the onEdit action stated in App.js
 * @return {HTML} returns all the books which are in the books array
 */

function BookList({ books, onDelete, onEdit }) {
  /**
   * Renders each book in the Books Array by pushing the BookShow component to the array local variable
   * @return {Array} returns each book object in an Array
   */
  const renderBooks = () => {
    let array = [];
    for (let i = 0; i < books.length; i++) {
      array.push(
        <Col style={{ paddingTop: "10px" }}>
          <BookShow onEdit={onEdit} onDelete={onDelete} book={books[i]} key={books[i].id} />
        </Col>
      );
    }

    return array;
  };

  return (
    <div>
      <Row>{renderBooks()}</Row>
    </div>
  );
}

export default BookList;
