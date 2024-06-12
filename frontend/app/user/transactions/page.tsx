// import { TransactionType } from "@/app/models/transaction-type";
// import Header from "@/components/header";
// import React from "react";

// const transactions = [
//   {
//     id: 1,
//     book: {
//       name: "majesty",
//       author: "author",
//     },
//     user: {
//       name: "chaman",
//       email: "email@gmail.com",
//       number: "7891913546",
//     },
//     dueDate: new Date(),
//     transactionType: TransactionType.borrowed
//   },
// ];
// export default function UserTransactions() {
//   return (
//     <>
//       <Header />
//       <div className="container py-12 px-32 m-auto">
//         <h3 className="text-3xl font-bold mb-10">Transactions</h3>

//         <div className="relative overflow-x-auto">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3">
//                   Order Id
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Email
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Contact No
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Author
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Due Date
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Transaction Type
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((txn, index) => (
//                 <tr key={index} className="bg-white border-b">
//                   <th scope="row" className="px-6 py-4 font-medium ">
//                     {txn.id}
//                   </th>
//                   <td className="px-6 py-4">{txn.user.name}</td>
//                   <td className="px-6 py-4">{txn.user.email}</td>
//                   <td className="px-6 py-4">{txn.user.number}</td>
//                   <td className="px-6 py-4">{txn.book.name}</td>
//                   <td className="px-6 py-4">{txn.book.author}</td>
//                   <td className="px-6 py-4">{txn.dueDate.toString()}</td>
//                   <td className="px-6 py-4">{txn.transactionType}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
