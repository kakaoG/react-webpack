import {ADDNUM} from '../types';

export function addNum(num) {
  return {
    type: ADDNUM,
    data: num
  }
}