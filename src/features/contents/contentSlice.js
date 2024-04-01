import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const contentSlice = createSlice({
    name: "content",
    initialState: {
        isSuccess: false,
        isLoading: false,
        isError: false,
        contents: [{

            // id: "8882",
            // date: '2024-03-16T11:40:02',
            // date_gmt: '2024-03-16T06:10:02',
            // modified: '2024-03-19T11:18:53',
            // server:"drfgd"

        }],
        message: "Content cannot be fetched",
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchcontents.pending, (state) => {
                state.isLoading = true
                state.message = ""
            })
            .addCase(fetchcontents.fulfilled, (state, action) => {
                state.isLoading = false
                // state.isSuccess = true
                state.contents = action.payload
            })
            .addCase(fetchcontents.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = "contents cannot be fetched"
            })
    },
});

export default contentSlice.reducer;

export const fetchcontents = createAsyncThunk("FETCH/CONTENTS", async () => {
    const response = await fetch("https://sohamsolution.com/wp-json/wp/v2/posts/8882");
    const data = await response.json();

    console.log(data);
    return data
})