import { useSelector } from "react-redux/es/hooks/useSelector";
import Header from "./Header";
import Filters from "./Filters";
import BookList from "./book/bookList";
import useFilter from "../hooks/useFilter";
import library from "../mocks/books.json";
import "../app.css";

const Section = () => {
  const { books } = useSelector((state) => state.books);
  const { filters, handleOnChange, filteredBooks } = useFilter();

  const available = Number(library.library.length) - Number(books.length)

  return (
    <section className="main_section" style={books.length ? { width: "60%" } : { width: "70%" }}>
      <Header available={available} />
      <Filters filters={filters} handleOnChange={handleOnChange} />
      <BookList books={filteredBooks} />
    </section>
  );
};

export default Section;
