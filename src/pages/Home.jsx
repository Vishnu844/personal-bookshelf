import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import GridItems from "../components/GridItems";
import SearchBar from "../components/SearchBar";
import useBookSearch from "../hooks/useBookSearch";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState("harry potter");
  const { loading, error, books } = useBookSearch(book);
  const [bookShelf, setBookShelf] = useState([]);

  const addBookToBookshelf = (book) => {
    setBookShelf((prev) => [...prev, book]);
    alert("Added Book Successfully!!");
  };

  const booksStored = JSON.parse(localStorage.getItem("bookshelfItems"));
  const onNavigateToBookshelf = () => {
    const uniqueBookshelfItems = bookShelf.filter(
      (obj, index, self) =>
        index === self.findIndex((o) => o.title === obj.title)
    );
    if (booksStored !== null) {
      localStorage.setItem(
        "bookshelfItems",
        JSON.stringify([...booksStored, ...uniqueBookshelfItems])
      );
    } else {
      localStorage.setItem(
        "bookshelfItems",
        JSON.stringify(uniqueBookshelfItems)
      );
    }
    navigate("/bookshelf");
  };

  return (
    <>
      {error ? (
        <div style={{ textAlign: "center" }}>Error Occured!!</div>
      ) : (
        <>
          <Navbar
            button={"My Bookshelf"}
            onClick={() => onNavigateToBookshelf()}
          />
          <SearchBar setBook={setBook} />
          {loading ? (
            <div style={{ textAlign: "center" }}>Loading...</div>
          ) : books.length === 0 ? (
            <div style={{ textAlign: "center" }}>No Books Available</div>
          ) : (
            <div className="grid">
              {books.map((book) => {
                return (
                  <GridItems
                    key={book.key}
                    book={book}
                    addBookToBookshelf={addBookToBookshelf}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
