import React from "react";
import ReadList from "./ReadList";
import { useSelector } from "react-redux";
import "./index.css";

const Aside = () => {
  const { books } = useSelector((state) => state.books);
  const { theme } = useSelector((state) => state.theme);

  return (
    <section
      className="aside"
      style={books.length ? null : { display: "none" }}
      id={theme ? "Dark-gradient" : "Light-gradient"}
    >
      <h2>{books.length} books in list</h2>
      <ReadList books={books} />
    </section>
  );
};

export default Aside;
