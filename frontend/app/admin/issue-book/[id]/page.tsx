'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/lib/store';
import { issueBook, issueBookThunk } from '@/lib/features/books/bookSlices';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation'
import { loadUsersThunk } from '@/lib/features/users/user-slice';

const IssueBookForm: React.FC = () => {
  const dispatch = useDispatch();
  const router2 = useRouter();
  const users = useAppSelector((state) => state.users); // Assuming you have users in your Redux store
console.warn({users});

  

  useEffect(() => {
    dispatch(loadUsersThunk() as any)
  }, [dispatch])

  const [selectedUserId, setSelectedUserId] = useState('');
  const [error, setError] = useState('');
  const router = useParams<{id: string}>();
  const id = router.id;

  const handleIssueBook = (e: FormEvent, bookId: number |string) => {
    e.preventDefault()
    if (!selectedUserId) {
      setError('Please select a user');
      return;
    }
    
    console.log('Selected User ID:', selectedUserId, bookId);
    setError('');
    dispatch(issueBookThunk({id: id, userId: selectedUserId}) as any);
    router2.push('/admin')
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Issue Book</h2>
      <form onSubmit={(e) => handleIssueBook(e, id as string)} className="space-y-4">
        <div>
          <label htmlFor="user" className="block text-sm font-medium text-gray-700">
            Select User
          </label>
          <select
            id="user"
            name="user"
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
          {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
        </div>
        <div className='flex flex-col space-y-3 justify-between items-center'>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Issue Book
          </button>
          <Link className="text-blue-600 hover:text-blue-800" href="/admin">
            Back
          </Link> 
        </div>
      </form>
    </div>
  );
};

export default IssueBookForm;
