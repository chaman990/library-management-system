// pages/index.js (list of products)
import Image from "next/image";
import Link from "next/link";

const books = [
  {
    id: 1,
    name: "The Art of majesty",
    author: "Brinjal",
    currentlyAvailable: false,
    price: 10,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
    description: "The description of this book",
  },
  {
    id: 2,
    name: "The Art of majesty -2",
    author: "Brinjal",
    currentlyAvailable: false,
    price: 10,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
    description: "The description of this book",
  },
  {
    id: 1,
    name: "The Art of majesty - 3",
    author: "Brinjal",
    currentlyAvailable: false,
    price: 10,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
    description: "The description of this book",
  },
];

const Books = () => {
  return (
    <>
      <div className=" text-center mb-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl mt-24">
        Books Listing
      </div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {books.map((book, index) => (
          <div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Link href={`/book/${book.id}`}>
              <Image
                src={book.image}
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
