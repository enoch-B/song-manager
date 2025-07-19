import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'songs',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchSongs: (state) => {
      state.loading = true;
    },
    fetchSongsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchSongsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Add createSong, updateSong, deleteSong actions later
  },
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
} = songSlice.actions;

export default songSlice.reducer;
