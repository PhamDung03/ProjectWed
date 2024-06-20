// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// // import { useState } from "react";

// export const axiosUser = createAsyncThunk("user/UserPage2", () => {
//   return axios({
//     method: "get",
//     url: "https://reqres.in/api/users?page=2",
//   })
//     .then((res) => {
//       let result = res?.data?.data;
//       return result;
//     })
//     .catch((err) => console.log(err));
// });

// const initialState = {
//   status: "idle",
//   user: [],
// };

// const UserPage2 = createSlice({
//   name: "user",
//   initialState: initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(axiosUser.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(axiosUser.fulfilled, (state, action) => {
//         state.status = "success";
//         console.log(state.status);
//         console.log("data", action);
//         state.user = [...action.payload];
//       })
//       .addCase(axiosUser.rejected, (state) => {
//         state.status = "failed";
//       });
//   },
// });

// export default UserPage2.reducer;
