import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import authService, { User } from "./authService";

type initialStateType = {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
};

//Get User from localStorage

const user = JSON.parse(localStorage.getItem("user")!);

const initialState: initialStateType = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Register User
export const register = createAsyncThunk(
  "auth/register",
  async (user: User, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Login User
export const login = createAsyncThunk(
  "auth/login",
  async (user: User, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.loguout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
    addAny: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.message = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(login.pending, (state) => {state.isLoading = true} )
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.user = null
        state.message = action.payload
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.user = action.payload
        state.message = action.payload
      })
      ;
  },
});

export const { reset, addAny } = authSlice.actions;

export default authSlice.reducer;
