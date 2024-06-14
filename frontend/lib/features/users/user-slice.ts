// userSlice.ts
import { User } from "@/app/models/user";
import axiosInstance from "@/axios.config";
import { AppThunk } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userState: User[] = [];

const userSlice = createSlice({
  name: "users",
  initialState: userState,
  reducers: {
    loadUsers: (state, action: PayloadAction<User[]>) => {
      return action.payload;
    },
  },
});

export const { loadUsers } = userSlice.actions;
export default userSlice.reducer;



export const loadUsersThunk = (): AppThunk => async (dispatch, getState) => {
  try {
    // dispatch(loadBooksStart());
    const response = await axiosInstance.get('/user');
    console.warn({data: response.data});
    
    dispatch(loadUsers(response.data))
  } catch (error: any) {
  }
};
