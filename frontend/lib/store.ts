import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import bookReducer from "@/lib/features/books/bookSlices";
import userReducer from "@/lib/features/users/user-slice"
import authReducer from "@/lib/features/authslices"

export const store = configureStore({
  reducer: { books: bookReducer, users: userReducer, auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

