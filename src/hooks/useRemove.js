import books from "../mocks/books.json";
import { useSelector } from "react-redux";

const useRemove = () => {
  const { books: favoriteBooks } = useSelector((state) => state.books);

  //remove favorite books from available books
  const availableBooks = books.library.filter(
    (book) => !favoriteBooks.some((favoriteBook) => favoriteBook.ISBN === book.book.ISBN)
  );

  return { availableBooks };
};

export default useRemove;
