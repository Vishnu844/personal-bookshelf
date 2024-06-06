import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import GridItems from "../components/GridItems";
import "./home.css";

const Bookshelf = () => {
  const navigate = useNavigate();
  const onNavigateToHome = () => {
    navigate("/");
    localStorage.setItem("bookshelfItems", JSON.stringify(bookshelfItems));
  };

  const books = JSON.parse(localStorage.getItem("bookshelfItems"));

  const [bookshelfItems, setBookShelfItems] = useState(books);

  const removeBookFromBookshelf = (book) => {
    const newBookShelfItems = bookshelfItems.filter(
      (item) => item.title !== book.title
    );
    setBookShelfItems(newBookShelfItems);
    alert("Book has been removed successfully!!");
  };

  return (
    <>
      <Navbar button={"Home"} onClick={() => onNavigateToHome()} />
      {bookshelfItems.length === 0 ? (
        <div style={{ textAlign: "center" }}>No Books Available</div>
      ) : (
        <div className="grid">
          {bookshelfItems.map((book) => {
            return (
              <GridItems
                key={book.title}
                book={book}
                removeBookFromBookshelf={removeBookFromBookshelf}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Bookshelf;
