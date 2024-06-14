"use client";
import { useAppSelector } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "@/lib/features/books/bookSlices";


const Books = () => {
  const booksData = useSelector((state: RootState) => state.books);
  
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks() as any);    
  }, [dispatch]);

  return (
    <>
      <div className=" text-center mb-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl mt-24">
        Books Listing
      </div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {booksData.books.map((book, index) => (
          <div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Link href={`/book/${book.id}`}>
              <Image
                src={`${book.image}`}
                width={500}
                height={1000}
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {book.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {book.price}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default Books;
