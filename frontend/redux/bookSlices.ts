// userSlice.ts
import { Book } from '@/app/models/book';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  books: Book[];
}

const initialState: UserState = {
  books: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<number | string>) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    issueBook: (state, action: PayloadAction<number | string>) => {
      const bookIndex = state.books.findIndex(book => book.id === action.payload);
      if (bookIndex !== -1) {
        state.books[bookIndex].available = false;
      }
    },
    returnBook: (state, action: PayloadAction<number | string>) => {
      const bookIndex = state.books.findIndex(book => book.id === action.payload);
      if (bookIndex !== -1) {
        state.books[bookIndex].available = true;
      }
    },
  },
});

export const { addBook, removeBook, issueBook, returnBook } = userSlice.actions;
export default userSlice.reducer;
