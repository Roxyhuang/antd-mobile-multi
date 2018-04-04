import { put, call, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { INCREMENT, INCREMENT_ASYNC, DECREMENT, DECREMENT_ASYNC } from '../../core/actions/actionTypes';

export const delay1 = ms => new Promise((resolve, reject) => {
  if (ms === 3000) {
    resolve('成功');
  } else {
    reject(new Error('not'));
  }
});

function* incrementAsync() {
  yield put({ type: INCREMENT });
  const number = yield select(state => state.state.home.number);
  yield call(() => console.log(number));
}

function* decrementAsync() {
  yield put({ type: DECREMENT });
  const number = yield select(state => state.state.home.number);
  yield call(() => console.log(number));
}

// Bootstrap Functions App
export default function* root() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
  yield takeEvery(DECREMENT_ASYNC, decrementAsync);
}
