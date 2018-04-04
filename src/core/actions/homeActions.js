import * as types from './actionTypes';

export function increment() {
  return {
    type: types.INCREMENT,
  };
}

export function decrement() {
  return {
    type: types.DECREMENT,
  };
}

export function incrementAsync() {
  return {
    type: types.INCREMENT_ASYNC,
  };
}

export function decrementAsync() {
  return {
    type: types.DECREMENT_ASYNC,
  };
}
