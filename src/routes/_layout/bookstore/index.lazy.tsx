import { ChangeEvent, useMemo, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

interface Book {
  author: string;
  title: string;
  country: string;
  language: string;
  pages: string;
  year: string;
}

export const Route = createLazyFileRoute("/_layout/bookstore/")({
  component: BookStore,
});

function BookStore() {
  return (
    <BookSearch
      books={[
        {
          author: "Chinua Achebe",
          country: "Nigeria",
          language: "English",
          pages: 209,
          title: "Things Fall Apart",
          year: 1958,
        },
        {
          author: "Dante Alighieri",
          country: "Italy",
          language: "Italian",
          pages: 928,
          title: "The Divine Comedy",
          year: 1315,
        },
        /* ... more books ... */
      ]}
    />
  );
}

function BookSearch({ books }) {
  const [filter, setFilter] = useState<Book>({
    author: "",
    title: "",
    country: "",
    language: "",
    pages: "",
    year: "",
  });

  const filteredBook = useMemo(() => {
    return books.filter((book: Book) => {
      return Object.keys(filter).every((key) => {
        const bookValue = String(book[key]).toLowerCase();
        const filterValue = String(filter[key]).toLowerCase().trim();
        return bookValue.includes(filterValue);
      });
    });
  }, [books, filter]);

  const handleFilterState = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };

  return (
    <>
      <>Hello bookstore</>
      <br />
      {Object.keys(filter).map((name) => {
        return (
          <>
            <input
              type="text"
              name={name}
              value={filter[name]}
              onChange={handleFilterState}
              placeholder={name}
              data-testId={name}
            />
          </>
        );
      })}
      <br />
      <hr />
      {JSON.stringify(filteredBook, null, 4)}
      <style jsx>{`
        .book-search {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .search-inputs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        .search-input {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
        }
        .book-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        .book-item {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 15px;
          background-color: #f9f9f9;
        }
      `}</style>
    </>
  );
}
