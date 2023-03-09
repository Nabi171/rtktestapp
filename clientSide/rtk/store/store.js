const configureStore = require("@reduxjs/toolkit").configureStore;
const videoReducer = require("../post/videoSlice");
const likeVideoReducer = require("../post/videoMostLikeSlice");
const { createLogger } = require('redux-logger');
const logger = createLogger();
// configure store
const store = configureStore({
    reducer: {
        videos: videoReducer,
        likeVideos: likeVideoReducer,

    },
    middleware: (getDefaultMiddleWares) => getDefaultMiddleWares().concat(logger),
});

module.exports = store;
