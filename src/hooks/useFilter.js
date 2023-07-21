import { useState } from "react";
import useRemove from "./useRemove";

const useFilter = () => {
  const { availableBooks } = useRemove();

  const [filters, setFilters] = useState({ genre: "All", pages: "10" });

  const handleOnChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  //function to match with filters
  const filteredBooks = availableBooks.filter((book) => {
    return (
      book.book.pages >= filters.pages &&
      (filters.genre === "All" || book.book.genre === filters.genre)
    );
  });

  return { filters, handleOnChange, filteredBooks };
};

export default useFilter;
