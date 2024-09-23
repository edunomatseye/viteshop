import React, { ChangeEvent, useEffect, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";

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
interface Book {
  author: string;
  country: string;
  language: string;
  pages: number;
  title: string;
  year: number;
}

interface BookSearchProps {
  books: Book[];
}

type FilterKeys = keyof Book;

const BookSearch: React.FC<BookSearchProps> = ({ books }) => {
  const [filters, setFilters] = useState<Record<FilterKeys, string>>({
    author: "",
    title: "",
    country: "",
    language: "",
    year: "",
  });
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

  useEffect(() => {
    const filtered = books.filter((book) =>
      (Object.keys(filters) as FilterKeys[]).every((key) =>
        book[key]
          .toString()
          .toLowerCase()
          .includes(filters[key].toLowerCase().trim()),
      ),
    );
    setFilteredBooks(filtered);
  }, [filters, books]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4">
      <div className="mb-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {(Object.keys(filters) as FilterKeys[]).map((key) => (
          <Input
            key={key}
            data-testid={key}
            name={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={filters[key]}
            onChange={handleInputChange}
            className="w-full"
          />
        ))}
      </div>
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
    </div>
  );
};

export default BookSearch;
