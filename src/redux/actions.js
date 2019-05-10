
import { GET_COUNT_VALUE, INC_COUNT_VALUE, DEC_COUNT_VALUE } from './actionTypes';

export function GetCountValue () {
    return {
      type: GET_COUNT_VALUE  
    }
  }

  export function IncCountValue () {
    return {
      type: INC_COUNT_VALUE
    }
  }

  export function DecCountValue () {
    return {
      type: DEC_COUNT_VALUE
    }
  }