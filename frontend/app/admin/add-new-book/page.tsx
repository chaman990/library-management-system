"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, addBookThunk } from "@/lib/features/books/bookSlices";
import { Book } from "@/app/models/book";
import Link from "next/link";
import Header from "@/components/header";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { loadUsersThunk } from "@/lib/features/users/user-slice";

const AddBookForm: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  

  const [bookData, setBookData] = useState<Book>({
    name: "",
    author: "",
    available: true,
    price: "",
    image: "",
    description: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear validation errors when input is modified
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(bookData);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(addBookThunk(bookData as any) as any);
      // Optionally, you can reset the form after submission
      router.push('/admin')
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data: Book): { [key: string]: string } => {
    const errors: { [key: string]: string } = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.author.trim()) {
      errors.author = "Author is required";
    }
    // You can add more validation rules here for other fields
    return errors;
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={bookData.name}
              onChange={handleChange}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              id="author"
              name="author"
              type="text"
              value={bookData.author}
              onChange={handleChange}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.author ? "border-red-500" : ""
              }`}
            />
            {errors.author && (
              <p className="mt-1 text-red-500 text-sm">{errors.author}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="available"
              className="block text-sm font-medium text-gray-700"
            >
              Available
            </label>
            <input
              id="available"
              name="available"
              type="checkbox"
              checked={bookData.available}
              onChange={handleChange}
              className="mt-1 rounded focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="text"
              value={bookData.price}
              onChange={handleChange}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.price ? "border-red-500" : ""
              }`}
            />
            {errors.price && (
              <p className="mt-1 text-red-500 text-sm">{errors.price}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              id="image"
              name="image"
              type="text"
              value={bookData.image}
              onChange={handleChange}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.image ? "border-red-500" : ""
              }`}
            />
            {errors.image && (
              <p className="mt-1 text-red-500 text-sm">{errors.image}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={bookData.description}
              onChange={handleChange}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.description ? "border-red-500" : ""
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-red-500 text-sm">{errors.description}</p>
            )}
          </div>
          <div className="flex flex-col space-y-3 justify-between items-center">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Book
            </button>
            <Link href="/admin" passHref>
              <span className="text-blue-600 hover:text-blue-800">Back</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBookForm;
