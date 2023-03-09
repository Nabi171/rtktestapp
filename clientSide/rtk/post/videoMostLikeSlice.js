const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");

//initial state
const initialState = {
    loading: false,
    videos: [],
    error: ''
}
//create asyncTHunk


const fetchVideosLike = createAsyncThunk('post/fetchvideos', async () => {
    const response2 = await fetch('http://localhost:9000/videos?tags_like=javascript&tags_like=react');
    const videostag = await response2.json();


    const sortedVideos = videostag.sort((a, b) => parseFloat(b.views) - parseFloat(a.views))
    return sortedVideos;

})

const videoMostLikeSlice = createSlice({
    name: 'postLike',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideosLike.pending, (state, action) => {
            state.loading = true;
            state.error = ""
        })
        builder.addCase(fetchVideosLike.fulfilled, (state, action) => {
            state.loading = false;
            state.error = ""
            state.videos = action.payload
        })
        builder.addCase(fetchVideosLike.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.videos = [];
        });
    },

});


module.exports = videoMostLikeSlice.reducer;
module.exports.fetchVideosLike = fetchVideosLike;