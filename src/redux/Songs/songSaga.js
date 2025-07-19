    import { call, put, takeLatest } from 'redux-saga/effects';
    import { createSong, createSongSuccess, createSongFailure } from './songSlice';
    import { updateSong, updateSongSuccess, updateSongFailure } from './songSlice';
  import {fetchSongs, fetchSongsSuccess, fetchSongsFailure,} from './songSlice';
  import { deleteSong, deleteSongSuccess, deleteSongFailure } from './songSlice';
  import { toast } from 'react-toastify';


/*
  // Mock data to simulate API response
const mockData = [
  { title: "Song A", artist: "Artist A", album: "Album A", year: 2020 },
  { title: "Song B", artist: "Artist B", album: "Album B", year: 2021 },
  { title: "Song C", artist: "Artist C", album: "Album C", year: 2022 },
  { title: "Song D", artist: "Artist D", album: "Album D", year: 2023 },
  { title: "Song E", artist: "Artist E", album: "Album E", year: 2020 },
  { title: "Song F", artist: "Artist F", album: "Album F", year: 2021 },
  { title: "Song G", artist: "Artist G", album: "Album G", year: 2022 },
];
 // ✅ This replaces an actual API call
const fetchSongsFromApi = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500); // simulate network delay
  });
}
  */

const fetchSongsFromApi = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}/Songs`);
  if (!response.ok) throw new Error('Failed to fetch');
  return await response.json();
};

function* handleFetchSongs() {
  try {
    const data = yield call(fetchSongsFromApi);
    yield put(fetchSongsSuccess(data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}


function* handleCreateSong(action) {
  try {
    const response = yield call(() =>
      fetch(`${process.env.API_BASE_URL}/Songs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      })
    );

    const data = yield response.json();

    yield put(createSongSuccess(data));
    toast.success('Song added!');

  } catch (error) {
    yield put(createSongFailure(error.message));
     toast.error('❌ Failed to add song');
  }
}



function* handleUpdateSong(action) {
  try {
    const response = yield call(() =>
      fetch(`${process.env.API_BASE_URL}/Songs/${action.payload.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      })
    );

    const data = yield response.json();

    yield put(updateSongSuccess(data));
    toast.info('Song updated!');

  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}



function* handleDeleteSong(action) {
  try {
    yield call(() =>
      fetch(`${process.env.API_BASE_URL}/Songs/${action.payload}`, {
        method: 'DELETE',
      })
    );

    yield put(deleteSongSuccess(action.payload));
    toast.warn('Song deleted!');

  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}



export default function* songSaga() {
  yield takeLatest(fetchSongs.type, handleFetchSongs);
  yield takeLatest(createSong.type, handleCreateSong);
  yield takeLatest(updateSong.type, handleUpdateSong);
  yield takeLatest(deleteSong.type, handleDeleteSong);


}