import {ADDNUM} from '../types';

export function count(state = 0, action) {
  switch (action.type) {
    case ADDNUM:
      return state+action.data;
    default:
      return state;
  }
}