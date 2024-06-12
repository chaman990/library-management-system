// userSlice.ts
import { Book } from '@/app/models/book';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const bookState:Book[] = [];

const userSlice = createSlice({
  name: 'user',
  initialState: bookState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<number | string>) => {
      state = state.filter(book => book.id !== action.payload);
    },
    issueBook: (state, action: PayloadAction<number | string>) => {
      const bookIndex = state.findIndex(book => book.id === action.payload);
      if (bookIndex !== -1) {
        state[bookIndex].available = false;
      }
    },
    returnBook: (state, action: PayloadAction<number | string>) => {
      const bookIndex = state.findIndex(book => book.id === action.payload);
      if (bookIndex !== -1) {
        state[bookIndex].available = true;
      }
    },
  },
});

export const { addBook, removeBook, issueBook, returnBook } = userSlice.actions;
export default userSlice.reducer;
