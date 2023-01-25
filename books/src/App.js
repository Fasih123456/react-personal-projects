import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookList from "./Components/BookList";
import BookCreate from "./Components/BookCreate";
import BookEdit from "./Components/BookEdit";
import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Gets random number between 1000 and 10000
 */
function getRandomNumber() {
  return Math.floor(Math.random() * (10000 - 100 + 1) + 100);
}

function App() {
  const [books, setBooks] = useState([]);

  /**
   *  Create a new object with the parameter title and random number generated Id. Appends the new objects to the books state
   * @param  {string} title The title of the new book being created
   */
  const createBook = (title) => {
    axios.post("http://localhost:3001/books", {
      title,
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/books").then((res) => {
      setBooks(res.data);
    });
  });

  /**
   *  Removed a book from the books array by matching the Id's
   * @param  {number} id The Id of the book which should be removed
   */
  /*const removeBookByID = (id) => {
    const updatedBooks = books.filter((book) => {
      return id !== book.id;
    });

    setBooks(updatedBooks);
  };*/

  const removeBookByID = (id) => {
    axios.delete(`http://localhost:3001/books/${id}`, {});
  };

  /**
   *  Edits the current book title by using the Id provided
   * @param  {string} title The new title of the book, this will replace the old title
   * @param  {number} id The Id of the book which should be edited
   */

  const editBookById = (id, title) => {
    axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Reading List</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <BookList onEdit={editBookById} books={books} onDelete={removeBookByID} />
          </Col>
        </Row>

        <Row>
          <Col>
            <BookCreate onSubmit={createBook}></BookCreate>
          </Col>
          <Col>
            <BookEdit></BookEdit>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
