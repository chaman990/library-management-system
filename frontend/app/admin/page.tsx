"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Book } from "../models/book";
import { RootState, useAppSelector } from "@/lib/store";
import {
  fetchBooks,
  removeBook,
  removeBookThunk,
  returnBookThunk,
} from "@/lib/features/books/bookSlices";
import Link from "next/link";
import Header from "@/components/header";

const AdminMain: React.FC = () => {
  const dispatch = useDispatch();
  const booksData = useSelector((state: RootState) => state.books);

  // Fetch books on component mount
  useEffect(() => {
    // Dispatch the fetchBooks action
    dispatch(fetchBooks() as any);
  }, [dispatch]);

  const handleRemoveBook = (id: number | string) => {
    dispatch(removeBookThunk(id));
  };

  const handleReturnBook = (id: number | string) => {
    dispatch(returnBookThunk(id) as any);
  };

  if (booksData.loading) {
    return <div>Loading...</div>;
  }

  if (booksData.error) {
    return <div>Error: {booksData.error}</div>;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <Link
          href={"/admin/add-new-book"}
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4 m-10"
        >
          Add Book
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
          {booksData.books?.map((book, index) => (
            <div key={index} className="bg-white rounded shadow-md p-4">
              <h3 className="text-xl font-bold mb-2">{book.name}</h3>
              <p>
                {book.available
                  ? "Book is available"
                  : "Book is Issued right now"}
              </p>
              <div className="mt-4">
                {book.available ? (
                  <Link
                    href={`/admin/issue-book/${book.id}`}
                    className="mr-3 bg-green-500 text-white py-1 px-2 rounded"
                  >
                    Issue
                  </Link>
                ) : (
                  <button
                    onClick={() => handleReturnBook(book.id)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded mr-3"
                  >
                    Return
                  </button>
                )}
                <button
                  onClick={() => handleRemoveBook(book.id)}
                  className="mr-2 bg-red-500 text-white py-1 px-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminMain;
