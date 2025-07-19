import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
} from './songSlice';

// Dummy API fetch function
const fetchSongsFromApi = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}/songs`);
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

export default function* songSaga() {
  yield takeLatest(fetchSongs.type, handleFetchSongs);
}
