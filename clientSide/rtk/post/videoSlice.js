const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");

//initial state
const initialState = {
    loading: false,
    videos: [],
    error: ''
}
//create asyncTHunk
const fetchvideos = createAsyncThunk('post/fetchvideos', async () => {
    const response = await fetch('http://localhost:9000/videos');
    const videos = await response.json();
    return videos;
})

const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchvideos.pending, (state, action) => {
            state.loading = true;
            state.error = ""
        })
        builder.addCase(fetchvideos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = ""
            state.videos = action.payload
        })
        builder.addCase(fetchvideos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.videos = [];
        });
    },

});


module.exports = videoSlice.reducer;
module.exports.fetchvideos = fetchvideos;


