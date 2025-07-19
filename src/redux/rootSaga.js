import { all } from 'redux-saga/effects';
import songSaga from './Songs/songSaga';

export default function* rootSaga() {
  yield all([songSaga()]);
}
