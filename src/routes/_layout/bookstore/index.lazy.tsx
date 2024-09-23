import { ChangeEvent, useMemo, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

type Book = {
  author: string;
  title: string;
  country: string;
  language: string;
  pages?: number;
  year?: number;
} & Record<string, string | number | undefined>;

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

function BookSearch({ books }: { books: Book[] }) {
  const [filter, setFilter] = useState<Book>({
    author: "",
    title: "",
    country: "",
    language: "",
    pages: undefined,
    year: undefined,
  });

  const filteredBooks = useMemo(() => {
    return books.filter((book: Book) => {
      return Object.keys(filter).some((key: string) => {
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
      {Object.entries(filter).map(([name, value], index) => {
        return (
          <div key={index}>
            <input
              type="text"
              name={name}
              value={value}
              onChange={handleFilterState}
              placeholder={name}
              data-testId={name}
            />
          </div>
        );
      })}
      <br />
      <br />
      <br />
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map((book, index) => (
          <div
            key={index}
            data-testid="book"
            className="border p-4 rounded shadow"
          >
            <h3 className="font-bold">{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Country: {book.country}</p>
            <p>Language: {book.language}</p>
            <p>Pages: {book.pages}</p>
            <p>Year: {book.year}</p>
          </div>
        ))}
      </div>
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
