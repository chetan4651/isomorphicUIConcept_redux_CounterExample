import { GET_COUNT_VALUE, INC_COUNT_VALUE, DEC_COUNT_VALUE } from './actionTypes';

const initialState = {
  count:0
}
function apps( state = initialState, action) {
  console.log("action.type :: "+action.type);
  switch (action.type) {        
        case GET_COUNT_VALUE:
            console.log("GET_COUNT_VALUE");
            // return Object.assign({}, state, {
            //   count:state.count
            // });
             return state;
        
        case INC_COUNT_VALUE:
            console.log("INC_COUNT_VALUE");
            // return Object.assign({}, state, {
            //   count:state.count+1
            // });
            return {...state, ...state.count=state.count+1}
    
        case DEC_COUNT_VALUE:
            console.log("DEC_COUNT_VALUE");
            if(state.count > 0){
              // return Object.assign({}, state, {
              //   count:state.count-1
              // });
              return {...state, ...state.count=state.count-1}
            }
              
            else{
              // return Object.assign({}, state, {
              //   count:state.count
              // });
              return state;
            }
             
    default:
      // return  Object.assign({}, state, {
      //   count:0
      // });
      return state;
  }
}

export default apps
