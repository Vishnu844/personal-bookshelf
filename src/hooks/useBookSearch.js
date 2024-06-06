import { useEffect, useState } from "react";

const useBookSearch = (book) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);

  const fetchBooks = async (book) => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${book}&limit=10&page=1`
      );
      const data = await response.json();
      if (data) {
        setLoading(false);
        setBooks(data.docs);
      }
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchBooks(book);
  }, [book]);

  return { loading, error, books };
};

export default useBookSearch;
