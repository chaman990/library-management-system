// userSlice.ts
import { Book } from "@/app/models/book";
import axiosInstance from "@/axios.config";
import { AppThunk } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface BookState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const bookState: BooksState = {
  books: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "books",
  initialState: bookState,
  reducers: {
    loadBooksStart(state) {
      state.loading = true;
      state.error = null;
    },
    loadBooksSuccess(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
      state.loading = false;
    },
    loadBooksFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<number | string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    issueBook: (
      state,
      action: PayloadAction<{ id: number | string; userId: number | string }>
    ) => {
      const bookIndex = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (bookIndex !== -1) {
        state.books[bookIndex].available = false;
      }
    },
    returnBook: (state, action: PayloadAction<number | string>) => {
      const bookIndex = state.books.findIndex(
        (book) => book.id === action.payload
      );
      if (bookIndex !== -1) {
        state.books[bookIndex].available = true;
      }
    },
  },
});

export const {
  addBook,
  removeBook,
  issueBook,
  returnBook,
  loadBooksStart,
  loadBooksSuccess,
  loadBooksFailure,
} = userSlice.actions;
export default userSlice.reducer;

export const fetchBooks = (): AppThunk => async (dispatch, getState) => {
  // const { books } = getState().books;

  // // If books already exist, return early
  // if (books.length > 0) {
  //   return;
  // }

  try {
    dispatch(loadBooksStart());
    const response = await axiosInstance.get("/books");
    dispatch(loadBooksSuccess(response.data));
  } catch (error: any) {
    dispatch(loadBooksFailure(error.message));
  }
};

export const addBookThunk =
  (book: Book): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch(loadBooksStart());
      const response = await axiosInstance.post("/books", { ...book });
    } catch (error: any) {}
  };
export const issueBookThunk =
  ({
    id,
    userId,
  }: {
    id: number | string;
    userId: number | string;
  }): AppThunk =>
  async (dispatch, getState) => {
    try {
      const response = await axiosInstance.post(`/books/${id}/issue/${userId}`);
    } catch (error: any) {}
  };

export const returnBookThunk =
  (id: string | number): AppThunk =>
  async (dispatch, getState) => {
    try {
      const response = await axiosInstance.post(`/books/${id}/return`);
      dispatch(returnBook(id));
    } catch (error: any) {}
  };


export const removeBookThunk =
  (id: string | number): AppThunk =>
  async (dispatch, getState) => {
    try {
      const response = await axiosInstance.delete(`/books/${id}`);
      dispatch(returnBook(id));
      dispatch(fetchBooks())
    } catch (error: any) {}
  };
