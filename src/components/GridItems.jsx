import React from "react";
import "./gridItems.css";
import { useLocation } from "react-router-dom";

const GridItems = ({ book, addBookToBookshelf, removeBookFromBookshelf }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return (
    <>
      <div className="card">
        <div className="title">
          <span>Title</span>
          <p>{book.title}</p>
        </div>
        <div className="edition-count">
          <span>Edition Count</span>
          <p>
            {pathname === "bookshelf" ? book.editionCount : book.edition_count}
          </p>
        </div>
        {pathname === "bookshelf" ? (
          <button
            onClick={() => removeBookFromBookshelf(book)}
            className="danger"
          >
            Remove from bookshelf
          </button>
        ) : (
          <button
            className="primary"
            onClick={() =>
              addBookToBookshelf({
                title: book.title,
                editionCount: book.edition_count,
              })
            }
          >
            Add to Bookshelf
          </button>
        )}
      </div>
    </>
  );
};

export default GridItems;
