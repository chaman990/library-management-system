// pages/app.tsx

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '@/lib/features/books/bookSlices';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { AppThunk, store } from '@/lib/store'; // Import your Redux store

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  // Fetch books on component mount
  useEffect(() => {
    // Dispatch the fetchBooks action
    dispatch(fetchBooks() as any);
  }, [dispatch]);

  // Return the application component with the Redux provider
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
