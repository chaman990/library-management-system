import React from 'react'

function AdminPage() {
  return (
    <div>
      
    </div>
  )
}

export default AdminPage


// "use client";


// import { RootState } from '@/redux/store';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Book } from '../models/book';
// import { addBook, issueBook, removeBook, returnBook } from '@/redux/bookSlices';

// const ExampleComponent: React.FC = () => {
//   const dispatch = useDispatch();
//   const books = useSelector((state: RootState) => state.user.books);

//   const handleAddBook = () => {
//     const newBook: Book = {
//         id: 1, name: 'New Book', available: true,
//         author: ''
//     }; // Example book
//     dispatch(addBook(newBook));
//   };

//   const handleRemoveBook = (id: number | string) => {
//     dispatch(removeBook(id));
//   };

//   const handleIssueBook = (id: number | string) => {
//     dispatch(issueBook(id));
//   };

//   const handleReturnBook = (id: number | string) => {
//     dispatch(returnBook(id));
//   };

//   return (
//     <div>
//       <button onClick={handleAddBook}>Add Book</button>
//       <ul>
//         {books.map(book => (
//           <li key={book.id}>
//             {book.name} - {book.available ? 'Available' : 'Not Available'}
//             <button onClick={() => handleRemoveBook(book.id)}>Remove</button>
//             <button onClick={() => handleIssueBook(book.id)}>Issue</button>
//             <button onClick={() => handleReturnBook(book.id)}>Return</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ExampleComponent;
