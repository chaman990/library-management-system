"use client";
import { Book } from "@/app/models/book";
import Header from "@/components/header";
import { fetchBooks } from "@/lib/features/books/bookSlices";
import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BookPage = () => {
  const router = useParams();
  const { id } = router;
  const booksData = useSelector((state: RootState) => state.books);
  let singleBook!: Book;
  booksData.books?.map((book) => {
    if (book.id === id) {
      singleBook = book;
    }
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks() as any);
  }, [dispatch]);

  if (!singleBook) {
    return (
      <>
        <h2 className="heading">The book is not found</h2>
      </>
    );
  }
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
        <div
          className="container px-5 py-24 mx-auto"
          style={{ cursor: "auto" }}
        >
          <div className="py-25">
            <Link
              href={`/`}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Back To List
            </Link>
          </div>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              height={500}
              width={600}
              src={singleBook?.image}
              style={{ cursor: "auto" }}
            />
            <div
              className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
              style={{ cursor: "auto" }}
            >
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {singleBook.available ? "Available" : "Out of Stock"}
              </h2>
              <h1
                className="text-gray-900 text-3xl title-font font-medium mb-1"
                style={{ cursor: "auto" }}
              >
                {singleBook.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">{/* Rating icons */}</span>
                {/* Buttons */}
              </div>
              <p className="leading-relaxed">{singleBook.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* Color options */}
                {/* Size options */}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rs. {singleBook.price}
                </span>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPage;
