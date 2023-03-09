const store = require("./rtk/store/store");
const { fetchvideos } = require("./rtk/post/videoSlice");
const { fetchVideosLike } = require("./rtk/post/videoMostLikeSlice");

// subscribe to state changes
store.subscribe(() => {
    // console.log(store.getState());
});
// disptach actions
store.dispatch(fetchvideos());
store.dispatch(fetchVideosLike());
