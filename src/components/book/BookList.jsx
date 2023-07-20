import Book from "./Book";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/bookSlice";

import "./index.css";

const BookList = ({ books = [] }) => {
  const dispatch = useDispatch();

  const onHandleAddBook = (book) => {
    dispatch(addBook(book));
  };

  return (
    <section className="books">
      {books.length
        ? books.map((book) => (
            <Book
              key={book.book.ISBN}
              url={book.book.cover}
              title={book.book.title}
              onHandleDetails={() => onHandleAddBook(book.book)}
            />
          ))
        : null}
    </section>
  );
};

export default BookList;
