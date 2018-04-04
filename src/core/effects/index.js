import {
  fork,
} from 'redux-saga/effects';

import home from './home';

export default function* root() {
  yield fork(home);
}
